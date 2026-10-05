import { motion } from 'framer-motion';
import { Trophy, ShieldCheck, Award, Code2, ArrowUpRight } from 'lucide-react';
import styles from './Achievements.module.css';
import { achievements } from '../../data/resumeData';

const iconMap = {
  trophy: Trophy,
  shield: ShieldCheck,
  award: Award,
  code: Code2,
};

export default function Achievements() {
  return (
    <section className={styles.section} id="achievements">
      <div className={styles.header}>
        <h2 className={styles.title}>Achievements</h2>
        <p className={styles.subtitle}>Key Milestones, Honors & Impact</p>
      </div>

      <div className={styles.grid}>
        {achievements.map((item, idx) => {
          const Icon = iconMap[item.icon] || Trophy;
          const CardTag = item.link ? 'a' : 'div';
          const linkProps = item.link
            ? { href: item.link, target: '_blank', rel: 'noopener noreferrer' }
            : {};

          return (
            <motion.div
              key={item.title}
              className={styles.cardWrapper}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <CardTag {...linkProps} className={`${styles.card} ${item.link ? styles.clickableCard : ''}`}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconBox}>
                    <Icon size={22} className={styles.icon} />
                  </div>
                  <div className={styles.metaGroup}>
                    {item.badge && <span className={styles.badge}>{item.badge}</span>}
                    <span className={styles.year}>{item.year}</span>
                  </div>
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.titleRow}>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    {item.link && <ArrowUpRight size={18} className={styles.arrowIcon} />}
                  </div>
                  <p className={styles.cardDetail}>{item.detail}</p>
                  {item.linkText && (
                    <span className={styles.linkText}>
                      {item.linkText}
                    </span>
                  )}
                </div>
              </CardTag>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
