import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Starfield(props) {
  const ref = useRef();
  
  // Create 5000 random points with colors
  const { positions, colors } = useMemo(() => {
    const p = new Float32Array(5000 * 3);
    const c = new Float32Array(5000 * 3);
    
    // Theme colors matching the portfolio (shifted towards blue)
    const colorPalette = [
      new THREE.Color('#3b82f6'), // Solid Blue
      new THREE.Color('#60a5fa'), // Light Blue
      new THREE.Color('#818cf8'), // Indigo Blue
      new THREE.Color('#2dd4bf'), // Teal Accent
      new THREE.Color('#f8fafc')  // White
    ];

    for (let i = 0; i < 5000; i++) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos((Math.random() * 2) - 1);
      const r = 1.2 + Math.random() * 1.5; 
      
      p[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      p[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      p[i * 3 + 2] = r * Math.cos(phi);

      // Assign random color
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      c[i * 3] = color.r;
      c[i * 3 + 1] = color.g;
      c[i * 3 + 2] = color.b;
    }
    return { positions: p, colors: c };
  }, []);

  useFrame((state, delta) => {
    // Basic idle rotation flow
    ref.current.rotation.x -= delta / 15;
    ref.current.rotation.y -= delta / 20;

    // Scroll and Mouse interaction
    const currentScroll = window.scrollY || 0;
    
    // target rotation based on scroll and mouse position
    const targetZ = (currentScroll * 0.002) + (state.pointer.x * 0.2);
    const targetY = (currentScroll * 0.001) + (state.pointer.y * 0.2);

    // Smoothly interpolate current rotation towards scroll targets
    ref.current.rotation.z += (targetZ - ref.current.rotation.z) * 0.05;
    ref.current.rotation.y += (targetY - ref.current.rotation.y) * 0.05;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          vertexColors
          size={0.012}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

export default function Background3D() {
  return (
    <div className="w-full h-full bg-background absolute top-0 left-0 pointer-events-auto">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Starfield />
      </Canvas>
    </div>
  );
}
