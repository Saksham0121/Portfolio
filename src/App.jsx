import Hero from './components/Hero/Hero';
import SkillsTicker from './components/SkillsTicker/SkillsTicker';
import Projects from './components/Projects/Projects';
import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.app}>
      <Hero />
      <SkillsTicker />
      <Projects />
    </div>
  );
}
