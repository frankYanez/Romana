"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Cta() {
  const inners = useRef<HTMLSpanElement[]>([]);
  const btnRef = useRef<HTMLAnchorElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const addInner = (el: HTMLSpanElement | null) => { if (el) inners.current.push(el); };

  useEffect(() => {
    inners.current.forEach((el, i) => {
      gsap.to(el, {
        y: "0%", duration: 1.1, ease: "expo.out", delay: i * 0.12,
        scrollTrigger: { trigger: el, start: "top 88%" },
      });
    });
    gsap.from(btnRef.current, { opacity: 0, y: 20, duration: 1, scrollTrigger: { trigger: btnRef.current, start: "top 90%" } });
    gsap.from(subRef.current, { opacity: 0, duration: 1, delay: .3, scrollTrigger: { trigger: subRef.current, start: "top 92%" } });
  }, []);

  return (
    <section
      id="cta"
      data-dark
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-center bg-ink px-6"
    >
      <video
        autoPlay loop muted playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-[.17] saturate-[.4] contrast-110"
      >
        <source src="https://videos.pexels.com/video-files/6670082/6670082-uhd_2560_1440_25fps.mp4" type="video/mp4" />
      </video>

      <div
        className="absolute inset-0 z-[1]"
        style={{ background: "linear-gradient(135deg, rgba(61,11,26,.72) 0%, rgba(61,11,26,.28) 45%, transparent 60%)" }}
      />

      {[500, 780, 1060].map((s, i) => (
        <div
          key={i}
          className="absolute rounded-full border border-crema/[.055] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]"
          style={{
            width: s, height: s,
            animation: `breathe 5s ease-in-out infinite`,
            animationDelay: `${i * 0.8}s`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-[860px]">
        <p className="flex items-center justify-center gap-4 font-sans text-[.58rem] font-light tracking-[.44em] uppercase text-crema/32 mb-8">
          <span className="block h-px w-14 bg-crema/20" />
          ¿Lista para empezar?
          <span className="block h-px w-14 bg-crema/20" />
        </p>

        <h2
          className="font-display font-black leading-[.88] tracking-[-0.03em] text-crema mb-14"
          style={{ fontSize: "clamp(3rem, 8vw, 8rem)" }}
        >
          <span className="rl"><span ref={addInner} className="ri block">Tu primera</span></span>
          <span className="rl">
            <span ref={addInner} className="ri block">
              <em className="italic text-nude2">clase</em>
              {", "}
              <span style={{ WebkitTextStroke: "1px rgba(244,238,228,.32)", color: "transparent" }}>
                gratis.
              </span>
            </span>
          </span>
        </h2>

        <a
          ref={btnRef}
          href="https://wa.me/549XXXXXXXXX?text=Hola!%20Quiero%20reservar%20mi%20clase%20de%20prueba"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-5 font-sans text-[.68rem] font-light tracking-[.3em] uppercase text-burdeos bg-crema px-12 py-5 hover:bg-burdeos hover:text-crema hover:gap-8 transition-all duration-400 mb-10"
        >
          Reservar ahora
          <span className="block w-5 h-px bg-current" />
        </a>

        <p ref={subRef} className="font-serif text-[.8rem] italic text-crema/28">
          O escribime a{" "}
          <a
            href="mailto:hola@romanaclub.com"
            className="text-nude/70 border-b border-nude/25 hover:border-nude/60 transition-colors duration-300 not-italic"
          >
            hola@romanaclub.com
          </a>
        </p>
      </div>

      <style>{`
        @keyframes breathe {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: .4; }
          50%       { transform: translate(-50%, -50%) scale(1.05); opacity: .2; }
        }
      `}</style>
    </section>
  );
}
