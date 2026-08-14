import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Nav, Footer, LINKS, EMAIL } from "./site-chrome";

type Project = {
  name: string;
  href?: string;
  ext?: string;
  blurb: ReactNode;
  stack: string[];
  image: string;
};

const PROJECTS: Project[] = [
  {
    name: "Indiecator",
    href: "https://indiecator.com",
    ext: "indiecator.com ↗",
    blurb: "Revenue analytics for subscription businesses on Stripe and Paddle.",
    stack: ["next.js", "typescript", "postgres", "supabase", "stripe"],
    image: "/images/indiecator.png",
  },
  {
    name: "Diffed.gg",
    href: "https://diffed-swart.vercel.app/",
    ext: "live ↗",
    blurb:
      "A matchmaking and coaching marketplace for gamers. Players hire ranked experts to climb competitive games, with live order chat and in-app payments.",
    stack: ["next.js", "typescript", "postgres", "prisma", "socket.io"],
    image: "/images/diffed.png",
  },
];

const STACK = ["TypeScript", "Node", "Next.js", "React", "PostgreSQL", "Prisma", "Redis", "Supabase", "Docker", "AWS"];

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
          <h1 className="fade d1">Full-stack engineer.</h1>
          <p className="sub fade d1">
            Four years building production web apps in <b>TypeScript, Node, Next.js, and Postgres</b>.
            These days I build <Link href="/fuel" className="sub-link">back offices for US fuel distributors</Link>.
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
          <p className="label"><span>selected work</span><span className="x">featured + {PROJECTS.length} more</span></p>

          <div className="feat">
            <Link href="/fuel/demo" className="feat-media" aria-label="Fuel platform walkthrough">
              <Image src="/images/satraj.png" alt="Fuel distribution back office screenshot" fill sizes="(max-width: 700px) 100vw, 672px" />
            </Link>
            <div className="feat-body">
              <span className="feat-kicker">live production system · in daily use</span>
              <span className="proj-name">Fuel distribution back office</span>
              <span className="proj-blurb">
                Replaced 39 spreadsheets for a New Jersey fuel wholesaler. Daily price
                emails send themselves, every delivery reconciles against its BOL, and
                invoices land in QuickBooks the same day the truck delivers, with the
                full federal and state fuel tax stack itemized. Hundreds of live
                invoices pushed. The daily pricing and invoicing run went from an hour
                to under 90 seconds.
              </span>
              <span className="proj-tags">
                <span>next.js</span><span>postgres</span><span>quickbooks desktop</span><span>samsara telematics</span><span>aws</span>
              </span>
              <span className="feat-links">
                <Link href="/fuel/demo">60 second walkthrough <span className="x">→</span></Link>
                <Link href="/fuel">offered as a service <span className="x">→</span></Link>
              </span>
            </div>
          </div>

          <div className="work-list">
            {PROJECTS.map((p) => {
              const inner = (
                <>
                  <span className="proj-thumb">
                    <Image src={p.image} alt={`${p.name} screenshot`} fill sizes="(max-width: 700px) 320px, 128px" />
                  </span>
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
            I&apos;m a full-stack engineer with four years of experience. I build the kind of software
            that has to be right: revenue analytics, operations tools, and online marketplaces. I own the
            whole thing, from the schema and backend to the frontend and the background jobs that keep the
            data in sync. Most of what I build handles money or data that has to reconcile back to its
            source, so I write for the cases that break, not just the ones that work.
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
