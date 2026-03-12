import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ArrowRight, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 max-w-4xl mx-auto relative z-10 w-full min-h-[80vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white mb-2">
            Let's Connect With Me<span className="text-[#8B5CF6]">.</span>
          </h2>
        </div>

        <div className="relative">
          <form className="space-y-6 max-w-3xl mx-auto" onSubmit={(e) => { e.preventDefault(); window.open('https://mail.google.com/mail/?view=cm&fs=1&to=sharmasumit716210@gmail.com', '_blank'); }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Full Name*" 
                  required
                  className="w-full bg-transparent border border-white/20 rounded-xl px-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-all"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email*" 
                  required
                  className="w-full bg-transparent border border-white/20 rounded-xl px-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input 
                  type="tel" 
                  placeholder="Phone" 
                  className="w-full bg-transparent border border-white/20 rounded-xl px-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-all"
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Subject" 
                  className="w-full bg-transparent border border-white/20 rounded-xl px-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-all"
                />
              </div>
            </div>

            <div>
              <textarea 
                placeholder="Message" 
                rows="5"
                className="w-full bg-transparent border border-white/20 rounded-xl px-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-all resize-none"
              ></textarea>
            </div>

            <div className="flex justify-center mt-8">
              <button 
                type="submit"
                className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#8B5CF6] text-white font-bold hover:bg-[#7C3AED] transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(139,92,246,0.4)]"
              >
                SEND MESSAGE
                <span className="bg-white text-[#8B5CF6] rounded-full p-1 group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={18} />
                </span>
              </button>
            </div>
          </form>

          {/* Social Links & Footer */}
          <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10 max-w-3xl mx-auto">
            <div className="flex gap-4">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sharmasumit716210@gmail.com" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 hover:text-[#8B5CF6] transition-all text-secondary">
                <Mail size={20} />
              </a>
              <a href="https://www.linkedin.com/in/sumit-sharma-a021862a6" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 hover:text-[#0A66C2] transition-all text-secondary">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/Sumit7162" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 hover:text-white transition-all text-secondary">
                <Github size={20} />
              </a>
              <a href="https://www.instagram.com/__sum__052" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 hover:text-[#E1306C] transition-all text-secondary">
                <Instagram size={20} />
              </a>
            </div>
            
            <p className="text-secondary/70 text-sm font-medium">
              © Made with <span className="text-red-500">❤️</span> by Sumit
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
