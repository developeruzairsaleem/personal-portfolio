"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { TrackedLink } from "@/app/tracked-link";
import { BOOK_HREF } from "@/app/service-contact";
import { useScrolledPast } from "./hooks";
import { Brand } from "./brand";

const NAV = [
  { href: "/#how", label: "How it works" },
  { href: "/work/satraj", label: "Case study" },
  { href: "/#about", label: "About" },
  { href: "/demo", label: "Walkthrough" },
  { href: "/#faq", label: "FAQ" },
];

export function Nav() {
  const scrolled = useScrolledPast(12);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openedOn, setOpenedOn] = useState(pathname);
  const btnRef = useRef<HTMLButtonElement>(null);

  // Close the menu whenever the route changes.
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

          <TrackedLink
            event="cta_book_nav"
            href={BOOK_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="fx-nav-cta"
          >
            Book a call
            <ArrowUpRight aria-hidden="true" />
            <span className="fx-sr"> (opens in new tab)</span>
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
