import { motion } from 'framer-motion';
import { Marquee, Reveal, Section } from './ui';
import { about, marquee, profile } from '../data/content';
import { asset } from '../lib/asset';

export default function About() {
  return (
    <>
      {/* tech strip — one continuous line between the hero and the story */}
      <div className="border-y border-line py-6">
        <Marquee items={marquee} speed={52} />
      </div>

      <Section
        id="about"
        index={1}
        title="The short version"
        lead="Two internships, one production platform, and a habit of finishing the boring 80% of a system."
      >
        <div className="grid gap-14 lg:grid-cols-12">
          {/* story */}
          <div className="lg:col-span-7">
            <div className="space-y-6">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <p
                    className={
                      i === 0
                        ? 'text-lg leading-relaxed text-ink md:text-xl'
                        : 'leading-relaxed text-ink-soft'
                    }
                  >
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.25}>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-6">
                <span className="display text-2xl text-ink">{profile.name}</span>
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-ink-faint">
                  {profile.roles[0]} · {profile.roles[1]}
                </span>
              </div>
            </Reveal>
          </div>

          {/* duotone portrait — same photo, different light */}
          <Reveal delay={0.12} className="lg:col-span-5">
            <figure className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-line bg-sunken">
                <div
                  className="absolute inset-0 z-10"
                  style={{
                    background:
                      'linear-gradient(150deg, var(--c-ember) 0%, var(--c-rust) 55%, var(--c-sunken) 100%)',
                    mixBlendMode: 'color',
                    opacity: 0.55,
                  }}
                  aria-hidden="true"
                />
                <img
                  src={asset("/sumit-portrait.webp")}
                  alt="Sumit Sharma"
                  width={880}
                  height={1036}
                  loading="lazy"
                  className="block aspect-[4/5] w-full object-cover object-[50%_18%] contrast-[1.08] saturate-[0.7]"
                />
                <motion.div
                  className="absolute inset-x-0 z-20 h-24"
                  style={{
                    background:
                      'linear-gradient(to bottom, transparent, color-mix(in oklab, var(--c-ember) 30%, transparent), transparent)',
                  }}
                  animate={{ y: ['-15%', '420%'] }}
                  transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
                  aria-hidden="true"
                />
              </div>
              <figcaption className="mt-4 flex items-baseline justify-between gap-4 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-faint">
                <span>Gwalior, MP</span>
                <span className="text-ember">2027 batch</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>

        {/* fact grid */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {about.facts.map((f, i) => (
            <Reveal key={f.k} delay={i * 0.05}>
              <div className="group h-full bg-ground/60 p-6 transition-colors hover:bg-raise/70">
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-ember">
                  {f.k}
                </span>
                <p className="mt-3 text-[0.98rem] leading-snug text-ink">{f.v}</p>
                <p className="mt-2 text-[0.78rem] text-ink-faint">{f.hint}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
