import { Pill, Reveal, Section } from './ui';
import { experience, timeline } from '../data/content';

export default function Experience() {
  return (
    <Section
      id="experience"
      index={2}
      title="Where I've worked"
      lead="One long-running internship I still hold, and a short analytics stint that taught me to read data before modelling it."
    >
      <div className="relative">
        {/* the rail */}
        <div
          className="absolute left-[7px] top-2 hidden h-full w-px bg-gradient-to-b from-ember via-ember/30 to-transparent md:block"
          aria-hidden="true"
        />

        <div className="space-y-14">
          {experience.map((job, i) => (
            <Reveal key={job.org} delay={i * 0.1}>
              <article className="relative md:pl-12">
                {/* node */}
                <span
                  className="absolute left-0 top-2 hidden h-[15px] w-[15px] place-items-center rounded-full border border-ember/50 bg-ground md:grid"
                  aria-hidden="true"
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full bg-ember ${job.current ? 'animate-pulse' : 'opacity-50'}`}
                  />
                </span>

                <header className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                  <div>
                    <h3 className="display text-2xl text-ink md:text-3xl">{job.role}</h3>
                    <p className="mt-1.5 text-sm text-ember">
                      {job.org}
                      <span className="text-ink-faint"> · {job.place}</span>
                    </p>
                  </div>
                  <p className="shrink-0 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-ink-faint">
                    {job.current && (
                      <span className="mr-2 rounded-full bg-ember/15 px-2 py-0.5 text-ember">
                        current
                      </span>
                    )}
                    {job.period}
                  </p>
                </header>

                <ul className="mt-6 space-y-3.5">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3.5 text-[0.94rem] leading-relaxed text-ink-soft">
                      <span className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-ember/70" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {job.stack.map((s) => (
                    <Pill key={s}>{s}</Pill>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* the road so far — horizontal rail */}
      <Reveal delay={0.15}>
        <div className="mt-24">
          <p className="eyebrow mb-6">The road so far</p>
          <div className="-mx-6 overflow-x-auto px-6 pb-4">
            <ol className="flex min-w-max gap-4">
              {timeline.map((t, i) => (
                <li
                  key={t.year}
                  className="relative w-[220px] shrink-0 rounded-2xl border border-line bg-raise/40 p-5"
                >
                  <span className="font-mono text-[0.7rem] tracking-[0.14em] text-ember">
                    {t.year}
                  </span>
                  <p className="mt-2.5 text-[0.85rem] leading-snug text-ink-soft">{t.text}</p>
                  {i < timeline.length - 1 && (
                    <span
                      className="absolute -right-[10px] top-1/2 hidden h-px w-[10px] bg-line md:block"
                      aria-hidden="true"
                    />
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
