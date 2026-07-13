import { useEffect, useState } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import styles from './Navigation.module.css';

const navLinks = [
  { label: 'About', href: '#about', num: '01' },
  { label: 'Experience', href: '#experience', num: '02' },
  { label: 'Skills', href: '#skills', num: '03' },
  { label: 'Projects', href: '#projects', num: '04' },
  { label: 'Achievements', href: '#achievements', num: '05' },
  { label: 'Contact', href: '#contact', num: '06' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      // Active section detection
      const sections = navLinks.map(l => document.querySelector(l.href));
      const active = sections.find(sec => {
        if (!sec) return false;
        const rect = sec.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (active) setActiveSection(active.id);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} id="navigation">
      <div className={styles.inner}>
        {/* Logo */}
        <a
          href="#"
          className={styles.logo}
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          id="nav-logo"
          aria-label="Go to top"
        >
          <Terminal size={14} className={styles.logoIcon} />
          <span className={styles.logoText}>
            <span className={styles.logoCyan}>saksham</span>
            <span className={styles.logoDim}>.dev</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className={styles.links}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`${styles.link} ${activeSection === link.href.slice(1) ? styles.active : ''}`}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              id={`nav-link-${link.label.toLowerCase()}`}
            >
              <span className={styles.linkNum}>{link.num}</span>
              <span className={styles.linkLabel}>{link.label}</span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className={styles.mobileToggle}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          id="nav-mobile-toggle"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.mobileLink}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
            >
              <span className={styles.mobileLinkNum}>{link.num}</span>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
