'use client';

import Experience from "@/components/Experience";
import { ScrollController } from "@/components/ScrollController";
import { TitleScreen } from "@/components/overlays/TitleScreen";
import { FallSequence } from "@/components/scene/FallSequence";
import { ProgressBar } from "@/components/overlays/ProgressBar";
import { SocialCard } from "@/components/overlays/SocialCard";

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-background-main selection:bg-primary/30">
      <Experience />
      <ScrollController />

      {/* State Machine Logic & Overlays */}
      <TitleScreen />
      <FallSequence />

      {/* UI Overlays */}
      <ProgressBar />
      <SocialCard />
    </main>
  );
}
