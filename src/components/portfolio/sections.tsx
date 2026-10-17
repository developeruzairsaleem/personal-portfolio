import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, FileText, Mail } from "lucide-react";
import { TrackedLink } from "@/app/tracked-link";
import { HIRE_HREF } from "@/app/service-contact";
import { EMAIL, GithubIcon, LINKS, LinkedinIcon } from "@/app/site-chrome";
import { posts } from "@/app/blog/posts";
import { EDUCATION, EXPERIENCE, SKILLS } from "@/app/resume/resume-data";
import { External, PDF } from "./chrome";
import { WORK } from "./work-data";

/** "Jan 2026 – Present" reads better as "Jan 2026 to now" on the page. */
function plainDates(dates: string) {
  return dates.replace(" – ", " to ").replace("Present", "now");
}

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div className="hero-in">
          <p className="chip">
            <span className="dot" aria-hidden="true" />
            Available now for full-time remote roles
          </p>
          <h1 id="hero-title" className="hero-title">
            I&apos;m a full-stack engineer. I&apos;ve shipped <a href="#satraj">a billing system</a>,{" "}
            <a href="#indiecator">a revenue dashboard</a> and <a href="#diffed">a gaming marketplace</a>.
          </h1>
          <p className="hero-sub">
            I&apos;ve been writing production code since 2021, I&apos;ve led a small team, and I stay on after launch to fix
            what breaks.
          </p>
          <div className="cta-row">
            <TrackedLink event="cta_hire_hero" href={HIRE_HREF} className="btn">
              <Mail aria-hidden="true" /> Email me
            </TrackedLink>
            <a href={PDF} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
              <FileText aria-hidden="true" /> Résumé (PDF)
            </a>
            <External href={LINKS.github} className="icon-btn">
              <GithubIcon />
              <span className="sr">GitHub</span>
            </External>
            <External href={LINKS.linkedin} className="icon-btn">
              <LinkedinIcon />
              <span className="sr">LinkedIn</span>
            </External>
          </div>
        </div>

        <div className="portrait-wrap">
          <figure className="portrait">
            <Image
              src="/images/uzair-portrait-blazer.jpg"
              alt="Uzair Saleem"
              width={820}
              height={1024}
              priority
              sizes="(max-width: 820px) 132px, 340px"
            />
            <figcaption>Islamabad · UTC+5</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

const FACTS: [string, string, string][] = [
  ["Role", "Full-stack engineer", "Backend and product roles too"],
  ["Stack", "Next.js, TypeScript, Node, Postgres", "Also Stripe, Redis, AWS and n8n"],
  ["Based", "Islamabad (UTC+5)", "Works US hours"],
  ["Available", "Now", "Full-time remote, employee or contractor"],
];

