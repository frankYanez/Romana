"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot  = dotRef.current!;
    const ring = ringRef.current!;
    let mx = 0, my = 0, rx = 0, ry = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      gsap.to(dot, { x: mx, y: my, duration: 0.07, ease: "none" });
    };

    const loop = () => {
      rx += (mx - rx) * 0.09;
      ry += (my - ry) * 0.09;
      ring.style.left = `${rx}px`;
      ring.style.top  = `${ry}px`;
      requestAnimationFrame(loop);
    };

    document.addEventListener("mousemove", onMove);
    loop();

    const targets = document.querySelectorAll("a, button, [data-cursor-big]");
    targets.forEach((el) => {
      el.addEventListener("mouseenter", () => ring.classList.add("scale-[1.9]", "opacity-20"));
      el.addEventListener("mouseleave", () => ring.classList.remove("scale-[1.9]", "opacity-20"));
    });

    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed z-[9999] pointer-events-none w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-burdeos mix-blend-multiply transition-colors duration-300"
      />
      <div
        ref={ringRef}
        className="fixed z-[9998​​​​​​​​​​​​​​​​
