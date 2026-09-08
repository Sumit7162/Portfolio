import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Download, Menu, Moon, Sun, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { profile } from "../data/content";
import { asset } from "../lib/asset";

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Research', href: '#research' },
  { label: 'Contact', href: '#contact' },
];

/** Tracks which section owns the viewport so the nav can mark it. */
function useActiveSection() {
  const [active, setActive] = useState('');
  useEffect(() => {
    const ids = LINKS.map((l) => l.href.slice(1));
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);
  return active;
}

function ResumeMenu({ onNavigate }) {
  const [open, setOpen] = useState(false);
  const box = useRef(null);

  useEffect(() => {
    const away = (e) => {
      if (box.current && !box.current.contains(e.target)) setOpen(false);
    };
    const esc = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('pointerdown', away);
    document.addEventListener('keydown', esc);
    return () => {
      document.removeEventListener('pointerdown', away);
      document.removeEventListener('keydown', esc);
    };
  }, []);

  return (
    <div ref={box} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex items-center gap-2 rounded-full border border-ember/40 bg-ember/10 px-4 py-2 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-ember transition-colors hover:bg-ember/20"
      >
        <Download size={13} />
        Résumé
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="absolute right-0 top-full z-50 mt-3 w-60 overflow-hidden rounded-2xl border border-line bg-raise/95 p-2 shadow-2xl backdrop-blur-xl"
          >
            <p className="px-3 py-2 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-ink-faint">
              Two tracks, two résumés
            </p>
            {profile.resumes.map((r) => (
              <a
                key={r.file}
                href={asset(r.file)}
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  setOpen(false);
                  onNavigate?.();
                }}
                className="flex items-center justify-between gap-3 rounded-xl px-3 py-3 text-sm text-ink transition-colors hover:bg-ember/10 hover:text-ember"
              >
                {r.label}
                <ArrowUpRight size={15} className="shrink-0 opacity-60" />
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Nav({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menu ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menu]);

  const go = (e, href) => {
    e.preventDefault();
    setMenu(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[65] px-4 pt-4 md:px-6">
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border px-4 py-2.5 transition-all duration-500 md:px-6 ${
            scrolled
              ? 'border-line bg-ground/80 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl'
              : 'border-transparent bg-transparent'
          }`}
        >
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center gap-3"
          >
            <img
              src={asset("/sumit-portrait-sm.webp")}
              alt=""
              width={32}
              height={32}
              className="h-8 w-8 rounded-full object-cover object-top ring-1 ring-ember/40"
            />
            <span className="display text-xl text-ink">
              Sumit<span className="text-ember">.</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {LINKS.map((l) => {
              const on = active === l.href.slice(1);
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => go(e, l.href)}
                  className={`rounded-full px-3.5 py-1.5 text-[0.82rem] transition-colors ${
                    on ? 'bg-ember/12 text-ember' : 'text-ink-soft hover:text-ink'
                  }`}
                >
                  {l.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={onToggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
              className="grid h-9 w-9 place-items-center rounded-full border border-line text-ink-soft transition-colors hover:border-ember/50 hover:text-ember"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
                </motion.span>
              </AnimatePresence>
            </button>

            <div className="hidden md:block">
              <ResumeMenu />
            </div>

            <button
              onClick={() => setMenu(true)}
              aria-label="Open menu"
              className="grid h-9 w-9 place-items-center rounded-full border border-line text-ink lg:hidden"
            >
              <Menu size={16} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile sheet */}
      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-ground/97 backdrop-blur-xl lg:hidden"
          >
            <div className="flex items-center justify-between px-6 pt-7">
              <span className="eyebrow">Menu</span>
              <button
                onClick={() => setMenu(false)}
                aria-label="Close menu"
                className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink"
              >
                <X size={18} />
              </button>
            </div>
            <nav className="mt-12 flex flex-col gap-1 px-6">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => go(e, l.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                  className="flex items-baseline gap-4 border-b border-line py-4"
                >
                  <span className="font-mono text-[0.65rem] text-ember">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="display text-3xl text-ink">{l.label}</span>
                </motion.a>
              ))}
            </nav>
            <div className="mt-10 flex flex-col gap-3 px-6">
              {profile.resumes.map((r) => (
                <a
                  key={r.file}
                  href={asset(r.file)}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-ember/40 bg-ember/10 px-5 py-4 text-sm text-ember"
                >
                  {r.label} résumé
                  <Download size={15} />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
