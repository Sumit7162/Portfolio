import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';
import { useState, useEffect } from 'react';

const TypewriterText = ({ texts, delay = 100 }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentTextIndex];
      
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 1500); // Wait before deleting
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? delay / 2 : delay);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts, delay]);

  return (
    <span className="inline-block min-h-[1.5em] border-r-2 border-accent pr-1 animate-pulse">
      {currentText}
    </span>
  );
};

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 relative">
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white">
          Hi 👋, I'm <span className="text-accent">Sumit Sharma</span>
        </h1>
        
        <h2 className="text-xl md:text-3xl font-semibold mb-6 text-secondary h-12">
          <TypewriterText 
            texts={[
              "B.Tech CSE (Data Science) Student",
              "Data Science Enthusiast",
              "MERN Stack Developer",
              "Always learning something new"
            ]} 
            delay={80} 
          />
        </h2>

        <p className="text-lg md:text-xl text-secondary/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Passionate about machine learning, deep learning, and building scalable full-stack web applications.
          Based in Gwalior, India.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sharmasumit716210@gmail.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all backdrop-blur-sm text-white hover:border-accent group">
            <Mail size={20} className="group-hover:text-accent transition-colors" />
            <span>Email Me</span>
          </a>
          <a href="https://www.linkedin.com/in/sumit-sharma-a021862a6" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all backdrop-blur-sm text-white hover:border-[#0A66C2] group">
            <Linkedin size={20} className="group-hover:text-[#0A66C2] transition-colors" />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/Sumit7162" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all backdrop-blur-sm text-white hover:border-white group">
            <Github size={20} className="group-hover:text-white transition-colors" />
            <span>GitHub</span>
          </a>
          <a href="https://www.instagram.com/__sum__052" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all backdrop-blur-sm text-white hover:border-[#E1306C] group">
            <Instagram size={20} className="group-hover:text-[#E1306C] transition-colors" />
            <span>Instagram</span>
          </a>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-10 opacity-50 flex flex-col items-center"
      >
        <span className="text-sm tracking-widest uppercase mb-2">Scroll Down</span>
        <div className="w-5 h-8 border-2 border-secondary rounded-full flex justify-center pt-1">
          <div className="w-1 h-2 rounded-full bg-accent" />
        </div>
      </motion.div>
    </section>
  );
}
