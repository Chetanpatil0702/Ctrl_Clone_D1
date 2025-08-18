"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

type Particle = {
  id: number;
  x: number;
  y: number;
  angleDeg: number;
  len: number;
  size: number;
};

export default function CursorTrail() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const idRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const pendingRef = useRef<{ x: number; y: number } | null>(null);
  const lastRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    function onPointerMove(e: PointerEvent) {
      pendingRef.current = { x: e.clientX, y: e.clientY };
      if (rafRef.current == null) rafRef.current = requestAnimationFrame(flush);
    }

    function flush() {
      rafRef.current = null;
      const current = pendingRef.current;
      if (!current) return;

      const last = lastRef.current ?? current;
      const dx = current.x - last.x;
      const dy = current.y - last.y;
      const speed = Math.hypot(dx, dy);
      const angleDeg = (Math.atan2(dy, dx) * 180) / Math.PI;
      const len = clamp(mapRange(speed, 0, 40, 10, 48), 10, 48);
      const sizeHead = clamp(mapRange(speed, 0, 40, 6, 12), 6, 12);

      // Spawn 3 particles along the movement vector to form a comet-like streak
      const newParticles: Particle[] = [];
      for (let i = 0; i < 3; i++) {
        const t = i / 3;
        const px = current.x - dx * t * 0.35;
        const py = current.y - dy * t * 0.35;
        const size = sizeHead * (1 - t * 0.4);
        const id = ++idRef.current;
        newParticles.push({ id, x: px, y: py, angleDeg, len, size });
        // Schedule removal
        setTimeout(() => {
          setParticles((prev) => prev.filter((p) => p.id !== id));
        }, 800);
      }

      setParticles((prev) => {
        const arr = [...prev, ...newParticles];
        if (arr.length > 150) arr.splice(0, arr.length - 150);
        return arr;
      });

      lastRef.current = current;
    }

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onPointerMove as any);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[60]">
      {particles.map((p) => (
        <CometDot key={p.id} p={p} />
      ))}
    </div>
  );
}

type CometStyle = CSSProperties & {
  [key: string]: string | number | undefined;
  "--angle"?: string;
  "--len"?: string;
  "--size"?: string;
};

function CometDot({ p }: { p: Particle }) {
  const style: CometStyle = {
    left: p.x + "px",
    top: p.y + "px",
    "--angle": `${p.angleDeg}deg`,
    "--len": `${p.len}px`,
    "--size": `${p.size}px`,
  };
  return <span className="cursor-comet-dot" style={style} />;
}

function mapRange(value: number, inMin: number, inMax: number, outMin: number, outMax: number) {
  const clamped = Math.max(inMin, Math.min(inMax, value));
  const ratio = (clamped - inMin) / (inMax - inMin || 1);
  return outMin + ratio * (outMax - outMin);
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}


