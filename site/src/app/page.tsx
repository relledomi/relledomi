import Nav from "@/components/Nav";
import FilmGrain from "@/components/FilmGrain";
import Hero from "@/components/sections/Hero";
import StreetGames from "@/components/sections/StreetGames";
import TheFormat from "@/components/sections/TheFormat";
import Agency from "@/components/sections/Agency";
import ForBrands from "@/components/sections/ForBrands";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <FilmGrain />
      <Nav />
      <main>
        <Hero />
        <StreetGames />
        <TheFormat />
        <Agency />
        <ForBrands />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
