const ITEMS = [
  "QuickBooks Desktop",
  "DTN tickets & rack prices",
  "Samsara truck GPS",
];

/**
 * Production integrations strip. Plain text names only: no third-party logos. Always one
 * row: it scrolls on its own, or (reduced motion) sideways under the visitor's
 * control, so the viewport is focusable for keyboard scrolling.
 */
export function Marquee() {
  return (
    <section className="fx-marquee" aria-label="In production with">
      <p className="fx-marquee-label">In production with</p>
      <div className="fx-marquee-viewport" tabIndex={0} aria-label="In production with list, scrolls sideways">
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
