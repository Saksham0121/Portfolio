import { motion } from 'framer-motion';
import { MapPin, Calendar, ArrowUpRight } from 'lucide-react';
import styles from './Experience.module.css';
import { experience } from '../../data/resumeData';

export default function Experience() {
  return (
    <section className={`${styles.section} section`} id="experience">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={styles.header}
      >
        <span className="section-label">experience</span>
        <h2 className={styles.title}>Where I've Worked</h2>
      </motion.div>

      <div className={styles.timeline}>
        {experience.map((job, i) => (
          <motion.article
            key={job.company}
            className={styles.card}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.rail}>
              <div className={styles.railDot} style={{ background: job.color, boxShadow: `0 0 12px ${job.color}60` }} />
              {i < experience.length - 1 && <div className={styles.railLine} />}
            </div>

            <div className={styles.cardBody} style={{ '--card-accent': job.color }}>
              <div className={styles.cardHead}>
                <div>
                  <div className={styles.roleRow}>
                    <h3 className={styles.role}>{job.role}</h3>
                    <span className={styles.badge} style={{ color: job.color, borderColor: `${job.color}30`, background: `${job.color}10` }}>
                      {job.type}
                    </span>
                  </div>
                  <p className={styles.company} style={{ color: job.color }}>{job.company}</p>
                </div>
                <div className={styles.meta}>
                  <span className={styles.period}>
                    <Calendar size={12} />
                    {job.period}
                  </span>
                  <span className={styles.location}>
                    <MapPin size={12} />
                    {job.location}
                  </span>
                </div>
              </div>

              {/* Highlights */}
              <div className={styles.highlights}>
                {job.highlights.map((h) => (
                  <span key={h} className={styles.highlight} style={{ background: `${job.color}10`, borderColor: `${job.color}20`, color: job.color }}>
                    {h}
                  </span>
                ))}
              </div>

              <ul className={styles.bullets}>
                {job.bullets.map((b, j) => (
                  <li key={j} className={styles.bullet}>
                    <span className={styles.bulletDot} style={{ background: job.color }} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
