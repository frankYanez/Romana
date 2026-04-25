"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroCanvas from "./HeroCanvas";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef   = useRef<HTMLVideoElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const t1Ref      = useRef<HTMLSpanElement>(null);
  const t2Ref      = useRef<HTMLSpanElement>(null);
  const t3Ref      = useRef<HTMLSpanElement>(null);
  const sideRef    = useRef<HTMLDivElement>(null);
  const scrollRef  = useRef<HTMLDivElement>(null);
  const ctaRef     = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const inners = [t1Ref.current, t2Ref.current, t3Ref.current];
    gsap.set(inners, { y: "108%" });
    gsap.set([eyebrowRef.current, sideRef.current, ctaRef.current], { opacity: 0, y: 14 });
    gsap.set(scrollRef.current, { opacity: 0 });

    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
    tl.to(inners, { y: "0%", duration: 1.2, stagger: 0.12, delay: 0.3 })
      .to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.9 }, "-=0.9")
      .to(sideRef.current,    { opacity: 1, y: 0, duration: 0.9 }, "-=0.7")
      .to(ctaRef.current,     { opacity: 1, y: 0, duration: 0.8 }, "-=0.5")
      .to(scrollRef.current,  { opacity: 1, duration: 0.7 }, "-=0.4");

    if (videoRef.current) {
      gsap.to(videoRef.current, {
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.4,
        },
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      data-dark
      className="relative h-svh min-h-[680px] overflow-hidden bg-ink flex items-end"
    >
      <video
        ref={videoRef}
        autoPlay loop muted playsInline
        className="absolute inset-0 w-full h-full object-cover object-top scale-110 brightness-[.48] saturate-75 contrast-105"
      >
        <source src="https://videos.pexels.com/video-files/6670082/6670082-uhd_2560_1440_25fps.mp4" type="video/mp4" />
      </video>

      <img
        src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=1600&q=85&auto=format&fit=crop"
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover object-top brightness-50 saturate-75 -z-10"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/30 to-transparent" />

      <HeroCanvas />

      <div className="absolute inset-y-0 hidden lg:block" style={{ left: "calc(3.5rem + 185px)", width: 1, background: "linear-gradient(to bottom, transparent, rgba(244,238,228,.07) 30%, rgba(244,238,228,.07) 70%, transparent)" }} />
      <div className="absolute inset-y-0 hidden lg:block" style={{ right: "calc(3.5rem + 185px)", width: 1, background: "linear-gradient(to bottom, transparent, rgba(244,238,228,.07) 30%, rgba(244,238,228,.07) 70%, transparent)" }} />

      <div className="relative z-10 w-full px-6 md:px-14 pb-16 md:pb-20 grid grid-cols-1 md:grid-cols-[1fr_auto] items-end gap-6">
        <div>
          <div ref={eyebrowRef} className="flex items-center gap-4 mb-5 opacity-0">
            <span className="block w-10 h-px bg-nude" />
            <span className="font-sans text-[.62rem] font-light tracking-[.42em] uppercase text-nude2/75">
              Pilates Mat &amp; Reformer
            </span>
          </div>

          <h1 className="font-display font-black leading-[.88] tracking-[-0.03em] text-crema"
              style={{ fontSize: "clamp(4.5rem, 11vw, 10.5rem)" }}>
            <span className="rl"><span ref={t1Ref} className="ri">Romana</span></span>
            <span className="rl"><span ref={t2Ref} className="ri italic text-nude2">Club</span></span>
            <span className="rl mt-1">
              <span ref={t3Ref} className="ri"
                style={{ WebkitTextStroke: "1px rgba(244,238,228,.35)", color: "transparent" }}>
                Pilates
              </span>
            </span>
          </h1>
        </div>

        <div ref={sideRef} className="flex flex-col items-start md:items-end gap-5 opacity-0 pb-1">
          <p className="font-serif text-[.9rem] italic text-nude2/70 tracking-wide hidden md:block [writing-mode:vertical-rl] rotate-180">
            El movimiento como ritual
          </p>
          <a
            ref={ctaRef}
            href="#cta"
            className="opacity-0 inline-flex items-center gap-4 font-sans text-[.65rem] font-light tracking-[.28em] uppercase text-ink bg-crema px-8 py-4 hover:bg-burdeos hover:text-crema hover:gap-6 transition-all duration-400 whitespace-nowrap"
          >
            Reservar
            <span className="block w-5 h-px bg-current" />
          </a>
        </div>
      </div>

      <div ref={scrollRef} className="absolute left-6 md:left-14 bottom-9 z-10 flex flex-col items-center gap-2.5 opacity-0">
        <div className="w-px h-12 bg-gradient-to-b from-nude to-transparent" />
        <span className="font-sans text-[.52rem] tracking-[.38em] uppercase text-crema/35 [writing-mode:vertical-rl]">
          Scroll
        </span>
      </div>
    </section>
  );
}
