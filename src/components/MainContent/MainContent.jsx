import styles from './MainContent.module.css';
import SectionLabel from '../SectionLabel/SectionLabel';
import { profile, experience, projects, achievements } from '../../data/resumeData';

export default function MainContent() {
  return (
    <main className={styles.main}>

      {/* ── Header ── */}
      <header className={styles.header}>
        <h2 className={styles.fullName}>{profile.name}</h2>
        <p className={styles.subtitle}>{profile.subtitle}</p>
        <div className={styles.accentBar} />
      </header>

      {/* ── Profile ── */}
      <section className={styles.section}>
        <SectionLabel>Profile</SectionLabel>
        <p className={styles.bio}>{profile.bio}</p>
      </section>

      {/* ── Experience ── */}
      <section className={styles.section}>
        <SectionLabel>Experience</SectionLabel>
        <div className={styles.expList}>
          {experience.map((job) => (
            <article key={job.company} className={styles.expCard}>
              <div className={styles.expHeader}>
                <div>
                  <h3 className={styles.expRole}>{job.role}</h3>
                  <span className={styles.expCompany}>{job.company}</span>
                </div>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>{job.period}</span>
                  <span className={styles.expLocation}>{job.location}</span>
                </div>
              </div>
              <ul className={styles.bullets}>
                {job.bullets.map((b, i) => (
                  <li key={i} className={styles.bulletItem}>
                    <span className={styles.bullet} aria-hidden="true" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* ── Projects ── */}
      <section className={styles.section}>
        <SectionLabel>Projects</SectionLabel>
        <div className={styles.projectGrid}>
          {projects.map((proj) => (
            <article key={proj.name} className={styles.projectCard}>
              <div className={styles.projectTop}>
                <h3 className={styles.projectName}>{proj.name}</h3>
                <span className={`material-symbols-outlined ${styles.projectIcon}`}>open_in_new</span>
              </div>
              <p className={styles.projectDesc}>{proj.description}</p>
              <div className={styles.projectTags}>
                {proj.tags.map((t) => (
                  <span key={t} className={styles.projectTag}>{t}</span>
                ))}
              </div>
              <p className={styles.projectStats}>{proj.stats}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── Achievements ── */}
      <section className={styles.section}>
        <SectionLabel>Achievements</SectionLabel>
        <div className={styles.achieveGrid}>
          {achievements.map((a) => (
            <div key={a.title} className={styles.achieveItem}>
              <span className={`material-symbols-outlined ${styles.achieveIcon}`}>{a.icon}</span>
              <div>
                <p className={styles.achieveTitle}>{a.title}</p>
                <p className={styles.achieveDetail}>{a.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
