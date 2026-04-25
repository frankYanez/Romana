"use client";

import { useEffect, useRef } from "react";

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx    = canvas.getContext("2d")!;
    let W = 0, H = 0, rafId: number;

    type Thread = {
      x: number; y: number; vx: number; vy: number;
      len: number; angle: number; va: number;
      alpha: number; r: [number,number,number]; w: number;
    };

    const rgba = (r:number,g:number,b:number,a:number) => `rgba(${r},${g},${b},${a})`;
    const THREADS = 24;
    let threads: Thread[] = [];

    const mkThread = (): Thread => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - .5) * .28,
      vy: (Math.random() - .5) * .28,
      len: 80 + Math.random() * 280,
      angle: Math.random() * Math.PI * 2,
      va: (Math.random() - .5) * .0025,
      alpha: .03 + Math.random() * .07,
      r: Math.random() > .5 ? [201,169,138] : [61,11,26],
      w: .3 + Math.random() * .6,
    });

    const resize = () => {
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const t = Date.now() * .00022;

      ([
        [W*.68, H*.32, 260, [201,169,138] as [number,number,number], .07, .62, .41],
        [W*.12, H*.70, 180, [61,11,26]   as [number,number,number], .05, .48, .71],
        [W*.42, H*.85, 140, [201,169,138] as [number,number,number], .04, .90, .28],
      ] as [number,number,number,[number,number,number],number,number,number][]).forEach(
        ([ox,oy,r,col,a,s1,s2]) => {
          const x = ox + Math.sin(t * s1) * 60;
          const y = oy + Math.cos(t * s2) * 42;
          const g = ctx.createRadialGradient(x, y, 0, x, y, r);
          g.addColorStop(0, rgba(...col, a));
          g.addColorStop(1, rgba(...col, 0));
          ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2);
          ctx.fillStyle = g; ctx.fill();
        }
      );

      threads.forEach(l => {
        l.x += l.vx; l.y += l.vy; l.angle += l.va;
        if (l.x < -300) l.x = W + 80;
        if (l.x > W+300) l.x = -80;
        if (l.y < -300) l.y = H + 80;
        if (l.y > H+300) l.y = -80;
        const x2 = l.x + Math.cos(l.angle) * l.len;
        const y2 = l.y + Math.sin(l.angle) * l.len;
        const g = ctx.createLinearGradient(l.x, l.y, x2, y2);
        g.addColorStop(0, rgba(...l.r, 0));
        g.addColorStop(.5, rgba(...l.r, l.alpha));
        g.addColorStop(1, rgba(...l.r, 0));
        ctx.beginPath(); ctx.moveTo(l.x, l.y); ctx.lineTo(x2, y2);
        ctx.strokeStyle = g; ctx.lineWidth = l.w; ctx.stroke();
      });

      rafId = requestAnimationFrame(draw);
    };

    resize();
    threads = Array.from({ length: THREADS }, mkThread);
    draw();
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(rafId); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-[1] pointer-events-none"
    />
  );
}
