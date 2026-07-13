import { motion } from 'framer-motion';
import { Trophy, Award, Medal, Star } from 'lucide-react';
import styles from './Achievements.module.css';
import { achievements } from '../../data/resumeData';

const iconMap = {
  trophy: Trophy,
  award: Award,
  medal: Medal,
  star: Star,
};

export default function Achievements() {
  return (
    <section className={`${styles.section} section`} id="achievements">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={styles.header}
      >
        <span className="section-label">achievements</span>
        <h2 className={styles.title}>Milestones & Wins</h2>
      </motion.div>

      <div className={styles.grid}>
        {achievements.map((a, i) => {
          const Icon = iconMap[a.icon] || Trophy;
          return (
            <motion.div
              key={a.title}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              style={{ '--card-color': a.color }}
            >
              <div className={styles.iconWrap} style={{ color: a.color, borderColor: `${a.color}20`, background: `${a.color}08` }}>
                <Icon size={22} />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardHead}>
                  <h3 className={styles.cardTitle}>{a.title}</h3>
                  <span className={styles.year} style={{ color: a.color }}>{a.year}</span>
                </div>
                <p className={styles.cardDetail}>{a.detail}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
