import { useEffect, useRef } from 'react';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import SkillsTicker from './components/SkillsTicker/SkillsTicker';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Achievements from './components/Achievements/Achievements';
import TechStack from './components/TechStack/TechStack';
import Footer from './components/Footer/Footer';

import styles from './App.module.css';

export default function App() {
  const vantaEffect = useRef(null);

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
          highlightColor: 0x68696b,
          midtoneColor: 0x0,
          lowlightColor: 0x0,
          baseColor: 0x111010,
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
      <Navigation />
      <Hero />
      <SkillsTicker />
      <Projects />
      <Experience />
      <Achievements />
      <TechStack />
      <Footer />
    </div>
  );
}
