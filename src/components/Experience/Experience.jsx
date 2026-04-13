import styles from './Experience.module.css';
import { experience } from '../../data/resumeData';

export default function Experience() {
  return (
    <section className={styles.section} id="experience">
      <div className={styles.header}>
        <span className={styles.tag}>{'<experience />'}</span>
        <h2 className={styles.title}>Where I've Worked</h2>
      </div>

      <div className={styles.timeline}>
        {experience.map((job, i) => (
          <article key={job.company} className={styles.card} style={{ '--accent': job.color }}>
            {/* Left accent rail */}
            <div className={styles.rail}>
              <div className={styles.railDot} />
              {i < experience.length - 1 && <div className={styles.railLine} />}
            </div>

            <div className={styles.cardBody}>
              {/* Header */}
              <div className={styles.cardHead}>
                <div>
                  <div className={styles.roleRow}>
                    <h3 className={styles.role}>{job.role}</h3>
                    <span className={styles.typeBadge}>{job.type}</span>
                  </div>
                  <p className={styles.company} style={{ color: job.color }}>{job.company}</p>
                </div>
                <div className={styles.meta}>
                  <span className={styles.period}>{job.period}</span>
                  <span className={styles.location}>
                    <span className="material-symbols-outlined" style={{ fontSize: '12px', verticalAlign: 'middle' }}>location_on</span>
                    {job.location}
                  </span>
                </div>
              </div>

              {/* Bullets */}
              <ul className={styles.bullets}>
                {job.bullets.map((b, j) => (
                  <li key={j} className={styles.bullet}>
                    <span className={styles.bulletDot} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
