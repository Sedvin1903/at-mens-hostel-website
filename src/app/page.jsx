import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Gallery />
      <About />
      <Reviews />
      <Contact />
      <Footer/>
    </main>
  );
}


