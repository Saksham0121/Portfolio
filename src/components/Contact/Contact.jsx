import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowUpRight, MapPin } from 'lucide-react';
import styles from './Contact.module.css';
import { profile } from '../../data/resumeData';

export default function Contact() {
  return (
    <section className={`${styles.section} section`} id="contact">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={styles.header}
      >
        <span className="section-label">contact</span>
        <h2 className={styles.title}>Let's Build Together</h2>
        <p className={styles.subtitle}>Open to AI/ML engineering, full-stack, and research collaborations</p>
      </motion.div>

      <motion.div
        className={styles.card}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.cardGlow} />

        <div className={styles.cardContent}>
          <p className={styles.lead}>
            I'm currently working at <span className={styles.highlight}>DRDO, Ministry of Defence</span> as an AI Intern, and I'm always open to discussing
            new projects, research opportunities, and creative collaborations in the GenAI space.
          </p>

          <div className={styles.links}>
            <a href={`mailto:${profile.contact[0].label}`} className={styles.contactLink}>
              <div className={styles.contactIcon}>
                <Mail size={20} />
              </div>
              <div>
                <span className={styles.contactLabel}>Email</span>
                <span className={styles.contactValue}>{profile.contact[0].label}</span>
              </div>
              <ArrowUpRight size={16} className={styles.contactArrow} />
            </a>

            <a href={profile.contact[1].href} className={styles.contactLink}>
              <div className={styles.contactIcon}>
                <Github size={20} />
              </div>
              <div>
                <span className={styles.contactLabel}>GitHub</span>
                <span className={styles.contactValue}>{profile.contact[1].label}</span>
              </div>
              <ArrowUpRight size={16} className={styles.contactArrow} />
            </a>

            <a href={profile.contact[2].href} className={styles.contactLink}>
              <div className={styles.contactIcon}>
                <Linkedin size={20} />
              </div>
              <div>
                <span className={styles.contactLabel}>LinkedIn</span>
                <span className={styles.contactValue}>{profile.contact[2].label}</span>
              </div>
              <ArrowUpRight size={16} className={styles.contactArrow} />
            </a>
          </div>

          <div className={styles.location}>
            <MapPin size={14} />
            <span>{profile.location}</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
