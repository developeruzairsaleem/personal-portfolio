const ITEMS = [
  "n8n",
  "Next.js & Node.js",
  "PostgreSQL",
  "OpenAI & LLM APIs",
  "Stripe & Paddle",
  "QuickBooks Desktop",
  "Remotion & MediaBunny",
];

/** Tools and integrations used in production builds. */
export function Marquee() {
  return (
    <section className="fx-marquee" aria-label="Stack and integrations">
      <p className="fx-marquee-label">Stack &amp; integrations</p>
      <div className="fx-marquee-viewport" tabIndex={0} aria-label="Stack list, scrolls sideways">
        <div className="fx-marquee-track">
          <ul className="fx-marquee-list">
            {ITEMS.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <ul className="fx-marquee-list" aria-hidden="true">
            {ITEMS.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
