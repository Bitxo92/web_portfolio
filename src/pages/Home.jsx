import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutMe } from "../components/AboutMe";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectSection";
import { ContactInfo } from "../components/ContactInfo";
export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background Effects*/}
      <StarBackground />

      {/* Navbar */}
      <Navbar />
      {/* Content */}
      <main>
        <HeroSection></HeroSection>
        <AboutMe></AboutMe>
        <SkillsSection></SkillsSection>
        <ProjectSection></ProjectSection>
        <ContactInfo></ContactInfo>
        <div className="h-100"></div>
      </main>
    </div>
  );
};
