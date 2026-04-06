// app/page.js - This can stay as a Server Component
import Navigation from "./components/navigation/Navigation";
import AboutMe from "./components/home/about/about_section";
import HeroSection from "./components/home/hero/hero_section";
import FeaturedProjects from "./components/home/project/project_section";

export default function Home() {
  return (
    <>
      <Navigation />
      <section id="hero" className="scroll-mt-20">
        <HeroSection />
      </section>
      <section id="projects" className="scroll-mt-20">
        <FeaturedProjects />
      </section>
      <section id="about" className="scroll-mt-20">
        <AboutMe />
      </section>
    </>
  );
}
