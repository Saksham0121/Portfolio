import { motion } from 'framer-motion';
import resumeImg from '../../assets/Resume photo.png';
import portraitImg from '../../assets/photo.jpg';
import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.section} id="about">
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className={styles.title}>ABOUT ME</h2>
        <p className={styles.subtitle}>Resume & Profile</p>
      </motion.div>

      <div className={styles.grid}>
        {/* Left Column: Resume Document Container */}
        <motion.div
          className={styles.resumeContainer}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.paperFrame}>
            <img src={resumeImg} alt="Saksham Sahu Resume" className={styles.resumeImage} />
            <div className={styles.paperOverlay}>
              <a
                href={resumeImg}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.downloadBtn}
              >
                <span>VIEW FULL RESUME</span>
                <span className={styles.arrow}>↗</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Portrait Photo Container */}
        <motion.div
          className={styles.photoContainer}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.photoFrame}>
            <img src={portraitImg} alt="Saksham Sahu Portrait" className={styles.portraitImage} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
