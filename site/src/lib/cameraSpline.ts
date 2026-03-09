import * as THREE from 'three';

// ----------------------------------------------------
// THE CAMERA PATH (SPLINE)
// ----------------------------------------------------
// This curve defines the absolute path the camera takes through the voxel world.
// It starts high above (Title Screen) and drops down (The Fall).
export const cameraPath = new THREE.CatmullRomCurve3([
    // 0. TITLE SCREEN
    new THREE.Vector3(0, 80, 50),

    // 1. THE FALL BEGINS
    new THREE.Vector3(0, 60, 40),

    // 2. MID FALL (Accelerating)
    new THREE.Vector3(0, 30, 20),

    // 3. STOP 1 (STREET GAMES - Ground Level)
    new THREE.Vector3(0, 2, 0),

    // 4. STREET TRAVEL (Moving forward)
    new THREE.Vector3(0, 2, -30),

    // 5. STOP 2 (THE HUB)
    new THREE.Vector3(0, 2, -60),

    // 6. NIGHT TRANSITION
    new THREE.Vector3(0, 2, -90),

    // 7. STOP 3 (CONTACT / END)
    new THREE.Vector3(0, 2, -120),
], false); // false = not a closed loop

// ----------------------------------------------------
// SCROLL MAPPER WITH FRICTION
// ----------------------------------------------------
// We map the linear scroll value (0.0 to 1.0) to a position on the curve.
// We introduce "friction zones" at the anchor stops where scrolling more
// moves the camera less, allowing time to interact with the stop.

export interface ScrollFrictionZone {
    startScroll: number;  // When the friction zone begins
    endScroll: number;    // When the friction zone ends
    curvePosition: number; // The exact position on the spline we stick to
}

export const anchorStops: ScrollFrictionZone[] = [
    // STOP 1 (Street Games)
    { startScroll: 0.20, endScroll: 0.40, curvePosition: 3 / 7 }, // ~0.428 (index 3 of 7 curve segments)

    // STOP 2 (The Hub)
    { startScroll: 0.55, endScroll: 0.75, curvePosition: 5 / 7 }, // ~0.714

    // STOP 3 (Contact / End)
    { startScroll: 0.85, endScroll: 1.00, curvePosition: 7 / 7 }, // 1.0
];

/**
 * Maps a raw linear scroll progress to a non-linear position on the spline,
 * causing the camera to "stick" at defined anchor stops.
 */
export function getMappedSplinePosition(rawScroll: number): number {
    if (rawScroll <= 0) return anchorStops[0].curvePosition; // Don't allow scrolling back into the sky (fall is auto)

    for (const stop of anchorStops) {
        if (rawScroll >= stop.startScroll && rawScroll <= stop.endScroll) {
            // We are *inside* an anchor zone. Lock the position.
            return stop.curvePosition;
        }
    }

    // If we are between anchor zones, we interpolate smoothly between the locked positions.
    // Travel from Stop 1 to Stop 2:
    if (rawScroll > anchorStops[0].endScroll && rawScroll < anchorStops[1].startScroll) {
        const range = anchorStops[1].startScroll - anchorStops[0].endScroll;
        const progress = (rawScroll - anchorStops[0].endScroll) / range;
        const curveRange = anchorStops[1].curvePosition - anchorStops[0].curvePosition;
        return anchorStops[0].curvePosition + (progress * curveRange);
    }

    // Travel from Stop 2 to Stop 3:
    if (rawScroll > anchorStops[1].endScroll && rawScroll < anchorStops[2].startScroll) {
        const range = anchorStops[2].startScroll - anchorStops[1].endScroll;
        const progress = (rawScroll - anchorStops[1].endScroll) / range;
        const curveRange = anchorStops[2].curvePosition - anchorStops[1].curvePosition;
        return anchorStops[1].curvePosition + (progress * curveRange);
    }

    return rawScroll;
}
