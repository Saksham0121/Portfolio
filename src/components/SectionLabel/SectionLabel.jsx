import styles from './SectionLabel.module.css';

export default function SectionLabel({ children }) {
  return (
    <div className={styles.wrapper}>
      <span className={styles.label}>{children}</span>
      <div className={styles.line} />
    </div>
  );
}
