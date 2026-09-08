/**
 * Every word on this site comes from one of two places: Sumit's AI/ML resume
 * or his SDE resume (plus public repo metadata). Edit here, not in components.
 */

export const profile = {
  name: 'Sumit Sharma',
  roles: [
    'AI/ML Engineer',
    'Full-Stack Engineer',
    'RAG & LLM Systems',
    'B.Tech CSE — Data Science',
  ],
  headline: ['I build systems', 'that read, reason', 'and ship.'],
  blurb:
    'AI/ML engineer and B.Tech CSE (Data Science) student. I take generative AI from notebook to production — LoRA fine-tuning on Llama 3.2, retrieval over pgvector and FAISS, Whisper pipelines — and I ship the full-stack product around it in React and FastAPI.',
  location: 'Gwalior, Madhya Pradesh, India',
  email: 'sharmasumit716210@gmail.com',
  phone: '+91 74407 37038',
  availability: 'Open to AI/ML and SDE roles — 2027 batch',
  links: {
    github: 'https://github.com/Sumit7162',
    linkedin: 'https://www.linkedin.com/in/sumit-sharma-a021862a6',
    instagram: 'https://www.instagram.com/__sum__052',
    site: 'https://itmgoi.in',
  },
  resumes: [
    { label: 'AI/ML Engineer', file: '/Sumit_Sharma_AIML_Resume.pdf' },
    { label: 'Software Engineer', file: '/Sumit_Sharma_SDE_Resume.pdf' },
  ],
};

/** Hero counters — resume figures, plus the deployment count from `github` below. */
export const stats = [
  { value: 340, suffix: '+', label: 'REST endpoints shipped' },
  { value: 164, suffix: '', label: 'routes live in production' },
  { value: 9, suffix: '', label: 'projects live on a URL' },
  { value: 2, suffix: '', label: 'research papers published' },
];

/**
 * Counted from the GitHub REST API in September 2026 (github.com/Sumit7162).
 *
 * 23 public repositories, of which 3 are forks of other people's tools
 * (github-readme-stats, github-readme-streak-stats, github-profile-trophy),
 * leaving 20 written by Sumit. Two of those 20 are not projects — the
 * Sumit7162 profile README and My-commit — so 18 are real work, plus the two
 * ITM systems and Soundify, whose repositories are private.
 *
 * `deployed` counts distinct URLs that answered HTTP 200 when checked:
 * itmgoi.in, test-hub-seven.vercel.app, vnotes-lime.vercel.app,
 * soundify-roan.vercel.app, ai-ide-upendra.vercel.app,
 * cosmos-peach-alpha.vercel.app, agri-one-flax.vercel.app,
 * run-code.lovable.app and portfolio-five-sigma-49.vercel.app.
 */
export const github = {
  url: 'https://github.com/Sumit7162',
  checked: 'September 2026',
  since: 'November 2024',
  counts: [
    { n: 23, label: 'public repositories' },
    { n: 20, label: 'written by me', note: 'the other 3 are forks' },
    { n: 9, label: 'deployed and reachable', note: 'checked, not claimed' },
    { n: 6, label: 'languages in use', note: 'Python, TS, JS, C++, HTML, Jupyter' },
  ],
};

export const marquee = [
  'Python', 'PyTorch', 'Hugging Face', 'LoRA / PEFT', 'LangChain', 'RAG',
  'pgvector', 'FAISS', 'Whisper', 'FastAPI', 'React 19', 'TypeScript',
  'Tailwind CSS', 'PostgreSQL', 'Redis', 'Docker', 'Google Cloud Run', 'CI/CD',
];

