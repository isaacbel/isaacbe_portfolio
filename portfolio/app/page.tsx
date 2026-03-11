import Hero from "./components/sections/HeroSection";
import About from "./components/about/About";
import MySkills from "./components/Skills/index";
import Projects from "./components/Projects/Index";
import Contact from "./components/Contact/index";
import Footer from "./components/Footer/Footer";
export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f172a]">

      <Hero/>
      <About />
      <MySkills/>
      <Projects/>
      <Contact/>
      <Footer/>

    </div>
  );
}