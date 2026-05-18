# Project Context: Portfolio & Job Application Generator

## About Me
- **Role:** Senior Full Stack Engineer (5+ Years Experience)
- **Core Stack:** Next.js, PostgreSQL, Supabase, Redis

## Strict Writing Rules (Anti-AI Voice)

### Vocabulary — banned words
Never use: delve, testament, passionate storyteller, synergy, dynamic, robust, spearheaded, seamlessly, leverage (as a verb), utilize, facilitate, orchestrate, foster, empower, harness, unlock, transformative, revolutionary, cutting-edge, state-of-the-art, best-in-class, world-class, game-changer, paradigm shift, ensure (use "make sure" or describe the mechanism), various (be specific), navigate (as a metaphor), embark, journey, ecosystem (unless literally biological), holistic, comprehensive, meticulous, intricate, nuanced, vibrant, rich, deep dive, double down, circle back, low-hanging fruit, move the needle, boil the ocean.

Never use these openers: "I am passionate about", "I am excited to", "I'm thrilled", "I would love to", "I am eager to", "It is worth noting that", "In today's fast-paced world", "In the ever-evolving landscape", "Great question".

Never use these closers: "Looking forward to hearing back", "Eager to contribute", "Feel free to reach out", "Hope this helps", "Please don't hesitate to", "I'd be a great fit because".

Never use these connectors: "Furthermore", "Moreover", "Additionally" at the start of sentences. "Not only X but also Y." "As evidenced by." "On the other hand."

### Tone
- Technical, direct, matter-of-fact. Write like an engineer explaining a system architecture to another engineer.
- Use contractions: I'm, don't, can't, won't, it's. They sound human.
- Active voice. "I shipped X" not "X was shipped by me."
- Concrete verbs: built, shipped, migrated, replaced, dropped, cut, rewrote. Not: leveraged, utilized, facilitated, drove.
- No hedging. Don't write "I believe", "I think", "perhaps", "potentially". State it.
- No self-praise. Don't write "I'm a strong engineer" — describe what shipped.
- Don't apologize or pre-explain. Get into the answer.

### Format
- Short, punchy sentences. One idea per sentence.
- Avoid perfectly balanced 3-item lists — they sound generated. Use 2 or 4, or one sharp item, or asymmetric lists where one item is longer than the others.
- Don't bold everything. Bolding loses force when overused — reserve for the one phrase the reader must catch.
- Prose over bullets when the content is short enough to flow. Bullets are for parallel structure, not paragraphs hacked apart.
- No empty section headers ("About Me", "My Approach") unless the document is long enough to need navigation.
- One concrete example beats three abstract ones. Cut the abstract ones.

### Content rules
- **Don't invent generic duties.** Only use the specific project metrics and architectural wins from the project deep-dive (Indiecator, Diffed.gg, Sat-Raj, Design&Desktop AI Reel generator, restaurant scraper).
- **Numbers > adjectives.** "Dropped 45–60 min to 90 sec" beats "significantly faster". "3-person team, 2 months" beats "rapidly delivered".
- **Show the trade-off.** Real engineering writing names the alternative considered and why it was rejected. Generated writing only describes the winning path.
- **Name the constraint.** "Stripe only retains 3 months of event history" — that's the kind of detail that signals real work.
- **Skip the resume-summary tone.** Don't write "5 years of experience in Next.js" in a sentence — list it once at the top of a doc, never as filler in prose.
- **Don't pad with "I." Vary the sentence opening — half the sentences shouldn't start with "I".**

## Per-format rules

These apply on top of the general rules above. The fundamental voice doesn't change across formats — only density and structure do.

### Resumes
- Bullets are verb-led, past tense, no "I" subject. ("Shipped X" not "I shipped X" or "Responsible for shipping X".)
- Every bullet earns its line with a result, a metric, or a named constraint. Soft bullets ("Collaborated with team to deliver features") get cut.
- Don't repeat the same opening verb across consecutive bullets. Vary: built, shipped, migrated, replaced, cut, rewrote, owned.
- Skills lists: only things you can defend in an interview. Don't pad with every tech you've touched once.
- No "Proficient in X" / "Strong understanding of Y" filler — list the tech, the years are implied by the experience section.
- No "Objective:" or "Seeking opportunity to..." headers. Replace with a hard one-paragraph credential summary, or omit.
- No "References available upon request." Universally dead phrase.
- Dates: consistent format (month + year), no gaps you don't explain.
- Job titles = the title you actually held. Not aspirational.
- Trade-offs and constraints belong here too — "migrated FFmpeg.wasm → MediaBunny for ~90% render-time reduction" outperforms "improved video rendering performance".

