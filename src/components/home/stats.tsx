import { Counter } from "@/components/site/counter";
import { delay } from "@/components/site/split";

/** Three facts from Sat-Raj's office, set big. No invented numbers. */
export function Stats() {
  return (
    <section className="fx-stats" aria-labelledby="stats-title">
      <div className="fx-stats-glow" aria-hidden="true" />
      <div className="fx-wrap">
        <h2 id="stats-title" className="fx-stats-title fx-reveal">
          <span className="fx-kicker">
            <b>05</b> What changed at Sat-Raj
          </span>
        </h2>
        <ul className="fx-stats-grid">
          <li className="fx-stat fx-reveal">
            <p className="fx-stat-label">Daily customer price run</p>
            <p className="fx-stat-big">
              <span className="fx-stat-was">
                <span className="fx-strike">~1 hour</span>
              </span>
              <span className="fx-stat-arrow" aria-hidden="true">
                →
              </span>
              <span className="fx-stat-now">1 click</span>
            </p>
            <p className="fx-stat-note">
              45–60 minutes of spreadsheet and email work became one reviewed click.
            </p>
          </li>
          <li className="fx-stat fx-reveal" style={delay(120)}>
            <p className="fx-stat-label">Delivery tickets re-entered by hand</p>
            <p className="fx-stat-big">
              <span className="fx-stat-was">
                <span className="fx-strike">Typed twice</span>
              </span>
              <span className="fx-stat-arrow" aria-hidden="true">
                →
              </span>
              <span className="fx-stat-now">
                <Counter from={2} to={0} duration={1.6} delay={0.5} />
              </span>
            </p>
            <p className="fx-stat-note">BOLs used to go into Sheets, then again into QuickBooks. Now they are pulled once and matched.</p>
          </li>
          <li className="fx-stat fx-reveal" style={delay(240)}>
            <p className="fx-stat-label">On each invoice</p>
            <p className="fx-stat-big">
              <span className="fx-stat-now">Every tax line</span>
            </p>
            <p className="fx-stat-taxes">
              <span style={delay(500)}>Federal</span>
              <span style={delay(700)}>State</span>
              <span style={delay(900)}>Local</span>
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
