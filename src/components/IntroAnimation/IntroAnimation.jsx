import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './IntroAnimation.module.css';

export default function IntroAnimation({ onComplete }) {
  const [phase, setPhase] = useState('initial'); // 'initial', 'tagline', 'thisIs', 'done'

  useEffect(() => {
    // Step 1: Smoothly slide tagline in
    const t1 = setTimeout(() => setPhase('tagline'), 250);

    // Step 2: Smoothly slide "this is" in
    const t2 = setTimeout(() => setPhase('thisIs'), 1250);

    // Step 3: Trigger upward scroll exit
    const t3 = setTimeout(() => {
      setPhase('done');
    }, 2450);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  const handleSkip = () => {
    setPhase('done');
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === ' ') {
        handleSkip();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {phase !== 'done' && (
        <motion.div
          className={styles.overlay}
          initial={{ y: 0 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
          }}
          onClick={handleSkip}
        >
          <div className={styles.content}>
            {/* Tagline */}
            <div className={styles.taglineBox}>
              <motion.h1
                className={styles.tagline}
                initial={{ opacity: 0, y: 35 }}
                animate={{
                  opacity: phase === 'initial' ? 0 : 1,
                  y: phase === 'initial' ? 35 : 0,
                }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              >
                Quiet backend. Sharp retrieval. Real impact.
              </motion.h1>
            </div>

            {/* "this is" */}
            <div className={styles.thisIsBox}>
              <motion.span
                className={styles.thisIsText}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: phase === 'thisIs' ? 1 : 0,
                  y: phase === 'thisIs' ? 0 : 20,
                }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              >
                this is
              </motion.span>
            </div>
          </div>

          <button className={styles.skipBtn} onClick={handleSkip} aria-label="Skip Intro">
            SKIP <span>ESC</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