### Cover letters
- Max 3–4 short paragraphs. Anything longer doesn't get read.
- Open with the role + one concrete reason. Never restate the job posting.
- Don't recap the resume. Pick 1–2 specifics that show fit and go deeper on them.
- One paragraph per concrete project mapped to a JD bullet. Not three projects compressed into a sentence each.
- Close with logistics (availability, timezone, link to portfolio), not "I look forward to hearing back."
- Honest flags up front (visa, location, no-experience-with-X) read as professional, not weak. Bury them and they look evasive.
- "P.S." is allowed and effective when it carries something the body shouldn't.

### Emails
- Subject line: specific and scannable. "Senior FE application — Uzair Saleem, Next.js + Stripe Connect work" beats "Following up" or "Question".
- One ask per email. If you have two asks, send two emails.
- Open with the reason for the email in the first sentence. Skip "I hope this finds you well" / "Hope you're doing great".
- TL;DR at top if the email runs longer than 3 short paragraphs.
- Don't apologize for emailing. Don't pre-explain ("I know you're busy, so I'll keep this short" — then keep it short, don't announce it).
- Cold emails: prove you read their work in the first 2 sentences. No template feel.
- Plain text. No HTML signatures with logos. Name + one link max for cold; full sig for warm.
- Reply emails: trim quoted history if it's not needed.

### DMs (LinkedIn, X, Slack)
- 3–6 lines max. DMs that look like emails get ignored.
- Open with proof-it's-not-template: something specific about them, their post, or their company that you couldn't have written without reading.
- One ask only. If you don't have an ask, don't send the DM.
- Connection requests on LinkedIn: ~280 chars max. Don't pitch — earn the second message.
- Never lead with "Quick question" — universally a tell that a long ask follows.
- Match the platform's tone. LinkedIn slightly formal, X informal, Slack matches the channel's existing voice.
- Don't write "Reaching out because..." — get into the substance.
- Don't end with "Let me know if interested" — make the next step obvious or skip it.

### Blog posts and technical docs
- First paragraph states the thesis, the problem, or the surprising claim. No preamble. No "In this post, we'll cover..." — just cover it.
- Headers are specific, not generic. "How we cut Stripe webhook reconciliation from 3 minutes to 9 seconds" beats "Background" and "Conclusion".
- Show the failed approach before the final one. The trade-off is the post.
- Name versions, name dates, name the actual constraint that pushed the call. "Stripe retains 3 months of event history" is the kind of detail that proves the post is real.
- Code blocks have context lines (what file, what function), not bare snippets dropped in.
- "Why" sections beat "What" sections — the "what" is in the code.
- Closing: state what you'd do differently or what's still open. Don't end with "What are your thoughts? Let me know in the comments."
- Don't summarize the post at the end. The post is the summary.

### Shared across all formats
- Sign-offs: `— Uzair` or just the name. Never "Warm regards", "Best wishes", "Sincerely yours", "Kind regards".
- Links inline, never "Please find attached" or "See below".
- Don't write "I would be a valuable addition" / "I would bring value to your team." Let the work speak.
- Don't write "I am applying for / writing to apply for / interested in applying for". Get into the substance.

### Em-dashes
Allowed, but not as a rhetorical crutch. If a sentence has more than one em-dash, rewrite it. AI overuses them to fake cadence — humans use them when a parenthetical genuinely interrupts.

### Tells to delete on a final pass
Before sending anything, scan for and cut:
- Any sentence starting with "This is" + abstract noun ("This is a role that...")
- Any "X is not just Y, it's Z" construction
- Any sentence that could appear verbatim in another candidate's letter
- Any phrase that doesn't earn its keep — would the reader miss it if it were gone?
