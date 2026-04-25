"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Sobre() {
  const inners  = useRef<HTMLSpanElement[]>([]);
  const copyRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const pullRef = useRef<HTMLDivElement>(null);
  const imgRef  = useRef<HTMLDivElement>(null);

  const addInner = (el: HTMLSpanElement | null) => { if (el) inners.current.push(el); };

  useEffect(() => {
    inners.current.forEach((el, i) => {
      gsap.to(el, {
        y: "0%", duration: 1.05, ease: "expo.out", delay: i * 0.1,
        scrollTrigger: { trigger: el, start: "top 90%" },
      });
    });
    gsap.from(copyRef.current, {
      opacity: 0, y: 20, duration: 1.1,
      scrollTrigger: { trigger: copyRef.current, start: "top 88%" },
    });
    gsap.from(pullRef.current, {
      opacity: 0, x: -24, duration: 1.1,
      scrollTrigger: { trigger: pullRef.current, start: "top 88%" },
    });
    gsap.from(statsRef.current?.children ?? [], {
      opacity: 0, y: 16, stagger: 0.14, duration: 0.9,
      scrollTrigger: { trigger: statsRef.current, start: "top 90%" },
    });
    gsap.from(imgRef.current, {
      scale: 1.06, duration: 1.4, ease: "expo.out",
      scrollTrigger: { trigger: imgRef.current, start: "top 85%" },
    });
  }, []);

  return (
    <section
      id="sobre"
      className="relative bg-crema px-6 md:px-14 py-32 md:py-40 overflow-hidden"
    >
      <span
        aria-hidden
        className="absolute -top-10 left-8 font-display font-black text-burdeos/[.035] pointer-events-none select-none leading-none"
        style={{ fontSize: "clamp(12rem, 22vw, 22rem)" }}
      >
        01
      </span>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-16 lg:gap-0 items-start max-w-[1400px]">
        <div className="lg:pr-16 pt-0 lg:pt-14">
          <p className="flex items-center gap-3.5 font-sans text-[.6rem] font-light tracking-[.44em] uppercase text-burdeos mb-7">
            <span className="block w-7 h-px bg-burdeos" />
            Sobre mí
          </p>

          <h2
            className="font-display font-black leading-[.92] tracking-[-0.025em] mb-10"
            style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}
          >
            <span className="rl"><span ref={addInner} className="ri block">Movimiento</span></span>
            <span className="rl">
              <span ref={addInner} className="ri block italic text-burdeos"
                style={{ fontSize: "clamp(3.8rem, 8vw, 7.5rem)", marginLeft: "-.04em" }}>
                con alma.
              </span>
            </span>
          </h2>

          <p ref={copyRef} className="font-serif text-[.9rem] leading-[1.95] text-[#5A4A44] max-w-[480px] mb-14">
            Soy profesora de Pilates certificada con más de 8 años de experiencia guiando cuerpos y mentes hacia una conexión más profunda con el movimiento. Romana Club nació de la convicción de que moverse bien es un acto de amor propio. Cada clase está diseñada para vos: tu cuerpo, tu ritmo, tu proceso.
          </p>

          <div ref={statsRef} className="flex gap-0 border-t border-burdeos/10 pt-9">
            {[
              { n: "8+", l: "Años de experiencia" },
              { n: "2",  l: "Modalidades" },
              { n: "∞",  l: "Clases únicas" },
            ].map((s, i) => (
              <div
                key={i}
                className={`flex-1 ${i > 0 ? "pl-8 border-l border-burdeos/10" : ""} ${i < 2 ? "pr-8" : ""}`}
              >
                <span className="font-display text-[3.6rem] font-black text-burdeos leading-none block">
                  {s.n}
                </span>
                <span className="font-sans text-[.58rem] font-light tracking-[.2em] uppercase text-muted mt-2 block">
                  {s.l}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div
            ref={pullRef}
            className="absolute top-[200px] -left-[100px] z-20 hidden lg:block bg-crema2 pl-5 pr-7 py-6 border-l-[3px] border-burdeos max-w-[240px]"
          >
            <p className="font-serif text-[.88rem] italic leading-[1.65] text-burdeos2">
              "El cuerpo alcanza lo que la mente cree posible."
            </p>
          </div>

          <div ref={imgRef} className="relative overflow-hidden" style={{ height: "clamp(380px, 60vh, 640px)" }}>
            <Image
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=900&q=85&auto=format&fit=crop"
              alt="Profesora de Pilates"
              fill
              className="object-cover object-top brightness-[.9] saturate-[.82]"
              sizes="(max-width: 1024px) 100vw, 440px"
            />
          </div>

          <div className="absolute bottom-0 right-0 w-[88px] h-[88px] bg-burdeos flex items-center justify-center">
            <span className="font-display text-4xl font-black italic text-crema/90">R</span>
          </div>
        </div>
      </div>
    </section>
  );
}
