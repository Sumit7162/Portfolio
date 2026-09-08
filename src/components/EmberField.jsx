import { useEffect, useRef } from 'react';

/**
 * Warm embers drifting upward behind the page, so the background shares the
 * portrait's key light instead of fighting it.
 *
 * This used to be a three.js point cloud, which cost ~885 kB for what is
 * decoration. Plain canvas 2D draws the same glow in a couple of kilobytes:
 * each ember is one cached radial-gradient sprite, blended additively.
 */

const PALETTE = ['#f0b95e', '#e9a53f', '#c97f28', '#b4552f', '#f6efe4'];

/** One pre-rendered soft dot per colour — far cheaper than a gradient per frame. */
function makeSprites(scale) {
  return PALETTE.map((hex) => {
    const r = 16 * scale;
    const c = document.createElement('canvas');
    c.width = c.height = r * 2;
    const g = c.getContext('2d');
    const grad = g.createRadialGradient(r, r, 0, r, r, r);
    grad.addColorStop(0, hex);
    grad.addColorStop(0.35, `${hex}66`);
    grad.addColorStop(1, `${hex}00`);
    g.fillStyle = grad;
    g.beginPath();
    g.arc(r, r, r, 0, Math.PI * 2);
    g.fill();
    return c;
  });
}

export default function EmberField({ theme }) {
  const canvasRef = useRef(null);
  // Read inside the animation loop, so it lives in a ref rather than a dep.
  const themeRef = useRef(theme);
  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { alpha: true });
    const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
    const sprites = makeSprites(dpr);

    let w = 0;
    let h = 0;
    let embers = [];
    let raf = 0;
    let last = performance.now();
    const pointer = { x: 0, target: 0 };
    let scroll = 0;

    const seed = (e, spawnAnywhere) => {
      e.x = Math.random() * w;
      e.y = spawnAnywhere ? Math.random() * h : h + Math.random() * 80;
      e.r = (0.7 + Math.random() * 2.1) * dpr;
      e.speed = (8 + Math.random() * 34) * dpr;
      e.sway = 0.25 + Math.random() * 0.9;
      e.phase = Math.random() * Math.PI * 2;
      e.alpha = 0.25 + Math.random() * 0.6;
      e.sprite = sprites[(Math.random() * sprites.length) | 0];
      return e;
    };

    const resize = () => {
      w = canvas.width = Math.floor(window.innerWidth * dpr);
      h = canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = '100%';
      canvas.style.height = '100%';

      // density scales with area, capped so phones stay smooth
      const count = Math.min(Math.round((w * h) / (26000 * dpr)), 170);
      embers = Array.from({ length: count }, () => seed({}, true));
    };

    const onPointer = (e) => {
      pointer.target = (e.clientX / window.innerWidth - 0.5) * 2;
    };
    const onScroll = () => {
      scroll = window.scrollY;
    };

    const frame = (now) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      pointer.x += (pointer.target - pointer.x) * 0.04;
      const drift = pointer.x * 26 * dpr;
      const lift = -(scroll * 0.06) * dpr;

      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'lighter';
      const dim = themeRef.current === 'light' ? 0.3 : 1;

      for (const e of embers) {
        e.y -= e.speed * dt;
        e.phase += dt * e.sway;
        if (e.y < -40) seed(e, false);

        const x = e.x + Math.sin(e.phase) * 14 * dpr + drift;
        const y = e.y + lift;
        if (y < -60 || y > h + 60) continue;

        // gentle twinkle
        const a = e.alpha * dim * (0.7 + 0.3 * Math.sin(e.phase * 2.1));
        const size = e.r * 6;
        ctx.globalAlpha = Math.max(a, 0);
        ctx.drawImage(e.sprite, x - size / 2, y - size / 2, size, size);
      }

      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = 'source-over';
      raf = requestAnimationFrame(frame);
    };

    resize();
    raf = requestAnimationFrame(frame);
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onPointer, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    // stop burning cycles when the tab is hidden
    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else {
        last = performance.now();
        raf = requestAnimationFrame(frame);
      }
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointer);
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className="h-full w-full" aria-hidden="true" />;
}
