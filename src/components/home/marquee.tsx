const ITEMS = [
  "QuickBooks Desktop",
  "QuickBooks Online",
  "DTN tickets & rack prices",
  "Samsara truck GPS",
  "Sage, NetSuite, Dynamics & Xero on request",
];

/**
 * "Works with" strip. Plain text names only: no third-party logos. Always one
 * row: it scrolls on its own, or (reduced motion) sideways under the visitor's
 * control, so the viewport is focusable for keyboard scrolling.
 */
export function Marquee() {
  return (
    <section className="fx-marquee" aria-label="Works with">
      <p className="fx-marquee-label">Works with</p>
      <div className="fx-marquee-viewport" tabIndex={0} aria-label="Works with list, scrolls sideways">
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
