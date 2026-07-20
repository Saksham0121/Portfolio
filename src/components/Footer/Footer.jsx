import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, ArrowUpRight, Check, Copy } from 'lucide-react';
import styles from './Footer.module.css';

const socials = [
  {
    name: 'LinkedIn',
    handle: 'saksham-sahu',
    url: 'https://www.linkedin.com/in/saksham-sahu-',
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
    handle: 'saksham01sahu@gmail.com',
    url: 'mailto:saksham01sahu@gmail.com',
    icon: Mail,
    color: '#EA4335',
  },
];

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const year = new Date().getFullYear();

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('saksham01sahu@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer className={styles.footer} id="contact">
      {/* Background glow & grid */}
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
