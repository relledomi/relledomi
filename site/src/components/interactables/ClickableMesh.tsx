'use client';

import { useJourney } from '@/stores/useJourney';
import { useCamera } from '@/stores/useCamera';
import { useCursor } from '@/stores/useCursor'; // Optional, if we want custom cursors
import * as THREE from 'three';
import { useState } from 'react';
import { ThreeEvent } from '@react-three/fiber';

interface ClickableMeshProps {
    panelId: string;
    children: React.ReactNode;
}

export function ClickableMesh({ panelId, children }: ClickableMeshProps) {
    const { openPanel } = useJourney();
    const { lockScroll } = useCamera();
    const [hovered, setHovered] = useState(false);

    const handleClick = (e: ThreeEvent<MouseEvent>) => {
        e.stopPropagation();
        lockScroll();
        openPanel(panelId);
    };

    const handlePointerOver = (e: ThreeEvent<PointerEvent>) => {
        e.stopPropagation();
        setHovered(true);
        document.body.style.cursor = 'pointer';
    };

    const handlePointerOut = (e: ThreeEvent<PointerEvent>) => {
        e.stopPropagation();
        setHovered(false);
        document.body.style.cursor = 'auto';
    };

    return (
        <group
            onClick={handleClick}
            onPointerOver={handlePointerOver}
            onPointerOut={handlePointerOut}
        >
            {/* 
        We use an Outlines component from post-processing or drei 
        to highlight the mesh when hovered if we wanted to be fancy, 
        but scale is a simple feedback mechanism for now.
      */}
            <group scale={hovered ? 1.05 : 1}>
                {children}
            </group>
        </group>
    );
}
