import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.divider} />
      <div className={styles.inner}>
        <span className={styles.copy}>
          Built with <span className={styles.heart}>♥</span> by Saksham Kumar
        </span>
        <span className={styles.mono}>2024 · All rights reserved</span>
      </div>
    </footer>
  );
}
