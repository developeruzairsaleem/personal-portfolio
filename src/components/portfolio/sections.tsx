import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Code2, FileText, Mail } from "lucide-react";
import { TrackedLink } from "@/app/tracked-link";
import { HIRE_HREF } from "@/app/service-contact";
import { EMAIL, GithubIcon, LINKS, LinkedinIcon } from "@/app/site-chrome";
import { EXPERIENCE, SKILLS } from "@/app/resume/resume-data";
import { WORK, type WorkLink } from "./work-data";

const PDF = "/uzair-saleem-resume.pdf";

function bold(text: string) {
  return text.split("**").map((seg, i) => (i % 2 === 1 ? <strong key={i}>{seg}</strong> : seg));
}

function External({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="pf-sr"> (opens in new tab)</span>
    </a>
  );
}

export function PfNav() {
  return (
    <header className="pf-nav">
      <div className="pf-wrap pf-nav-in">
        <Link href="/" className="pf-brand">
          <Image src="/images/uzair-avatar-hd.jpg" alt="" width={28} height={28} />
          Uzair Saleem
        </Link>
        <nav className="pf-nav-links" aria-label="Main">
          <Link href="/#work">Work</Link>
          <Link href="/#experience">Experience</Link>
          <Link href="/resume">Résumé</Link>
        </nav>
        <TrackedLink event="cta_hire_nav" href={HIRE_HREF} className="pf-btn pf-btn-sm">
          Email me
        </TrackedLink>
      </div>
    </header>
  );
}

const PROOF = [
  { id: "indiecator", text: "Engineered data intensive ETL pipelines for indiecator.com that handle years of billing data without downtime." },
  { id: "satraj", text: "Integrated and shipped a complete billing workflow from dispatch to QuickBooks for satraj.inc, handling messy real-world data." },
  { id: "reels", text: "Built an AI integrated reel generator and shipped its n8n workflow for automatic social media posting." },
];