export const about = {
  paragraphs: [
    "I'm a B.Tech Computer Science (Data Science) student at ITM Gwalior, and since January 2025 I've been the web development intern who actually owns the institute's production surface — the public site, the enterprise CMS behind it, and the RAG assistant that answers questions about it.",
    'That job taught me the unglamorous half of AI engineering. Anyone can call an LLM; the work is the ingestion pipeline, the intent router that keeps cost at zero for the easy questions, the guardrails that stop hallucination, and the cold-start bug that quietly eats your vector store on Cloud Run.',
    'Away from the institute I fine-tune models for fun — IthaasAI is a Llama-3.2-3B adapter trained on Indian history and published to the Hugging Face Hub — and I write. Two papers in IJAMRED and a chapter with IIP International.',
  ],
  facts: [
    { k: 'Now', v: 'Web Development Intern at ITM Gwalior', hint: 'Jan 2025 — present' },
    { k: 'Studying', v: 'B.Tech CSE (Data Science), CGPA 7.50', hint: 'ITM Gwalior · 2023–2027' },
    { k: 'Depth in', v: 'RAG, LoRA fine-tuning, LLM agents', hint: 'PyTorch · Transformers · LangChain' },
    { k: 'Also fluent', v: 'React 19, FastAPI, PostgreSQL', hint: 'plus Docker & Cloud Run' },
    { k: 'Published', v: '2 papers + 1 book chapter', hint: 'IJAMRED 2025 · IIP 2026' },
    { k: 'Based in', v: 'Gwalior, India', hint: 'open to remote & relocation' },
  ],
};

export const experience = [
  {
    role: 'Web Development Intern — Full-Stack & AI Assistant',
    org: 'ITM Gwalior',
    place: 'Gwalior, India',
    period: 'Jan 2025 — Present',
    current: true,
    bullets: [
      'Built and shipped the official ITM Gwalior website, enterprise CMS and RAG-based AI assistant on React, FastAPI, PostgreSQL and Redis: 340+ REST endpoints, 70 SQLAlchemy models, 65 public pages and 17 admin modules.',
      'Implemented RBAC with 60 granular scopes and 22 role presets, JWT access/refresh rotation, Argon2 hashing, brute-force lockout, audit logging and Redis-backed rate limiting — all covered by a pytest suite.',
      'Owned deployment end to end: Dockerized API on Google Cloud Run via Cloud Build CI/CD, Supabase PostgreSQL, Cloudflare R2 storage, Redis read-through caching, and a prerendered React frontend on Vercel.',
    ],
    stack: ['React 19', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'Cloud Run'],
  },
  {
    role: 'Data Analytics Intern',
    org: 'Navodita Infotech',
    place: 'Remote',
    period: 'May 2025 — Jun 2025',
    current: false,
    bullets: [
      'Performed data cleaning, preprocessing and exploratory data analysis on client datasets in Python with Pandas and NumPy.',
      'Delivered visualizations and written reports that fed directly into data-driven business decisions.',
    ],
    stack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'EDA'],
  },
];

