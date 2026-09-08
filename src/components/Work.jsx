import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Github, Plus } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CountUp, Pill, Reveal, Section } from './ui';
import { alsoBuilt, github, projects } from '../data/content';

const TRACKS = ['All', 'AI & ML', 'Full-Stack'];

function BulletList({ items }) {
  return (
    <ul className="space-y-3">
      {items.map((b, i) => (
        <li key={i} className="flex gap-3 text-[0.9rem] leading-relaxed text-ink-soft">
          <span className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-ember/70" />
          {b}
        </li>
      ))}
    </ul>
  );
}

function ProjectRow({ p, n, open, onToggle }) {
  return (
    <div className="group border-b border-line">
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-start gap-5 py-7 text-left md:gap-8"
      >
        <span className="mt-1.5 shrink-0 font-mono text-[0.7rem] text-ink-faint transition-colors group-hover:text-ember">
          {String(n).padStart(2, '0')}
        </span>

        <span className="min-w-0 flex-1">
          {/* a project spanning both tracks says so, rather than picking one */}
          {p.tracks.length > 1 && (
            <span className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-ember/25 bg-ember/8 px-2.5 py-0.5 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-ember">
              {p.tracks.join(' + ')}
            </span>
          )}
          <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span
              className={`display text-3xl transition-colors md:text-[2.6rem] ${
                open ? 'text-ember' : 'text-ink group-hover:text-ember'
              }`}
            >
              {p.title}
            </span>
            <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-faint">
              {p.kicker}
            </span>
          </span>
          <span className="mt-3 block max-w-2xl text-[0.94rem] leading-relaxed text-ink-soft">
            {p.summary}
          </span>
        </span>

        <span className="hidden shrink-0 flex-col items-end gap-3 pt-2 md:flex">
          <span className="font-mono text-[0.68rem] text-ink-faint">{p.year}</span>
          <span
            className={`grid h-9 w-9 place-items-center rounded-full border border-line transition-all duration-300 ${
              open ? 'rotate-45 border-ember/60 text-ember' : 'text-ink-faint group-hover:border-ember/40'
            }`}
          >
            <Plus size={15} />
          </span>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="grid gap-10 pb-10 md:grid-cols-12 md:pl-[3.1rem]">
              <div className="md:col-span-7">
                {/* A project big enough to have parts lists them under headings;
                    everything else is one flat list of bullets. */}
                {p.groups ? (
                  <div className="space-y-7">
                    {p.groups.map((g) => (
                      <div key={g.label}>
                        <p className="mb-3 flex items-center gap-3 font-mono text-[0.64rem] uppercase tracking-[0.18em] text-ember">
                          {g.label}
                          <span className="h-px flex-1 bg-line" aria-hidden="true" />
                        </p>
                        <BulletList items={g.bullets} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <BulletList items={p.bullets} />
                )}

                <div className="mt-7 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <Pill key={s}>{s}</Pill>
                  ))}
                </div>
              </div>

              <div className="md:col-span-5">
                <div className="grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-line bg-line">
                  {p.metrics.map((m) => (
                    <div key={m.l} className="bg-raise/50 px-3 py-4 text-center">
                      <p className="display text-xl text-ember md:text-2xl">{m.n}</p>
                      <p className="mt-1 text-[0.64rem] leading-tight text-ink-faint">{m.l}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-ember px-4 py-2.5 text-[0.8rem] font-medium text-sunken transition-transform hover:-translate-y-0.5"
                    >
                      {p.liveLabel || 'Live site'}
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2.5 text-[0.8rem] text-ink transition-colors hover:border-ember/50 hover:text-ember"
                    >
                      <Github size={14} />
                      Source
                    </a>
                  )}
                  {!p.live && !p.repo && (
                    <p className="font-mono text-[0.7rem] text-ink-faint">
                      Private repository — walkthrough on request.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Work() {
  const [track, setTrack] = useState('All');
  const [open, setOpen] = useState(projects[0].id);

  const shown = useMemo(
    () => (track === 'All' ? projects : projects.filter((p) => p.tracks.includes(track))),
    [track]
  );

  return (
    <Section
      id="work"
      index={3}
      title="Selected work"
      lead="Eight systems that reached a URL, a model hub, or a production server. Open a row for the engineering detail."
    >
      <Reveal>
        <div className="mb-4 flex flex-wrap items-center gap-2">
          {TRACKS.map((t) => (
            <button
              key={t}
              onClick={() => setTrack(t)}
              className={`rounded-full border px-4 py-2 font-mono text-[0.7rem] uppercase tracking-[0.14em] transition-all ${
                track === t
                  ? 'border-ember bg-ember/12 text-ember'
                  : 'border-line text-ink-faint hover:border-ember/40 hover:text-ink'
              }`}
            >
              {t}
              <span className="ml-2 opacity-50">
                {t === 'All'
                  ? projects.length
                  : projects.filter((p) => p.tracks.includes(t)).length}
              </span>
            </button>
          ))}
        </div>
      </Reveal>

      <motion.div layout className="border-t border-line">
        {shown.map((p, i) => (
          <ProjectRow
            key={p.id}
            p={p}
            n={i + 1}
            open={open === p.id}
            onToggle={() => setOpen(open === p.id ? null : p.id)}
          />
        ))}
      </motion.div>

      {/* what the GitHub account actually adds up to */}
      <Reveal delay={0.1}>
        <div className="mt-16 rounded-2xl border border-line bg-raise/30 p-7 md:p-9">
          <div className="mb-7 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
            <p className="eyebrow">Counted from GitHub</p>
            <p className="font-mono text-[0.66rem] text-ink-faint">
              github.com/Sumit7162 · active since {github.since} · checked {github.checked}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-4">
            {github.counts.map((c) => (
              <div key={c.label} className="bg-ground/70 px-4 py-6">
                <p className="display text-3xl text-ember md:text-4xl">
                  <CountUp to={c.n} />
                </p>
                <p className="mt-2 text-[0.78rem] leading-snug text-ink">{c.label}</p>
                {c.note && (
                  <p className="mt-1 font-mono text-[0.62rem] leading-snug text-ink-faint">
                    {c.note}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8">
            <p className="mb-4 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-ink-faint">
              The rest of the shelf
            </p>
            <div className="flex flex-wrap gap-2.5">
              {alsoBuilt.map((r) => (
                <a
                  key={r.name}
                  href={r.live || r.url}
                  target="_blank"
                  rel="noreferrer"
                  title={r.live ? `${r.name} — live` : `${r.name} — source on GitHub`}
                  className="group inline-flex items-baseline gap-2 rounded-full border border-line bg-ground/50 px-4 py-2 text-[0.82rem] text-ink-soft transition-colors hover:border-ember/40 hover:text-ember"
                >
                  {r.live && (
                    <span
                      className="h-1.5 w-1.5 translate-y-[-1px] rounded-full bg-ember"
                      aria-hidden="true"
                    />
                  )}
                  {r.name}
                  <span className="font-mono text-[0.62rem] text-ink-faint">{r.note}</span>
                  <ArrowUpRight
                    size={12}
                    className="translate-y-[1px] opacity-0 transition-opacity group-hover:opacity-70"
                  />
                </a>
              ))}
            </div>
            <p className="mt-4 font-mono text-[0.64rem] text-ink-faint">
              <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-ember align-middle" />
              dot = deployed, link opens the live build; the rest open source on GitHub
            </p>
          </div>

          <a
            href={github.url}
            target="_blank"
            rel="noreferrer"
            className="link-draw mt-8 inline-flex items-center gap-2 text-[0.85rem] text-ink transition-colors hover:text-ember"
          >
            Browse every repository
            <ArrowUpRight size={14} />
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
