import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, FileText } from "lucide-react";
import { External } from "./chrome";
import { HireCta } from "./sections";
import { WORK, type Work } from "./work-data";

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="case-sec" aria-labelledby={`cs-${title.replace(/\W+/g, "-").toLowerCase()}`}>
      <div className="wrap split">
        <header className="sec-head">
          <h2 id={`cs-${title.replace(/\W+/g, "-").toLowerCase()}`} className="h2">
            {title}
          </h2>
        </header>
        <div>{children}</div>
      </div>
    </section>
  );
}

export function CaseStudy({ work }: { work: Work }) {
  const c = work.case;
  const next = WORK[(WORK.findIndex((w) => w.slug === work.slug) + 1) % WORK.length];

  return (
    <>
      <header className="case-head">
        <div className="wrap">
          <Link href="/#work" className="crumb">
            <ArrowLeft aria-hidden="true" /> All work
          </Link>
          <p className="label" style={{ marginTop: 40, marginBottom: 14 }}>
            {work.name}
          </p>
          <h1 className="case-title">{work.title}</h1>
          <p className="case-lead">{c.lead}</p>

          <dl className="meta">
            <div>
              <dt>Role</dt>
              <dd>{c.role}</dd>
            </div>
            <div>
              <dt>When</dt>
              <dd>{c.period}</dd>
            </div>
            <div>
              <dt>Type</dt>
              <dd>{work.kicker}</dd>
            </div>
          </dl>

          {(work.links.length > 0 || work.pdf) && (
            <div className="cta-row">
              {work.links.map((l, i) => (
                <External key={l.href} href={l.href} className={i === 0 ? "btn" : "btn btn-ghost"}>
                  {l.label} <ArrowUpRight aria-hidden="true" />
                </External>
              ))}
              {work.pdf && (
                <a href={work.pdf} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
                  <FileText aria-hidden="true" /> PDF version
                </a>
              )}
            </div>
          )}
        </div>
      </header>

      <section className="wrap case-media" aria-label="Screenshots">
        {work.image && (
          <figure className={`frame${work.image.fit === "contain" ? " is-pad" : ""}`}>
            <Image
              src={work.image.src}
              alt={work.image.alt}
              width={work.image.width}
              height={work.image.height}
              sizes="(max-width: 1160px) 94vw, 1104px"
              priority
            />
          </figure>
        )}
        {c.video && (
          <figure className="frame">
            <video controls playsInline preload="none" poster={c.video.poster}>
              <source src={c.video.src} type="video/mp4" />
            </video>
            <figcaption>{c.video.caption}</figcaption>
          </figure>
        )}
        {work.flow && (
          <figure className="frame is-pad">
            <ol className="flow" aria-label="How a reel moves through the pipeline" style={{ maxWidth: 420 }}>
              {work.flow.map(([k, v]) => (
                <li key={k}>
                  <b>{k}</b>
                  <span>{v}</span>
                </li>
              ))}
            </ol>
          </figure>
        )}
      </section>

      <Block title="The problem">
        <p className="prose-p">{c.problem}</p>
      </Block>

      <Block title="What I built">
        <ol className={`steps${c.built.length % 2 === 1 ? " is-two" : ""}`}>
          {c.built.map((s) => (
            <li key={s.title} className="step">
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </Block>

      <Block title="The hard part">
        <div className="hard">
          <h3>{c.hard.title}</h3>
          <p>{c.hard.text}</p>
          {c.writing && (
            <Link href={c.writing.href} className="link">
              {c.writing.label} <ArrowRight aria-hidden="true" />
            </Link>
          )}
        </div>
      </Block>

      <Block title="Results">
        <ul className="checks">
          {c.results.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
        {c.extras && (
          <>
            <p className="label" style={{ marginTop: 40, marginBottom: 14 }}>
              {c.extras.title}
            </p>
            <ul className="checks">
              {c.extras.items.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </>
        )}
      </Block>

      <Block title="Stack">
        <ul className="tags is-lg" aria-label="Stack">
          {work.stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </Block>

      <section className="next-sec" aria-label="Next project">
        <div className="wrap">
          <Link href={`/work/${next.slug}`} className="next-card">
            <span>
              <small>Next project</small>
              <strong>
                {next.name}: {next.title}
              </strong>
            </span>
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>

      <HireCta event="case" title="Want me on your team?" />
    </>
  );
}

