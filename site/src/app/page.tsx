'use client';

import Spline from '@splinetool/react-spline';
import { TitleScreen } from "@/components/overlays/TitleScreen";
import { ProgressBar } from "@/components/overlays/ProgressBar";
import { SocialCard } from "@/components/overlays/SocialCard";
import { useJourney } from '@/stores/useJourney';

export default function Home() {
  const { state } = useJourney();

  return (
    <main className="relative w-full h-screen overflow-hidden bg-background-main selection:bg-primary/30">

      {/* 
        This is a generic Spline placeholder. 
        Once you build your real scene in Spline, you will replace the 'scene' URL 
        with the one Spline gives you when you click "Export > Code > React"
      */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-auto">
        <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
      </div>

      {/* State Machine Logic & Overlays */}
      <TitleScreen />

      {/* UI Overlays */}
      <ProgressBar />
      <SocialCard />

      {/* 
        Notice that we've removed ScrollController and FallSequence for now.
        Spline has its own built-in scrolling, orbit controls, and interaction logic.
        Once you add your scene, we will wire Spline's specific events back into our Zustand store.
      */}
    </main>
  );
}
