import { ArrowDown } from "lucide-react";
import Lottie from "lottie-react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

export const HeroSection = () => {
  const animationURL =
    "https://lottie.host/10267007-a44d-4c3e-9fe9-06a66bdb4b39/zDwJJd3QII.json";
  // Create a ref for the element where Typed.js will render
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Frontend Developer",
        "UI/UX Designer",
        "Mobile Developer",
        "Web Developer",
        "Backend Developer",
        "Full Stack Developer",
      ],

      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col justify-center px-4 py-16 sm:py-24"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 z-10">
        {/* Text Content */}
        <div className="max-w-2xl w-full text-center lg:text-left space-y-4 lg:space-y-6 mt-8 lg:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in inline-block">
              Hi, I&apos;m{" "}
            </span>{" "}
            <br />
            <span className="inline-flex flex-wrap">
              <span className="text-primary opacity-0 animate-fade-in-delay-1 inline-block font-[VT323]">
                Alejandro
              </span>
              <span className="text-gradient opacity-0 animate-fade-in-delay-2 inline-block ml-2 font-[VT323] ">
                Patiño
              </span>
            </span>
          </h1>

          <span
            ref={el}
            className="inline-block text-base sm:text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-in-delay-3 min-h-[30px] font-[VT323] dark:neon-white"
          ></span>
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a
              href="#projects"
              className="neon-button cosmic-button w-full sm:w-auto px-8 py-3"
            >
              <span className="neon-white">View my Work</span>
            </a>
          </div>
        </div>

        {/* Animation Container */}
        <div className="w-full lg:w-1/2 max-w-[400px] lg:max-w-[500px] mx-auto">
          <Lottie
            animationData={null}
            path={animationURL}
            loop
            autoplay
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-xs sm:text-sm text-muted-foreground mb-2 font-[VT323]">
          Scroll Down
        </span>
        <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
      </div>
    </section>
  );
};
