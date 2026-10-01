const ITEMS = [
  "QuickBooks Desktop",
  "QuickBooks Online",
  "DTN terminal tickets",
  "DTN rack prices",
  "Samsara truck GPS",
  "Driver BOLs",
  "Your state's fuel taxes",
  "Your markups & freight zones",
];

/** "Works with" strip. Plain text names only: no third-party logos. */
export function Marquee() {
  return (
    <section className="fx-marquee" aria-label="Works with">
      <p className="fx-marquee-label">Works with</p>
      <div className="fx-marquee-viewport">
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
