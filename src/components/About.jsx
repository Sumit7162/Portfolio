import { motion } from 'framer-motion';
import { BookOpen, Code2, Database, Brain, Globe, MapPin } from 'lucide-react';

export default function About() {
  const cards = [
    {
      title: "Education",
      desc: "B.Tech CSE (Data Science) at ITM Gwalior",
      icon: <BookOpen className="text-blue-400" size={24} />
    },
    {
      title: "Interests",
      desc: "Machine Learning, Deep Learning, & Data Apps",
      icon: <Brain className="text-purple-400" size={24} />
    },
    {
      title: "Stack",
      desc: "Python, MERN Stack, and SQL",
      icon: <Code2 className="text-green-400" size={24} />
    },
    {
      title: "Projects",
      desc: "ML Models, Dashboards, Full-Stack Apps",
      icon: <Database className="text-yellow-400" size={24} />
    },
    {
      title: "Goals",
      desc: "Open to Collaborations & Internships",
      icon: <Globe className="text-pink-400" size={24} />
    },
    {
      title: "Location",
      desc: "Based in Gwalior, India",
      icon: <MapPin className="text-red-400" size={24} />
    }
  ];

  return (
    <section id="about" className="py-20 px-4 max-w-6xl mx-auto relative z-10 w-full min-h-[80vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
            About Me
          </span>
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-16 rounded-full opacity-60"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 hover:-translate-y-2 hover:border-accent/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-black/30 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{card.title}</h3>
              <p className="text-secondary/80 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
