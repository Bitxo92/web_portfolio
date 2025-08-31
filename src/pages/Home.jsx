import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutMe } from "../components/AboutMe";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectSection";
import { ContactInfo } from "../components/ContactInfo";
import Footer from "../components/Footer";
import { useState, useCallback } from "react";

export const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "dark";
  });

  const handleThemeChange = useCallback((isDark) => {
    const currentScroll = window.scrollY;
    setIsDarkMode(isDark);

    // Restore scroll position immediately
    window.scrollTo(0, currentScroll);

    // Double-check scroll position after the next paint
    requestAnimationFrame(() => {
      window.scrollTo(0, currentScroll);
    });
  }, []);

  return (
    <div className="min-h-screen text-foreground overflow-x-hidden relative">
      {/* Blurred Gradient Background */}
      <div className="fixed inset-0 -z-20">
        <div
          className="absolute inset-0 transition-all duration-700"
          style={{
            background: isDarkMode ? "#000000" : "#FFFFFF",
          }}
        />
      </div>

      {/* Navbar */}
      <Navbar onThemeChange={handleThemeChange} />

      {/* Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutMe />
        <SkillsSection />
        <ProjectSection />
        <ContactInfo />
        <div className="h-30"></div>
      </main>

      <Footer />
    </div>
  );
};
