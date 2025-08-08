import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { X, Menu } from "lucide-react";

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
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">Developer</span>{" "}
            PortFolio
          </span>
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                href={item.href}
                key={key}
                className={cn(
                  "transition-colors duration-300",
                  isActive
                    ? "text-primary font-semibold"
                    : "text-foreground/80 hover:text-primary"
                )}
              >
                {item.name}
              </a>
            );
          })}
        </div>

        {/* mobile nav */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  href={item.href}
                  key={key}
                  className={cn(
                    "transition-colors duration-300",
                    isActive
                      ? "text-primary font-semibold"
                      : "text-foreground/80 hover:text-primary"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};
