"use client";

const items = [
  "Pilates Mat",
  "Pilates Reformer",
  "Conciencia corporal",
  "Fuerza desde el centro",
  "El movimiento como ritual",
  "Romana Club",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden bg-burdeos py-3.5 relative z-10">
      <div
        className="flex w-max"
        style={{ animation: "marquee 28s linear infinite" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-display text-[1rem] italic font-normal text-crema/50 tracking-[.08em] px-10 whitespace-nowrap"
          >
            {item}
            <span className="not-italic text-nude/60 mx-2">◆</span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
