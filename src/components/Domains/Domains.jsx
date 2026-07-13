import { motion } from 'framer-motion';
import { Brain, Layers, BarChart3 } from 'lucide-react';
import styles from './Domains.module.css';
import { domains } from '../../data/resumeData';

const iconMap = {
  brain: Brain,
  layers: Layers,
  'bar-chart-3': BarChart3,
};

export default function Domains() {
  return (
    <section className={styles.section} id="domains">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={styles.header}
      >
        <span className="section-label">domains</span>
        <h2 className={styles.title}>What I Do</h2>
        <p className={styles.subtitle}>Three core pillars that define my engineering identity</p>
      </motion.div>

      <div className={styles.grid}>
        {domains.map((d, i) => {
          const Icon = iconMap[d.icon] || Brain;
          return (
            <motion.div
              key={d.title}
              className={styles.card}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              style={{ '--card-color': d.color }}
            >
              {/* Top gradient border line */}
              <div className={styles.cardTopLine} style={{ background: d.color }} />

              {/* Background glow */}
              <div
                className={styles.cardGlow}
                style={{ background: `radial-gradient(circle at 30% 0%, ${d.color}18 0%, transparent 65%)` }}
              />

              {/* Icon */}
              <div className={styles.iconWrap} style={{ '--icon-color': d.color }}>
                <Icon size={26} />
              </div>

              {/* Content */}
              <h3 className={styles.cardTitle}>{d.title}</h3>
              <p className={styles.cardSubtitle} style={{ color: d.color }}>{d.subtitle}</p>
              <p className={styles.cardDesc}>{d.description}</p>

              {/* Bottom accent */}
              <div className={styles.cardFooter} style={{ '--card-color': d.color }}>
                <span className={styles.cardNum}>0{i + 1}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