export const projects = [
  {
    id: 'itm-platform',
    title: 'ITM Gwalior',
    kicker: 'Website, CMS and RAG assistant',
    tracks: ['AI & ML', 'Full-Stack'],
    year: '2025 — 2026',
    summary:
      "The institute's entire production surface, built and shipped as one system: the public website, the admin CMS that edits it in place, and the retrieval agent that answers questions about it. 340+ endpoints behind 164 routes, with the whole thing deployed on Cloud Run and Vercel.",
    groups: [
      {
        label: 'The website and CMS',
        bullets: [
          '164 routes, 64 public pages, 17 admin modules and a dynamic-page route so admin-created URLs ship without a redeploy; dark mode, Framer Motion, GA4 and Vercel Analytics.',
          'Performance: 127 lazy-loaded routes, manual vendor/admin chunking into 97 chunks so admin code never reaches visitors, viewport-deferred home sections, lazy images, immutable asset caching.',
          'SEO: a zero-dependency prerender script emitting static HTML with per-route meta for 95 routes, a dynamic sitemap generator and a custom head manager for OpenGraph, Twitter cards and JSON-LD.',
          'Admin CMS UI: draft/publish editor with 6 block types, live in-place editing on the public site via contentEditable with debounced saves and cross-tab sync, scope-gated components over 60 RBAC scopes, Axios single-flight JWT refresh.',
        ],
      },
      {
        label: 'The AI assistant',
        bullets: [
          'Ingestion pipeline of 11 scrapers across 24 public JSON APIs, a BFS website crawler and a PDF ingestor; paragraph-aware 512-word chunks with 64-word overlap.',
          '384-dim all-MiniLM-L6-v2 embeddings in PostgreSQL/pgvector behind an HNSW cosine index — migrated off ChromaDB to fix Cloud Run cold-start data loss.',
          'Zero-LLM-cost intent router over 18 categories and 118 keywords dispatching to a SQL tool, category-filtered semantic search or direct chat.',
          'Cascading retrieval fallbacks, anti-hallucination guardrails, exponential-backoff retries and SSE token streaming with page-link suggestions.',
        ],
      },
      {
        label: 'Platform and delivery',
        bullets: [
          '340+ REST endpoints over 70 SQLAlchemy models, with RBAC across 60 granular scopes and 22 role presets.',
          'JWT access/refresh rotation, Argon2 hashing, brute-force lockout, audit logging and Redis-backed rate limiting, covered by a pytest suite.',
          'Dockerized API on Google Cloud Run via Cloud Build CI/CD, Supabase PostgreSQL, Cloudflare R2 storage, Redis read-through caching, prerendered React frontend on Vercel.',
        ],
      },
    ],
    metrics: [
      { n: '340+', l: 'REST endpoints' },
      { n: '164', l: 'routes' },
      { n: '60', l: 'RBAC scopes' },
      { n: '11', l: 'scrapers' },
      { n: '118', l: 'router keywords' },
      { n: '95', l: 'prerendered pages' },
    ],
    stack: [
      'React 19', 'Vite 7', 'Tailwind CSS', 'TanStack Query', 'FastAPI', 'PostgreSQL',
      'pgvector', 'Redis', 'LangChain', 'Sentence Transformers', 'Llama 3.1 70B',
      'Docker', 'Cloud Run', 'Vercel',
    ],
    live: 'https://itmgoi.in',
    liveLabel: 'Visit itmgoi.in',
    repo: null,
    flagship: true,
  },
  {
    id: 'ithaas',
    title: 'IthaasAI',
    kicker: 'Fine-tuned Indian history chatbot',
    tracks: ['AI & ML'],
    year: '2026',
    summary:
      'A Llama-3.2-3B-Instruct adapter trained on curated Indian-history data and published to the Hugging Face Hub, then paired with retrieval so every answer cites its source.',
    bullets: [
      'LoRA fine-tune at rank 16, alpha 32, dropout 0.05 across all 7 attention and MLP projection modules.',
      'Adapter published to the Hugging Face Hub with a loader that resolves base model plus PEFT adapter and selects CUDA / MPS / CPU with fp16 inference.',
      'RAG layer: 500/50 recursive chunking, all-MiniLM-L6-v2 embeddings, FAISS top-3 retrieval with source citations and relevance scores.',
      'Token-by-token SSE streaming, 10-turn session memory, Docker Compose deployment, Colab/Kaggle T4 GPU serving.',
    ],
    metrics: [
      { n: 'r=16', l: 'LoRA rank' },
      { n: '7', l: 'projection modules' },
      { n: 'top-3', l: 'FAISS retrieval' },
    ],
    stack: ['Llama 3.2', 'LoRA / PEFT', 'Hugging Face', 'PyTorch', 'FAISS', 'FastAPI'],
    live: null,
    repo: 'https://github.com/Sumit7162/ItihaasAI',
    flagship: true,
  },
  {
    id: 'vnotes',
    title: 'VNotes',
    kicker: 'AI YouTube notes generator',
    tracks: ['AI & ML'],
    year: '2026',
    summary:
      "Paste a YouTube URL, get structured study notes. Captions when they exist, Whisper when they don't, then an LLM that writes LaTeX-aware Markdown with chapters and action items.",
    bullets: [
      'Transcript-to-notes pipeline: YouTube captions with auto-translation to English, falling back to audio download and Groq whisper-large-v3 with a domain-biased vocabulary prompt and ffmpeg compression to the 25 MB limit.',
      'Prompt-engineered generation of LaTeX-aware Markdown notes, chapters, summaries and action items via dual providers (Groq GPT-OSS-120B, NVIDIA Llama-3.1-70B).',
      'Reliability: background jobs on a 7-state status machine, backoff retries, tiered daily usage quotas returning HTTP 429, Google OAuth exchanged for JWT.',
      'TypeScript React SPA with Google One Tap, adaptive TanStack Query polling (3s while jobs run, off when idle), a 6-step live progress stepper, Markdown + KaTeX rendering, download and print-to-PDF.',
    ],
    metrics: [
      { n: '7', l: 'state job machine' },
      { n: '2', l: 'LLM providers' },
      { n: '25MB', l: 'audio budget' },
    ],
    stack: ['FastAPI', 'PostgreSQL', 'Groq Whisper', 'React', 'TypeScript', 'Cloud Run'],
    live: 'https://vnotes-lime.vercel.app',
    repo: 'https://github.com/Sumit7162/VNotes-Frontend',
    flagship: true,
  },
  {
    id: 'testhub',
    title: 'TestHub',
    kicker: 'Secure online exam platform',
    tracks: ['Full-Stack'],
    year: '2026',
    summary:
      'A proctored exam platform where the browser is treated as hostile: eight cheat signals on the client, but every deadline, score and answer boundary enforced on the server.',
    bullets: [
      '39 REST endpoints across 4 routers, 7 PostgreSQL tables on async SQLAlchemy with asyncpg, and 17 frontend routes.',
      'Three login flows — password, hashed email OTP with Brevo/Resend/SMTP fallback, and Google OAuth 2.0 — issuing three-scope JWTs (admin, user, attempt).',
      '8-signal anti-cheat hook: tab switch, fullscreen exit, DevTools debugger-trap and window-delta detection, clipboard and shortcut blocking, with server-side violation thresholds.',
      'Server-authoritative deadlines, answer-leak-safe schemas, frozen shuffled question sets, and bulk question import from JSONL, JSON, CSV and PDF.',
    ],
    metrics: [
      { n: '39', l: 'endpoints' },
      { n: '8', l: 'anti-cheat signals' },
      { n: '3', l: 'auth flows' },
    ],
    stack: ['React 18', 'Vite', 'FastAPI', 'SQLAlchemy', 'PostgreSQL', 'JWT'],
    live: 'https://test-hub-seven.vercel.app/',
    liveLabel: 'Try the demo',
    repo: 'https://github.com/Sumit7162/TestHub',
    flagship: true,
  },
  {
    id: 'soundify',
    title: 'Soundify',
    kicker: 'Music streaming platform',
    tracks: ['Full-Stack'],
    year: '2026',
    summary:
      'A premium music streaming client: a context-aware player with shuffle, repeat, mute and a dynamic queue, backed by Last.fm search and charts.',
    bullets: [
      'Context-aware audio player with shuffle, repeat, mute, real-time progress tracking and dynamic queue generation.',
      'Last.fm API integration for real-time music search, trending charts and genre-based recommendations.',
      'Light/dark theming, a persistent liked-songs library and mobile-first responsive navigation.',
      'React 19 with React Router 7 and Axios, styled in hand-written CSS rather than a framework.',
    ],
    metrics: [
      { n: 'React 19', l: 'front end' },
      { n: 'Last.fm', l: 'music data' },
      { n: 'live', l: 'on Vercel' },
    ],
    stack: ['React 19', 'Vite', 'React Router 7', 'Last.fm API', 'Axios', 'CSS'],
    live: 'https://soundify-roan.vercel.app/',
    liveLabel: 'Open Soundify',
    repo: null,
    flagship: false,
  },
  {
    id: 'agrione',
    title: 'AgriOne',
    kicker: 'AI-assisted smart farming',
    tracks: ['Full-Stack'],
    year: '2025 — 2026',
    summary:
      'An agriculture platform that turns crop data into plain-language recommendations for farmers, with Gemini doing the analysis and Firebase holding the state.',
    bullets: [
      'Google Gemini API integration for crop analysis, personalised farming insights and predictive suggestions.',
      'Real-time monitoring and data visualisation aimed at resource optimisation and sustainable practice.',
      'Firebase Authentication and Firestore for secure user management and live data handling.',
      'Built on Next.js with a React component layer and server-side rendering.',
    ],
    metrics: [
      { n: 'Gemini', l: 'analysis model' },
      { n: 'Firestore', l: 'live data' },
      { n: 'SSR', l: 'Next.js' },
    ],
    stack: ['Next.js', 'React', 'Firebase', 'Firestore', 'Google Gemini API'],
    live: 'https://agri-one-flax.vercel.app',
    liveLabel: 'Open AgriOne',
    repo: 'https://github.com/Sumit7162/AgriOne',
    flagship: false,
  },
  {
    id: 'ai-ide',
    title: 'AI IDE',
    kicker: 'Browser-based code editor',
    tracks: ['Full-Stack'],
    year: '2025 — 2026',
    summary:
      'A VS Code-shaped IDE that runs in the browser: Monaco for editing, a real terminal over WebSocket, and an AI assistant that streams its answers into a side panel.',
    bullets: [
      'Monaco Editor with syntax highlighting, IntelliSense, multi-tab editing and project-wide search.',
      'AI code generation and debugging assistant over Hugging Face open-source LLM APIs, with real-time streaming chat.',
      'Live terminal support via WebSocket and Xterm.js wired into the editor workspace.',
      'React 19 front end against a FastAPI backend.',
    ],
    metrics: [
      { n: 'Monaco', l: 'editor core' },
      { n: 'Xterm.js', l: 'terminal' },
      { n: 'SSE', l: 'streamed chat' },
    ],
    stack: ['React 19', 'Monaco Editor', 'FastAPI', 'Hugging Face API', 'Xterm.js', 'WebSocket'],
    live: 'https://ai-ide-upendra.vercel.app',
    liveLabel: 'Open the IDE',
    repo: null,
    flagship: false,
  },
  {
    id: 'movies',
    title: 'Movie Recommendation App',
    kicker: 'Three APIs, one Flask app',
    tracks: ['Full-Stack'],
    year: '2025',
    summary:
      'A server-rendered Flask app stitching TMDB, OMDb and the YouTube Data v3 API into search, recommendations and detail pages with trailers.',
    bullets: [
      'Integrated TMDB, OMDb and YouTube Data v3 behind a shared HTTP session with 3-attempt exponential-backoff retries.',
      'Jinja2 detail pages with embedded trailers, graceful error pages and a light/dark CSS theme system.',
    ],
    metrics: [
      { n: '3', l: 'external APIs' },
      { n: '3x', l: 'backoff retries' },
    ],
    stack: ['Python', 'Flask', 'Jinja2', 'REST APIs', 'JavaScript'],
    live: null,
    repo: 'https://github.com/Sumit7162/Movies-recommendation-system',
    flagship: false,
  },
];

