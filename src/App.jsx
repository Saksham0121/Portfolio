import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import SkillsTicker from './components/SkillsTicker/SkillsTicker';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import About from './components/About/About';
import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.app}>
      <Navigation />
      <Hero />
      <SkillsTicker />
      <Projects />
      <Experience />
      <About />
    </div>
  );
}
