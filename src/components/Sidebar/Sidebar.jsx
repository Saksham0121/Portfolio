import styles from './Sidebar.module.css';
import { profile, skills, education } from '../../data/resumeData';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      {/* ── Avatar & Identity ── */}
      <div className={styles.identity}>
        <div className={styles.avatar}>{profile.initials}</div>
        <h1 className={styles.name}>{profile.name}</h1>
        <p className={styles.title}>{profile.title}</p>
      </div>

      <div className={styles.divider} />

      {/* ── Contact ── */}
      <section className={styles.section}>
        <h2 className={styles.sectionLabel}>Contact</h2>
        <ul className={styles.contactList}>
          {profile.contact.map((item) => (
            <li key={item.label} className={styles.contactItem}>
              <span className={`material-symbols-outlined ${styles.contactIcon}`}>
                {item.icon}
              </span>
              <span className={styles.contactText}>{item.label}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className={styles.divider} />

      {/* ── Skills ── */}
      <section className={styles.section}>
        <h2 className={styles.sectionLabel}>Skills</h2>
        <div className={styles.skillGroups}>
          {skills.map((group) => (
            <div key={group.category} className={styles.skillGroup}>
              <p className={styles.skillCategory}>{group.category}</p>
              <div className={styles.tags}>
                {group.items.map((s) => (
                  <span key={s} className={styles.tag}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.divider} />

      {/* ── Education ── */}
      <section className={styles.section}>
        <h2 className={styles.sectionLabel}>Education</h2>
        {education.map((edu) => (
          <div key={edu.school} className={styles.edu}>
            <p className={styles.eduDegree}>{edu.degree}</p>
            <p className={styles.eduSchool}>{edu.school}</p>
            <div className={styles.eduMeta}>
              <span className={styles.eduYear}>{edu.year}</span>
              <span className={styles.eduGrade}>{edu.grade}</span>
            </div>
          </div>
        ))}
      </section>
    </aside>
  );
}
