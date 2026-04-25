import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Sobre from "@/components/Sobre";
import Gallery from "@/components/Gallery";
import Clases from "@/components/Clases";
import Horarios from "@/components/Horarios";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Sobre />
        <Gallery />
        <Clases />
        <Horarios />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
