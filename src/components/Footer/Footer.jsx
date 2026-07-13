import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.divider} />
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.name}>Saksham Sahu</span>
          <span className={styles.tagline}>AI Engineer & Full-Stack Developer</span>
        </div>
        <div className={styles.right}>
          <span className={styles.copy}>Built with passion & precision</span>
          <span className={styles.sep}>·</span>
          <span className={styles.year}>© {year}</span>
        </div>
      </div>
    </footer>
  );
}
