import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navigation.module.css';

const navItems = [
  { id: 'skills-ticker', label: 'SKILLS', num: '01' },
  { id: 'projects', label: 'PROJECTS', num: '02' },
  { id: 'experience', label: 'EXPERIENCE', num: '03' },
  { id: 'tech-stack', label: 'TECH STACK', num: '04' },
  { id: 'about', label: 'ABOUT', num: '05' },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Get sections with their DOM top position sorted by document position
      const sectionElements = navItems
        .map((item) => ({ id: item.id, el: document.getElementById(item.id) }))
        .filter((item) => item.el !== null)
        .map((item) => ({ id: item.id, top: item.el.offsetTop }))
        .sort((a, b) => b.top - a.top); // Highest offsetTop first

      const scrollPos = window.scrollY + 250;

      for (const item of sectionElements) {
        if (item.top <= scrollPos) {
          setActiveSection(item.id);
          return;
        }
      }

      if (window.scrollY < 200) {
        setActiveSection('');
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileOpen(false);
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.navContainer}>
        {/* Brand logo / name */}
        <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }} className={styles.brand}>
          <span className={styles.brandDot}></span>
          <span className={styles.brandText}>SAKSHAM SAHU</span>
        </a>

        {/* Desktop Links */}
        <nav className={styles.desktopNav}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`${styles.navLink} ${activeSection === item.id ? styles.active : ''}`}
            >
              <span className={styles.navNum}>{item.num}</span>
              <span className={styles.navLabel}>{item.label}</span>
              {activeSection === item.id && (
                <motion.div
                  className={styles.activeIndicator}
                  layoutId="activeNavIndicator"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* CTA button */}
        <div className={styles.actions}>
          <a
            href="mailto:saksham01sahu@gmail.com"
            className={styles.ctaBtn}
          >
            GET IN TOUCH
          </a>

          {/* Mobile hamburger */}
          <button
            className={styles.hamburger}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`${styles.bar} ${mobileOpen ? styles.barOpen1 : ''}`} />
            <span className={`${styles.bar} ${mobileOpen ? styles.barOpen2 : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`${styles.mobileLink} ${activeSection === item.id ? styles.activeMobile : ''}`}
              >
                <span className={styles.mobileNum}>{item.num}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
