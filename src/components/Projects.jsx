import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Film, LineChart, Leaf, Mic, Globe, Code } from 'lucide-react';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Data Analytics', 'Web Development', 'Machine Learning'];

  const projects = [
    {
      title: "ITM GOI Marketing Website",
      category: "Web Development",
      duration: "2024 - Present",
      description: [
        "A modern, responsive marketing website for ITM Group of Institutions",
        "Built interactive components including Hero section, Events Calendar, and Awards",
        "Optimized for desktop, tablet, and mobile devices with fluid animations",
      ],
      tags: ["React 18", "Tailwind CSS", "Framer Motion", "Lucide React"],
      icon: <Globe className="w-8 h-8 text-accent" />,
      github: "https://github.com/Sumit7162/itm_goi",
      live: "https://itm-goi.vercel.app"
    },
    {
      title: "Movie Recommendation & Review Platform",
      category: "Machine Learning",
      duration: "Mar 2025 - Apr 2025",
      description: [
        "Built a movie recommendation system using TMDB APIs",
        "Utilized cosine similarity on movie feature vectors for Content-Based Filtering",
        "Built an interface to show movie details, ratings, and user reviews",
      ],
      tags: ["Python", "Machine Learning", "Cosine Similarity", "React", "APIs"],
      icon: <Film className="w-8 h-8 text-accent" />,
      github: "https://github.com/Sumit7162/Movies-recommendation-system",
      live: null
    },
    {
      title: "Voice Assistant Manager",
      category: "Data Analytics", // Put here since it involves Python/Speech
      duration: "Nov 2025 - Dec 2025",
      description: [
        "Developed a Python-based voice assistant to control Windows system operations",
        "Utilized speech recognition and text-to-speech for hands-free interactions",
        "Automated execution of applications, browsing, and system commands"
      ],
      tags: ["Python", "Speech Recognition", "OS Automation"],
      icon: <Mic className="w-8 h-8 text-accent" />,
      github: "https://github.com/Sumit7162/Voice-Assistant",
      live: null
    },
    {
      title: "California House Price Predictor",
      category: "Machine Learning",
      duration: "2024",
      description: [
        "Implemented a Machine Learning pipeline to predict house prices",
        "Utilized Sklearn Standard Scaler for feature engineering and scaling",
        "Trained a Linear Regression model evaluating with 5-fold Cross Validation",
        "Visualized actual vs predicted plots using Matplotlib and calculated RMSE"
      ],
      tags: ["Python", "Sklearn", "Pandas", "Matplotlib"],
      icon: <LineChart className="w-8 h-8 text-accent" />,
      github: "https://github.com/Sumit7162/Task",
      live: null
    },
    {
      title: "AgriOne (Firebase Studio)",
      category: "Web Development",
      duration: "2024",
      description: [
        "NextJS starter application integrated with Firebase Studio",
        "Engineered the foundational frontend layout with server-side rendering",
      ],
      tags: ["NextJS", "Firebase", "TypeScript", "React"],
      icon: <Leaf className="w-8 h-8 text-accent" />,
      github: "https://github.com/Sumit7162/AgriOne",
      live: "https://agri-one-flax.vercel.app"
    },
    {
      title: "Code Runner Builder",
      category: "Web Development",
      duration: "2024",
      description: [
        "Built a rapid-prototyping web application scaffold using Lovable",
        "Automated Vite server initialization with instant live previews",
      ],
      tags: ["Vite", "TypeScript", "React", "shadcn-ui"],
      icon: <Code className="w-8 h-8 text-accent" />,
      github: "https://github.com/Sumit7162/run-code",
      live: "https://run-code.lovable.app"
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
          className="mt-12 bg-black/20 border border-white/10 rounded-2xl p-8 backdrop-blur-sm flex flex-col sm:flex-row justify-between items-center text-center sm:text-left hover:bg-white/5 transition-colors group cursor-pointer max-w-4xl mx-auto"
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
