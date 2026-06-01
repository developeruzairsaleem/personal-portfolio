import {
  NAME,
  CONTACT,
  SUMMARY,
  EXPERIENCE,
  PROJECTS,
  SKILLS,
  EDUCATION,
} from "./resume-data";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="r-section">
      <h2 className="r-section-title">{title}</h2>
      {children}
    </section>
  );
}

export default function Resume() {
  return (
    <article className="resume">
      <header className="r-head">
        <h1 className="r-name">{NAME}</h1>
        <p className="r-contact">
          {CONTACT.map((c, i) => (
            <span key={c.label}>
              {i > 0 && <span className="r-sep"> | </span>}
              {c.href ? (
                <a href={c.href} target="_blank" rel="noopener noreferrer">
                  {c.label}
                </a>
              ) : (
                c.label
              )}
            </span>
          ))}
        </p>
      </header>

      <p className="r-summary">{SUMMARY}</p>

      <Section title="Experience">
        {EXPERIENCE.map((job) => (
          <div className="r-entry" key={job.company}>
            <div className="r-entry-row">
              <span className="r-entry-title">{job.company}</span>
              <span className="r-entry-date">{job.dates}</span>
            </div>
            <div className="r-entry-row r-entry-sub">
              <span>{job.role}</span>
              <span>{job.location}</span>
            </div>
            <ul className="r-bullets">
              {job.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            <p className="r-tech">
              <span className="r-tech-label">Technologies: </span>
              {job.tech.join(", ")}
            </p>
          </div>
        ))}
      </Section>

      <Section title="Projects">
        {PROJECTS.map((p) => (
          <div className="r-entry r-project" key={p.name}>
            <div className="r-entry-row">
              <span className="r-entry-title">
                {p.name}
                <span className="r-sep"> | </span>
                <a className="r-link" href={p.link.href} target="_blank" rel="noopener noreferrer">
                  {p.link.label}
                </a>
              </span>
            </div>
            <p className="r-proj-blurb">{p.blurb}</p>
          </div>
        ))}
      </Section>

      <Section title="Skills">
        <ul className="r-skills">
          {SKILLS.map((g) => (
            <li key={g.label}>
              <span className="r-skills-label">{g.label}: </span>
              {g.items.join(", ")}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Education">
        <div className="r-entry">
          <div className="r-entry-row">
            <span className="r-entry-title">{EDUCATION.school}</span>
            <span className="r-entry-date">{EDUCATION.dates}</span>
          </div>
          <div className="r-entry-row r-entry-sub">
            <span>{EDUCATION.degree}</span>
            <span>{EDUCATION.location}</span>
          </div>
        </div>
      </Section>
    </article>
  );
}
