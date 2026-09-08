import { Suspense, lazy, useCallback, useEffect, useState } from 'react';
import { ScrollProgress, Spotlight } from './components/Chrome';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Work from './components/Work';
import Skills from './components/Skills';
import Research from './components/Research';
import Contact from './components/Contact';

// three.js is the heaviest thing on the page and it is pure decoration,
// so it loads after the hero has painted.
const EmberField = lazy(() => import('./components/EmberField'));

const STORAGE_KEY = 'sumit-theme';

function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* private mode — the choice just won't persist */
    }
  }, [theme]);

  const toggle = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), []);
  return [theme, toggle];
}

export default function App() {
  const [theme, toggleTheme] = useTheme();
  const [ambient, setAmbient] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setAmbient(true), 900);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <div className="grain relative min-h-screen overflow-x-hidden">
      {/* ambient layers */}
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
        {ambient && (
          <Suspense fallback={null}>
            <EmberField theme={theme} />
          </Suspense>
        )}
      </div>
      <Spotlight />
      <ScrollProgress />

      <Nav theme={theme} onToggleTheme={toggleTheme} />

      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Work />
        <Skills />
        <Research />
        <Contact />
      </main>
    </div>
  );
}
