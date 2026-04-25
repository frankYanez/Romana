"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const clases = [
  {
    num: "01",
    name: "Pilates",
    nameItalic: "Mat",
    badge: "Sin equipamiento",
    desc: "Trabajo con el propio peso corporal sobre la colchoneta. Desarrollas fuerza profunda, conciencia postural y conexion mente-cuerpo desde la raiz. Ideal para todos los niveles.",
    tags: ["Todos los niveles", "Core profundo", "Flexibilidad"],
    img: "https://images.unsplash.com/photo-1602827114475-e5b263e98f4e?w=900&q=80&auto=format&fit=crop",
    video: null,
    accent: "#C9A98A",
  },
  {
    num: "02",
    name: "Pilates",
    nameItalic: "Reformer",
    badge: "Maquina Reformer",
    desc: "La maquina Reformer amplifica cada movimiento. Resultados visibles en postura, tono y coordinacion desde las primeras semanas de practica.",
    tags: ["Tono muscular", "Postura", "Coordinacion"],
    img: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=900&q=80&auto=format&fit=crop",
    video: "https://videos.pexels.com/video-files/7991579/7991579-uhd_2560_1440_25fps.mp4",
    accent: "#E2CBAF",
  },
];

export default function Clases() {
  const headerRef = useRef(null);
  const card1Ref  = useRef(null);
  const card2Ref  = useRef(null);

  useEffect(() => {
    gsap.from(headerRef.current, {
      opacity: 0, y: 30, duration: 1.1, ease: "expo.out",
      scrollTrigger: { trigger: headerRef.current, start: "top 88%" },
    });
    [card1Ref.current, card2Ref.current].forEach((el, i) => {
      gsap.from(el, {
        opacity: 0, y: 50, duration: 1.1, ease: "expo.out", delay: i * 0.15,
        scrollTrigger: { trigger: el, start: "top 85%" },
      });
    });
  }, []);

  const cards = [card1Ref, card2Ref];

  return (
    <section
      id="clases"
      style={{ position: "relative", background: "#0E0608", padding: "8rem 0", overflow: "hidden" }}
    >
      <span aria-hidden style={{ position: "absolute", top: "-4rem", right: "-1rem", fontFamily: "var(--font-playfair)", fontWeight: 900, fontSize: "clamp(14rem,25vw,28rem)", color: "transparent", WebkitTextStroke: "1px rgba(244,238,228,.03)", lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>
        02
      </span>

      <div ref={headerRef} style={{ padding: "0 1.5rem 4rem", maxWidth: 1400, margin: "0 auto" }} className="md:px-14">
        <p style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: "var(--font-jost)", fontSize: ".6rem", fontWeight: 300, letterSpacing: ".44em", textTransform: "uppercase", color: "rgba(201,169,138,.6)", marginBottom: "1.5rem" }}>
          <span style={{ display: "block", width: 28, height: 1, background: "rgba(201,169,138,.5)" }} />
          Modalidades
        </p>
        <div style={{ display: "grid", gap: "2.5rem", alignItems: "flex-end" }} className="grid-cols-1 md:grid-cols-2">
          <h2 style={{ fontFamily: "var(--font-playfair)", fontWeight: 900, lineHeight: .9, letterSpacing: "-.03em", color: "#F4EEE4", fontSize: "clamp(2.8rem,6vw,5.5rem)", margin: 0 }}>
            Dos formas de<br />
            <em style={{ fontStyle: "italic", color: "#C9A98A" }}>encontrar tu centro.</em>
          </h2>
          <p style={{ fontFamily: "var(--font-baskerville)", fontSize: ".9rem", lineHeight: 1.9, color: "rgba(244,238,228,.4)", maxWidth: 440, paddingBottom: 6 }}>
            Cada modalidad tiene una intencion especifica. Elegi la que mejor dialoga con tu cuerpo, o combinalas para un trabajo integral.
          </p>
        </div>
      </div>

      <div style={{ display: "grid", gap: 3, padding: "0 1.5rem" }} className="md:px-14 grid-cols-1 md:grid-cols-2">
        {clases.map((c, i) => (
          <div
            key={i}
            ref={cards[i]}
            style={{ position: "relative", overflow: "hidden", background: "#1C1008" }}
            className="clase-card-hover"
          >
            <div style={{ position: "relative", height: "clamp(420px, 55vh, 640px)", overflow: "hidden" }}>
              {c.video ? (
                <video
                  autoPlay loop muted playsInline
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(.55) saturate(.7)", transition: "transform .9s cubic-bezier(.16,1,.3,1), filter .7s" }}
                  className="clase-video"
                >
                  <source src={c.video} type="video/mp4" />
                  <Image src={c.img} alt={c.name} fill style={{ objectFit: "cover" }} sizes="50vw" />
                </video>
              ) : (
                <Image
                  src={c.img}
                  alt={c.name + " " + c.nameItalic}
                  fill
                  style={{ objectFit: "cover", filter: "brightness(.55) saturate(.7)", transition: "transform .9s cubic-bezier(.16,1,.3,1), filter .7s" }}
                  className="clase-img"
                  sizes="50vw"
                />
              )}

              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(14,6,8,1) 0%, rgba(14,6,8,0.7) 30%, rgba(14,6,8,0.2) 60%, transparent 100%)" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(61,11,26,0.4) 0%, transparent 60%)" }} />

              <div style={{ position: "absolute", top: 24, left: 24, zIndex: 3 }}>
                <span style={{ fontFamily: "var(--font-jost)", fontSize: ".55rem", fontWeight: 300, letterSpacing: ".22em", textTransform: "uppercase", color: c.accent, border: "1px solid " + c.accent + "44", padding: "5px 14px" }}>
                  {c.badge}
                </span>
              </div>

              <div style={{ position: "absolute", top: 16, right: 24, fontFamily: "var(--font-playfair)", fontWeight: 900, fontSize: "6rem", color: "transparent", WebkitTextStroke: "1px rgba(244,238,228,.07)", lineHeight: 1, userSelect: "none" }}>
                {c.num}
              </div>

              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "2.5rem 2rem", zIndex: 3 }}>
                <h3 style={{ fontFamily: "var(--font-playfair)", fontWeight: 900, lineHeight: .88, letterSpacing: "-.025em", color: "#F4EEE4", fontSize: "clamp(2.4rem,4vw,3.6rem)", marginBottom: "1rem" }}>
                  {c.name} <em style={{ fontStyle: "italic", color: c.accent }}>{c.nameItalic}</em>
                </h3>
                <p style={{ fontFamily: "var(--font-baskerville)", fontSize: ".84rem", lineHeight: 1.85, color: "rgba(244,238,228,.55)", marginBottom: "1.5rem", maxWidth: 400 }}>
                  {c.desc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "1.75rem" }}>
                  {c.tags.map((t) => (
                    <span key={t} style={{ fontFamily: "var(--font-jost)", fontSize: ".54rem", fontWeight: 300, letterSpacing: ".18em", textTransform: "uppercase", padding: "5px 12px", border: "1px solid rgba(244,238,228,.15)", color: "rgba(244,238,228,.5)" }}>
                      {t}
                    </span>
                  ))}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ display: "block", width: 32, height: 1, background: c.accent, opacity: .7 }} />
                  <a href="#cta" style={{ fontFamily: "var(--font-jost)", fontSize: ".6rem", fontWeight: 300, letterSpacing: ".28em", textTransform: "uppercase", color: c.accent, textDecoration: "none", opacity: .8, transition: "opacity .3s" }}
                     onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                     onMouseLeave={e => (e.currentTarget.style.opacity = ".8")}>
                    Reservar clase
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .clase-card-hover:hover .clase-img,
        .clase-card-hover:hover .clase-video {
          transform: scale(1.04) !important;
          filter: brightness(.42) saturate(.85) !important;
        }
      `}</style>
    </section>
  );
}
