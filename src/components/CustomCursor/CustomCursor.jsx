import { useEffect, useState } from 'react';
import styles from './CustomCursor.module.css';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };
    const onLeave = () => setHidden(true);
    const onEnter = () => setHidden(false);

    const onOver = (e) => {
      if (e.target.closest('a, button, [data-cursor-hover]')) {
        setHovering(true);
      }
    };
    const onOut = (e) => {
      if (e.target.closest('a, button, [data-cursor-hover]')) {
        setHovering(false);
      }
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
    };
  }, []);

  return (
    <>
      <div
        className={`${styles.cursor} ${hovering ? styles.hovering : ''} ${hidden ? styles.hidden : ''}`}
        style={{ left: pos.x, top: pos.y }}
      />
      <div
        className={`${styles.cursorDot} ${hidden ? styles.hidden : ''}`}
        style={{ left: pos.x, top: pos.y }}
      />
    </>
  );
}
