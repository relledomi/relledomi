'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { useCamera } from '@/stores/useCamera';
import { useJourney } from '@/stores/useJourney';

export function ScrollController() {
    const { setScrollProgress, scrollProgress, isScrollLocked } = useCamera();
    const { state } = useJourney();

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
        });

        lenis.on('scroll', (e: any) => {
            if (isScrollLocked) {
                lenis.stop();
                return;
            }

            if (!isScrollLocked) {
                lenis.start();
            }

            // e.progress is 0 to 1
            setScrollProgress(e.progress);
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Initial lock state check
        if (isScrollLocked) lenis.stop();

        return () => {
            lenis.destroy();
        };
    }, [isScrollLocked, setScrollProgress]);

    // Render a massive invisible div to create the scrollable area
    const SCROLL_AREA_HEIGHT = "8000px";

    // Hide the scroll area if we are on the TITLE screen or actively FALLING to prevent jumpiness
    const isHidden = state === "TITLE" || state === "FALLING";

    return (
        <div
            className="absolute top-0 left-0 w-full z-10 pointer-events-none"
            style={{
                height: isHidden ? "100vh" : SCROLL_AREA_HEIGHT,
                overflow: 'hidden'
            }}
        >
            {/* 
        This div's ONLY purpose is to expand the document height 
        so the browser's scrollbar appears and Lenis can track progression.
      */}
            <div className="absolute top-0 w-full h-full" />
        </div>
    );
}
