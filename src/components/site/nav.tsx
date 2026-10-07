"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { TrackedLink } from "@/app/tracked-link";
import { CONTACT_HREF } from "@/app/service-contact";
import { useScrolledPast } from "./hooks";
import { Brand } from "./brand";

const NAV = [
  { href: "/#work", label: "Work" },
  { href: "/#automation", label: "Automation" },
  { href: "/#about", label: "About" },
  { href: "/resume", label: "Résumé" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  const scrolled = useScrolledPast(12);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openedOn, setOpenedOn] = useState(pathname);
  const btnRef = useRef<HTMLButtonElement>(null);

  if (open && openedOn !== pathname) {
    setOpen(false);
    setOpenedOn(pathname);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        btnRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fx-nav" data-scrolled={scrolled || open || undefined}>
      <div className="fx-wrap">
        <div className="fx-nav-pill">
          <Link href="/" className="fx-brand" aria-label="Uzair Saleem, home">
            <Brand />
          </Link>

          <nav className="fx-nav-links" aria-label="Main">
            {NAV.map((l) => (
              <Link key={l.href} href={l.href} aria-current={pathname === l.href ? "page" : undefined}>
                {l.label}
              </Link>
            ))}
          </nav>

          <TrackedLink event="cta_contact_nav" href={CONTACT_HREF} className="fx-nav-cta">
            <span className="fx-nav-cta-long">Get in touch</span>
            <span className="fx-nav-cta-short">Contact</span>
            <ArrowUpRight aria-hidden="true" />
          </TrackedLink>

          <button
            ref={btnRef}
            type="button"
            className="fx-menu-btn"
            aria-expanded={open}
            aria-controls="fx-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => {
              setOpen((o) => !o);
              setOpenedOn(pathname);
            }}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>

        <div id="fx-menu" className="fx-menu" hidden={!open}>
          <nav aria-label="Main, mobile">
            {NAV.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
