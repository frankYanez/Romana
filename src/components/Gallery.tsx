"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

type GalleryItem =
  | { type: "image"; src: string; label: string; w: number; h: number }
  | { type: "video"; src: string; label: string; w: number; h: number };

const items: GalleryItem[] = [
  { type: "video", src: "https://videos.pexels.com/video-files/6670082/6670082-uhd_2560_1440_25fps.mp4", label: "Reformer · Intensidad", w: 520, h: 560 },
  { type: "image", src: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=700&q=80&auto=format&fit=crop", label: "Mat · Conexión", w: 340, h: 420 },
  { type: "image", src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80&auto=format&fit=crop", label: "Presencia · Control", w: 440, h: 500 },
  { type: "video", src: "https://videos.pexels.com/video-files/7991579/7991579-uhd_2560_1440_25fps.mp4", label: "El espacio", w: 340, h: 400 },
  { type: "image", src: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800&q=80&auto=format&fit=crop", label: "Fuerza · Gracia", w: 460, h: 520 },
  { type: "image", src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=700&q=80&auto=format&fit=crop", label: "Reformer Studio", w: 380, h: 450 },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef   = useRef<HTMLDivElement>(null);
  const wrapRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(trackRef.current?.children ?? [], {
      opacity: 0, y: 36, stagger: 0.09, duration: 1.1, ease: "expo.out",
      scrollTrigger: { trigger: sectionRef.current, start: "top 82%" },
    });

    const wrap = wrapRef.current!;
    let isDragging = false, startX = 0, scrollLeft = 0;

    wrap.addEventListener("mousedown", (e) => {
      isDragging = true;
      startX = e.pageX - wrap.offsetLeft;
      scrollLeft = wrap.scrollLeft;
      wrap.style.userSelect = "none";
    });
    const stop = () => { isDragging = false; wrap.style.userSelect = ""; };
    wrap.addEventListener("mouseup", stop);
    wrap.addEventListener("mouseleave", stop);
    wrap.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      wrap.scrollLeft = scrollLeft - (e.pageX - wrap.offsetLeft - startX) * 1.2;
    });

    let tx = 0;
    wrap.addEventListener("touchstart", (e) => { tx = e.touches[0].clientX; });
    wrap.addEventListener("touchmove", (e) => {
      wrap.scrollLeft += tx - e.touches[0].clientX;
      tx = e.touches[0].clientX;
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="galeria"
      data-dark
      className="bg-ink py-24 overflow-hidden"
    >
      <p className="flex items-center gap-3.5 font-sans text-[.6rem] font-light tracking-[.44em] uppercase text-nude/55 px-6 md:px-14 mb-12">
        <span className="block w-7 h-px bg-nude/40" />
        Imágenes del club
      </p>

      <div
        ref={wrapRef}
        className="gallery-scroll overflow-x-auto px-6 md:px-14"
        style={{ cursor: "grab" }}
      >
        <div
          ref={trackRef}
          className="flex gap-3 items-end"
          style={{ width: "max-content", paddingBottom: "4px" }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="relative flex-none overflow-hidden group"
              style={{
                width: item.w,
                height: item.h,
                alignSelf: i % 2 === 1 ? "flex-end" : "flex-start",
              }}
            >
              {item.type === "video" ? (
                <video
                  autoPlay loop muted playsInline
                  className="w-full h-full object-cover brightness-[.72] saturate-[.7] group-hover:brightness-[.58] group-hover:scale-[1.02] transition-all duration-700"
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover brightness-[.75] saturate-[.7] group-hover:brightness-[.62] group-hover:scale-[1.03] transition-all duration-700"
                  sizes="520px"
                  draggable={false}
                />
              )}
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-ink/70 to-transparent opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                <span className="font-display text-[1rem] italic text-crema tracking-wide">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
