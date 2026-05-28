export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tag: string;
  body: string;
};

export const posts: Post[] = [
  {
    slug: "stripe-3-month-events-mrr-ledger",
    title: "Stripe keeps 3 months of events. We needed 2 years of MRR.",
    excerpt:
      "Indiecator's whole pitch is 2 years of accurate revenue history. Stripe only retains about 3 months of event data. Here's the ledger architecture that resolved the contradiction, and the one rule that kept it from becoming a mess.",
    date: "May 2026",
    readTime: "7 min",
    tag: "Engineering",
    body: `
<p>Indiecator is a revenue analytics platform for indie SaaS founders. Connect your Stripe, see your MRR, ARR, churn, and 2 years of history. The hard part was never the dashboard. It was making the numbers true.</p>

<p>Here is the constraint that shaped the whole architecture, and it&#x2019;s not in Stripe&#x2019;s docs where you&#x2019;d want it: Stripe only retains about 3 months of event history. Everything downstream flows from that one fact.</p>

<h2>The first approach: events, because events are clean</h2>

<p>MRR is a sum of changes. New subscription, plus. Upgrade, plus the delta. Downgrade, minus. Cancellation, minus. Refund, minus. Stripe emits an event for every one of these. So the obvious design is event-driven. Listen to the webhook stream, project each event into an MRR change, sum them up. Clean. Auditable. Every number traces back to a specific event with a timestamp.</p>

<p>I built that first. It worked in the demo. New events came in, MRR moved, the chart updated. Ship it.</p>

<h2>Week 4: the 404s</h2>

<p>Then a real customer connected an account with 2 years of history. The backfill walked backward through their events. Around the 3-month mark, the Stripe API started returning 404s for events the invoices clearly referenced. The events were gone. Not archived. Gone.</p>

<p>Stripe retains events for roughly 30 to 90 days. For a live product watching the stream, fine. For a product whose entire pitch is "see your last 2 years," fatal. An event-only engine can tell you what happened this quarter. It cannot reconstruct last year.</p>

<h2>The fork: invoices or events</h2>

<p>Invoices are the other source of truth, and they&#x2019;re kept forever. Every charge, every billing cycle, every proration shows up as an invoice line. So the second approach is invoice-only. Walk the invoices, derive MRR from billing amounts, done. Backfills cleanly to the beginning of time.</p>

<p>But invoices have their own blind spot. They&#x2019;re generated on a billing cycle, usually monthly. If a customer upgrades on the 3rd and cancels on the 20th, the month-end invoice nets it out. You lose the two real-time changes in between. For a churn or expansion-MRR breakdown, that intra-cycle detail is exactly what you need. Invoice-only is accurate at the boundaries and blind in the middle.</p>

<p>So neither source is complete. Events have the real-time detail but a 3-month memory. Invoices have forever but no intra-cycle resolution.</p>

<h2>The hybrid, and the one rule that made it work</h2>

<p>The answer was to use both, split by time. Invoices anchor the historical backbone, everything older than the live window. Events handle the live edge, the recent window where they still exist and where intra-cycle detail matters. The handoff sits inside Stripe&#x2019;s retention window, so the two sources overlap instead of leaving a gap.</p>

<p>The rule that made it not a mess: both sources write to the same ledger, keyed the same way. One row per MRR change, with a deterministic key derived from the customer, the subscription, and the change type plus period. An invoice-derived row and an event-derived row for the same underlying change produce the <em>same</em> key. So when the two sources overlap, they collide on the key instead of double-counting. Reconciliation becomes a deduplication, not a guess.</p>

<p>That one decision (same keys, deterministic) is what turned "two messy data sources" into "one ledger with two writers." Without it, every overlap is a judgment call and the numbers drift.</p>

<h2>Three flows, one ledger</h2>

<p>In production it runs as three ingestion paths, all writing to that same keyed ledger:</p>

<p><strong>Live webhooks.</strong> Stripe events arrive, get projected, get written. The real-time edge.</p>

<p><strong>A 24-hour catch-up cron.</strong> Webhooks get missed. Endpoints go down, deliveries fail, events arrive out of order. Once a day a job re-pulls the last window from the Stripe API and writes anything the live path missed. Idempotent by the shared key, so re-running it is safe.</p>

<p><strong>The 2-year historical backfill.</strong> Runs once when an account connects. Walks invoices (not events) back as far as they go and builds the historical backbone. The part the event-only design could never have done.</p>

<p>All three converge on the same rows. Run any of them twice and nothing double-counts. That is the whole point of the keyed ledger.</p>

<h2>What I&#x2019;d do differently</h2>

<p>I&#x2019;d find the 3-month retention limit before writing code, not in week 4 from production 404s. It&#x2019;s a one-line fact that invalidated the first architecture. The lesson isn&#x2019;t "events bad." Events were right for the live edge. The lesson is that the retention window of your source of truth is a load-bearing constraint, and you should know it before you design around that source.</p>

<p>Still open: the handoff point between invoice-history and event-live is a tuned constant right now, parked safely inside the retention window. It would be better as a per-account value that adapts to how far back that specific account&#x2019;s events actually still exist. Haven&#x2019;t needed it yet. Will, the first time an account&#x2019;s event history is shorter than the default assumes.</p>
    `,
  },
  {
    slug: "ai-as-leverage-not-autocomplete",
    title: "AI is leverage. It's not autocomplete.",
    excerpt:
      "Most engineers use AI to type faster. A smaller group uses it to ship faster. The gap between those two is the entire story of what changed about this job in the last 18 months.",
    date: "Apr 2026",
    readTime: "5 min",
    tag: "AI Agents",
    body: `
<p>The first six months I used AI to code, I used it wrong. I had Copilot inline. It finished my sentences. The autocomplete was good. I shipped a little faster than I used to. I told myself this was the future.</p>

<p>It wasn&#x2019;t. The future was something else, and I missed it for a while.</p>

<h2>Two ways to use AI, two completely different jobs</h2>

<p>There are two ways an engineer uses AI right now, and they look similar from the outside but they are not the same job at all.</p>

<p>The first way is <strong>autocomplete</strong>. You write a function name, the model suggests the body, you tab to accept. You write a comment, the model writes the code below it. It is the same job you were doing before — sitting at the editor, holding the whole problem in your head, typing things out — except your hands move a little less. You ship maybe 1.3x faster. You are not transformed.</p>

<p>The second way is <strong>leverage</strong>. You don&#x2019;t write a function name. You write a <em>brief</em>. You describe the outcome — what should be true after the change — and you hand the whole thing to an agent. While the agent works, you go review the previous one&#x2019;s pull request. You ship 5x faster, sometimes 10x, and the job has changed.</p>

<p>The job has changed because the bottleneck has moved. When you&#x2019;re using autocomplete, your bottleneck is the same as it ever was: how fast you can think and type. When you&#x2019;re using leverage, your bottleneck is how clearly you can specify what you want, and how well you can verify what came back.</p>

<h2>The thing nobody tells you about agents</h2>

<p>I run two or three agents in parallel most days. One refactoring something, one writing tests, one investigating a bug. Sometimes I&#x2019;m the bottleneck — I can&#x2019;t read the diffs fast enough — and that is a new feeling. Twelve months ago the bottleneck was always typing. Now the bottleneck is whatever isn&#x2019;t the agent.</p>

<p>What this does to your day is strange. The actual hands-on-keyboard time drops. The reading time goes up. The thinking time stays roughly the same. The decisions per hour goes way up. By 4pm you are mentally exhausted in a way you weren&#x2019;t before, because you spent the day making twenty decisions about other code instead of writing your own.</p>

<p>This is also why "AI replaces programmers" is the wrong frame. The agent is not the programmer. The agent is the typist. <em>You</em> are still the programmer — but the verb you do most is no longer "write," it&#x2019;s "review."</p>

<h2>The two skills that actually matter now</h2>

<p>If the bottleneck has moved from typing to specification + verification, then the skills that pay are the ones that produce a tight specification and a fast verification loop. Specifically:</p>

<p><strong>Skill one: writing briefs that survive interpretation.</strong> An agent will do exactly what you said, which is not the same as what you wanted. You learn to write tasks that have no ambiguity — the way you used to write Jira tickets for a contractor in a different timezone you&#x2019;d never met. "Refactor the auth flow" is not a brief. "Replace the JWT verification in <code>src/lib/auth.ts</code> with the helper in <code>src/lib/jose.ts</code>, keep the public function signature unchanged, update the three callers, run the test suite" is a brief.</p>

<p><strong>Skill two: building a verification surface the agent can hit.</strong> If the only way to know whether the agent did the right thing is to read the diff and run the app, you will be a bottleneck. If there&#x2019;s a test suite, a typecheck, a build, a smoke test — the agent runs through them itself and only surfaces work that&#x2019;s passing. The verification surface IS your leverage. People who think "tests are slow" are about to find out that tests are the only thing that lets them go fast.</p>

<h2>The honest part</h2>

<p>Autocomplete still works. I still use it. It&#x2019;s genuinely helpful when I&#x2019;m in the middle of something and just need the next 4 lines. But it is a small win. The leverage win is the big one. And the leverage win is invisible to people who haven&#x2019;t made the switch — because from the outside it just looks like the same job, slightly faster.</p>

<p>It&#x2019;s not the same job. It&#x2019;s a different one. Worth knowing.</p>
    `,
  },
  {
    slug: "the-agent-that-worked-while-i-slept",
    title: "The agent that worked while I slept",
    excerpt:
      "I set up a Claude Code loop to refactor a noisy module overnight. I woke up to a clean diff, 47 passing tests, and a commit message that was funnier than mine usually are. Here's what I learned about scoping work for an agent that doesn't sleep.",
    date: "Mar 2026",
    readTime: "6 min",
    tag: "AI Agents",
    body: `
<p>On a Wednesday in February I went to bed at midnight with an open laptop, a long-running Claude Code session, and a single instruction: <em>refactor the BOL ingestion module to use the shared error helper. Run tests after each file. Stop if anything red.</em></p>

<p>I woke up at 7am to a clean diff, 47 passing tests, and a commit message that opened with "this one was annoying." I had not, at any point during the previous seven hours, been awake.</p>

<p>This is not the part of AI I expected to find useful. I&#x2019;m a paranoid reviewer. I don&#x2019;t trust generated code without reading it. The idea of letting an agent loose overnight on production code felt insane. And then it kept working, and now it&#x2019;s a habit.</p>

<h2>What actually works overnight</h2>

<p>Not everything works. I&#x2019;ve killed agents at 3am via a phone notification more than once. After a few months of doing this regularly, the rough taxonomy of overnight work I trust looks like:</p>

<ul>
<li><strong>Rename / refactor with green tests as the contract.</strong> "Pull this helper out into its own file, update all callers, keep the test suite green." The test suite is the guardrail. The agent runs them, sees red, fixes, sees red, fixes, eventually it&#x2019;s green or it stops.</li>
<li><strong>Adding tests to under-tested code.</strong> "Write tests for every exported function in this module. Make them pass against the current implementation." This one is wonderful. The agent reads the code, writes tests, runs them, fixes the tests until they describe the actual current behavior. You wake up with a regression net.</li>
<li><strong>Following a migration playbook.</strong> "Migrate the API routes in <code>app/api</code> from the pages-router pattern to the App Router pattern using this one already-migrated file as the template." Templated work is great for agents. They are pattern-matchers; this is exactly that.</li>
</ul>

<p>What I do <em>not</em> trust overnight:</p>

<ul>
<li>Anything where the contract is "make it better." No green-test guardrail = no overnight job.</li>
<li>Anything that touches money, auth, or data integrity. Those need me awake.</li>
<li>Anything that involves making a product decision. Agents will pick a defensible answer and move on. I want to be the one picking.</li>
</ul>

<h2>The scoping mistake I kept making</h2>

<p>The first three times I tried this, I wrote the brief like I would write a Jira ticket. "Refactor the X module, simplify the Y logic, clean up the Z helpers." I&#x2019;d wake up to a diff that touched 40 files, with three things I liked, two things I didn&#x2019;t, and one thing that broke a feature in production. Net negative.</p>

<p>What I do now is the opposite. I write the brief like a contract: <strong>one verb, one scope, one stop condition.</strong></p>

<p>One verb: "Rename." Not "rename and clean up." Just rename.</p>

<p>One scope: "Files matching <code>src/lib/billing/*</code>." Not "wherever it seems necessary."</p>

<p>One stop condition: "Tests pass. If you can&#x2019;t make them pass, stop and leave a note." Not "make it work."</p>

<p>The diff I wake up to with this kind of brief is small, surgical, and reviewable in fifteen minutes over coffee. The diff I used to wake up to was sprawling and required half a day to disentangle. Same agent. Different brief. Different outcome.</p>

<h2>The economic insight</h2>

<p>The thing I didn&#x2019;t expect about overnight agents is how much it changes the calculus of "is this worth doing." There is a class of work — boring refactors, test backfill, dependency upgrades, dead code removal — that I knew was valuable but never prioritized because the activation energy was too high. "It would take me a day. I don&#x2019;t have a day."</p>

<p>An overnight agent costs me about ten minutes of writing the brief and forty minutes the next morning of reviewing the diff. Fifty minutes for a day&#x2019;s worth of code hygiene. That math is not subtle. Things that used to be "maybe next sprint" now happen on a Tuesday because I had a free hour before bed.</p>

<h2>The thing that still surprises me</h2>

<p>What I keep finding is that the agent does the work I find boring and exhausting better than I do it. Not because it&#x2019;s smarter — it isn&#x2019;t, on those tasks — but because it doesn&#x2019;t get bored. The 47th identical rename in the 47th file is just as careful as the first. I can&#x2019;t honestly say that about my own work. By the 30th rename I&#x2019;m skimming.</p>

<p>The agent doesn&#x2019;t skim. That&#x2019;s the underrated thing.</p>
    `,
  },
  {
    slug: "the-hardest-part-of-ai-agents-isnt-the-ai",
    title: "The hardest part of working with AI agents isn't the AI",
    excerpt:
      "After a year of building with agents in the loop, the bottleneck has stopped being the model and started being me. Specifically: my ability to say what I want clearly enough that an agent can execute it without supervision.",
    date: "May 2026",
    readTime: "7 min",
    tag: "AI Agents",
    body: `
<p>The longer I work with AI agents, the more convinced I am that the model is not the bottleneck. The bottleneck is me, articulating what I want in a way the model can act on without me hovering over it.</p>

<p>If you&#x2019;ve ever managed a junior engineer in a different timezone, you already know this skill. The hardest part wasn&#x2019;t their code. The hardest part was the four-paragraph email at the end of each day describing exactly what you wanted them to do tomorrow, in enough detail that they wouldn&#x2019;t have to guess, in clear enough English that a non-native speaker reading it at 2am their time would arrive at the right answer.</p>

<p>Working with agents is that. All day. For everything.</p>

<h2>What "good at this" actually looks like</h2>

<p>I&#x2019;ve been keeping notes on what separates the briefs that work from the ones that don&#x2019;t. After about a hundred briefs of various sizes, the pattern is depressingly consistent. The ones that work share a structure. The ones that fail share a different one. Here&#x2019;s the shape of the working ones:</p>

<p><strong>Start with the outcome, not the steps.</strong> "After this change, calling <code>getCustomerMRR(customerId)</code> should return a number, not a Promise. All current callers should still compile." Not "convert the function from async to sync." The agent figures out the steps. You own the outcome.</p>

<p><strong>Name the artifacts that already exist.</strong> If you mean a specific file, give the path. If you mean a specific function, give the function name. If there&#x2019;s an existing helper that should be reused, name it. The hours an agent wastes searching for the right thing to import is the most boring failure mode.</p>

<p><strong>State the boundaries.</strong> "Don&#x2019;t touch the public API." "Don&#x2019;t add new dependencies." "Don&#x2019;t change the database schema." Agents have a powerful tendency to fix things you didn&#x2019;t ask them to fix. Stating what is out of scope is at least as valuable as stating what is in.</p>

<p><strong>Name the verification surface.</strong> "Run <code>pnpm test:unit</code> when done. If anything fails, stop and surface it." If you don&#x2019;t name the verification, the agent picks one. You will not like the one it picks.</p>

<p><strong>Tell it what to do if blocked.</strong> "If you can&#x2019;t figure out which helper to use, stop and ask." Without this, an agent gets stuck and starts inventing. With it, an agent stops and you save an hour.</p>

<h2>The brief I wrote at 9am that saved me six hours</h2>

<p>One concrete example. I needed to migrate a Prisma schema from a soft-delete pattern (using a <code>deletedAt</code> column) to hard deletes for one specific table — but only that table, while keeping soft deletes elsewhere. Roughly forty queries touched it. The naive prompt would have been: "Convert this table from soft delete to hard delete."</p>

<p>The actual brief was about eight bullet points. It named the table. It named the migration file. It said "the goal is that after this change, calling <code>prisma.fooBar.delete()</code> actually removes the row from the database." It listed the four query helpers that I knew needed to change. It said "don&#x2019;t touch any other table&#x2019;s delete behavior." It said "run the test suite. If <code>foo-bar-deletion.test.ts</code> breaks, that&#x2019;s expected — update the test. If anything else breaks, stop."</p>

<p>The brief took me about twenty minutes to write. The agent took about an hour to execute. Total: under two hours. Estimated hand-coded time: most of a day, because I&#x2019;d have had to find all forty call sites myself, and I would have gotten interrupted in the middle, and I would have lost the thread by lunch.</p>

<p>The win was not the agent. The win was the brief. The agent could have failed completely and I&#x2019;d still have a useful artifact — the brief — to hand to a junior engineer or to use as a checklist for myself.</p>

<h2>The thing I still struggle with</h2>

<p>I&#x2019;m a worse brief-writer when I&#x2019;m in flow. When I&#x2019;m deep in a problem and want the agent to handle something adjacent, I write sloppy briefs because I don&#x2019;t want to context-switch out of the main thing. Those sloppy briefs produce sloppy agents that produce sloppy code that I have to clean up later. Net negative.</p>

<p>What I&#x2019;ve started doing — and this is the most counterintuitive habit I&#x2019;ve picked up this year — is <em>writing the brief in the morning, before I start working on anything</em>. The day&#x2019;s entire backlog of agent-able tasks gets briefs written for it at 9am, when I have the most patience and clearest head. The agents run while I work on the main thing. By 4pm I have a backlog of finished diffs to review.</p>

<p>This is not how anyone described knowledge work to me in 2022. It feels strange. It also works.</p>

<h2>The skill</h2>

<p>If I had to name the single skill that gets the most out of AI agents in 2026, it&#x2019;s not prompt engineering or model selection or any of the things people talk about on Twitter. It&#x2019;s clear writing.</p>

<p>Specifically: the kind of clear writing where the next person who reads what you wrote — even if they have never been in your head before — knows exactly what you want them to do, what success looks like, what they should not touch, and what to do if they get stuck.</p>

<p>That&#x2019;s a writing skill. It is also, it turns out, an engineering skill. It always was. The AI just made the cost of doing it badly visible in a way it wasn&#x2019;t before.</p>
    `,
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
