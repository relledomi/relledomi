'use client';

import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

// Placeholder scene until we get voxel models
export function BaseScene() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.2;
            meshRef.current.rotation.y += delta * 0.2;
        }
    });

    return (
        <group>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} castShadow />

            {/* Stop 1 Marker */}
            <mesh position={[0, 2, 0]}>
                <boxGeometry args={[4, 4, 4]} />
                <meshStandardMaterial color="#C2185B" /> {/* Kanga Pink */}
            </mesh>

            {/* Stop 2 Marker */}
            <mesh position={[0, 2, -60]}>
                <boxGeometry args={[4, 4, 4]} />
                <meshStandardMaterial color="#00BFA5" /> {/* Turquoise */}
            </mesh>

            {/* Stop 3 Marker */}
            <mesh position={[0, 2, -120]}>
                <boxGeometry args={[4, 4, 4]} />
                <meshStandardMaterial color="#FFF8E1" /> {/* Cream */}
            </mesh>

            {/* Floor Sections */}

            {/* Stop 1 Area */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]}>
                <planeGeometry args={[40, 40]} />
                <meshStandardMaterial color="#1a1a24" /> {/* Dark bluish */}
            </mesh>

            {/* Travel Path */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.2, -30]}>
                <planeGeometry args={[10, 60]} />
                <meshStandardMaterial color="#2d2d3b" /> {/* Path color */}
            </mesh>

            {/* Stop 2 Area */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, -60]}>
                <planeGeometry args={[40, 40]} />
                <meshStandardMaterial color="#1f2c25" /> {/* Dark greenish */}
            </mesh>

            {/* Travel Path */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.2, -90]}>
                <planeGeometry args={[10, 60]} />
                <meshStandardMaterial color="#2d2d3b" />
            </mesh>

            {/* Stop 3 Area */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, -120]}>
                <planeGeometry args={[40, 40]} />
                <meshStandardMaterial color="#2c221f" /> {/* Dark reddish/warm */}
            </mesh>
        </group>
    );
}
