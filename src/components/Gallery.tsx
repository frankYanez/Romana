"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const items = [
  { src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80&auto=format&fit=crop", label: "Reformer" },
  { src: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=800&q=80&auto=format&fit=crop", label: "Mat" },
  { src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80&auto=format&fit=crop", label: "Control" },
  { src: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800&q=80&auto=format&fit=crop", label: "Fuerza" },
  { src: "https://images.unsplash.com/photo-1602827114475-e5b263e98f4e?w=800&q=80&auto=format&fit=crop", label: "Presencia" },
  { src: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80&auto=format&fit=crop", label: "Precision" },
  { src: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80&auto=format&fit=crop", label: "Equilibrio" },
  { src: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&q=80&auto=format&fit=crop", label: "Ritual" },
];

const CARD_W = 340;
const CARD_H = 440;
const GAP = 16;
const SPEED = 0.6;

export default function Gallery() {
  const sectionRef = useRef(null);
  const trackRef   = useRef(null);

  const doubled = [...items, ...items, ...items];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const totalW = items.length * (CARD_W + GAP);

    gsap.set(track, { x: 0 });

    const tween = gsap.to(track, {
      x: -totalW,
      duration: totalW / (SPEED * 60),
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % totalW),
      },
    });

    const section = sectionRef.current;
    section.addEventListener("mouseenter", () => tween.timeScale(0.3));
    section.addEventListener("mouseleave", () => tween.timeScale(1));

    gsap.from(section, {
      opacity: 0, duration: 1.2, ease: "expo.out",
      scrollTrigger: { trigger: section, start: "top 85%" },
    });

    return () => { tween.kill(); };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="galeria"
      data-dark
      style={{ position: "relative", background: "#0E0608", padding: "6rem 0", overflow: "hidden" }}
    >
      <div style={{ padding: "0 1.5rem 3rem" }} className="md:px-14">
        <p style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: "var(--font-jost)", fontSize: ".6rem", fontWeight: 300, letterSpacing: ".44em", textTransform: "uppercase", color: "rgba(201,169,138,.55)" }}>
          <span style={{ display: "block", width: 28, height: 1, background: "rgba(201,169,138,.4)" }} />
          Imagenes del club
        </p>
      </div>

      <div style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: 160, zIndex: 10, background: "linear-gradient(to right, #0E0608 0%, transparent 100%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, width: 160, zIndex: 10, background: "linear-gradient(to left, #0E0608 0%, transparent 100%)", pointerEvents: "none" }} />

        <div ref={trackRef} style={{ display: "flex", gap: GAP, width: "max-content", padding: "0 1.5rem" }}>
          {doubled.map((item, i) => (
            <div
              key={i}
              style={{ position: "relative", flexShrink: 0, width: CARD_W, height: CARD_H, overflow: "hidden" }}
              className="gallery-card"
            >
              <img
                src={item.src}
                alt={item.label}
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", filter: "brightness(.75) saturate(.75)", transition: "transform .8s cubic-bezier(.16,1,.3,1), filter .6s" }}
                className="gallery-img"
                draggable={false}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(14,6,8,.85) 0%, transparent 55%)" }} />
              <span style={{ position: "absolute", bottom: 20, left: 20, fontFamily: "var(--font-playfair)", fontSize: "1rem", fontStyle: "italic", color: "rgba(244,238,228,.7)", letterSpacing: ".06em" }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .gallery-card:hover .gallery-img {
          transform: scale(1.05) !important;
          filter: brightness(.6) saturate(.9) !important;
        }
      `}</style>
    </section>
  );
}
