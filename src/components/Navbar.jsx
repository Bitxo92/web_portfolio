import { useEffect, useState } from "react";
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

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;

      setIsScrolled(scrollPos > 10);

      // Determine which section is active
      let currentSection = "hero";

      for (const item of navItems) {
        const section = document.querySelector(item.href);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPos >= top - 100 && scrollPos < top + height - 100) {
            currentSection = item.href.slice(1);
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    // Call on mount to set initial state
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
            <ThemeToggle className="ml-4" />
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
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
