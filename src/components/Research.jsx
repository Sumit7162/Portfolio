import { Award, FileText, GraduationCap } from 'lucide-react';
import { Reveal, Section } from './ui';
import { certifications, education, research } from '../data/content';

export default function Research() {
  return (
    <Section
      id="research"
      index={5}
      title="Papers & paper trail"
      lead="Two published papers, a book chapter in press, a degree in progress and the certifications behind the skill list."
    >
      {/* degree band */}
      <Reveal>
        <div className="mb-12 flex flex-col gap-6 rounded-2xl border border-line bg-raise/40 p-7 md:flex-row md:items-center md:justify-between md:p-9">
          <div className="flex items-start gap-5">
            <span className="mt-1 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-ember/40 bg-ember/10 text-ember">
              <GraduationCap size={19} />
            </span>
            <div>
              <h3 className="display text-2xl text-ink md:text-3xl">{education.school}</h3>
              <p className="mt-1.5 text-[0.92rem] text-ink-soft">{education.degree}</p>
              <p className="mt-1 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-ink-faint">
                {education.period} · {education.place}
              </p>
            </div>
          </div>
          <div className="shrink-0 border-line pl-0 md:border-l md:pl-9">
            <p className="display text-4xl text-ember md:text-5xl">{education.cgpa}</p>
            <p className="mt-1 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-ink-faint">
              CGPA
            </p>
          </div>
        </div>
      </Reveal>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* publications */}
        <div>
          <div className="mb-7 flex items-center gap-3 border-b border-line pb-4">
            <FileText size={16} className="text-ember" />
            <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink">
              Publications
            </h3>
          </div>
          <ol className="space-y-7">
            {research.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.08}>
                <li className="group flex gap-5">
                  <span className="font-mono text-[0.7rem] text-ink-faint">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="text-[1.02rem] leading-snug text-ink transition-colors group-hover:text-ember">
                      {r.title}
                    </p>
                    <p className="mt-2 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-ink-faint">
                      {r.kind} · {r.venue}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* certifications */}
        <div>
          <div className="mb-7 flex items-center gap-3 border-b border-line pb-4">
            <Award size={16} className="text-ember" />
            <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink">
              Certifications
            </h3>
          </div>
          <ul className="divide-y divide-line">
            {certifications.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.05}>
                <li className="flex items-baseline justify-between gap-5 py-4">
                  <div>
                    <p className="text-[0.94rem] leading-snug text-ink">{c.name}</p>
                    <p className="mt-1 text-[0.78rem] text-ink-faint">{c.by}</p>
                  </div>
                  <span className="shrink-0 font-mono text-[0.68rem] text-ember">{c.year}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
