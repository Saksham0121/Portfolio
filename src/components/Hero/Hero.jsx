import { useEffect, useRef } from 'react';
import photo from '../../assets/Photonobg.png';
import styles from './Hero.module.css';

export default function Hero() {
  const fillRef = useRef(null);
  const photoRef = useRef(null);
  const strokeRef = useRef(null);

  useEffect(() => {
    // Step 1: Text slides in
    const fill = fillRef.current;
    const stroke = strokeRef.current;
    const img = photoRef.current;

    if (!fill || !stroke || !img) return;

    // Initial state
    fill.style.opacity = '0';
    fill.style.transform = 'translateY(60px)';
    stroke.style.opacity = '0';
    stroke.style.transform = 'translateY(60px)';
    img.style.opacity = '0';
    img.style.transform = 'translateY(40px) scale(0.97)';

    // Animate text first
    const t1 = setTimeout(() => {
      fill.style.transition = 'opacity 0.9s ease, transform 0.9s cubic-bezier(0.16,1,0.3,1)';
      stroke.style.transition = 'opacity 0.9s ease, transform 0.9s cubic-bezier(0.16,1,0.3,1)';
      fill.style.opacity = '1';
      fill.style.transform = 'translateY(0)';
      stroke.style.opacity = '1';
      stroke.style.transform = 'translateY(0)';
    }, 200);

    // Then photo comes in
    const t2 = setTimeout(() => {
      img.style.transition = 'opacity 1s ease, transform 1s cubic-bezier(0.16,1,0.3,1)';
      img.style.opacity = '1';
      img.style.transform = 'translateY(0) scale(1)';
    }, 900);

    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <section className={styles.hero} id="hero">
      {/* ── Top-left name label ── */}
      <div className={styles.nameLabel}>SAKSHAM SAHU</div>

      {/* ── Bottom-left roles ── */}
      <div className={styles.roles}>
        <span>SOFTWARE DEVELOPER</span>
        <span>GENERATIVE AI</span>
        <span>MACHINE LEARNING</span>
        <span>DATA ANALYST</span>
      </div>

      {/* ── Layer 1: Filled white text (bottom) ── */}
      <div ref={fillRef} className={`${styles.textLayer} ${styles.textFill}`} aria-hidden="true">
        <span className={styles.line1}>SAKSHAM</span>
        <span className={styles.line2}>SAHU</span>
      </div>

      {/* ── Layer 2: Photo (middle) ── */}
      <div className={styles.photoLayer}>
        <img ref={photoRef} src={photo} alt="Saksham Sahu" className={styles.photo} />
      </div>

      {/* ── Layer 3: Stroke-only text (top — always visible) ── */}
      <div ref={strokeRef} className={`${styles.textLayer} ${styles.textStroke}`} aria-label="SAKSHAM SAHU">
        <span className={styles.line1}>SAKSHAM</span>
        <span className={styles.line2}>SAHU</span>
      </div>
    </section>
  );
}
