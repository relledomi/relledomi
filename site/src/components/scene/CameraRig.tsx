'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { cameraPath, getMappedSplinePosition } from '@/lib/cameraSpline';
import { useCamera } from '@/stores/useCamera';
import { useJourney } from '@/stores/useJourney';

export function CameraRig() {
    const { scrollProgress, isScrollLocked, setSplinePosition } = useCamera();
    const { state } = useJourney();
    const groupRef = useRef<THREE.Group>(null);
    const lookAtTarget = useRef(new THREE.Vector3());
    const mouse = useRef({ x: 0, y: 0 });

    // Handle subtle mouse parallax at stops
    useFrame((stateObj, delta) => {
        // We only apply mouse parallax if we are at a stop and not locked
        if (state === "AT_STOP" && !isScrollLocked) {
            // Normalize mouse coordinates to [-1, 1]
            mouse.current.x = (stateObj.pointer.x * Math.PI) / 60; // Max rotation
            mouse.current.y = (stateObj.pointer.y * Math.PI) / 60;
        } else {
            mouse.current.x = THREE.MathUtils.lerp(mouse.current.x, 0, 0.1);
            mouse.current.y = THREE.MathUtils.lerp(mouse.current.y, 0, 0.1);
        }

        if (groupRef.current) {
            // Apply rotation to the grouping rig holding the camera
            groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -mouse.current.y, 0.1);
            groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, -mouse.current.x, 0.1);
        }

        // Camera Spline Logic
        if (state === "TRAVELING" || state === "AT_STOP") {
            const mappedPos = getMappedSplinePosition(scrollProgress);
            setSplinePosition(mappedPos);

            // We don't want the exact point (0 causes error), clamp slightly above 0
            const safePos = Math.max(0.001, mappedPos);

            const point = cameraPath.getPointAt(safePos);
            const tangent = cameraPath.getTangentAt(safePos);

            // Move camera smoothly to the point
            stateObj.camera.position.lerp(point, 0.1);

            // Look slightly ahead on the curve
            lookAtTarget.current.copy(point).add(tangent);
            stateObj.camera.lookAt(lookAtTarget.current);
        }
    });

    return (
        <group ref={groupRef}>
            {/* 
        This group acts as a gimbal for the mouse parallax effect.
        The actual THREE.Camera is managed by Canvas automatically,
        but we manipulate its position in useFrame.
        We could inject a PerspectiveCamera here if we need deep control.
      */}
        </group>
    );
}
