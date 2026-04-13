import { useEffect, useRef } from 'react';
import styles from './Skills.module.css';
import { skills, techStack } from '../../data/resumeData';

function SkillBar({ skill }) {
  const barRef = useRef(null);

  useEffect(() => {
    const el = barRef.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.setProperty('--target', `${skill.level}%`);
        el.classList.add(styles.animate);
        observer.disconnect();
      }
    }, { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [skill.level]);

  return (
    <div className={styles.skillRow}>
      <div className={styles.skillMeta}>
        <span className={styles.skillName}>{skill.name}</span>
        <span className={styles.skillPct} style={{ color: skill.color }}>{skill.level}%</span>
      </div>
      <div className={styles.track}>
        <div
          ref={barRef}
          className={styles.bar}
          style={{ '--color': skill.color, '--target': '0%' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className={styles.section} id="skills">
      <div className={styles.header}>
        <span className={styles.tag}>{'<skills />'}</span>
        <h2 className={styles.title}>Technical Arsenal</h2>
      </div>

      <div className={styles.grid}>
        {/* Skill bars */}
        <div className={styles.barsCard}>
          <p className={styles.cardLabel}>Proficiency</p>
          <div className={styles.bars}>
            {skills.map((s) => <SkillBar key={s.name} skill={s} />)}
          </div>
        </div>

        {/* Tech stack */}
        <div className={styles.stackCard}>
          <p className={styles.cardLabel}>Full Stack</p>
          <div className={styles.stackGroups}>
            {techStack.map((g) => (
              <div key={g.category} className={styles.stackGroup}>
                <p className={styles.stackCat}>{g.category}</p>
                <div className={styles.stackTags}>
                  {g.items.map((t) => (
                    <span key={t} className={styles.stackTag}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
