'use client';

import { useCamera } from '@/stores/useCamera';
import { useJourney } from '@/stores/useJourney';
import { anchorStops } from '@/lib/cameraSpline';

export function ProgressBar() {
    const { scrollProgress } = useCamera();
    const { state } = useJourney();

    // Hide on TITLE screen
    if (state === "TITLE") return null;

    return (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 h-[50vh] w-1 z-40 bg-border/50 rounded-full hidden md:block">
            {/* The filling bar */}
            <div
                className="absolute top-0 left-0 w-full bg-primary rounded-full origin-top"
                style={{ transform: `scaleY(${scrollProgress})` }}
            />

            {/* Anchor Stops indicators */}
            {anchorStops.map((stop, i) => {
                // Position relative to the scroll progress where this stop lives
                const topPos = stop.curvePosition * 100;
                const isActive = scrollProgress >= stop.startScroll && scrollProgress <= stop.endScroll;

                return (
                    <div
                        key={i}
                        className={`absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 transition-colors duration-300 ${isActive ? 'bg-primary border-primary scale-125' : 'bg-background-main border-border'}`}
                        style={{ top: `${topPos}%`, marginTop: '-6px' }}
                    />
                );
            })}
        </div>
    );
}
