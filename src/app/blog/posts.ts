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
    slug: "show-2-years-revenue-stripe-keeps-3-months",
    title: "How to show 2 years of revenue when Stripe only remembers 3 months",
    excerpt:
      "I built a dashboard that promised founders 2 years of revenue history. The data source it relied on only kept the last 3 months. This is the story of that contradiction, told so it makes sense whether or not you write code.",
    date: "May 2026",
    readTime: "8 min",
    tag: "Engineering",
    body: `
<h2>The problem, in plain terms</h2>

<p>I built a product called Indiecator. You connect it to your Stripe account (Stripe is the service most online businesses use to charge customers), and it shows you your revenue over time. How much you make each month, how fast you&#x2019;re growing, how many customers are leaving. The kind of dashboard every subscription business wants but few have.</p>

<p>The promise was simple: connect your account, see the last 2 years. That promise turned out to be hard to keep, for a reason almost nobody expects.</p>

<p><strong>The data source I was pulling from only remembers the last 3 months.</strong> I was promising 2 years of history while reading from something with a 3-month memory. Everything that follows is how I closed that gap.</p>

<h2>One word you need: MRR</h2>

<p>MRR means monthly recurring revenue. It&#x2019;s the predictable income a subscription business earns every month. If 100 people pay you $10 a month, your MRR is $1,000. Someone upgrades, it goes up. Someone cancels, it goes down. The entire job of the dashboard is to track that number accurately, month by month, going back 2 years. Hold onto that. The rest is about where the numbers to compute it come from.</p>

<h2>First attempt: follow the play-by-play</h2>

<p>Stripe can notify you the instant anything happens. Customer subscribes, you get a ping. Upgrade, ping. Cancellation, ping. Each ping is called an "event." Think of it as a live play-by-play of every money change, delivered as it happens.</p>

<p>So the obvious design: listen to the play-by-play, and every time a change comes in, adjust the running total. Add for a new subscription, subtract for a cancellation. It&#x2019;s clean and it&#x2019;s honest. Every number on the dashboard traces back to a specific moment something happened.</p>

<p>I built that first. It worked in the demo. New changes came in, the chart moved. Ship it.</p>

<h2>Week 4: the history wasn&#x2019;t there</h2>

<p>Then a real customer connected an account with 2 years of activity. The system tried to walk backward through the play-by-play to reconstruct their history. Around the 3-month mark, it ran out. The older plays simply weren&#x2019;t there anymore. Stripe keeps the play-by-play for about 30 to 90 days, then drops it. Not hidden, not archived. Gone.</p>

<p>This is fine if you only care about right now. It is fatal if your whole product is "see your last 2 years." A play-by-play can tell you what happened this quarter. It can&#x2019;t tell you what happened last year, because last year&#x2019;s plays were thrown away.</p>

<h2>The other source: the receipts</h2>

<p>There&#x2019;s a second place the data lives. Every time Stripe charges a customer, it keeps a receipt (an "invoice"). Unlike the play-by-play, receipts are kept forever. So the second idea: ignore the play-by-play, just read every receipt from day one, and rebuild the revenue history from those. This solves the memory problem completely. The receipts go back as far as you need.</p>

<p>But receipts have their own blind spot. They&#x2019;re only created once a month, at billing time. Imagine a customer upgrades on the 3rd, then cancels on the 20th. The receipt at the end of the month shows the final state and quietly erases the two changes that happened in between. If you want to understand <em>why</em> revenue moved (how much came from upgrades, how much you lost to churn), that in-between detail is exactly what you need, and the receipts hide it.</p>

<p>So now I had two incomplete sources. The play-by-play has every detail but only remembers 3 months. The receipts remember forever but smooth over the details.</p>

<h2>The fix: use both, split by time</h2>

<p>Neither source is complete alone, but their weaknesses don&#x2019;t overlap. So I used both, divided by time. For everything older than the last few months, use the receipts (they&#x2019;re all that survive back there anyway). For the recent window, use the detailed play-by-play (it still exists, and that&#x2019;s where the rich detail matters most). The dividing line sits comfortably inside the 3-month window, so the two sources overlap a little rather than leaving a gap.</p>

<p>That overlap creates an obvious risk: the same change counted twice, once from a receipt and once from a play. Double-counting would make every number wrong.</p>

<p>Here&#x2019;s the rule that solved it, and it&#x2019;s the part I&#x2019;m actually proud of. Every change gets written into one shared list, and each entry is stamped with a fingerprint built from <em>who</em> it happened to, <em>what</em> changed, and <em>when</em>. The fingerprint is calculated the same way no matter which source it came from. So a change described by a receipt and the same change described by a play produce the <em>identical</em> fingerprint. When they overlap, they land on the same slot and merge automatically instead of counting twice.</p>

<p>That single decision (one shared list, identical fingerprints) is what turned "two messy data sources" into "one clean record with two contributors." Without it, every overlap is a judgment call and the totals slowly drift away from the truth.</p>

<h2>How it runs day to day</h2>

<p>In production, three jobs all feed that one shared list:</p>

<p><strong>The live feed.</strong> As changes happen, they get recorded immediately. This is the real-time edge.</p>

<p><strong>A daily catch-up.</strong> Live feeds miss things. Connections drop, notifications fail, things arrive out of order. So once a day a job re-checks the recent window and fills in anything the live feed missed. Because of the fingerprints, running it again never creates duplicates. It only fills gaps.</p>

<p><strong>The one-time history rebuild.</strong> When you first connect your account, a job reads your receipts all the way back and builds your 2-year history. This is the part the play-by-play could never have done.</p>

<p>All three write to the same list, all three are safe to re-run, and none of them can double-count. That safety is the entire point.</p>

<h2>What I&#x2019;d do differently, and what&#x2019;s still open</h2>

<p>I&#x2019;d have found the 3-month limit before building, not in week 4 when real history started disappearing. It&#x2019;s a single fact that quietly invalidated my first design. The takeaway isn&#x2019;t "the play-by-play was a bad idea." It was right for the recent window. The takeaway is: <strong>before you build on top of any data source, find out how long it actually keeps its data.</strong> That one property decides your whole architecture.</p>

<p>Still unsolved: the dividing line between "use receipts" and "use the play-by-play" is a fixed point right now, parked safely inside the 3-month window. It would be smarter to set it per account, based on how far back each account&#x2019;s play-by-play actually still reaches. I haven&#x2019;t needed that yet. I will, the first time an account&#x2019;s history is shorter than my fixed line assumes.</p>
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

<p>The first way is <strong>autocomplete</strong>. You write a function name, the model suggests the body, you tab to accept. You write a comment, the model writes the code below it. It is the same job you were doing before (sitting at the editor, holding the whole problem in your head, typing things out), except your hands move a little less. You ship maybe 1.3x faster. You are not transformed.</p>

<p>The second way is <strong>leverage</strong>. You don&#x2019;t write a function name. You write a <em>brief</em>. You describe the outcome (what should be true after the change) and you hand the whole thing to an agent. While the agent works, you go review the previous one&#x2019;s pull request. You ship 5x faster, sometimes 10x, and the job has changed.</p>

<p>The job has changed because the bottleneck has moved. When you&#x2019;re using autocomplete, your bottleneck is the same as it ever was: how fast you can think and type. When you&#x2019;re using leverage, your bottleneck is how clearly you can specify what you want, and how well you can verify what came back.</p>

<h2>The thing nobody tells you about agents</h2>

<p>I run two or three agents in parallel most days. One refactoring something, one writing tests, one investigating a bug. Sometimes I&#x2019;m the bottleneck (I can&#x2019;t read the diffs fast enough), and that is a new feeling. Twelve months ago the bottleneck was always typing. Now the bottleneck is whatever isn&#x2019;t the agent.</p>

<p>What this does to your day is strange. The actual hands-on-keyboard time drops. The reading time goes up. The thinking time stays roughly the same. The decisions per hour goes way up. By 4pm you are mentally exhausted in a way you weren&#x2019;t before, because you spent the day making twenty decisions about other code instead of writing your own.</p>

<p>This is also why "AI replaces programmers" is the wrong frame. The agent is not the programmer. The agent is the typist. <em>You</em> are still the programmer, but the verb you do most is no longer "write," it&#x2019;s "review."</p>

<h2>The two skills that actually matter now</h2>

<p>If the bottleneck has moved from typing to specification + verification, then the skills that pay are the ones that produce a tight specification and a fast verification loop. Specifically:</p>

<p><strong>Skill one: writing briefs that survive interpretation.</strong> An agent will do exactly what you said, which is not the same as what you wanted. You learn to write tasks that have no ambiguity, the way you used to write Jira tickets for a contractor in a different timezone you&#x2019;d never met. "Refactor the auth flow" is not a brief. "Replace the JWT verification in <code>src/lib/auth.ts</code> with the helper in <code>src/lib/jose.ts</code>, keep the public function signature unchanged, update the three callers, run the test suite" is a brief.</p>

<p><strong>Skill two: building a verification surface the agent can hit.</strong> If the only way to know whether the agent did the right thing is to read the diff and run the app, you will be a bottleneck. If there&#x2019;s a test suite, a typecheck, a build, a smoke test, then the agent runs through them itself and only surfaces work that&#x2019;s passing. The verification surface IS your leverage. People who think "tests are slow" are about to find out that tests are the only thing that lets them go fast.</p>

<h2>The honest part</h2>

<p>Autocomplete still works. I still use it. It&#x2019;s genuinely helpful when I&#x2019;m in the middle of something and just need the next 4 lines. But it is a small win. The leverage win is the big one. And the leverage win is invisible to people who haven&#x2019;t made the switch, because from the outside it just looks like the same job, slightly faster.</p>

<p>It&#x2019;s not the same job. It&#x2019;s a different one. Worth knowing.</p>
    `,
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