export function Facts() {
  return (
    <section className="facts" aria-label="At a glance">
      <div className="wrap">
        <dl>
          {FACTS.map(([k, v, sub]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>
                {v}
                <span>{sub}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function Work() {
  return (
    <section id="work" className="sec" aria-labelledby="work-title">
      <div className="wrap">
        <header className="sec-head">
          <p className="label">Selected work</p>
          <h2 id="work-title" className="h2">
            Things I&apos;ve shipped
          </h2>
          <p className="sec-sub">Four projects I built and shipped. Open one for the story behind it.</p>
        </header>

        <div className="tiles">
          {WORK.map((w, i) => (
            <article key={w.slug} id={w.slug} className="tile reveal" aria-labelledby={`${w.slug}-title`}>
              <div className={`tile-media${w.image?.fit === "contain" ? " is-contain" : ""}${w.flow ? " is-flow" : ""}`}>
                <span className="tile-status">
                  <span className="dot" aria-hidden="true" />
                  {w.status}
                </span>
                {w.image ? (
                  <Image
                    src={w.image.src}
                    alt={w.image.alt}
                    width={w.image.width}
                    height={w.image.height}
                    sizes="(max-width: 820px) 92vw, 560px"
                  />
                ) : (
                  <ol className="flow" aria-label="How a reel moves through the pipeline">
                    {w.flow?.map(([k, v]) => (
                      <li key={k}>
                        <b>{k}</b>
                        <span>{v}</span>
                      </li>
                    ))}
                  </ol>
                )}
              </div>

              <div className="tile-body">
                <p className="tile-kicker">
                  <b>{String(i + 1).padStart(2, "0")}</b>
                  <span>{w.kicker}</span>
                </p>
                <h3 id={`${w.slug}-title`} className="tile-title">
                  <Link href={`/work/${w.slug}`}>{w.title}</Link>
                </h3>
                <p className="tile-one">{w.oneLiner}</p>
                <p className="tile-result">
                  <span>Result</span>
                  {w.result}
                </p>
                <ul className="tags" aria-label="Stack">
                  {w.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <div className="tile-foot">
                  <span className="tile-more" aria-hidden="true">
                    Case study <ArrowRight />
                  </span>
                  {w.links.map((l) => (
                    <External key={l.href} href={l.href} className="link">
                      {l.label} <ArrowUpRight aria-hidden="true" />
                    </External>
                  ))}
                  {w.note && <span className="tile-note">{w.note}</span>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="sec" aria-labelledby="exp-title">
      <div className="wrap split">
        <header className="sec-head">
          <p className="label">Experience</p>
          <h2 id="exp-title" className="h2">
            Where I&apos;ve worked
          </h2>
          <a href={PDF} className="link" target="_blank" rel="noopener noreferrer">
            Full résumé (PDF) <FileText aria-hidden="true" />
          </a>
        </header>

        <div>
          <ol className="jobs">
            {EXPERIENCE.map((job) => {
              const company = job.company.replace(/\s*\(.*\)$/, "");
              return (
                <li key={`${job.company} ${job.dates}`} className="job reveal">
                  <p className="job-dates">{plainDates(job.dates)}</p>
                  <div>
                    <h3 className="job-title">
                      {job.work ? (
                        <Link href={`/work/${job.work}`} className="job-cover">
                          {company} <span>· {job.role}</span>
                        </Link>
                      ) : (
                        <>
                          {company} <span>· {job.role}</span>
                        </>
                      )}
                    </h3>
                    {job.line && <p className="job-line">{job.line}</p>}
                  </div>
                  <span className="job-go" aria-hidden="true">
                    {job.work && <ArrowRight />}
                  </span>
                </li>
              );
            })}
          </ol>
          <div className="edu">
            <p className="job-dates">{plainDates(EDUCATION.dates)}</p>
            <h3 className="job-title">
              {EDUCATION.degree} <span>· {EDUCATION.school}</span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Writing() {
  return (
    <section id="writing" className="sec" aria-labelledby="writing-title">
      <div className="wrap split">
        <header className="sec-head">
          <p className="label">Writing</p>
          <h2 id="writing-title" className="h2">
            How I think about the work
          </h2>
        </header>
        <ul className="posts">
          {posts.map((p) => (
            <li key={p.slug} className="post-row reveal">
              <p className="post-meta">
                <span>{p.tag}</span>
                <span>{p.date}</span>
                <span>{p.readTime} read</span>
              </p>
              <h3 className="post-name">
                <Link href={`/blog/${p.slug}`}>{p.title}</Link>
              </h3>
              <p className="post-excerpt">{p.excerpt}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Stack() {
  return (
    <section id="stack" className="sec" aria-labelledby="stack-title">
      <div className="wrap split">
        <header className="sec-head">
          <p className="label">Stack</p>
          <h2 id="stack-title" className="h2">
            What I work with
          </h2>
        </header>
        <dl className="stack">
          {SKILLS.map((g) => (
            <div key={g.label}>
              <dt>{g.label}</dt>
              <dd>{g.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

const TERMS = [
  ["Role", "Full-time remote. Full-stack, backend or product engineer."],
  ["Hours", "US hours from Islamabad (UTC+5)."],
  ["Paperwork", "Employee or contractor. Deel, Payoneer or a wire all work."],
  ["Start", "Available now."],
];

/** The lime call-to-action panel, used at the bottom of the home page and every case study. */
export function HireCta({ title = "Hiring? Let’s talk.", event = "end" }: { title?: string; event?: string }) {
  return (
    <section id="contact" className="cta-sec" aria-labelledby={`contact-title-${event}`}>
      <div className="wrap">
        <div className="cta-panel">
          <p className="label">Contact</p>
          <h2 id={`contact-title-${event}`} className="h2">
            {title}
          </h2>
          <TrackedLink event={`cta_hire_email_${event}`} href={HIRE_HREF} className="cta-email">
            {EMAIL}
          </TrackedLink>
          <div className="cta-row">
            <TrackedLink event={`cta_hire_${event}`} href={HIRE_HREF} className="btn btn-dark">
              <Mail aria-hidden="true" /> Email me
            </TrackedLink>
            <TrackedLink
              event="cta_calendly"
              href={LINKS.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark"
            >
              Book a 30-minute call
              <span className="sr"> (opens in new tab)</span>
            </TrackedLink>
            <a href={PDF} className="btn btn-outline-dark" target="_blank" rel="noopener noreferrer">
              <FileText aria-hidden="true" /> Résumé
            </a>
          </div>
          <dl className="terms">
            {TERMS.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
