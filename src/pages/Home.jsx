import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutMe } from "../components/AboutMe";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectSection";
import { ContactInfo } from "../components/ContactInfo";
import Footer from "../components/Footer";
import { useEffect, useState, useRef, useCallback } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export const Home = () => {
  const [init, setInit] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Initialize theme state immediately from localStorage to prevent initial flash
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "dark";
  });

  const particlesContainerRef = useRef(null);

  // Initialize particles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Static particle options that don't depend on theme
  const particleOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: false,
        },
        onHover: {
          enable: false,
        },
      },
    },
    particles: {
      color: {
        value: "#a855f7", // Always purple, we'll handle color via CSS
      },
      links: {
        color: "#a855f7",
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
        value: { min: 1, max: 3 },
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

  const handleThemeChange = useCallback((isDark) => {
    // Store current scroll position
    const currentScroll = window.scrollY;

    setIsDarkMode(isDark);

    // Restore scroll position immediately
    window.scrollTo(0, currentScroll);

    // Double-check scroll position after the next paint
    requestAnimationFrame(() => {
      window.scrollTo(0, currentScroll);
    });
  }, []);

  const particlesLoaded = useCallback((container) => {
    particlesContainerRef.current = container;
  }, []);

  return (
    <div className="min-h-screen text-foreground overflow-x-hidden relative">
      {/* Particles Background - Only render once */}
      {init && (
        <div
          className={`fixed inset-0 -z-10 pointer-events-none transition-opacity duration-300 ${
            isDarkMode ? "opacity-100" : "opacity-30"
          }`}
        >
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={particleOptions}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      )}

      {/* Custom background */}
      <div
        className="fixed inset-0 -z-20 transition-colors duration-300"
        style={{
          backgroundColor: isDarkMode ? "#000000" : "#FFFFFF",
        }}
      />

      {/* Navbar */}
      <Navbar onThemeChange={handleThemeChange} />
      <div className="snap-y snap-mandatory overflow-y-scroll h-screen">
        {/* Content */}
        <main className="relative z-10">
          <div className=" snap-center">
            <HeroSection />
          </div>
          <div className=" snap-start pt-16">
            <AboutMe />
          </div>
          <div className=" snap-start pt-16">
            <SkillsSection />
          </div>
          <div className=" snap-start pt-16">
            <ProjectSection />
          </div>
          <div className=" snap-start pt-16">
            <ContactInfo />
          </div>
          <div className="h-30"></div>
        </main>

        <Footer />
      </div>
    </div>
  );
};
