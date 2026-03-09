"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function StreetGamesBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Animated warping grid lines
    const draw = () => {
      time += 0.008;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const w = canvas.width;
      const h = canvas.height;
      const gridSize = 60;

      // Horizontal warping lines
      ctx.strokeStyle = "rgba(194, 24, 91, 0.06)";
      ctx.lineWidth = 1;

      for (let y = 0; y < h; y += gridSize) {
        ctx.beginPath();
        for (let x = 0; x <= w; x += 4) {
          const warp =
            Math.sin(x * 0.008 + time * 2 + y * 0.01) * 12 +
            Math.sin(x * 0.003 + time * 1.5) * 8;
          if (x === 0) ctx.moveTo(x, y + warp);
          else ctx.lineTo(x, y + warp);
        }
        ctx.stroke();
      }

      // Vertical warping lines
      ctx.strokeStyle = "rgba(194, 24, 91, 0.04)";
      for (let x = 0; x < w; x += gridSize) {
        ctx.beginPath();
        for (let y = 0; y <= h; y += 4) {
          const warp =
            Math.sin(y * 0.008 + time * 1.8 + x * 0.01) * 10 +
            Math.cos(y * 0.004 + time) * 6;
          if (y === 0) ctx.moveTo(x + warp, y);
          else ctx.lineTo(x + warp, y);
        }
        ctx.stroke();
      }

      // Diagonal accent stripes (matatu energy)
      ctx.strokeStyle = "rgba(194, 24, 91, 0.03)";
      ctx.lineWidth = 2;
      const stripeSpacing = 80;
      const offset = (time * 40) % stripeSpacing;

      for (let i = -h; i < w + h; i += stripeSpacing) {
        ctx.beginPath();
        ctx.moveTo(i + offset, 0);
        ctx.lineTo(i + offset + h * 0.7, h);
        ctx.stroke();
      }

      // Pulse circles from center
      const cx = w / 2;
      const cy = h / 2;
      for (let i = 0; i < 3; i++) {
        const radius = ((time * 80 + i * 120) % 400) + 50;
        const alpha = Math.max(0, 0.04 - radius * 0.0001);
        ctx.strokeStyle = `rgba(194, 24, 91, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.stroke();
      }

      animationId = requestAnimationFrame(draw);
    };

    // Use IntersectionObserver to only animate when visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          draw();
        } else {
          cancelAnimationFrame(animationId);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(canvas);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
