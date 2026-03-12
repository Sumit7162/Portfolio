import { BrowserRouter as Router } from 'react-router-dom';
import Background3D from './components/Background3D';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="relative w-full min-h-screen bg-background text-secondary font-sans overflow-x-hidden selection:bg-accent/30 selection:text-white">
        {/* Fixed 3D Background */}
        <div className="fixed inset-0 z-0">
          <Background3D />
        </div>

        {/* Dynamic Navigation */}
        <Navbar />

        {/* Content Overlay */}
        <div className="relative z-10 w-full flex flex-col gap-20 pb-20 pt-16">
          <Hero />
          
          <div className="h-px w-full max-w-6xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent my-10" />
          <About />
          
          <div className="h-px w-full max-w-6xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent my-10" />
          <TechStack />
          
          <div className="h-px w-full max-w-6xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent my-10" />
          <Projects />
          
          <div className="h-px w-full max-w-6xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent my-10" />
          <Education />
          
          <div className="h-px w-full max-w-6xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent mt-10 mb-20" />
          <Contact />
        </div>
      </div>
    </Router>
  );
}

export default App;