/**
 * Smaller repos worth a line, not a card. `live` is filled in only where a
 * deployment actually answered when checked.
 */
export const alsoBuilt = [
  { name: 'COSMOS', note: 'universe explorer', url: 'https://github.com/Sumit7162/COSMOS', live: 'https://cosmos-peach-alpha.vercel.app' },
  { name: 'RunCode', note: 'in-browser runner', url: 'https://github.com/Sumit7162/run-code', live: 'https://run-code.lovable.app' },
  { name: 'YT-Downloader', note: 'JavaScript', url: 'https://github.com/Sumit7162/YT-Downloader', live: null },
  { name: 'Voice Assistant', note: 'speech + OS automation', url: 'https://github.com/Sumit7162/Voice-Assistant', live: null },
  { name: 'E-Product-Recommendation', note: 'recommender UI', url: 'https://github.com/Sumit7162/E-Product-Recommendation', live: null },
  { name: 'Online Whiteboard', note: 'canvas drawing', url: 'https://github.com/Sumit7162/online-whiteboard', live: null },
  { name: 'Textual-vid', note: 'Python video tooling', url: 'https://github.com/Sumit7162/Textual-vid', live: null },
  { name: 'Brightness & Volume Controller', note: 'gesture control', url: 'https://github.com/Sumit7162/Brightness-Volume-Controller', live: null },
];

