import { motion } from 'framer-motion';
import styles from './Skills.module.css';
import { techStack } from '../../data/resumeData';

// Color scheme for each category
const categoryColors = {
  'Languages':    { color: '#00f5ff', bg: 'rgba(0,245,255,0.07)',   border: 'rgba(0,245,255,0.2)' },
  'Frontend':     { color: '#a855f7', bg: 'rgba(168,85,247,0.07)', border: 'rgba(168,85,247,0.2)' },
  'Backend':      { color: '#d4a853', bg: 'rgba(212,168,83,0.07)', border: 'rgba(212,168,83,0.2)' },
  'Databases':    { color: '#22c55e', bg: 'rgba(34,197,94,0.07)',  border: 'rgba(34,197,94,0.2)' },
  'Gen AI / ML':  { color: '#f43f5e', bg: 'rgba(244,63,94,0.07)',  border: 'rgba(244,63,94,0.2)' },
  'Data & BI':    { color: '#fb923c', bg: 'rgba(251,146,60,0.07)', border: 'rgba(251,146,60,0.2)' },
  'DevOps & Tools': { color: '#38bdf8', bg: 'rgba(56,189,248,0.07)', border: 'rgba(56,189,248,0.2)' },
  'Core CS':      { color: '#e2e8f0', bg: 'rgba(226,232,240,0.05)', border: 'rgba(226,232,240,0.12)' },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const chipVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35, ease: [0.34, 1.56, 0.64, 1] } },
};

export default function Skills() {
  return (
    <section className={styles.section} id="skills">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={styles.header}
      >
        <span className="section-label">skills</span>
        <h2 className={styles.title}>Technical Arsenal</h2>
        <p className={styles.subtitle}>Technologies I build with — organized by domain</p>
      </motion.div>

      <div className={styles.grid}>
        {techStack.map((group, gi) => {
          const scheme = categoryColors[group.category] || categoryColors['Core CS'];
          return (
            <motion.div
              key={group.category}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: gi * 0.08, ease: [0.16, 1, 0.3, 1] }}
              style={{ '--cat-color': scheme.color }}
            >
              {/* Category header */}
              <div className={styles.catHeader}>
                <div className={styles.catDot} style={{ background: scheme.color, boxShadow: `0 0 8px ${scheme.color}` }} />
                <span className={styles.catName} style={{ color: scheme.color }}>{group.category}</span>
              </div>

              {/* Chip grid */}
              <motion.div
                className={styles.chips}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-20px' }}
              >
                {group.items.map((item) => (
                  <motion.span
                    key={item}
                    className={styles.chip}
                    variants={chipVariants}
                    whileHover={{ scale: 1.08, transition: { duration: 0.15 } }}
                    style={{
                      '--chip-color': scheme.color,
                      '--chip-bg': scheme.bg,
                      '--chip-border': scheme.border,
                    }}
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
