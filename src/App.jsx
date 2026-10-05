import { useState, useEffect, useRef } from 'react';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import SkillsTicker from './components/SkillsTicker/SkillsTicker';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Achievements from './components/Achievements/Achievements';
import TechStack from './components/TechStack/TechStack';
import Footer from './components/Footer/Footer';
import IntroAnimation from './components/IntroAnimation/IntroAnimation';

import styles from './App.module.css';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (showIntro) {
      window.scrollTo(0, 0);
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      window.scrollTo(0, 0);
    }
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [showIntro]);

  useEffect(() => {
    let attempts = 0;
    const maxAttempts = 20;

    const initVanta = () => {
      if (window.VANTA && window.THREE) {
        vantaEffect.current = window.VANTA.FOG({
          el: document.getElementById('vanta-bg'),
          THREE: window.THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          highlightColor: 0x111111,
          midtoneColor: 0x70707,
          lowlightColor: 0xe9e9ed,
          baseColor: 0x0,
          blurFactor: 0.62,
          speed: 0.80,
          zoom: 0.80,
        });
      } else if (attempts < maxAttempts) {
        attempts++;
        setTimeout(initVanta, 150);
      }
    };

    initVanta();

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  return (
    <div className={styles.app}>
      {showIntro && <IntroAnimation onComplete={() => setShowIntro(false)} />}
      <div className={styles.mainWrapper}>
        <Navigation />
        <Hero />
        <SkillsTicker />
        <Projects />
        <Experience />
        <Achievements />
        <TechStack />
        <Footer />
      </div>
    </div>
  );
}
