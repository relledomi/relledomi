'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useJourney } from '@/stores/useJourney';
import { useCamera } from '@/stores/useCamera';
import { getMappedSplinePosition } from '@/lib/cameraSpline';

export function FallSequence() {
    const { state, setState } = useJourney();
    const { setScrollProgress, unlockScroll, setSplinePosition } = useCamera();
    const tl = useRef<gsap.core.Timeline>(null);

    useEffect(() => {
        if (state === "FALLING") {
            // The user clicked "Street Games" or "Business"
            // Animate the internal virtual scroll from 0 to Stop 1

            const targetScroll = 0.25; // 0.25 puts them safely inside the anchor zone for Stop 1

            const virtualScroll = { value: 0 };

            tl.current = gsap.timeline({
                onComplete: () => {
                    // Fall has finished
                    setScrollProgress(targetScroll);
                    setSplinePosition(getMappedSplinePosition(targetScroll));
                    setState("AT_STOP");
                    unlockScroll();
                }
            });

            tl.current.to(virtualScroll, {
                value: targetScroll,
                duration: 2.5,
                ease: "power2.inOut",
                onUpdate: () => {
                    // As we fall, we force the camera to move along the spline
                    const mapped = getMappedSplinePosition(virtualScroll.value);
                    setSplinePosition(mapped);

                    // Also sync the Lenis scroll progress under the hood so when it unlocks,
                    // the browser window is scrolled to the right depth.
                    setScrollProgress(virtualScroll.value);

                    // Note: Actually moving the browser scrollbar programmatically via Lenis
                    // would be ideal here if Lenis instance was available globally.
                    // For now, syncing the store achieves the camera movement.
                }
            });
        }

        return () => {
            if (tl.current) tl.current.kill();
        }
    }, [state, setState, setScrollProgress, unlockScroll, setSplinePosition]);

    return null; // Logic component only
}