export function Hero() {
  return (
    <section className="pf-hero" aria-labelledby="hero-title">
      <div className="pf-wrap pf-hero-grid">
        <div className="pf-hero-copy">
          <p className="pf-status">
            <span className="pf-dot" aria-hidden="true" />
            Open to full-time remote roles
          </p>
          <p className="pf-eyebrow">Uzair Saleem · Full-stack engineer</p>
          <h1 id="hero-title" className="pf-h1">
            I build data pipelines, billing workflows and AI automations, and ship them to production.
          </h1>

          <ul className="pf-proof">
            {PROOF.map((p) => (
              <li key={p.id}>
                <a href={`#${p.id}`}>
                  <span>{p.text}</span>
                  <ArrowRight aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>

          <div className="pf-cta">
            <TrackedLink event="cta_hire_hero" href={HIRE_HREF} className="pf-btn">
              <Mail aria-hidden="true" /> Email me
            </TrackedLink>
            <a href={PDF} className="pf-btn pf-btn-ghost" target="_blank" rel="noopener noreferrer">
              <FileText aria-hidden="true" /> Résumé (PDF)
            </a>
            <External href={LINKS.github} className="pf-icon-btn">
              <GithubIcon />
              <span className="pf-sr">GitHub</span>
            </External>
            <External href={LINKS.linkedin} className="pf-icon-btn">
              <LinkedinIcon />
              <span className="pf-sr">LinkedIn</span>
            </External>
          </div>

          <p className="pf-meta">Islamabad, Pakistan · I work US hours · Writing production code since 2021</p>
        </div>

        <figure className="pf-portrait">
          <Image
            src="/images/uzair-portrait-blazer.jpg"
            alt="Uzair Saleem"
            width={820}
            height={1024}
            priority
            sizes="(max-width: 860px) 160px, 360px"
          />
        </figure>
      </div>
    </section>
  );
}

function WorkLinkIcon({ kind }: { kind: WorkLink["kind"] }) {
  if (kind === "pdf") return <FileText aria-hidden="true" />;
  if (kind === "code") return <Code2 aria-hidden="true" />;
  if (kind === "page") return <ArrowRight aria-hidden="true" />;
  return <ArrowUpRight aria-hidden="true" />;
}

export function Work() {
  return (
    <section id="work" className="pf-sec" aria-labelledby="work-title">
      <div className="pf-wrap">
        <header className="pf-sec-head">
          <p className="pf-label">Selected work</p>
          <h2 id="work-title" className="pf-h2">
            Four projects, all shipped. Three are live right now.
          </h2>
        </header>

        <div className="pf-work">
          {WORK.map((w, i) => (
            <article key={w.id} id={w.id} className="pf-card" aria-labelledby={`${w.id}-title`}>
              <div className="pf-card-media">
                {w.image ? (
                  <Image
                    src={w.image.src}
                    alt={w.image.alt}
                    width={w.image.width}
                    height={w.image.height}
                    sizes="(max-width: 960px) 88vw, 500px"
                  />
                ) : (
                  <ol className="pf-flow" aria-label="How a reel moves through the pipeline">
                    {w.flow?.map(([k, v]) => (
                      <li key={k}>
                        <b>{k}</b>
                        <span>{v}</span>
                      </li>
                    ))}
                  </ol>
                )}
              </div>

              <div className="pf-card-body">
                <p className="pf-card-kicker">
                  <span className="pf-num">{String(i + 1).padStart(2, "0")}</span>
                  <span>{w.kicker}</span>
                  <span className="pf-pill">{w.status}</span>
                </p>
                <h3 id={`${w.id}-title`} className="pf-h3">
                  {w.title}
                </h3>
                <p className="pf-card-summary">{w.summary}</p>
                <ul className="pf-points">
                  {w.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <ul className="pf-tags" aria-label="Stack">
                  {w.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                {w.links.length > 0 && (
                  <div className="pf-card-links">
                    {w.links.map((l) =>
                      l.kind === "page" ? (
                        <Link key={l.href} href={l.href} className="pf-link">
                          {l.label} <WorkLinkIcon kind={l.kind} />
                        </Link>
                      ) : (
                        <External key={l.href} href={l.href} className="pf-link">
                          {l.label} <WorkLinkIcon kind={l.kind} />
                        </External>
                      ),
                    )}
                  </div>
                )}
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
    <section id="experience" className="pf-sec" aria-labelledby="exp-title">
      <div className="pf-wrap pf-split">
        <header className="pf-sec-head">
          <p className="pf-label">Experience</p>
          <h2 id="exp-title" className="pf-h2">
            Where I have worked
          </h2>
          <a href={PDF} className="pf-link" target="_blank" rel="noopener noreferrer">
            Full résumé (PDF) <FileText aria-hidden="true" />
          </a>
        </header>

        <ol className="pf-jobs">
          {EXPERIENCE.map((job) => (
            <li key={`${job.company} ${job.dates}`} className="pf-job">
              <div className="pf-job-head">
                <h3 className="pf-job-title">
                  {job.role} <span>· {job.company}</span>
                </h3>
                <p className="pf-job-meta">
                  {job.dates} · {job.location}
                </p>
              </div>
              <ul className="pf-points">
                {job.bullets.map((b) => (
                  <li key={b}>{bold(b)}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Stack() {
  return (
    <section id="stack" className="pf-sec" aria-labelledby="stack-title">
      <div className="pf-wrap pf-split">
        <header className="pf-sec-head">
          <p className="pf-label">Stack</p>
          <h2 id="stack-title" className="pf-h2">
            What I work with
          </h2>
        </header>
        <dl className="pf-stack">
          {SKILLS.map((g) => (
            <div key={g.label}>
              <dt>{g.label}</dt>
              <dd>
                {g.items.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

const TERMS = [
  ["Role", "Full-time remote, as a full-stack, backend or product engineer."],
  ["Hours", "I work US hours from Islamabad (UTC+5), so you get full overlap with your team."],
  ["Setup", "Contract or employment both work. Deel, Payoneer or a wire transfer are all fine."],
  ["Start", "Available now."],
];

export function Contact() {
  return (
    <section id="contact" className="pf-sec pf-contact" aria-labelledby="contact-title">
      <div className="pf-wrap pf-split">
        <header className="pf-sec-head">
          <p className="pf-label">Hiring</p>
          <h2 id="contact-title" className="pf-h2">
            Hiring for a full-stack role? Email me.
          </h2>
          <TrackedLink event="cta_hire_email" href={HIRE_HREF} className="pf-email">
            {EMAIL}
          </TrackedLink>
          <div className="pf-cta">
            <TrackedLink event="cta_hire_end" href={HIRE_HREF} className="pf-btn">
              <Mail aria-hidden="true" /> Email me
            </TrackedLink>
            <TrackedLink
              event="cta_calendly"
              href={LINKS.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="pf-btn pf-btn-ghost"
            >
              Book a 30-minute call
            </TrackedLink>
          </div>
        </header>
        <dl className="pf-terms">
          {TERMS.map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function PfFooter() {
  return (
    <footer className="pf-footer">
      <div className="pf-wrap pf-footer-in">
        <span>© {new Date().getFullYear()} Uzair Saleem</span>
        <nav aria-label="Footer">
          <External href={LINKS.github}>GitHub</External>
          <External href={LINKS.linkedin}>LinkedIn</External>
          <Link href={LINKS.resume}>Résumé</Link>
          <a href={PDF}>PDF</a>
          <a href={LINKS.email}>{EMAIL}</a>
        </nav>
      </div>
    </footer>
  );
}
