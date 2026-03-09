'use client';

import { useJourney } from '@/stores/useJourney';
import gsap from 'gsap';

export function TitleScreen() {
    const { state, startJourney } = useJourney();

    if (state !== "TITLE") return null;

    const handleStart = (route: "STREET_GAMES" | "BUSINESS") => {
        startJourney(route);
    };

    return (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center pointer-events-none">
            <div className="text-center translate-y-[-10vh]">
                <h1 className="font-heading text-6xl md:text-8xl tracking-tight text-text-primary mb-2 shadow-2xl drop-shadow-lg">
                    RELLEDOMI
                </h1>
                <p className="font-mono text-sm tracking-widest text-text-secondary uppercase mb-8">
                    Entertainment
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pointer-events-auto">
                    <button
                        onClick={() => handleStart("STREET_GAMES")}
                        className="px-8 py-3 bg-primary hover:bg-primary-hover text-primary-foreground font-bold tracking-widest font-mono text-sm uppercase transition-colors rounded-sm"
                    >
                        Street Games
                    </button>

                    <button
                        onClick={() => handleStart("BUSINESS")}
                        className="px-8 py-3 bg-secondary hover:bg-secondary-hover text-secondary-foreground font-bold tracking-widest font-mono text-sm uppercase transition-colors rounded-sm"
                    >
                        Business
                    </button>
                </div>
            </div>
        </div>
    );
}
