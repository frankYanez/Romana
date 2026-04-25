"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

const links = [
  { href: "#sobre",    label: "Sobre mí" },
  { href: "#clases",   label: "Clases"   },
  { href: "#horarios", label: "Horarios" },
  { href: "#cta",      label: "Reservar" },
];

export default function Nav() {
  const navRef   = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [onDark,   setOnDark]   = useState(true);
  const [open,     setOpen]     = useState(false);
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

      const darkEls = document.querySelectorAll("[data-dark]");
      let isDark = false;
      darkEls.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < 80 && rect.bottom > 80) isDark = true;
      });
      setOnDark(isDark && y < 80);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return​​​​​​​​​​​​​​​​
