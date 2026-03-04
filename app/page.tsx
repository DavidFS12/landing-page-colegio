import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import { Levels } from "./components/Levels";
import { Methodology } from "./components/Methodology";
import { Infrastructure } from "./components/Infrastructure";
import { ContactForm } from "./components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar/>
      <Hero/>
      <About/>
      <Levels/>
      <Methodology/>
      <Infrastructure/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}
