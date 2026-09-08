import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

/** Hairline read-progress bar pinned to the top of the viewport. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const width = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.3 });

  return (
    <motion.div
      style={{ scaleX: width }}
      className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-gradient-to-r from-rust via-ember to-ember/0"
      aria-hidden="true"
    />
  );
}

/**
 * A soft warm light that follows the pointer, as if the page were lit by the
 * same lamp as the portrait. Desktop-only and purely decorative.
 */
export function Spotlight() {
  // Decided once: a coarse pointer has nothing to follow, and a visitor who
  // asked for less motion shouldn't get a light chasing their cursor.
  const [enabled] = useState(
    () =>
      window.matchMedia('(pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  const ref = useRef(null);

  useEffect(() => {
    if (!enabled) return;

    let raf = 0;
    const onMove = (e) => {
      cancelAnimationFrame(raf);
      // written straight to the DOM — re-rendering React on every pointer
      // move to position a decorative glow is not worth the frames
      raf = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      });
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-0 h-[560px] w-[560px] rounded-full"
      style={{
        transform: 'translate3d(-50vw, -50vh, 0)',
        background:
          'radial-gradient(closest-side, color-mix(in oklab, var(--c-ember) 22%, transparent), transparent 70%)',
        opacity: 'var(--glow)',
        filter: 'blur(30px)',
      }}
    />
  );
}
