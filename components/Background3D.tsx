"use client";

import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Store global mouse position manually since pointer-events-none disables R3F's native pointer state
const mouse = { x: 0, y: 0 };

function generateParticles(count: number) {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    // Distribute particles in a sphere
    const r = 8 * Math.cbrt(Math.random());
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(2 * Math.random() - 1);
    
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }
  return positions;
}

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  
  // Generate particles only once
  const positions = useMemo(() => generateParticles(3000), []);

  useFrame((state, delta) => {
    if (ref.current) {
      // 1. Base subtle rotation over time
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 30;

      // 2. Interactive rotation based on mouse
      const targetX = (mouse.x * Math.PI) / 8;
      const targetY = (mouse.y * Math.PI) / 8;

      // Lerp (Linear Interpolation) for smooth following
      ref.current.rotation.y += (targetX - ref.current.rotation.y) * 0.05;
      ref.current.rotation.x += (targetY - ref.current.rotation.x) * 0.05;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#737373" // Neutral gray to fit the theme
          size={0.03}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

export default function Background3D() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates to -1 to +1
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-[0] pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ParticleField />
      </Canvas>
    </div>
  );
}
