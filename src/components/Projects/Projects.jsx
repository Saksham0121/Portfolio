import styles from './Projects.module.css';
import { projects } from '../../data/resumeData';

export default function Projects() {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.header}>
        <span className={styles.tag}>{'<projects />'}</span>
        <h2 className={styles.title}>What I've Built</h2>
      </div>

      <div className={styles.grid}>
        {projects.map((p) => (
          <article
            key={p.name}
            className={styles.card}
            style={{ '--color': p.color }}
          >
            {/* Glow backdrop */}
            <div className={styles.glow} />

            <div className={styles.cardTop}>
              <span className={styles.emoji}>{p.emoji}</span>
              <div className={styles.cardLinks}>
                <a href={p.link} className={styles.linkBtn} aria-label="Open project">
                  <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>open_in_new</span>
                </a>
                <a href={p.link} className={styles.linkBtn} aria-label="View source">
                  <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>code</span>
                </a>
              </div>
            </div>

            <p className={styles.tagline}>{p.tagline}</p>
            <h3 className={styles.name}>{p.name}</h3>
            <p className={styles.desc}>{p.description}</p>

            <div className={styles.tags}>
              {p.tags.map((t) => (
                <span key={t} className={styles.techTag}>{t}</span>
              ))}
            </div>

            <div className={styles.footer}>
              <div className={styles.stars}>
                <span className="material-symbols-outlined" style={{ fontSize: '13px', color: '#f59e0b', verticalAlign: 'middle', fontVariationSettings: "'FILL' 1" }}>star</span>
                <span>{p.stats.stars}</span>
              </div>
              <span className={styles.metric}>{p.stats.metric}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
