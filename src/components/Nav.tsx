"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

const links = [
  { href: "#sobre", label: "Sobre mi" },
  { href: "#clases", label: "Clases" },
  { href: "#horarios", label: "Horarios" },
  { href: "#cta", label: "Reservar" },
];

export default function Nav() {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const nav = navRef.current!;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 80);
      if (y > lastY.current && y > 140) {
        gsap.to(nav, { yPercent: -100, duration: 0.4, ease: "expo.out" });
      } else {
        gsap.to(nav, { yPercent: 0, duration: 0.4, ease: "expo.out" });
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className={cn(
          "fixed top-0 left-0 right-0 z-[500] flex items-center justify-between px-6 md:px-14 transition-all duration-500",
          scrolled ? "py-4 bg-crema/90 backdrop-blur-md border-b border-burdeos/5" : "py-7"
        )}
      >
        <a href="#" className={cn("font-display text-sm font-medium tracking-[.28em] uppercase transition-colors duration-300", scrolled ? "text-burdeos" : "text-crema")}>
          Romana Club
        </a>

        <ul className="hidden md:flex gap-10 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={cn("font-sans text-[.68rem] font-light tracking-[.22em] uppercase opacity-60 hover:opacity-100 transition-opacity duration-300", scrolled ? "text-ink" : "text-crema")}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Menu">
          <span className={cn("block h-px w-6 bg-current transition-all duration-300", scrolled ? "bg-burdeos" : "bg-crema", open && "rotate-45 translate-y-[7px]")} />
          <span className={cn("block h-px w-6 bg-current transition-all duration-300", scrolled ? "bg-burdeos" : "bg-crema", open && "opacity-0")} />
          <span className={cn("block h-px w-6 bg-current transition-all duration-300", scrolled ? "bg-burdeos" : "bg-crema", open && "-rotate-45 -translate-y-[7px]")} />
        </button>
      </nav>

      <div className={cn("fixed inset-0 z-[490] bg-ink flex flex-col items-center justify-center gap-10 transition-all duration-500 md:hidden", open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-display text-4xl italic text-crema/80 hover:text-crema tracking-tight transition-colors">
            {l.label}
          </a>
        ))}
      </div>
    </>
  );
}