export const skills = [
  {
    group: 'Languages',
    items: ['Python', 'TypeScript', 'JavaScript (ES6+)', 'SQL', 'C++', 'C', 'HTML5', 'CSS3'],
  },
  {
    group: 'ML & Deep Learning',
    items: ['PyTorch', 'Hugging Face Transformers', 'PEFT / LoRA fine-tuning', 'Sentence Transformers', 'Embeddings', 'NLP', 'Pandas', 'NumPy', 'Matplotlib', 'EDA'],
  },
  {
    group: 'Generative AI & LLMs',
    items: ['RAG', 'LangChain', 'Prompt engineering', 'LLM agents & tool use', 'Guardrails', 'SSE streaming', 'Whisper', 'Groq', 'NVIDIA NIM', 'Gemini', 'OpenAI'],
  },
  {
    group: 'Frontend',
    items: ['React 18 / 19', 'Vite', 'Tailwind CSS', 'React Router', 'TanStack Query', 'Framer Motion', 'Code splitting', 'SSG & SEO'],
  },
  {
    group: 'Backend & data',
    items: ['FastAPI', 'Flask', 'REST API design', 'SQLAlchemy (async)', 'Alembic', 'Pydantic', 'JWT', 'OAuth 2.0', 'RBAC', 'PostgreSQL', 'pgvector', 'Redis', 'MySQL', 'Supabase', 'FAISS', 'ChromaDB'],
  },
  {
    group: 'DevOps & MLOps',
    items: ['Docker', 'Google Cloud Run', 'Cloud Build CI/CD', 'Vercel', 'Render', 'Git & GitHub', 'Linux', 'pytest', 'ESLint'],
  },
];

