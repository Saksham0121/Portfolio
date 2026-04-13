import { useState, useEffect } from 'react';
import styles from './Hero.module.css';
import { profile, education } from '../../data/resumeData';

function TypeWriter({ words }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    const word = words[index % words.length];
    if (!deleting && subIndex === word.length + 1) {
      setTimeout(() => setDeleting(true), 1800);
      return;
    }
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setText(word.substring(0, subIndex));
      setSubIndex((s) => s + (deleting ? -1 : 1));
    }, deleting ? 50 : 90);
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, words]);

  return (
    <span className={styles.typewriter}>
      {text}
      <span className={styles.cursor}>|</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Grid lines overlay */}
      <div className={styles.grid} aria-hidden="true" />

      {/* Top bar — like a terminal header */}
      <div className={styles.termBar}>
        <div className={styles.termDots}>
          <span style={{ background: '#ef4444' }} />
          <span style={{ background: '#f59e0b' }} />
          <span style={{ background: '#22c55e' }} />
        </div>
        <span className={styles.termPath}>
          ~/saksham-sahu <span className={styles.termBranch}>git:(main)</span> ✦
        </span>
        <span className={styles.termBadge}>v2.4.1</span>
      </div>

      <div className={styles.body}>
        {/* Left column */}
        <div className={styles.left}>
          <p className={styles.greeting}>
            <span className={styles.dot} /> Available for opportunities
          </p>

          <h1 className={styles.name}>
            <span>Saksham</span>
            <span className="grad-text"> Sahu</span>
          </h1>

          <p className={styles.role}>
            <TypeWriter words={profile.roles} />
          </p>

          <p className={styles.bio}>{profile.bio}</p>

          {/* Contact chips */}
          <div className={styles.contacts}>
            {profile.contact.map((c) => (
              <a key={c.label} href={c.href} className={styles.contactChip}>
                <span className={`material-symbols-outlined ${styles.chipIcon}`}>{c.icon}</span>
                <span>{c.label}</span>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className={styles.ctas}>
            <a href="#" className={styles.btnPrimary}>
              <span className={`material-symbols-outlined`}>download</span>
              Download CV
            </a>
            <a href="#projects" className={styles.btnGhost}>
              View Projects
              <span className={`material-symbols-outlined`}>arrow_forward</span>
            </a>
          </div>
        </div>

        {/* Right column — identity card */}
        <div className={styles.right}>
          <div className={styles.card}>
            {/* Avatar */}
            <div className={styles.avatarWrap}>
              <div className={styles.avatarRing} />
              <div className={styles.avatar}>{profile.initials}</div>
            </div>

            {/* Education badge */}
            <div className={styles.eduBadge}>
              <span className={`material-symbols-outlined ${styles.eduIcon}`}>school</span>
              <div>
                <p className={styles.eduDegree}>{education.degree}</p>
                <p className={styles.eduSchool}>{education.school} · {education.year}</p>
                <p className={styles.eduGrade}>{education.grade}</p>
              </div>
            </div>

            {/* Stats */}
            <div className={styles.statsGrid}>
              {profile.stats.map((s) => (
                <div key={s.label} className={styles.statItem}>
                  <span className={styles.statValue}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>

            {/* Courses chip row */}
            <div className={styles.courseRow}>
              {education.courses.map((c) => (
                <span key={c} className={styles.courseChip}>{c}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
