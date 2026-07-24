import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import FOG from 'vanta/dist/vanta.fog.min';

export default function VantaBackground() {
  const vantaRef = useRef(null);

  useEffect(() => {
    let vantaEffect = null;

    if (vantaRef.current) {
      try {
        vantaEffect = FOG({
          el: vantaRef.current,
          THREE: THREE,
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

    return () => {
      if (vantaEffect) {
        try {
          vantaEffect.destroy();
        } catch (e) {
          // ignore cleanup errors
        }
      }
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
        background: 'radial-gradient(circle at 50% 50%, #1a1a1a 0%, #050505 100%)',
      }}
    />
  );
}

