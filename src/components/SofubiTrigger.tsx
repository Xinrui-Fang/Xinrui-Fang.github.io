"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { assetPath } from "@/lib/asset-path";

export function SofubiTrigger() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLSpanElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        close();
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    const timer = window.setTimeout(close, 3500);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(timer);
    };
  }, [open, close]);

  return (
    <span ref={rootRef} className="relative inline-block">
      <button
        type="button"
        aria-expanded={open}
        aria-label={open ? "Hide kaijū sofubi photo" : "Show kaijū sofubi photo"}
        onClick={() => setOpen((v) => !v)}
        className="font-inherit cursor-pointer bg-transparent border-0 p-0 m-0 no-underline hover:opacity-85 transition-opacity rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a1a1a] focus-visible:ring-offset-2"
      >
        kaijū sofubi
      </button>

      {open && (
        <span
          role="img"
          aria-label="A hand holding a Pepsi-bottle kaijū sofubi figure"
          className="sofubi-pop absolute bottom-full left-1/2 z-20 mb-2 -translate-x-1/2 pointer-events-none"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={assetPath("/sofubi.png")}
            alt=""
            width={200}
            height={224}
            className="sofubi-shake block w-[200px] max-w-[90vw] h-auto select-none drop-shadow-md"
            draggable={false}
          />
        </span>
      )}
    </span>
  );
}
