import { motion } from 'framer-motion';
import speechCutout from '../../assets/speechnobg.png';
import resumeImg from '../../assets/Resume photo.png';
import styles from './About.module.css';

const floatingTags = [
  { text: 'Innovate2.0 Winner', icon: '🏆', posClass: styles.tag1, delay: 0 },
  { text: 'Software Developer', icon: '💻', posClass: styles.tag2, delay: 0.8 },
  { text: 'CS Undergraduate', icon: '🎓', posClass: styles.tag3, delay: 1.6 },
  { text: 'Gen AI Engineer', icon: '🤖', posClass: styles.tag4, delay: 0.4 },
  { text: 'Faridabad, India', icon: '📍', posClass: styles.tag5, delay: 1.2 },
  { text: 'Data Structures', icon: '⚡', posClass: styles.tag6, delay: 2.0 },
  { text: 'Algorithms', icon: '🧠', posClass: styles.tag7, delay: 0.6 },
  { text: 'C++', icon: '⚙️', posClass: styles.tag8, delay: 1.4 },
  { text: 'JAVA', icon: '☕', posClass: styles.tag9, delay: 2.2 },
  { text: 'Springboot', icon: '🍃', posClass: styles.tag10, delay: 1.0 },
  { text: 'MERN Stack', icon: '🚀', posClass: styles.tag11, delay: 1.8 },
];

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.header}>
        <h2 className={styles.title}>ABOUT ME</h2>
        <p className={styles.subtitle}>Profile & Resume</p>
      </div>


      <div className={styles.stage}>
        {/* Left Side: Enlarged Photo with Floating Info Boxes */}
        <motion.div
          className={styles.speakerCol}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.photoContainer}>
            <div className={styles.glowingRing} />

            {/* Photo cutout */}
            <img src={speechCutout} alt="Saksham Sahu Speaking" className={styles.photo} />

            {/* 11 Floating Info Boxes */}
            {floatingTags.map((tag, idx) => (
              <motion.div
                key={idx}
                className={`${styles.floatingTag} ${tag.posClass}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                animate={{ y: [0, -7, 0] }}
                transition={{
                  y: {
                    repeat: Infinity,
                    duration: 3.8 + (idx % 3) * 0.6,
                    ease: 'easeInOut',
                    delay: tag.delay,
                  },
                  opacity: { duration: 0.5, delay: 0.2 + idx * 0.05 },
                  scale: { duration: 0.5, delay: 0.2 + idx * 0.05 },
                }}
              >
                <span className={styles.tagIcon}>{tag.icon}</span>
                <span className={styles.tagText}>{tag.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Straight Full Resume Viewer */}
        <motion.div
          className={styles.resumeCol}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >

          <div className={styles.resumeCard}>
            {/* Top Bar */}
            <div className={styles.cardTopBar}>
              <div className={styles.dots}>
                <span className={styles.dotRed} />
                <span className={styles.dotYellow} />
                <span className={styles.dotGreen} />
              </div>
              <span className={styles.docName}>SAKSHAM_SAHU_RESUME.PDF</span>
            </div>

            {/* Resume Image Frame */}
            <div className={styles.paperFrame}>
              <img src={resumeImg} alt="Saksham Sahu Resume" className={styles.resumeImage} />
              <div className={styles.paperOverlay}>
                <a
                  href={resumeImg}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.downloadBtn}
                >
                  <span>VIEW / DOWNLOAD RESUME</span>
                  <span className={styles.arrow}>↗</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
