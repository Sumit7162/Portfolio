import { Reveal, Section } from './ui';
import { skills } from '../data/content';

export default function Skills() {
  return (
    <Section
      id="skills"
      index={4}
      title="Tools I actually use"
      lead="Grouped by what I reach for, not by what looks impressive on a list. Everything here has shipped in a project on this page."
    >
      <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2 xl:grid-cols-3">
        {skills.map((g, i) => (
          <Reveal key={g.group} delay={i * 0.06}>
            <div className="flex h-full flex-col bg-ground/60 p-7 transition-colors hover:bg-raise/60">
              <div className="mb-5 flex items-baseline justify-between gap-3">
                <h3 className="display text-2xl text-ink">{g.group}</h3>
                <span className="font-mono text-[0.62rem] text-ink-faint">
                  {String(g.items.length).padStart(2, '0')}
                </span>
              </div>
              <ul className="flex flex-wrap gap-x-1.5 gap-y-2.5">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-line/70 bg-raise/50 px-2.5 py-1.5 text-[0.8rem] text-ink-soft transition-colors hover:border-ember/40 hover:text-ember"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
