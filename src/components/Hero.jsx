import { AnimatePresence, motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';
import { profile, stats } from '../data/content';
import { CountUp } from './ui';

const ease = [0.2, 0.7, 0.2, 1];

/** Roles roll vertically rather than typing themselves out one letter at a time. */
function RoleRoll({ roles }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % roles.length), 2600);
    return () => clearInterval(t);
  }, [roles.length]);

  return (
    <span className="relative inline-flex h-[1.35em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          initial={{ y: '105%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-105%', opacity: 0 }}
          transition={{ duration: 0.45, ease }}
          className="whitespace-nowrap text-ember"
        >
          {roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

/** Three lines on what the work actually is — this column holds the space
    the portrait used to occupy, and says something the photo could not. */
const CAPABILITIES = [
  { k: 'Fine-tuning', v: 'Llama 3.2 with LoRA / PEFT, adapters published to the Hugging Face Hub' },
  { k: 'Retrieval', v: 'RAG over pgvector and FAISS, intent routing, guardrails, SSE streaming' },
  { k: 'Delivery', v: 'React 19 and FastAPI, Dockerized onto Google Cloud Run with CI/CD' },
];

export default function Hero() {
  return (
    <section id="top" className="relative px-6 pb-16 pt-32 md:pt-44">
      {/* the lamp */}
      <div
        className="bloom pointer-events-none absolute -top-32 right-[-10%] -z-10 h-[560px] w-[560px] blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-line bg-raise/60 py-1.5 pl-2 pr-4 backdrop-blur-sm"
        >
          <span className="relative grid h-5 w-5 place-items-center">
            <span className="absolute h-2 w-2 animate-ping rounded-full bg-ember/70" />
            <span className="h-2 w-2 rounded-full bg-ember" />
          </span>
          <span className="font-mono text-[0.68rem] tracking-[0.14em] text-ink-soft">
            {profile.availability}
          </span>
        </motion.div>

        <h1 className="display max-w-5xl text-[3.4rem] leading-[0.9] text-ink sm:text-7xl lg:text-[6.2rem]">
          {profile.headline.map((line, i) => (
            <motion.span
              key={line}
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 + i * 0.12, ease }}
              className="block"
            >
              {i === profile.headline.length - 1 ? (
                <em className="not-italic text-ember">{line}</em>
              ) : (
                line
              )}
            </motion.span>
          ))}
        </h1>

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* who, and how to reach him */}
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap items-baseline gap-x-2 font-mono text-sm tracking-wide text-ink-faint"
            >
              <span>{profile.name}</span>
              <span className="text-line">/</span>
              <RoleRoll roles={profile.roles} />
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.58, duration: 0.7, ease }}
              className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-ink-soft"
            >
              {profile.blurb}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.68, duration: 0.7, ease }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group inline-flex items-center gap-2.5 rounded-full bg-ember px-6 py-3.5 text-sm font-medium text-sunken transition-transform hover:-translate-y-0.5"
              >
                See the work
                <ArrowDown size={15} className="transition-transform group-hover:translate-y-0.5" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2.5 rounded-full border border-line px-6 py-3.5 text-sm text-ink transition-colors hover:border-ember/50 hover:text-ember"
              >
                <Mail size={15} />
                Get in touch
              </a>
              <div className="ml-1 flex items-center gap-1">
                {[
                  { Icon: Github, href: profile.links.github, label: 'GitHub' },
                  { Icon: Linkedin, href: profile.links.linkedin, label: 'LinkedIn' },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="grid h-11 w-11 place-items-center rounded-full text-ink-faint transition-colors hover:bg-raise hover:text-ember"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 flex items-center gap-2 font-mono text-[0.7rem] tracking-wide text-ink-faint"
            >
              <MapPin size={12} className="text-ember" />
              {profile.location}
            </motion.p>
          </div>

          {/* what the work is */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.8, ease }}
            className="lg:col-span-5 lg:border-l lg:border-line lg:pl-10"
          >
            <p className="eyebrow mb-5">What that means day to day</p>
            <dl className="space-y-5">
              {CAPABILITIES.map((c) => (
                <div key={c.k} className="border-b border-line pb-5 last:border-0 last:pb-0">
                  <dt className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-ember">
                    {c.k}
                  </dt>
                  <dd className="mt-2 text-[0.9rem] leading-relaxed text-ink-soft">{c.v}</dd>
                </div>
              ))}
            </dl>

            <a
              href={profile.links.site}
              target="_blank"
              rel="noreferrer"
              className="link-draw mt-7 inline-flex items-center gap-2 text-[0.85rem] text-ink transition-colors hover:text-ember"
            >
              Currently shipping itmgoi.in
              <ArrowUpRight size={14} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* --- receipts --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8, ease }}
        className="mx-auto mt-20 grid w-full max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4"
      >
        {stats.map((s) => (
          <div key={s.label} className="bg-ground/70 px-5 py-7 backdrop-blur-sm">
            <p className="display text-4xl text-ember md:text-5xl">
              <CountUp to={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-[0.78rem] leading-snug text-ink-faint">{s.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
