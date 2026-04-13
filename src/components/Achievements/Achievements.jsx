import styles from './Achievements.module.css';
import { achievements } from '../../data/resumeData';

export default function Achievements() {
  return (
    <section className={styles.section} id="achievements">
      <div className={styles.header}>
        <span className={styles.tag}>{'<achievements />'}</span>
        <h2 className={styles.title}>Recognition</h2>
      </div>

      <div className={styles.grid}>
        {achievements.map((a) => (
          <div key={a.title} className={styles.card} style={{ '--color': a.color }}>
            <div className={styles.iconWrap}>
              <span
                className={`material-symbols-outlined ${styles.icon}`}
                style={{ color: a.color, fontVariationSettings: "'FILL' 1, 'wght' 400" }}
              >
                {a.icon}
              </span>
            </div>
            <div>
              <p className={styles.title2}>{a.title}</p>
              <p className={styles.detail}>{a.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
