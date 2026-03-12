import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  const educationTimeline = [
    { year: "2023", status: "Started B.Tech CSE (Data Science) at ITM Gwalior" },
    { year: "2024 - 2025", status: "Working on ML, DL, and MERN based projects" },
    { year: "2025 - 2026", status: "Working on Advanced ML, DL" },
    { year: "2026 - 2027", status: "Targeting internships, research opportunities, and campus placements" }
  ];

  const certifications = [
    "Deep Learning - IIT Ropar (2025)",
    "AI and ML Virtual Internship - Google (2025)",
    "Data Analytics - Alteryx (2025)",
    "Altair Data Science Master Certification (2025)",
    "Oracle Fusion AI Agent Studio Certified Foundations Associate (2025)",
    "Research Paper Publication – IJAMRED (2025)"
  ];

  return (
    <section id="education" className="py-20 px-4 max-w-6xl mx-auto relative z-10 w-full min-h-[80vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
            Education & Certifications
          </span>
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-16 rounded-full opacity-60"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Education Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-accent" />
              <h3 className="text-2xl font-semibold text-white">Education Timeline</h3>
            </div>
            
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-accent before:via-accent/50 before:to-transparent">
              {educationTimeline.map((item, idx) => (
                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  {/* Timeline Dot */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-accent absolute left-0 md:left-1/2 -translate-x-1/2 translate-y-4 shadow"></div>
                  
                  {/* Content Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: idx % 2 === 0 ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm group-hover:border-accent/40 transition-colors ml-auto md:ml-0"
                  >
                    <span className="font-mono text-accent text-sm md:text-base font-bold mb-1 block">
                      {item.year}
                    </span>
                    <h4 className="font-medium text-secondary leading-relaxed">
                      {item.status}
                    </h4>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-8 h-8 text-yellow-500" />
              <h3 className="text-2xl font-semibold text-white">Certifications</h3>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-5 rounded-xl bg-gradient-to-r from-white/5 to-transparent border border-white/5 hover:border-white/20 transition-all flex items-start gap-4"
                >
                  <div className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-yellow-500" />
                  <p className="text-secondary/90 leading-tight block">{cert}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
