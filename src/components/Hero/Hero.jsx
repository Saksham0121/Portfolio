import { useState, useRef } from 'react';
import { ArrowDown, Download } from 'lucide-react';
import photo from '../../assets/coverphoto.jpg';
import styles from './Hero.module.css';

export default function Hero() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const rafRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -15;
      const rotateY = ((x - centerX) / centerX) * 15;
      setRotation({ x: rotateX, y: rotateY });
    });
  };

  const handleMouseLeave = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setRotation({ x: 0, y: 0 });
  };

  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.contentContainer}>
        <div className={styles.textSection}>
          <h1 className={styles.title}>SAKSHAM SAHU</h1>
          <h3 className={styles.introHeadline}>
            Quiet backend. Sharp retrieval. Real impact.
          </h3>
          <div className={styles.summaryWrapper}>
            <p className={styles.introSubheadline}>
              I'm a software engineer who builds reliable backend systems and Generative AI solutions, with hands-on experience in scalable architectures and intelligent, data-driven applications.
            </p>
            <p className={styles.introSubheadlineSecondary}>
              I love turning everyday problems into simple, practical products that make people's lives easier and better.
            </p>
          </div>

          <div className={styles.ctaGroup}>
            <a href="#projects" onClick={scrollToProjects} className={styles.primaryBtn}>
              <span>View Projects</span>
              <ArrowDown size={16} />
            </a>
            <a
              href="/resume.pdf"
              download="Saksham_Sahu_Resume.pdf"
              className={styles.secondaryBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download size={16} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        <div className={styles.imageSection}>
          <div
            className={styles.imageStack}
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
              transition: rotation.x === 0 && rotation.y === 0 ? 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' : 'transform 0.1s ease-out'
            }}
          >
            <div className={styles.imageBackdrop}></div>
            <div className={styles.imageBox}>
              <img src={photo} alt="Saksham Sahu" className={styles.photo} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
