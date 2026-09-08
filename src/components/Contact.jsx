import { motion } from 'framer-motion';
import { ArrowUpRight, Download, Github, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import { Reveal } from './ui';
import { profile } from '../data/content';
import { asset } from '../lib/asset';

const FIELD =
  'w-full rounded-xl border border-line bg-raise/40 px-4 py-3.5 text-[0.92rem] text-ink placeholder:text-ink-faint transition-colors focus:border-ember/60 focus:outline-none focus:ring-1 focus:ring-ember/40';

/**
 * No backend here, so the form composes a real mailto with everything the
 * visitor typed already in the body — nothing silently disappears.
 */
function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const subject = form.subject || `Portfolio enquiry from ${form.name}`;
    const body = [
      form.message,
      '',
      '—',
      form.name && `From: ${form.name}`,
      form.email && `Reply to: ${form.email}`,
    ]
      .filter(Boolean)
      .join('\n');
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          className={FIELD}
          placeholder="Your name"
          required
          value={form.name}
          onChange={set('name')}
        />
        <input
          className={FIELD}
          type="email"
          placeholder="Your email"
          required
          value={form.email}
          onChange={set('email')}
        />
      </div>
      <input
        className={FIELD}
        placeholder="Subject"
        value={form.subject}
        onChange={set('subject')}
      />
      <textarea
        className={`${FIELD} resize-none`}
        rows={5}
        placeholder="What are you building?"
        required
        value={form.message}
        onChange={set('message')}
      />
      <button
        type="submit"
        className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-ember px-7 py-4 text-sm font-medium text-sunken transition-transform hover:-translate-y-0.5 sm:w-auto"
      >
        Compose the email
        <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>
      <p className="font-mono text-[0.66rem] text-ink-faint">
        Opens your mail client with everything above already filled in.
      </p>
    </form>
  );
}

export default function Contact() {
  const socials = [
    { Icon: Github, href: profile.links.github, label: 'GitHub' },
    { Icon: Linkedin, href: profile.links.linkedin, label: 'LinkedIn' },
    { Icon: Instagram, href: profile.links.instagram, label: 'Instagram' },
  ];

  return (
    <section id="contact" className="relative px-6 pb-14 pt-24 md:pt-32">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <div className="border-t border-line pt-6">
            <span className="eyebrow">06 — contact</span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="display mt-6 max-w-3xl text-5xl leading-[0.95] text-ink md:text-7xl">
            Let's build something
            <br />
            <em className="not-italic text-ember">worth deploying.</em>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-14 lg:grid-cols-12 lg:gap-10">
          {/* direct lines */}
          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="space-y-1">
              {[
                { Icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
                { Icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
                { Icon: MapPin, label: 'Location', value: profile.location, href: null },
              ].map(({ Icon, label, value, href }) => {
                const inner = (
                  <>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line text-ink-faint transition-colors group-hover:border-ember/50 group-hover:text-ember">
                      <Icon size={15} />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-mono text-[0.62rem] uppercase tracking-[0.2em] text-ink-faint">
                        {label}
                      </span>
                      <span className="mt-1 block truncate text-[0.95rem] text-ink transition-colors group-hover:text-ember">
                        {value}
                      </span>
                    </span>
                  </>
                );
                return href ? (
                  <a key={label} href={href} className="group flex items-center gap-4 border-b border-line py-4">
                    {inner}
                  </a>
                ) : (
                  <div key={label} className="group flex items-center gap-4 border-b border-line py-4">
                    {inner}
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {profile.resumes.map((r) => (
                <a
                  key={r.file}
                  href={asset(r.file)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-ember/40 bg-ember/10 px-4 py-2.5 text-[0.8rem] text-ember transition-colors hover:bg-ember/20"
                >
                  <Download size={13} />
                  {r.label} résumé
                </a>
              ))}
            </div>

            <div className="mt-8 flex gap-2">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink-faint transition-colors hover:border-ember/50 hover:text-ember"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </Reveal>

          {/* form */}
          <Reveal delay={0.15} className="lg:col-span-7">
            <ContactForm />
          </Reveal>
        </div>

        {/* footer */}
        <footer className="mt-24 flex flex-col gap-6 border-t border-line pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <img
              src={asset("/sumit-portrait-sm.webp")}
              alt=""
              width={28}
              height={28}
              loading="lazy"
              className="h-7 w-7 rounded-full object-cover object-top ring-1 ring-ember/30"
            />
            <p className="font-mono text-[0.7rem] text-ink-faint">
              © {new Date().getFullYear()} {profile.name} — built with React, Vite & Tailwind CSS
            </p>
          </div>
          <motion.a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            whileHover={{ y: -2 }}
            className="link-draw self-start font-mono text-[0.7rem] uppercase tracking-[0.18em] text-ink-soft md:self-auto"
          >
            Back to top ↑
          </motion.a>
        </footer>
      </div>
    </section>
  );
}
