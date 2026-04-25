"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const schedule = [
  { day: "Lunes",     time: "09:00 — 10:00", type: "Mat",      level: "Principiante"     },
  { day: "Lunes",     time: "18:00 — 19:00", type: "Reformer", level: "Intermedio"        },
  { day: "Miércoles", time: "09:00 — 10:00", type: "Mat",      level: "Todos los niveles" },
  { day: "Miércoles", time: "19:00 — 20:00", type: "Reformer", level: "Avanzado"           },
  { day: "Viernes",   time: "08:30 — 09:30", type: "Mat",      level: "Todos los niveles" },
  { day: "Sábado",    time: "10:00 — 11:00", type: "Reformer", level: "Principiante"      },
];

export default function Horarios() {
  const inners   = useRef<HTMLSpanElement[]>([]);
  const addInner = (el: HTMLSpanElement | null) => { if (el) inners.current.push(el); };

  useEffect(() => {
    inners.current.forEach((el, i) => {
      gsap.to(el, {
        y: "0%", duration: 1.05, ease: "expo.out", delay: i * 0.1,
        scrollTrigger: { trigger: el, start: "top 90%" },
      });
    });
    gsap.from(".sched-row", {
      opacity: 0, x: -16, stagger: 0.07, duration: 0.9, ease: "expo.out",
      scrollTrigger: { trigger: ".sched-row", start: "top 85%" },
    });
  }, []);

  return (
    <section
      id="horarios"
      data-dark
      className="relative bg-burdeos px-6 md:px-14 py-32 md:py-40 overflow-hidden"
    >
      <span
        aria-hidden
        className="absolute -top-20 -left-8 font-display font-black leading-none pointer-events-none select-none"
        style={{
          fontSize: "clamp(16rem, 28vw, 32rem)",
          WebkitTextStroke: "1px rgba(244,238,228,.055)",
          color: "transparent",
        }}
      >
        03
      </span>

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
        <h2
          className="font-display font-black leading-[.9] tracking-[-0.03em] text-crema"
          style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}
        >
          <span className="rl"><span ref={addInner} className="ri block">Horarios</span></span>
          <span className="rl"><span ref={addInner} className="ri block italic opacity-60">semanales.</span></span>
        </h2>
        <p className="font-serif text-[.8rem] italic text-crema/38 text-right max-w-[220px]">
          Consultá disponibilidad antes de reservar. Los cupos son limitados.
        </p>
      </div>

      <div className="relative z-10 w-full max-w-[900px]">
        <div className="grid grid-cols-[1fr_auto_auto_auto_auto] gap-0 border-b border-crema/12 pb-4 mb-1">
          {["Día", "Horario", "Modalidad", "Nivel", ""].map((h, i) => (
            <span key={i} className="font-sans text-[.55rem] font-light tracking-[.35em] uppercase text-crema/30">
              {h}
            </span>
          ))}
        </div>

        {schedule.map((row, i) => (
          <div
            key={i}
            className="sched-row grid grid-cols-[1fr_auto_auto_auto_auto] gap-x-6 md:gap-x-10 items-center border-b border-crema/[.065] py-5 md:py-6 hover:bg-crema/[.035] transition-colors duration-300 group"
          >
            <span className="font-display text-[1.3rem] font-normal italic text-crema">{row.day}</span>
            <span className="font-sans text-[.82rem] font-light text-crema/65 whitespace-nowrap hidden sm:block">{row.time}</span>
            <span className={`font-sans text-[.54rem] font-light tracking-[.18em] uppercase px-3 py-1.5 border whitespace-nowrap ${
              row.type === "Mat" ? "text-nude2 border-nude2/28" : "text-crema/40 border-crema/14"
            }`}>
              {row.type}
            </span>
            <span className="font-sans text-[.78rem] font-light text-crema/50 hidden md:block whitespace-nowrap">{row.level}</span>
            <a
              href="#cta"
              className="font-sans text-[.56rem] font-light tracking-[.2em] uppercase text-nude/55 hover:text-nude transition-colors duration-300 whitespace-nowrap opacity-0 group-hover:opacity-100"
            >
              Reservar →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
