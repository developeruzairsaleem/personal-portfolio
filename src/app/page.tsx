import type { ReactNode } from "react";
import Image from "next/image";
import { Nav, Footer, LINKS, EMAIL } from "./site-chrome";

type Project = {
  name: string;
  href?: string;
  ext?: string;
  blurb: ReactNode;
  stack: string[];
  image?: string;
  note?: string;
};

const PROJECTS: Project[] = [
  {
    name: "Indiecator",
    href: "https://indiecator.com",
    ext: "indiecator.com ↗",
    blurb: "Revenue analytics for subscription businesses on Stripe and Paddle.",
    stack: ["next.js", "typescript", "postgres", "stripe"],
    image: "/images/indiecator.png",
  },
  {
    name: "Sat-Raj",
    href: "https://satraj.inc",
    ext: "satraj.inc ↗",
    blurb:
      "Operations software for a fuel wholesaler that replaced 39 spreadsheets and cut the daily pricing and invoicing run from 45-60 minutes to under 90 seconds.",
    stack: ["next.js", "node", "postgres", "redis"],
    image: "/images/satraj.png",
  },
  {
    name: "Diffed.gg",
    href: "https://diffed-swart.vercel.app/",
    ext: "live ↗",
    blurb:
      "A marketplace where gamers buy rank-progression coaching from vetted experts, with payments and live order chat.",
    stack: ["next.js", "typescript", "postgres", "stripe"],
    image: "/images/diffed.png",
  },
];

const STACK = ["TypeScript", "Node", "Next.js", "React", "PostgreSQL", "Prisma", "Redis", "Stripe", "AWS"];

export default function Home() {
  return (
    <>
      <Nav />

      <main className="wrap">
        {/* INTRO */}
        <section className="intro">
          <div className="me fade">
            <Image className="me-photo" src="/images/main-profile-photo.png" alt="Uzair Saleem" width={56} height={56} priority />
            <div className="me-id">
              <span className="me-name">Uzair Saleem</span>
              <span className="me-status">open to remote roles</span>
            </div>
          </div>
          <h1 className="fade d1">Full-stack engineer who ships products end to end.</h1>
          <p className="sub fade d1">
            Four years building correctness-critical web apps — payments, analytics, ops tooling — in{" "}
            <b>TypeScript, Node, Next.js, and Postgres</b>. Based in Islamabad, working with teams worldwide.
          </p>
          <p className="links fade d2">
            <a href={LINKS.email}>email</a>
            <a href={LINKS.github} target="_blank" rel="noopener noreferrer">GitHub <span className="x">↗</span></a>
            <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <span className="x">↗</span></a>
            <a href={LINKS.resume} target="_blank" rel="noopener noreferrer">résumé</a>
          </p>
        </section>

        {/* WORK */}
        <section className="block" id="work">
          <p className="label"><span>selected work</span><span className="x">{PROJECTS.length} projects</span></p>
          <div className="work-list">
            {PROJECTS.map((p) => {
              const inner = (
                <>
                  {p.image ? (
                    <span className="proj-thumb">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={p.image} alt={`${p.name} screenshot`} />
                    </span>
                  ) : (
                    <span className="proj-thumb empty">{p.note}</span>
                  )}
                  <span className="proj-body">
                    <span className="proj-name">{p.name}{p.ext && <span className="ext">{p.ext}</span>}</span>
                    <span className="proj-blurb">{p.blurb}</span>
                    <span className="proj-tags">{p.stack.map((s) => <span key={s}>{s}</span>)}</span>
                  </span>
                </>
              );
              return p.href ? (
                <a key={p.name} className="proj" href={p.href} target="_blank" rel="noopener noreferrer">{inner}</a>
              ) : (
                <div key={p.name} className="proj">{inner}</div>
              );
            })}
          </div>
        </section>

        {/* ABOUT */}
        <section className="block about" id="about">
          <p className="label"><span>about</span></p>
          <p>
            I&apos;m a full-stack engineer with four years of experience, based in Islamabad. I own the
            whole stack: schema, backend, frontend, payments, and the background jobs that keep it all in
            sync. Most of what I build handles money or data that has to reconcile to source, so I write
            for the cases that break, not just the ones that work.
          </p>
          <p className="stack-line"><b>stack</b> &nbsp; {STACK.join("  ·  ")}</p>
        </section>

        {/* CONTACT */}
        <section className="block contact" id="contact">
          <p className="label"><span>contact</span></p>
          <p>The fastest way to reach me is email. I usually reply within a day.</p>
          <p className="links">
            <a href={LINKS.email}>{EMAIL}</a>
            <a href={LINKS.calendly} target="_blank" rel="noopener noreferrer">book a call <span className="x">↗</span></a>
            <a href={LINKS.github} target="_blank" rel="noopener noreferrer">GitHub <span className="x">↗</span></a>
            <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <span className="x">↗</span></a>
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
