import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <div className="relative border-t border-stone-200/80">
        <About />
      </div>
      <div className="relative border-t border-stone-200/80">
        <Projects />
      </div>
      <div className="relative border-t border-stone-200/80">
        <Skills />
      </div>
      <div className="relative border-t border-stone-200/80">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
