import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutMe } from "../components/AboutMe";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectSection";
import { ContactInfo } from "../components/ContactInfo";
import Footer from "../components/Footer";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export const Home = () => {
  const [init, setInit] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Track theme changes
  useEffect(() => {
    const checkTheme = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsDarkMode(isDark);
      console.log("Theme changed to:", isDark ? "dark" : "light");
    };

    // Check initial theme
    checkTheme();

    // Create observer to watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // Initialize particles engine
  useEffect(() => {
    console.log("Initializing particles engine...");
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      console.log("Particles engine initialized!");
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log("Particles loaded successfully:", container);
    console.log("Container element:", container.canvas.element);
  };

  const options = useMemo(() => {
    console.log(
      "Creating particle options for theme:",
      isDarkMode ? "dark" : "light"
    );

    return {
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false, // Disable click interaction
          },
          onHover: {
            enable: false, // Disable hover interaction
          },
        },
      },
      particles: {
        color: {
          value: isDarkMode ? "#a855f7" : "#64748b", // Purple for dark, gray for light
        },
        links: {
          color: isDarkMode ? "#a855f7" : "#64748b",
          distance: 120,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 0.8,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 400,
        },
        opacity: {
          value: 0.05,
          random: {
            enable: true,
            minimumValue: 0.01,
          },
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.02,
            sync: false,
          },
        },
        shape: {
          type: "polygon",
          polygon: {
            sides: 6,
          },
        },
        size: {
          value: { min: 1, max: 3 }, // Smaller particles
          random: {
            enable: true,
            minimumValue: 0.5,
          },
          animation: {
            enable: true,
            speed: 2,
            minimumValue: 0.5,
            sync: false,
          },
        },
      },
      detectRetina: true,
    };
  }, [isDarkMode]);

  return (
    <div className="min-h-screen text-foreground overflow-x-hidden relative">
      {/* Particles Background */}
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -10,
            pointerEvents: "none", // Disable mouse interaction
          }}
        />
      )}

      {/* Custom background that works with particles */}
      <div
        className="fixed inset-0 -z-20"
        style={{
          background: isDarkMode
            ? "#000000" // Pure black for dark mode
            : "#FFFFFF",
        }}
      />

      {/* Navbar */}
      <Navbar />

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
