'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { CameraRig } from './scene/CameraRig';
import { BaseScene } from './scene/BaseScene';
// import { PostFX } from './scene/PostFX'; // TODO: Enable later
import { useJourney } from '@/stores/useJourney';

export default function Experience() {
    const { state } = useJourney();

    return (
        <div className="fixed inset-0 w-full h-full z-0 bg-background-main">
            <Canvas
                shadows
                camera={{ position: [0, 80, 50], fov: 45 }}
                gl={{ antialias: true, alpha: false }}
                dpr={[1, 2]} // Optimize pixel ratio
            >
                <Suspense fallback={null}>
                    <BaseScene />
                    <CameraRig />
                    {/* <PostFX /> */}
                </Suspense>
            </Canvas>
        </div>
    );
}
