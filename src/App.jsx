import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Achievements from './components/Achievements/Achievements';
import Footer from './components/Footer/Footer';
import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.app}>
      {/* Ambient orbs */}
      <div className={styles.orb1} aria-hidden="true" />
      <div className={styles.orb2} aria-hidden="true" />
      <div className={styles.orb3} aria-hidden="true" />

      <div className={styles.content}>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Footer />
      </div>
    </div>
  );
}
