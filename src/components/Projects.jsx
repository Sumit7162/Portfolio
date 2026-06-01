import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Film, LineChart, Leaf, Mic, Globe, Code, Music, Brain, BookOpen, Zap } from 'lucide-react';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'AI & ML', 'Web Development', 'Full Stack', 'Python'];

  const projects = [
    {
      title: "Soundify — AI-Powered Music Streaming Platform",
      category: "Web Development",
      duration: "2026",
      description: [
        "Premium music streaming web application with responsive UI inspired by modern music platforms",
        "Context-aware audio player with shuffle, repeat, mute, real-time progress tracking, and dynamic queue generation",
        "Integrated Last.fm API for real-time music search, trending charts, and genre-based recommendations",
        "Light/dark theme support, persistent liked songs library, and mobile-first responsive navigation"
      ],
      tags: ["React 19", "Vite", "React Router 7", "Last.fm API", "Axios", "Vanilla CSS"],
      icon: <Music className="w-8 h-8 text-accent" />,
      github: "https://github.com/Sumit7162",
      live: "https://soundify-roan.vercel.app/"
    },
    {
      title: "AgriOne — AI-Based Smart Farming Platform",
      category: "Full Stack",
      duration: "2024 - Present",
      description: [
        "AI-powered agriculture platform helping farmers improve crop yield through intelligent recommendations",
        "Integrated Google Gemini API for crop analysis, personalized farming insights, and predictive suggestions",
        "Real-time monitoring and data visualization features for sustainable farming and resource optimization",
        "Firebase Authentication and Firestore database for secure user management and real-time data handling"
      ],
      tags: ["Next.js", "Firebase", "Google Gemini API", "Firestore", "React"],
      icon: <Leaf className="w-8 h-8 text-accent" />,
      github: "https://github.com/Sumit7162/AgriOne",
      live: "https://agri-one-flax.vercel.app"
    },
    {
      title: "ITM Gwalior — Enterprise CMS & RBAC Website System",
      category: "Full Stack",
      duration: "2024 - Present",
      description: [
        "Production-level redevelopment of ITM Gwalior official website with scalable modern architecture",
        "Full-stack CMS platform with JWT authentication, 50-scope RBAC system, and multi-tier login management",
        "Frontend with React, TailwindCSS, Framer Motion, and React Query for optimized user experience",
        "Backend with FastAPI, SQLAlchemy, Alembic, PostgreSQL, and Redis caching; CI/CD with Docker and GitHub Actions"
      ],
      tags: ["React 19", "Vite", "TailwindCSS", "FastAPI", "PostgreSQL", "Redis", "Docker"],
      icon: <Globe className="w-8 h-8 text-accent" />,
      github: "https://github.com/Sumit7162/itm_goi",
      live: "https://itm-goi.vercel.app"
    },
    {
      title: "AI IDE — Intelligent Browser-Based Code Editor",
      category: "Full Stack",
      duration: "2024 - 2025",
      description: [
        "VS Code–inspired browser IDE with integrated AI coding assistant and real-time streaming chat support",
        "Monaco Editor with syntax highlighting, IntelliSense, multi-tab editing, and project-wide search",
        "AI-powered code generation and debugging assistant using Hugging Face open-source LLM APIs",
        "Real-time terminal support using WebSocket and Xterm.js with advanced IDE functionalities"
      ],
      tags: ["React 19", "Monaco Editor", "FastAPI", "Hugging Face API", "Xterm.js", "WebSocket"],
      icon: <Code className="w-8 h-8 text-accent" />,
      github: "https://github.com/Sumit7162",
      live: null
    },
    {
      title: "Llama Indian History Chatbot — RAG-Based AI Assistant",
      category: "AI & ML",
      duration: "2024 - 2025",
      description: [
        "Production-ready AI chatbot focused on Indian History using Retrieval-Augmented Generation (RAG)",
        "Fine-tuned Llama-based models with FAISS vector search for contextual question answering",
        "Streaming chat responses with markdown rendering, syntax highlighting, and persistent session memory",
        "Document embedding pipeline and retrieval system using LangChain and Sentence Transformers"
      ],
      tags: ["React", "Vite", "TailwindCSS", "FastAPI", "LangChain", "FAISS", "Hugging Face", "Docker"],
      icon: <BookOpen className="w-8 h-8 text-accent" />,
      github: "https://github.com/Sumit7162",
      live: null
    },
    {
      title: "Movie Recommendation & Review Platform",
      category: "AI & ML",
      duration: "Mar 2025 - Apr 2025",
      description: [
        "Content-based movie recommendation system using cosine similarity and machine learning techniques",
        "Integrated TMDB and OMDB APIs to fetch real-time movie details, posters, ratings, and metadata",
        "Interactive recommendation interface enabling personalized movie discovery experiences",
        "Data preprocessing and vectorization techniques for accurate recommendation performance"
      ],
      tags: ["Python", "Streamlit", "TMDB API", "OMDB API", "Scikit-learn", "ML"],
      icon: <Film className="w-8 h-8 text-accent" />,
      github: "https://github.com/Sumit7162/Movies-recommendation-system",
      live: null
    },
    {
      title: "Voice Assistant for Windows System Control",
      category: "Python",
      duration: "Nov 2025 - Dec 2025",
      description: [
        "Desktop voice assistant capable of executing Windows system commands through speech input",
        "Speech recognition and text-to-speech functionalities for hands-free interaction",
        "Automated operations including opening applications, web browsing, and basic system control tasks",
        "Natural language command processing with interactive responses for improved usability"
      ],
      tags: ["Python", "SpeechRecognition", "pyttsx3", "System Automation"],
      icon: <Mic className="w-8 h-8 text-accent" />,
      github: "https://github.com/Sumit7162/Voice-Assistant",
      live: null
    },
    {
      title: "California House Price Predictor",
      category: "AI & ML",
      duration: "2024",
      description: [
        "Machine Learning pipeline to predict house prices with feature engineering and scaling",
        "Sklearn Standard Scaler for feature normalization and preprocessing",
        "Linear Regression model evaluated with 5-fold Cross Validation for robust performance",
        "Visualized actual vs predicted plots using Matplotlib and calculated RMSE metrics"
      ],
      tags: ["Python", "Sklearn", "Pandas", "Matplotlib", "Machine Learning"],
      icon: <LineChart className="w-8 h-8 text-accent" />,
      github: "https://github.com/Sumit7162/Task",
      live: null
    }
  ];

  const filteredProjects = projects.filter(
    proj => activeCategory === 'All' || proj.category === activeCategory
  );

  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto relative z-10 w-full min-h-[80vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
            Featured Projects
          </span>
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-10 rounded-full opacity-60"></div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === cat 
                ? 'bg-[#8B5CF6] text-white shadow-[0_0_15px_rgba(139,92,246,0.5)]' 
                : 'bg-white/5 text-secondary hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.title}
                className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#8B5CF6]/50 transition-all duration-300 backdrop-blur-sm flex flex-col h-full relative"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8B5CF6] to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="p-8 flex-grow">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-black/30 rounded-xl group-hover:bg-[#8B5CF6]/10 transition-colors">
                      {project.icon}
                    </div>
                    <div className="flex gap-3">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer" className="text-secondary/60 hover:text-white transition-colors" title="View Source">
                          <Github size={22} />
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noreferrer" className="text-secondary/60 hover:text-[#8B5CF6] transition-colors" title="Live Preview">
                          <ExternalLink size={22} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-[#8B5CF6]/80 text-sm font-medium mb-6 font-mono">{project.duration}</p>

                  <ul className="text-secondary/80 space-y-3 mb-8">
                    {project.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#8B5CF6] mt-1">▹</span>
                        <span className="leading-relaxed text-sm lg:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="px-8 pb-8 pt-4 border-t border-white/5 bg-black/20 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs font-mono px-3 py-1 bg-white/5 text-secondary rounded-full border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* GitHub Activity Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 bg-black/20 border border-white/10 rounded-2xl p-8 backdrop-blur-sm flex flex-col sm:flex-row justify-between items-center text-center sm:text-left hover:bg-white/5 transition-all duration-300"
        >
          <div className="flex items-center gap-6 mb-6 sm:mb-0">
            <Github className="w-12 h-12 text-secondary/50 group-hover:text-[#8B5CF6] transition-colors hidden sm:block" />
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">More on GitHub</h3>
              <p className="text-secondary/70">246+ contributions in the last year</p>
            </div>
          </div>
          <a 
            href="https://github.com/Sumit7162" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-[#8B5CF6]/50 text-[#8B5CF6] rounded-full hover:bg-[#8B5CF6] hover:text-white transition-all font-medium whitespace-nowrap"
          >
            View Full Profile
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
