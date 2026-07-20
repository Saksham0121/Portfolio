import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, ArrowUpRight, Check, Copy, TrendingUp, Cpu, Home, LineChart } from 'lucide-react';
import styles from './Footer.module.css';

const socials = [
  {
    name: 'LinkedIn',
    handle: 'sahusaksham10',
    url: 'https://www.linkedin.com/in/sahusaksham10/',
    icon: Linkedin,
    color: '#0A66C2',
  },
  {
    name: 'GitHub',
    handle: 'Saksham0121',
    url: 'https://github.com/Saksham0121',
    icon: Github,
    color: '#ffffff',
  },
  {
    name: 'Email',
    handle: 'sakshamsahu77783@gmail.com',
    url: 'https://mail.google.com/mail/?view=cm&fs=1&to=sakshamsahu77783@gmail.com',
    icon: Mail,
    color: '#EA4335',
  },

];

const interests = [
  { name: 'Technology', icon: Cpu, tag: 'AI & FULL-STACK' },
  { name: 'Finance', icon: TrendingUp, tag: 'INNOVATION & MARKETS' },
  { name: 'Stock Market', icon: LineChart, tag: 'TRADING & ANALYTICS' },
  { name: 'Real Estate', icon: Home, tag: 'PROPERTY & ASSETS' },
];

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const year = new Date().getFullYear();

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('sakshamsahu77783@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer className={styles.footer} id="contact">
      {/* Background glow */}
      <div className={styles.backdropGlow} />

      <div className={styles.container}>
        {/* Top Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className={styles.sectionLabel}>06 // CONTACT & SOCIALS</span>
          <h2 className={styles.title}>Let's Build Something Impactful.</h2>
          <p className={styles.subtitle}>
            Have an exciting AI project, full-stack opportunity, or research idea? Reach out directly!
          </p>
        </motion.div>

        {/* Social Cards Grid */}
        <div className={styles.grid}>
          {socials.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.iconBox}>
                    <Icon size={24} style={{ color: s.color }} />
                  </div>
                  <ArrowUpRight size={20} className={styles.arrowIcon} />
                </div>
                <div className={styles.cardBody}>
                  <span className={styles.socialName}>{s.name}</span>
                  <span className={styles.socialHandle}>{s.handle}</span>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Quick Email Copy Banner */}
        <motion.div
          className={styles.copyBanner}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.copyBannerLeft}>
            <MapPin size={18} className={styles.pinIcon} />
            <span>Based in Faridabad, India · Open for Remote & Global Roles</span>
          </div>

          <button onClick={handleCopyEmail} className={styles.copyBtn}>
            {copied ? (
              <>
                <Check size={16} className={styles.checkIcon} />
                <span>COPIED TO CLIPBOARD!</span>
              </>
            ) : (
              <>
                <Copy size={16} />
                <span>COPY EMAIL ADDRESS</span>
              </>
            )}
          </button>
        </motion.div>

        {/* Interests & Passion Topics */}
        <motion.div
          className={styles.interestsSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className={styles.interestsTitle}>DOMAINS OF INTEREST</h3>
          <div className={styles.interestsGrid}>
            {interests.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.name} className={styles.interestTile}>
                  <Icon size={18} className={styles.interestIcon} />
                  <div>
                    <span className={styles.interestName}>{item.name}</span>
                    <span className={styles.interestTag}>{item.tag}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.brand}>
            <span className={styles.dot} />
            <span className={styles.brandName}>SAKSHAM SAHU</span>
          </div>
          <p className={styles.copyright}>
            © {year} SAKSHAM SAHU · DESIGNED & ENGINEERED WITH PRECISION
          </p>
        </div>
      </div>
    </footer>
  );
}
