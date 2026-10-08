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
    const maxAttempts = 35;
    let timerId = null;

    const initVanta = () => {
      if (window.VANTA && window.VANTA.FOG && window.THREE) {
        try {
          const el = document.getElementById('vanta-bg');
          if (el && !vantaEffect.current) {
            vantaEffect.current = window.VANTA.FOG({
              el,
              THREE: window.THREE,
              mouseControls: false,
              touchControls: false,
              gyroControls: false,
              minHeight: 200.00,
              minWidth: 200.00,
              highlightColor: 0x4a4a4a,
              midtoneColor: 0x222222,
              lowlightColor: 0x111111,
              baseColor: 0x050505,
              blurFactor: 0.60,
              speed: 1.20,
              zoom: 0.75,
            });
          }
        } catch (err) {
          console.warn('Vanta WebGL background initialization failed (safe fallback active):', err);
        }
      } else if (attempts < maxAttempts) {
        attempts++;
        timerId = setTimeout(initVanta, 100);
      }
    };

    initVanta();

    return () => {
      if (timerId) clearTimeout(timerId);
      if (vantaEffect.current) {
        try {
          vantaEffect.current.destroy();
        } catch (_) {}
        vantaEffect.current = null;
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
