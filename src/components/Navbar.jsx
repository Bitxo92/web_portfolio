import { useEffect, useState, useRef } from "react";
import { cn } from "../lib/utils";
import { X, Menu } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  {
    name: "Home",
    href: "#hero",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export const Navbar = ({ onThemeChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = document.querySelector(".snap-y");
      if (!scrollContainer) return;

      const scrollPos = scrollContainer.scrollTop;

      // Update scroll state for blur effect
      setIsScrolled(scrollPos > 10);

      const sections = navItems
        .map((item) => ({
          id: item.href.slice(1),
          element: document.getElementById(item.href.slice(1)),
        }))
        .filter((section) => section.element);

      let currentSection = "hero";
      const viewportHeight = window.innerHeight;
      const centerPoint = scrollPos + viewportHeight / 2;

      for (const section of sections) {
        const rect = section.element.getBoundingClientRect();
        const elementTop = scrollPos + rect.top;
        const elementBottom = elementTop + rect.height;

        if (centerPoint >= elementTop && centerPoint <= elementBottom) {
          currentSection = section.id;
          break;
        }
      }

      setActiveSection(currentSection);
    };

    const scrollContainer = document.querySelector(".snap-y");
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll, {
        passive: true,
      });

      handleScroll();
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  // Close mobile menu when clicking on nav items
  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={cn(
          "fixed w-full z-40 transition-all duration-300",
          isScrolled
            ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
            : "py-5"
        )}
      >
        <div className="container flex items-center justify-between">
          <a
            className="text-xl font-bold text-primary flex items-center"
            href="#hero"
          >
            <span className="relative z-10">
              <span className="neon-white-navbar text-foreground font-[VT323]">
                &lt; Developer
              </span>{" "}
              <span className="neon-purple-flicker">PortFolio /&gt;</span>
            </span>
          </a>

          {/* desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, key) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  href={item.href}
                  key={key}
                  className={cn(
                    "transition-colors duration-300",
                    isActive
                      ? "text-primary font-semibold neon-purple"
                      : "text-foreground/80 hover:text-primary"
                  )}
                >
                  {item.name}
                </a>
              );
            })}
            <ThemeToggle onThemeChange={onThemeChange} className="ml-4" />
          </div>

          {/* mobile nav */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-foreground z-50"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-background/95 backdrop-blur-xl"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu content */}
          <div className="relative h-full flex flex-col items-center justify-center">
            {/* Close button (top-right) */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 p-2 text-foreground"
              aria-label="Close Menu"
            >
              <X size={28} />
            </button>

            <div className="flex flex-col items-center space-y-8 text-xl">
              {navItems.map((item, key) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <a
                    href={item.href}
                    key={key}
                    className={cn(
                      "transition-colors duration-300",
                      isActive
                        ? "text-primary font-semibold neon-purple"
                        : "text-foreground/80 hover:text-primary"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                );
              })}
              <ThemeToggle onThemeChange={onThemeChange} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
