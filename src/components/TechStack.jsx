import { motion } from 'framer-motion';

const skills = [
  {
    category: "Languages",
    items: [
      { name: "Python", color: "text-blue-400" },
      { name: "C / C++", color: "text-blue-500" },
      { name: "JavaScript", color: "text-yellow-400" },
      { name: "PSQL", color: "text-blue-300" }
    ]
  },
  {
    category: "Data Science & ML",
    items: [
      { name: "Pandas", color: "text-indigo-400" },
      { name: "NumPy", color: "text-cyan-500" },
      { name: "Matplotlib", color: "text-blue-400" },
      { name: "Scikit-learn", color: "text-orange-400" },
      { name: "Deep Learning", color: "text-purple-400" }
    ]
  },
  {
    category: "Web Development",
    items: [
      { name: "HTML5/CSS3", color: "text-orange-500" },
      { name: "React", color: "text-cyan-400" },
      { name: "Node.js", color: "text-green-500" },
      { name: "Express.js", color: "text-gray-300" },
      { name: "MongoDB", color: "text-emerald-500" }
    ]
  },
  {
    category: "Tools & Environments",
    items: [
      { name: "Git & GitHub", color: "text-orange-600" },
      { name: "Jupyter", color: "text-orange-400" },
      { name: "VS Code", color: "text-blue-400" }
    ]
  }
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 px-4 max-w-6xl mx-auto relative z-10 w-full min-h-[80vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
            Tech Stack
          </span>
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-16 rounded-full opacity-60"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-black/20 border border-white/5 rounded-2xl p-6 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((item, itemIdx) => (
                  <span
                    key={itemIdx}
                    className={`px-4 py-2 bg-white/5 rounded-full text-sm font-medium border border-white/10 hover:border-white/30 transition-colors shadow-sm ${item.color}`}
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
