"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 800;
const MOBILE_PARTICLE_COUNT = 300;

function Particles() {
  const meshRef = useRef<THREE.Points>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  const [isMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  const count = isMobile ? MOBILE_PARTICLE_COUNT : PARTICLE_COUNT;

  // Generate particle positions and metadata
  const { positions, colors, sizes, velocities } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const velocities = new Float32Array(count * 3);

    const kangaColor = new THREE.Color("#C2185B");
    const turqColor = new THREE.Color("#00BFA5");
    const creamColor = new THREE.Color("#FFF8E1");
    const dimColor = new THREE.Color("#3A3A36");

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // Spread particles across the viewport with depth
      positions[i3] = (Math.random() - 0.5) * 12;
      positions[i3 + 1] = (Math.random() - 0.5) * 8;
      positions[i3 + 2] = (Math.random() - 0.5) * 6;

      // Slow random velocities for drift
      velocities[i3] = (Math.random() - 0.5) * 0.003;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.003;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.002;

      // Color distribution: mostly dim, some kanga, some turquoise, rare cream
      const rnd = Math.random();
      let color: THREE.Color;
      if (rnd < 0.15) color = kangaColor;
      else if (rnd < 0.25) color = turqColor;
      else if (rnd < 0.28) color = creamColor;
      else color = dimColor;

      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;

      sizes[i] = Math.random() * 3 + 0.5;
    }

    return { positions, colors, sizes, velocities };
  }, [count]);

  // Track mouse for cursor interaction
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;

    const geo = meshRef.current.geometry;
    const posAttr = geo.attributes.position as THREE.BufferAttribute;
    const posArray = posAttr.array as Float32Array;

    const time = state.clock.elapsedTime;
    const mx = mouseRef.current.x * viewport.width * 0.3;
    const my = mouseRef.current.y * viewport.height * 0.3;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // Drift
      posArray[i3] += velocities[i3];
      posArray[i3 + 1] += velocities[i3 + 1];
      posArray[i3 + 2] += velocities[i3 + 2];

      // Gentle wave motion
      posArray[i3 + 1] += Math.sin(time * 0.3 + posArray[i3] * 0.5) * 0.001;

      // Cursor attraction (subtle)
      const dx = mx - posArray[i3];
      const dy = my - posArray[i3 + 1];
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 3) {
        const force = (3 - dist) / 3 * 0.002;
        posArray[i3] += dx * force;
        posArray[i3 + 1] += dy * force;
      }

      // Wrap around bounds
      if (posArray[i3] > 6) posArray[i3] = -6;
      if (posArray[i3] < -6) posArray[i3] = 6;
      if (posArray[i3 + 1] > 4) posArray[i3 + 1] = -4;
      if (posArray[i3 + 1] < -4) posArray[i3 + 1] = 4;
    }

    posAttr.needsUpdate = true;

    // Slow rotation of the whole particle system
    meshRef.current.rotation.z = Math.sin(time * 0.05) * 0.05;
  });

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geo.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
    return geo;
  }, [positions, colors, sizes]);

  return (
    <points ref={meshRef} geometry={geometry}>
      <pointsMaterial
        size={0.035}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Floating geometric wireframe shapes
function FloatingShapes() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.rotation.y = t * 0.03;
    groupRef.current.rotation.x = Math.sin(t * 0.02) * 0.1;
  });

  return (
    <group ref={groupRef}>
      {/* Kanga pink ring */}
      <mesh position={[2.5, 0.8, -1]} rotation={[0.3, 0, 0.5]}>
        <torusGeometry args={[0.8, 0.02, 16, 48]} />
        <meshBasicMaterial color="#C2185B" transparent opacity={0.15} />
      </mesh>

      {/* Turquoise ring */}
      <mesh position={[-2, -0.5, -2]} rotation={[1, 0.5, 0]}>
        <torusGeometry args={[0.5, 0.015, 16, 48]} />
        <meshBasicMaterial color="#00BFA5" transparent opacity={0.1} />
      </mesh>

      {/* Wireframe icosahedron */}
      <mesh position={[3, -1, -1.5]} rotation={[0, 0, 0.3]}>
        <icosahedronGeometry args={[0.4, 0]} />
        <meshBasicMaterial
          color="#C2185B"
          wireframe
          transparent
          opacity={0.08}
        />
      </mesh>

      {/* Small cube */}
      <mesh position={[-3, 1.2, -0.5]} rotation={[0.5, 0.5, 0]}>
        <boxGeometry args={[0.3, 0.3, 0.3]} />
        <meshBasicMaterial
          color="#00BFA5"
          wireframe
          transparent
          opacity={0.06}
        />
      </mesh>
    </group>
  );
}

// Connecting lines between nearby particles
function ConnectionLines() {
  const lineRef = useRef<THREE.LineSegments>(null);
  const posRef = useRef<Float32Array | null>(null);

  useFrame(() => {
    // Connection lines would be very expensive for 800 particles
    // Skip for performance — the particles + shapes are enough
  });

  return null;
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: "transparent" }}
      >
        <color attach="background" args={["#060608"]} />
        <fog attach="fog" args={["#060608", 4, 10]} />
        <Particles />
        <FloatingShapes />
      </Canvas>
    </div>
  );
}
