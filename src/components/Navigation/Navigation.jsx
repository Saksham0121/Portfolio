import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navigation.module.css';

const navItems = [
  { id: 'skills-ticker', label: 'SKILLS', num: '01' },
  { id: 'projects', label: 'PROJECTS', num: '02' },
  { id: 'experience', label: 'EXPERIENCE', num: '03' },
  { id: 'achievements', label: 'ACHIEVEMENTS', num: '04' },
  { id: 'tech-stack', label: 'TECH STACK', num: '05' },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 50;
          setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));

          const scrollPos = window.scrollY + 250;
          let matched = '';

          for (let i = navItems.length - 1; i >= 0; i--) {
            const el = document.getElementById(navItems[i].id);
            if (el && el.offsetTop <= scrollPos) {
              matched = navItems[i].id;
              break;
            }
          }

          if (window.scrollY < 200) {
            matched = '';
          }

          setActiveSection((prev) => (prev !== matched ? matched : prev));
          ticking = false;
        });
        ticking = true;
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
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };


  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
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
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sakshamsahu77783@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
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
    </header>
  );
}
