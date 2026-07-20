import { useEffect, useRef } from 'react';

export default function VantaBackground() {
  const vantaRef = useRef(null);

  useEffect(() => {
    let vantaEffect = null;

    const initVanta = () => {
      if (window.VANTA && window.VANTA.FOG && window.THREE && vantaRef.current) {
        try {
          vantaEffect = window.VANTA.FOG({
            el: vantaRef.current,
            THREE: window.THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            highlightColor: 0x4a4a4a,
            midtoneColor: 0x222222,
            lowlightColor: 0x111111,
            baseColor: 0x050505,
            blurFactor: 0.6,
            speed: 1.30,
            zoom: 0.70
          });
        } catch (err) {
          console.error('Vanta FOG initialization error:', err);
        }
      }
    };

    if (window.VANTA && window.VANTA.FOG && window.THREE) {
      initVanta();
    } else {
      const timer = setInterval(() => {
        if (window.VANTA && window.VANTA.FOG && window.THREE) {
          initVanta();
          clearInterval(timer);
        }
      }, 50);
      return () => clearInterval(timer);
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      id="vanta-bg"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
