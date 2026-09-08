import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

/* Shared shells and small animated pieces used across every section. */

const ease = [0.2, 0.7, 0.2, 1];

export function Reveal({ children, delay = 0, y = 26, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/** Section shell: consistent rhythm, an index number and a hairline rule. */
export function Section({ id, index, title, lead, children, className = '' }) {
  return (
    <section id={id} className={`relative px-6 py-24 md:py-32 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <div className="mb-14 flex flex-col gap-5 border-t border-line pt-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="eyebrow">
                {String(index).padStart(2, '0')} — {id}
              </span>
              <h2 className="display mt-3 text-4xl text-ink md:text-6xl">{title}</h2>
            </div>
            {lead && (
              <p className="max-w-sm text-[0.95rem] leading-relaxed text-ink-soft md:text-right">
                {lead}
              </p>
            )}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

export function Pill({ children, tone = 'quiet', className = '' }) {
  const tones = {
    quiet: 'border-line bg-raise/60 text-ink-soft',
    ember: 'border-ember/40 bg-ember/10 text-ember',
  };
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 font-mono text-[0.7rem] tracking-wide ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}

/** Counts up once, when scrolled into view. */
export function CountUp({ to, suffix = '', duration = 1.4 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  // Reduced motion skips the animation entirely: start on the final number.
  const [calm] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [shown, setShown] = useState(() => (calm ? to : 0));

  useEffect(() => {
    if (!inView || calm) return;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / (duration * 1000), 1);
      setShown(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, calm, to, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {shown}
      {suffix}
    </span>
  );
}

/** Seamless infinite strip — the list is rendered twice and slid by 50%. */
export function Marquee({ items, speed = 44, reverse = false }) {
  const row = [...items, ...items];
  return (
    <div className="marquee-mask overflow-hidden">
      <div
        className="marquee-track"
        style={{ '--speed': `${speed}s`, animationDirection: reverse ? 'reverse' : 'normal' }}
      >
        {row.map((item, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-6 whitespace-nowrap px-6 font-display text-2xl text-ink-soft md:text-3xl"
          >
            {item}
            <span className="text-ember/60" aria-hidden="true">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
