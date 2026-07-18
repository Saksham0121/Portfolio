import { useEffect, useRef } from 'react';
import photo from '../../assets/Photonobg.png';
import styles from './Hero.module.css';

export default function Hero() {
  const line2FillRef = useRef(null);
  const line1FillRef = useRef(null);
  const line2StrokeRef = useRef(null);
  const line1StrokeRef = useRef(null);
  const photoRef = useRef(null);

  useEffect(() => {
    const l2Fill = line2FillRef.current;
    const l1Fill = line1FillRef.current;
    const l2Stroke = line2StrokeRef.current;
    const l1Stroke = line1StrokeRef.current;
    const img = photoRef.current;

    if (!l2Fill || !l1Fill || !l2Stroke || !l1Stroke || !img) return;

    // Reset initial states
    const resetLine = (el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(100%)';
    };

    resetLine(l2Fill);
    resetLine(l2Stroke);
    resetLine(l1Fill);
    resetLine(l1Stroke);

    img.style.opacity = '0';
    img.style.transform = 'translateY(80px) scale(0.95)';

    const ease = 'cubic-bezier(0.16, 1, 0.3, 1)';

    // Step 1: Bottom line "SAHU" builds up from bottom first
    const t1 = setTimeout(() => {
      l2Fill.style.transition = `opacity 0.9s ${ease}, transform 0.9s ${ease}`;
      l2Stroke.style.transition = `opacity 0.9s ${ease}, transform 0.9s ${ease}`;
      l2Fill.style.opacity = '1';
      l2Stroke.style.opacity = '1';
      l2Fill.style.transform = 'translateY(0)';
      l2Stroke.style.transform = 'translateY(0)';
    }, 200);

    // Step 2: Top line "SAKSHAM" builds up from bottom second
    const t2 = setTimeout(() => {
      l1Fill.style.transition = `opacity 0.9s ${ease}, transform 0.9s ${ease}`;
      l1Stroke.style.transition = `opacity 0.9s ${ease}, transform 0.9s ${ease}`;
      l1Fill.style.opacity = '1';
      l1Stroke.style.opacity = '1';
      l1Fill.style.transform = 'translateY(0)';
      l1Stroke.style.transform = 'translateY(0)';
    }, 550);

    // Step 3: Photo rises up from bottom
    const t3 = setTimeout(() => {
      img.style.transition = `opacity 1.1s ${ease}, transform 1.1s ${ease}`;
      img.style.opacity = '1';
      img.style.transform = 'translateY(0) scale(1)';
    }, 1000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <section className={styles.hero} id="hero">

      {/* ── Bottom-left intro text ── */}
      <div className={styles.introBlock}>
        <h3 className={styles.introHeadline}>
          Quiet backend. Sharp retrieval. Real impact.
        </h3>
        <p className={styles.introSubheadline}>
          B.Tech CSE Student | Software Engineer | Eager Learner who loves finding new ways to solve problems
        </p>
      </div>


      {/* ── Layer 1: Filled white text (bottom) ── */}
      <div className={`${styles.textLayer} ${styles.textFill}`} aria-hidden="true">
        <div className={styles.lineWrap}>
          <span ref={line1FillRef} className={styles.line1}>SAKSHAM</span>
        </div>
        <div className={styles.lineWrap}>
          <span ref={line2FillRef} className={styles.line2}>SAHU</span>
        </div>
      </div>

      {/* ── Layer 2: Photo (middle) ── */}
      <div className={styles.photoLayer}>
        <img ref={photoRef} src={photo} alt="Saksham Sahu" className={styles.photo} />
      </div>

      {/* ── Layer 3: Stroke-only text (top — always visible) ── */}
      <div className={`${styles.textLayer} ${styles.textStroke}`} aria-label="SAKSHAM SAHU">
        <div className={styles.lineWrap}>
          <span ref={line1StrokeRef} className={styles.line1}>SAKSHAM</span>
        </div>
        <div className={styles.lineWrap}>
          <span ref={line2StrokeRef} className={styles.line2}>SAHU</span>
        </div>
      </div>
    </section>
  );
}
