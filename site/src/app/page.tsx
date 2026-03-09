import Experience from "@/components/Experience";
// import { ScrollController } from "@/components/ScrollController";
import { TitleScreen } from "@/components/overlays/TitleScreen";
import { FallSequence } from "@/components/scene/FallSequence";

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-background-main">
      <Experience />
      {/* <ScrollController /> */}
      <TitleScreen />
      <FallSequence />
    </main>
  );
}
