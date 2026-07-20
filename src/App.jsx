import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import SkillsTicker from './components/SkillsTicker/SkillsTicker';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import TechStack from './components/TechStack/TechStack';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import VantaBackground from './components/VantaBackground/VantaBackground';
import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.app}>
      <VantaBackground />
      <Navigation />
      <Hero />
      <SkillsTicker />
      <Projects />
      <Experience />
      <TechStack />
      <About />
      <Footer />
    </div>
  );
}
