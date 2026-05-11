export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tag: string;
  body: string; // simple HTML — kept inline so we don't need an MDX pipeline
};

export const posts: Post[] = [
  {
    slug: "store-movements-not-mrr",
    title: "Don't store MRR. Store movements.",
    excerpt:
      "The hard part of revenue analytics isn't drawing the chart — it's deciding what number to draw. Here's why I rebuilt Indiecator's data model around movements, not snapshots.",
    date: "Apr 2026",
    readTime: "8 min",
    tag: "Architecture",
    body: `
<p>The first version of Indiecator stored MRR. Every night, a cron job summed up active subscriptions, wrote a number to a <code>daily_mrr</code> table, and that's what the dashboard rendered. Clean. Obvious. Wrong.</p>

<p>It was wrong because the moment a founder asked the only question that actually matters — <em>"why did MRR go up?"</em> — the answer was a shrug.</p>

<h2>The thing you actually need is movements</h2>

<p>The hard part of MRR analytics isn't the chart. It's deciding what number the chart should draw. And Stripe's API gives you invoices and subscriptions, not movements. To explain why MRR went from $9,400 to $9,700 last month, you have to classify every change:</p>

<ul>
<li>A new subscription at $50/mo → <strong>+$50 New MRR</strong></li>
<li>An existing customer upgrading from $50 to $80 → <strong>+$30 Expansion</strong></li>
<li>A downgrade from yearly to monthly → <strong>Contraction</strong> (and the math is non-obvious)</li>
<li>A canceled subscription → <strong>Churn</strong>, but <em>when</em>? At cancellation, or at period end?</li>
<li>A trial converting → <strong>New MRR</strong>, but only at conversion, not trial start</li>
<li>A proration invoice for $4.27 → <strong>not a movement at all</strong>, just an accounting artifact</li>
</ul>

<p>Get any of these wrong and the dashboard lies. Worse — the lies are silent. The chart still looks plausible. The founder makes a decision based on it. Six months later, somebody runs a manual reconciliation against Stripe and the trust is gone.</p>

<h2>The model: store the event, derive the state</h2>

<p>So I threw out <code>daily_mrr</code> and built around a single insight: <strong>don't store MRR. Store movements.</strong></p>

<p>Every change to a customer's subscription is recorded as an <code>MrrMovement</code> row with a type (<code>NEW</code>, <code>EXPANSION</code>, <code>CONTRACTION</code>, <code>CHURN</code>, <code>REACTIVATION</code>), a signed dollar impact, and a reference to the invoice or subscription event that caused it. Daily snapshots are derived by walking the movement history. If a webhook is missed, the daily sync re-derives the truth from invoices. The state is always reconstructable from first principles.</p>

<p>This is the kind of decision that looks like over-engineering until the third time you need it. By the time you've shipped trial handling, proration filtering, churn detection, and weighted aggregation across multiple Stripe integrations, you stop debating it.</p>

<h2>The three traps I fell into</h2>

<p><strong>Trap one: sourcing NEW from <code>subscription.created</code>.</strong> Stripe's <code>subscription.created</code> event tells you a subscription exists. It does not tell you what the customer actually paid — promo codes, taxes, prorations, and discounts all live in the invoice. The first version of Indiecator used the event. The numbers didn't match what hit the bank account. I now source NEW from <code>invoice.paid</code> line items. MRR matches the bank.</p>

<p><strong>Trap two: rejecting webhook retries.</strong> Idempotency is hard. The naive solution — refuse any movement that already exists for a subscription — breaks legitimate same-day upgrades. The correct solution has different rules per movement type. NEW is one-per-subscription (you can never have two "first" payments). Expansion, contraction, and churn use a 60-second window keyed on subscription + type + signed amount. Webhook retries get absorbed. Real same-day changes get through.</p>

<p><strong>Trap three: assuming canceled means churned.</strong> Naively, when a subscription cancels you record churn equal to the subscription's amount. But for a sub on a 100% off coupon, the real MRR was $0. Recording $X of churn would invent revenue that never existed. The churn helper queries the customer's last movement with <code>calculatedMrr &gt; 0</code> and only falls back to the subscription amount if prior movements prove real MRR existed.</p>

<h2>The bar</h2>

<p>I don't think any of this is brilliant engineering. It's just the bar.</p>

<p>The cost of a wrong number on a founder's MRR chart isn't a bug report — it's "they stop trusting the tool." For a small SaaS, trust is the entire product. The visible thing is the dashboard. The actual product is a sync pipeline that has to be correct under partial Stripe outages, webhook retries, trial edge cases, and proration math. Most of the engineering work isn't building features. It's making the numbers that look right <em>be</em> right.</p>

<p>That's the bar I hold this kind of work to. If you're building revenue analytics, store the movements.</p>
    `,
  },
  {
    slug: "integer-cents-marketplaces",
    title: "Floats killed the marketplace. I banished them.",
    excerpt:
      "Splitting an order between three providers, deducting a 20% fee, and getting it to round to exactly the same number on the customer receipt and the provider wallet — three different times — taught me to never trust floats again.",
    date: "Mar 2026",
    readTime: "6 min",
    tag: "Payments",
    body: `
<p>The first marketplace bug that ever cost me a weekend was a 1-cent rounding mismatch.</p>

<p>A customer paid $59.99 for a duo-queue order on Diffed.gg. The order went to three providers, a 20% platform fee was deducted, and the remainder was supposed to split evenly. The customer receipt said the platform took $11.998. The provider wallet showed the three wallets received $15.997 each. Add it up: that's $59.989. Off by one cent.</p>

<p>It looked like a rounding bug. It was actually a floats-everywhere bug. And once I started looking, it was floats-everywhere, everywhere.</p>

<h2>The places floats hide</h2>

<p>JavaScript's <code>Number</code> is IEEE-754 floating-point. You know this. I know this. We all type <code>0.1 + 0.2</code> into the console once a year and laugh. And yet I had floats in:</p>

<ul>
<li>The <code>price</code> column on the subpackage table (Decimal in Prisma, but pulled into JS as a Number for calculations)</li>
<li>Every helper that computed a per-provider split</li>
<li>The Stripe checkout intent builder, which multiplied by 100 to convert to cents</li>
<li>The PayPal builder, which did the same</li>
<li>The wallet credit function, which converted cents back to dollars for display</li>
</ul>

<p>Every one of these was a chance to lose a cent. And the bug doesn't show up on a single transaction. It shows up after a hundred, when one wallet is off by enough to notice and the provider asks why.</p>

<h2>The fix is boring. That's why it works.</h2>

<p>I rewrote every money-handling path to follow one rule: <strong>money is integer cents from the moment it enters the system until the moment it leaves.</strong></p>

<p>Database: integer column. Type: integer (Prisma <code>Int</code>, not <code>Decimal</code>). Function signatures: integer cents in, integer cents out. Display: formatted at the edges, only at the edges, with a single shared helper.</p>

<p>The split algorithm became:</p>

<pre><code>function splitOrder(totalCents: number, providerCount: number, feeRateBps: number) {
  const feeCents = Math.floor((totalCents * feeRateBps) / 10000);
  const payoutCents = totalCents - feeCents;
  const perProvider = Math.floor(payoutCents / providerCount);
  const remainder = payoutCents - perProvider * providerCount;
  // Distribute the remainder pennies to the first N providers, deterministically
  return Array.from({ length: providerCount }, (_, i) =&gt; perProvider + (i &lt; remainder ? 1 : 0));
}</code></pre>

<p>It's not clever. It's the boring algorithm. <code>Math.floor</code> instead of <code>Math.round</code>. The remainder pennies go somewhere specific (the first N providers) rather than disappearing. Every test runs through edge cases: odd totals, single providers, zero-fee orders, totals that don't divide evenly.</p>

<h2>Server-side price recomputation</h2>

<p>The other thing I now do everywhere is recompute the price on the server before the Stripe or PayPal intent is created. Never trust the client. Even if a customer is honest, a stale browser tab can submit a price that no longer exists. Every checkout endpoint pulls the subpackage + configuration from the database, runs the same split algorithm, and uses that result as the source of truth. The client number is only ever an input to the UI, never to the gateway.</p>

<h2>The thing nobody teaches you</h2>

<p>Money correctness in a marketplace isn't a feature. It's not on a Trello card. Nobody asks for it in the spec. But the day a provider notices they were short two cents on every order for a month is the day you find out whether your foundation was built on floats or integers.</p>

<p>If you're building a marketplace: integer cents. From day one. Don't let yourself be talked out of it because Decimal types feel more flexible. They're not. They're a different kind of trap. Integer cents is one of the very few things in a codebase that's actually correct by construction.</p>
    `,
  },
  {
    slug: "replacing-30-years-of-sheets",
    title: "How we replaced 30 years of Google Sheets in 90 days",
    excerpt:
      "When you migrate a business off spreadsheets, parity isn't the goal — it's the precondition. Here's the human-in-the-loop approach I used at Sat-Raj to keep the client trusting the system through every cutover.",
    date: "May 2026",
    readTime: "7 min",
    tag: "Process",
    body: `
<p>Sat-Raj is a fuel wholesaler in New Jersey. They sell gasoline and diesel to about 24 gas stations across NJ and PA. They've been doing it since 1992. And until this year, the entire business — the pricing, the customer data, the freight matrix, the daily distribution — lived in 39 hand-edited tabs in a single Google Sheets document.</p>

<p>One person fully understood the formulas. Every afternoon, that person typed new supplier prices into a master template, watched 39 dependent tabs recalculate, copy-pasted each tab into 24 separate emails, and sent. Bills of lading from the Samsara driver app were re-typed into the sheet, then re-typed again into QuickBooks for invoicing.</p>

<p>This isn't unusual. This is what most 30-year-old businesses look like under the hood. And the question isn't whether the software can do better — it's whether you can ship the replacement without breaking the business in transit.</p>

<h2>Parity isn't the goal. Parity is the precondition.</h2>

<p>The first decision I made was to not improve anything in v1. No new features. No better margin logic. No clever automation. The first launch had to produce <em>byte-identical</em> prices to the spreadsheet on a test day. If a customer's diesel price was $3.4271 in the sheet, it had to be $3.4271 in the new system. Not $3.4270. Not $3.4272. Identical.</p>

<p>This sounds obvious. It is not what most engineers do when they replace a legacy system. The instinct is to fix the obvious dumb things first — the margins that have drifted, the tax rules that have quietly diverged, the freight rates that don't match across customer tabs. Don't. Every change you make in v1 is a change the client can't tell apart from a bug. Replicate the formula exactly. Pin the rates from the legacy sheet in tests. Earn the trust to make the improvements you actually want to ship in v2.</p>

<h2>Human-in-the-loop on the things that should never be silent</h2>

<p>The harder problem in Sat-Raj wasn't the pricing engine — that was determined math. The harder problem was the bills of lading. The Samsara driver app generates a signed BOL when a delivery is completed, but Samsara's geofences don't always line up with the client locations in the database. A driver dropping off at "Bobby's Avalon" might be inside a geofence labeled "BP Avalon" — same place, different label.</p>

<p>The naive approach is to auto-match by proximity. Don't. The first time the system silently misattributes a delivery, you've created an invoice that bills the wrong customer for fuel they didn't receive. That's the kind of bug that doesn't get caught for a month and costs both money and trust to fix.</p>

<p>Instead, I built a review queue. Every ambiguous mapping — new locations, renamed sites, drop-offs near a boundary — gets flagged for human approval before it can flow into an invoice. Once a Samsara address is mapped, the system remembers it via a <code>location_aliases</code> table. The queue gets shorter every week as the alias table grows.</p>

<p>This is not the elegant solution. The elegant solution is automatic matching. But "elegant" and "correct" are not the same thing, and on a system that prints invoices for actual money, correctness wins.</p>

<h2>Configuration in the database, not in the deploy</h2>

<p>One small thing that paid for itself in the first month: nothing about the pricing logic — tax rates, margins, supplier configs, freight tiers — is hardcoded. It all lives in the database, editable from the in-app settings page. The client doesn't need me to push a deploy when New Jersey changes the gas tax. They change a number. They move on.</p>

<p>This sounds like an obvious principle. In practice, "obvious" engineering decisions are the first ones to get traded away under deadline pressure. Don't trade this one away. The cost of a deploy you didn't need to do is small; the cost of being on-call for a tax rate change is high.</p>

<h2>The result that's actually the point</h2>

<p>The launch metrics looked good: the daily pricing run dropped from 45–60 minutes of manual spreadsheet work to under 90 seconds of one-click distribution. Per-customer formula drift went from frequent and undetected to zero. Bus-factor on pricing went from one person to anyone with a login. BOL data entry went from being typed twice (Samsara → Sheets → QuickBooks) to being pulled once and flowing through.</p>

<p>But the metric I care about most isn't on that list. It's that the client trusted the new system from day one — because the prices on day one were the prices they would have produced themselves. Once the trust was there, every subsequent improvement (the validation warnings, the DTN auto-ingestion, the per-delivery profit visibility) shipped without friction.</p>

<p>That's the part of legacy migration nobody talks about. The engineering is hard, but the engineering isn't the project. The project is keeping the business alive through the cutover, and you do that by treating parity as table stakes — not as a feature.</p>
    `,
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
