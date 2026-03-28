import Navigation from "./components/navigation/Navigation";
import AboutMe from "./components/home/about/about_section";
import HeroSection from "./components/home/hero/hero_section";
import FeaturedProjects from "./components/home/project/project_section";

export default function Home() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <FeaturedProjects />
      <AboutMe />
    </>
  );
}
