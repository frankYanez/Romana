"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroCanvas from "./HeroCanvas";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef(null);
  const videoRef   = useRef(null);
  const eyebrowRef = useRef(null);
  const t1Ref      = useRef(null);
  const t2Ref      = useRef(null);
  const t3Ref      = useRef(null);
  const sideRef    = useRef(null);
  const scrollRef  = useRef(null);
  const ctaRef     = useRef(null);

  useEffect(() => {
    const inners = [t1Ref.current, t2Ref.current, t3Ref.current];
    gsap.set(inners, { y: "108%" });
    gsap.set([eyebrowRef.current, sideRef.current, ctaRef.current], { opacity: 0, y: 14 });
    gsap.set(scrollRef.current, { opacity: 0 });

    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
    tl.to(inners, { y: "0%", duration: 1.3, stagger: 0.13, delay: 0.4 })
      .to(eyebrowRef.current, { opacity: 1, y: 0, duration: 1.0 }, "-=1.0")
      .to(sideRef.current,    { opacity: 1, y: 0, duration: 0.9 }, "-=0.7")
      .to(ctaRef.current,     { opacity: 1, y: 0, duration: 0.8 }, "-=0.5")
      .to(scrollRef.current,  { opacity: 1, duration: 0.7 }, "-=0.4");

    if (videoRef.current) {
      gsap.to(videoRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.6,
        },
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      data-dark
      style={{ position: "relative", height: "100svh", minHeight: "680px", overflow: "hidden", background: "#0E0608", display: "flex", alignItems: "flex-end" }}
    >
      <video
        ref={videoRef}
        autoPlay loop muted playsInline
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%", transform: "scale(1.12)", filter: "brightness(.45) saturate(.8) contrast(1.05)" }}
      >
        <source src="https://videos.pexels.com/video-files/6670082/6670082-hd_1920_1080_25fps.mp4" type="video/mp4" />
      </video>

      <img
        src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=1600&q=85&auto=format&fit=crop"
        alt=""
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(.45)", zIndex: -1 }}
      />

      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(14,6,8,1) 0%, rgba(14,6,8,0.5) 35%, rgba(14,6,8,0.1) 65%, transparent 100%)", zIndex: 1 }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(14,6,8,0.6) 0%, rgba(14,6,8,0.2) 50%, transparent 100%)", zIndex: 1 }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(61,11,26,0.3) 0%, transparent 40%)", zIndex: 1 }} />

      <HeroCanvas />

      <div style={{ position: "relative", zIndex: 10, width: "100%", padding: "0 1.5rem 4.5rem", display: "grid", gridTemplateColumns: "1fr auto", alignItems: "flex-end", gap: "1.5rem" }} className="md:px-14 md:pb-20">
        <div>
          <div ref={eyebrowRef} style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem", opacity: 0 }}>
            <span style={{ display: "block", width: 40, height: 1, background: "#C9A98A" }} />
            <span style={{ fontFamily: "var(--font-jost)", fontSize: ".62rem", fontWeight: 300, letterSpacing: ".42em", textTransform: "uppercase", color: "rgba(226,203,175,.75)" }}>
              Pilates Mat &amp; Reformer
            </span>
          </div>

          <h1 style={{ fontFamily: "var(--font-playfair)", fontWeight: 900, lineHeight: .88, letterSpacing: "-.03em", color: "#F4EEE4", fontSize: "clamp(4.5rem,11vw,10.5rem)", margin: 0 }}>
            <span style={{ overflow: "hidden", display: "block" }}>
              <span ref={t1Ref} style={{ display: "block", transform: "translateY(108%)" }}>Romana</span>
            </span>
            <span style={{ overflow: "hidden", display: "block" }}>
              <span ref={t2Ref} style={{ display: "block", transform: "translateY(108%)", fontStyle: "italic", color: "#E2CBAF" }}>Club</span>
            </span>
            <span style={{ overflow: "hidden", display: "block", marginTop: 4 }}>
              <span ref={t3Ref} style={{ display: "block", transform: "translateY(108%)", WebkitTextStroke: "1px rgba(244,238,228,.3)", color: "transparent" }}>
                Pilates
              </span>
            </span>
          </h1>
        </div>

        <div ref={sideRef} style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "1.25rem", opacity: 0, paddingBottom: 4 }}>
          <p style={{ fontFamily: "var(--font-baskerville)", fontSize: ".9rem", fontStyle: "italic", color: "rgba(226,203,175,.65)", writingMode: "vertical-rl", transform: "rotate(180deg)", letterSpacing: ".12em" }} className="hidden md:block">
            El movimiento como ritual
          </p>
          <a
            ref={ctaRef}
            href="#cta"
            style={{ opacity: 0, display: "inline-flex", alignItems: "center", gap: "1rem", fontFamily: "var(--font-jost)", fontSize: ".65rem", fontWeight: 300, letterSpacing: ".28em", textTransform: "uppercase", color: "#0E0608", background: "#F4EEE4", padding: "1rem 2rem", textDecoration: "none", transition: "all .4s", whiteSpace: "nowrap" }}
            onMouseEnter={e => { const el = e.currentTarget; el.style.background="#3D0B1A"; el.style.color="#F4EEE4"; }}
            onMouseLeave={e => { const el = e.currentTarget; el.style.background="#F4EEE4"; el.style.color="#0E0608"; }}
          >
            Reservar
            <span style={{ display: "block", width: 20, height: 1, background: "currentColor" }} />
          </a>
        </div>
      </div>

      <div ref={scrollRef} style={{ position: "absolute", left: "1.5rem", bottom: "2.25rem", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", gap: 10, opacity: 0 }} className="md:left-14">
        <div style={{ width: 1, height: 48, background: "linear-gradient(to bottom, #C9A98A, transparent)", animation: "scrollDown 2.2s ease-in-out infinite" }} />
        <span style={{ fontFamily: "var(--font-jost)", fontSize: ".52rem", letterSpacing: ".38em", textTransform: "uppercase", color: "rgba(244,238,228,.3)", writingMode: "vertical-rl" }}>
          Scroll
        </span>
      </div>

      <style>{`
        @keyframes scrollDown {
          0%   { transform: scaleY(0) translateY(-100%); opacity: 0; }
          30%  { opacity: 1; }
          100% { transform: scaleY(1) translateY(0); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