export const education = {
  school: 'Institute of Technology and Management, Gwalior',
  degree: 'B.Tech — Computer Science & Engineering (Data Science)',
  period: '2023 — 2027',
  cgpa: '7.50',
  place: 'Gwalior, India',
};

export const research = [
  {
    kind: 'Research paper',
    venue: 'IJAMRED, 2025',
    title: 'Neuron Lifecycle in Deep Networks',
  },
  {
    kind: 'Research paper',
    venue: 'IJAMRED, 2025',
    title: 'Data-Driven Sustainability: Cognitive Decision Intelligence to Reduce Medical Waste in Pharmaceutical Logistics',
  },
  {
    kind: 'Book chapter',
    venue: 'IIP International Publication, 2026',
    title: 'Research chapter contribution',
  },
];

export const certifications = [
  { name: 'Oracle Fusion AI Agent Studio Foundations Associate (Rel 1)', by: 'Oracle', year: '2025' },
  { name: 'Deep Learning', by: 'IIT Ropar', year: '2025' },
  { name: 'AI & ML Virtual Internship', by: 'Google', year: '2025' },
  { name: 'Data Science Master Certification', by: 'Altair', year: '2025' },
  { name: 'Data Analytics', by: 'Alteryx', year: '2025' },
];

export const timeline = [
  { year: '2023', text: 'Started B.Tech CSE (Data Science) at ITM Gwalior.' },
  { year: '2024', text: 'Went deep on Python, ML fundamentals and full-stack web.' },
  { year: 'Jan 2025', text: 'Joined ITM Gwalior as web development intern; began owning the production site.' },
  { year: 'Mid 2025', text: 'Data analytics internship at Navodita Infotech; two papers published in IJAMRED.' },
  { year: '2026', text: 'Shipped the RAG assistant, TestHub and VNotes; fine-tuned and published IthaasAI.' },
  { year: '2027', text: 'Graduating — targeting AI/ML and software engineering roles.' },
];
