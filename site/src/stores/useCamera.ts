import { create } from "zustand";

interface CameraStore {
    // Normalized scroll progress 0.0 -> 1.0 (read from Lenis)
    scrollProgress: number;
    setScrollProgress: (progress: number) => void;

    // Actual mapped position along the CatmullRomCurve (allows for friction at stops)
    splinePosition: number;
    setSplinePosition: (pos: number) => void;

    // Is scroll currently locked? (e.g. during FALLING or INTERACTING)
    isScrollLocked: boolean;
    lockScroll: () => void;
    unlockScroll: () => void;
}

export const useCamera = create<CameraStore>((set) => ({
    scrollProgress: 0,
    setScrollProgress: (progress) => set({ scrollProgress: progress }),

    splinePosition: 0,
    setSplinePosition: (pos) => set({ splinePosition: pos }),

    isScrollLocked: true, // Locked on TITLE screen by default
    lockScroll: () => set({ isScrollLocked: true }),
    unlockScroll: () => set({ isScrollLocked: false }),
}));
