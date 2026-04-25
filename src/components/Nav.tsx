"use client";
export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[500] flex items-center justify-between px-6 py-6">
      <a href="#" className="font-display text-sm tracking-[.28em] uppercase text-crema">
        Romana Club
      </a>
      <div className="hidden md:flex gap-8">
        <a href="#sobre" className="font-sans text-xs tracking-widest uppercase text-crema/60 hover:text-crema">Sobre mi</a>
        <a href="#clases" className="font-sans text-xs tracking-widest uppercase text-crema/60 hover:text-crema">Clases</a>
        <a href="#horarios" className="font-sans text-xs tracking-widest uppercase text-crema/60 hover:text-crema">Horarios</a>
        <a href="#cta" className="font-sans text-xs tracking-widest uppercase text-crema/60 hover:text-crema">Reservar</a>
      </div>
    </nav>
  );
}
