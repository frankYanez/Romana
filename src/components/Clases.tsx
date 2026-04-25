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
    desc: "Trabajo con el propio peso corporal sobre la colchoneta. Desarrollás fuerza profunda, conciencia postural y conexión mente-cuerpo desde la raíz. Ideal para todos los niveles, desde el primer día.",
    tags: ["Todos los niveles", "Core profundo", "Flexibilidad", "Sin equipamiento"],
    img: "https://images.unsplash.com/photo-1602827114475-e5b263e98f4e?w=900&q=80&auto=format&fit=crop",
    video: null,
  },
  {
    num: "02",
    name: "Pilates",
    nameItalic: "Reformer",
    desc: "La máquina Reformer amplifica cada movimiento y permite un trabajo más profundo, variado y preciso. Los resultados en postura, tono y coordinación son visibles desde las primeras semanas.",
    tags: ["Máquina Reformer", "Tono muscular", "Postura", "Coordinación"],
    img: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=900&q=80&auto=format&fit=crop",
    video: "https://videos.pexels.com/video-files/7991579/7991579-uhd_2560_1440_25fps.mp4",
  },
];

export default function Clases() {
  const inners = useRef<HTMLSpanElement[]>([]);
  const addInner = (el: HTMLSpanElement | null) => { if (el) inners.current.push(el); };

  useEffect(() => {
    inners.current.forEach((el, i) => {
      gsap.to(el, {
        y: "0%", duration: 1.05, ease: "expo.out", delay: i * 0.1,
        scrollTrigger: { trigger: el, start: "top 90%" },
      });
    });
    gsap.from(".clase-sub", {
      opacity: 0, y: 18, duration: 1,
      scrollTrigger: { trigger: ".clase-sub", start: "top 88%" },
    });
    gsap.utils.toArray<HTMLElement>(".clase-item").forEach((el, i) => {
      gsap.from(el, {
        opacity: 0, y: 28, duration: 1, ease: "expo.out", delay: i * 0.1,
        scrollTrigger: { trigger: el, start: "top 86%" },
      });
    });
  }, []);

  return (
    <section
      id="clases"
      className="relative bg-crema px-6 md:px-14 py-36 md:py-44 overflow-hidden"
    >
      <span
        aria-hidden
        className="absolute -top-14 right-0 font-display font-black text-burdeos/[.033] pointer-events-none select-none leading-none"
        style={{ fontSize: "clamp(14rem, 25vw, 28rem)" }}
      >
        02
      </span>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
        <h2
          className="font-display font-black leading-[.9] tracking-[-0.03em]"
          style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}
        >
          <span className="rl"><span ref={addInner} className="ri block">Dos formas de</span></span>
          <span className="rl"><span ref={addInner} className="ri block">encontrar</span></span>
          <span className="rl"><span ref={addInner} className="ri block italic text-burdeos">tu centro.</span></span>
        </h2>
        <p className="clase-sub font-serif text-[.9rem] leading-[1.9] text-[#5A4A44] self-end pb-2 max-w-[480px]">
          Cada modalidad está diseñada con una intención específica. Elegís la que mejor dialoga con tu cuerpo en este momento, o las combinás para un trabajo integral.
        </p>
      </div>

      <div className="relative z-10 flex flex-col">
        {clases.map((c, i) => (
          <div
            key={i}
            className="clase-item group grid grid-cols-1 lg:grid-cols-[72px_1fr_420px] gap-0 border-t border-burdeos/10 py-14 md:py-16 last:border-b last:border-burdeos/10 hover:bg-burdeos/[.025] transition-colors duration-400"
          >
            <div
              className="font-display font-black text-burdeos/12 leading-none tracking-[-0.04em] pt-1 hidden lg:block"
              style={{ fontSize: "4rem" }}
            >
              {c.num}
            </div>

            <div className="pr-0 lg:pr-12 pl-0 lg:pl-6 mb-8 lg:mb-0">
              <h3
                className="font-display font-black leading-[.88] tracking-[-0.025em] mb-6"
                style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)" }}
              >
                {c.name} <em className="italic">{c.nameItalic}</em>
              </h3>
              <p className="font-serif text-[.88rem] leading-[1.9] text-[#6A5A54] max-w-[420px] mb-7">
                {c.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <span key={t} className="font-sans text-[.56rem] font-light tracking-[.2em] uppercase px-3.5 py-1.5 border border-burdeos/22 text-burdeos">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden" style={{ height: "clamp(220px, 28vw, 340px)" }}>
              {c.video ? (
                <video
                  autoPlay loop muted playsInline
                  className="w-full h-full object-cover brightness-[.8] saturate-[.75] group-hover:scale-[1.02] group-hover:brightness-[.7] transition-all duration-700"
                >
                  <source src={c.video} type="video/mp4" />
                  <Image src={c.img} alt={c.name} fill className="object-cover" sizes="420px" />
                </video>
              ) : (
                <Image
                  src={c.img}
                  alt={`${c.name} ${c.nameItalic}`}
                  fill
                  className="object-cover brightness-[.82] saturate-[.75] group-hover:scale-[1.02] group-hover:brightness-[.72] transition-all duration-700"
                  sizes="420px"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
