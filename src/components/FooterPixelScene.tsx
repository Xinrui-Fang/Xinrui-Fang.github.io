"use client";

import { useEffect, useRef } from "react";

type Petal = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  w: number;
  h: number;
  light: boolean;
};

function drawSky(ctx: CanvasRenderingContext2D, pw: number, ph: number) {
  for (let y = 0; y < ph; y++) {
    const t = y / Math.max(1, ph * 0.72);
    const r = Math.floor(180 + t * 75);
    const g = Math.floor(90 + t * 70);
    const b = Math.floor(140 + t * 40);
    ctx.fillStyle = `rgb(${Math.min(255, r)},${Math.min(255, g)},${Math.min(255, b)})`;
    ctx.fillRect(0, y, pw, 1);
  }
  const glowY = Math.floor(ph * 0.58);
  for (let y = glowY; y < glowY + 5; y++) {
    if (y >= ph) break;
    const a = 0.35 - (y - glowY) * 0.06;
    ctx.fillStyle = `rgba(255, 210, 150, ${a})`;
    ctx.fillRect(0, y, pw, 1);
  }
  const sunCx = Math.floor(pw * 0.72);
  const sunCy = Math.floor(ph * 0.62);
  const sunR = Math.max(3, Math.floor(pw * 0.06));
  for (let dy = -sunR; dy <= sunR; dy++) {
    for (let dx = -sunR; dx <= sunR; dx++) {
      if (dx * dx + dy * dy <= sunR * sunR) {
        ctx.fillStyle = "rgba(255, 230, 190, 0.95)";
        ctx.fillRect(sunCx + dx, sunCy + dy, 1, 1);
      }
    }
  }
}

function drawFuji(ctx: CanvasRenderingContext2D, pw: number, ph: number) {
  const baseY = ph - 1;
  const peakX = Math.floor(pw * 0.38);
  const peakY = Math.floor(ph * 0.38);
  const h = baseY - peakY;
  for (let row = 0; row <= h; row++) {
    const y = peakY + row;
    const prog = row / Math.max(1, h);
    const halfW = Math.floor(2 + prog * peakX * 0.92);
    const snowLine = peakY + Math.floor(h * 0.22);
    ctx.fillStyle = y < snowLine ? "#f7f4f0" : "#dcd4cc";
    ctx.fillRect(peakX - halfW, y, halfW * 2 + 1, 1);
  }
  const capH = Math.floor(h * 0.2);
  for (let row = 0; row < capH; row++) {
    const y = peakY + row;
    const halfW = Math.max(1, Math.floor((capH - row) * 1.2));
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(peakX - halfW, y, halfW * 2 + 1, 1);
  }
}

function drawGround(ctx: CanvasRenderingContext2D, pw: number, ph: number) {
  const gy = Math.floor(ph * 0.88);
  for (let y = gy; y < ph; y++) {
    const t = (y - gy) / Math.max(1, ph - gy);
    ctx.fillStyle = `rgb(${60 + t * 40},${40 + t * 30},${90 + t * 20})`;
    ctx.fillRect(0, y, pw, 1);
  }
}

export function FooterPixelScene() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const c2d: CanvasRenderingContext2D = ctx;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const PIX = 4;
    let pw = 0;
    let ph = 0;
    let petals: Petal[] = [];
    let raf = 0;
    let running = true;

    function spawnPetal(): Petal {
      return {
        x: Math.random() * pw,
        y: -2 - Math.random() * ph * 0.5,
        vx: -0.08 + Math.random() * 0.16,
        vy: 0.12 + Math.random() * 0.22,
        w: 1,
        h: 1 + Math.floor(Math.random() * 2),
        light: Math.random() > 0.75,
      };
    }

    function resize() {
      const el = wrapRef.current;
      const c = canvasRef.current;
      if (!el || !c) return;
      const w = el.clientWidth;
      if (w < 8) return;
      pw = Math.max(56, Math.floor(w / PIX));
      ph = Math.max(24, Math.floor(pw * 0.26));
      c.width = pw;
      c.height = ph;
      const displayH = (ph / pw) * w;
      c.style.width = `${w}px`;
      c.style.height = `${displayH}px`;
      petals = Array.from({ length: Math.min(48, Math.floor(pw * 0.35)) }, () =>
        spawnPetal()
      );
    }

    function frame() {
      if (!running) return;
      if (!pw || !ph) {
        raf = requestAnimationFrame(frame);
        return;
      }
      drawSky(c2d, pw, ph);
      drawFuji(c2d, pw, ph);
      drawGround(c2d, pw, ph);

      for (const p of petals) {
        c2d.fillStyle = p.light ? "#ffd6e8" : "#ff8fb8";
        c2d.fillRect(Math.floor(p.x), Math.floor(p.y), p.w, p.h);
        p.x += p.vx + Math.sin(p.y * 0.08) * 0.04;
        p.y += p.vy;
        if (p.y > ph + 2) {
          Object.assign(p, spawnPetal());
        }
        if (p.x < -3) p.x = pw + 1;
        if (p.x > pw + 3) p.x = -2;
      }

      raf = requestAnimationFrame(frame);
    }

    const ro = new ResizeObserver(() => {
      resize();
    });
    ro.observe(wrap);
    resize();

    if (reduceMotion) {
      if (pw && ph) {
        drawSky(c2d, pw, ph);
        drawFuji(c2d, pw, ph);
        drawGround(c2d, pw, ph);
        c2d.fillStyle = "#ff8fb8";
        for (let i = 0; i < 12; i++) {
          c2d.fillRect(
            Math.floor((i * pw) / 12),
            Math.floor(ph * 0.2 + (i % 4) * 2),
            1,
            1
          );
        }
      }
      return () => ro.disconnect();
    }

    raf = requestAnimationFrame(frame);

    return () => {
      running = false;
      ro.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="mt-20 w-full overflow-hidden rounded-sm border border-[#e8e8e8] bg-[#1a1025] shadow-sm sm:mt-24 mb-6"
      aria-hidden
    >
      <canvas
        ref={canvasRef}
        className="block w-full [image-rendering:pixelated]"
        width={160}
        height={42}
      />
    </div>
  );
}
