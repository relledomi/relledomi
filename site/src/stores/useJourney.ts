import { create } from "zustand";

export type JourneyState =
    | "TITLE"
    | "FALLING"
    | "AT_STOP"
    | "TRAVELING"
    | "INTERACTING";

export type AnchorStop = "NONE" | "STOP_1" | "STOP_2" | "STOP_3";

interface JourneyStore {
    // Current high-level state of the user in the experience
    state: JourneyState;
    setState: (state: JourneyState) => void;

    // Which stop they are currently at (or traveling to/from)
    currentStop: AnchorStop;
    setCurrentStop: (stop: AnchorStop) => void;

    // Whether a specific HTML floating UI panel is open
    activePanel: string | null;
    openPanel: (panelId: string) => void;
    closePanel: () => void;

    // Has the user started the experience? (Left the TITLE screen)
    hasStarted: boolean;
    startJourney: (route: "STREET_GAMES" | "BUSINESS") => void;

    // Quick skip
    route: "STREET_GAMES" | "BUSINESS" | null;
}

export const useJourney = create<JourneyStore>((set) => ({
    state: "TITLE",
    setState: (state) => set({ state }),

    currentStop: "NONE",
    setCurrentStop: (stop) => set({ currentStop: stop }),

    activePanel: null,
    openPanel: (panelId) => {
        set({ activePanel: panelId, state: "INTERACTING" });
    },
    closePanel: () => {
        // Revert to AT_STOP when closing a panel
        set({ activePanel: null, state: "AT_STOP" });
    },

    hasStarted: false,
    route: null,
    startJourney: (route) => {
        set({ hasStarted: true, state: "FALLING", route });
    },
}));
