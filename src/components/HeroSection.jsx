import { ArrowDown } from "lucide-react";
import Lottie from "lottie-react";

export const HeroSection = () => {
  const animationURL =
    "https://lottie.host/10267007-a44d-4c3e-9fe9-06a66bdb4b39/zDwJJd3QII.json";

  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col justify-center px-4 py-16 sm:py-24"
    >
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12 z-10">
        {/* Text Content */}
        <div className="max-w-2xl w-full text-center lg:text-left space-y-4 lg:space-y-6 mt-8 lg:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in inline-block">
              Hi, I&apos;m{" "}
            </span>{" "}
            <br />
            <span className="inline-flex flex-wrap">
              <span className="text-primary opacity-0 animate-fade-in-delay-1 inline-block">
                Alejandro
              </span>
              <span className="text-gradient opacity-0 animate-fade-in-delay-2 inline-block ml-2">
                Patiño
              </span>
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-in-delay-3 px-4 sm:px-0">
            A FullStack Developer, specialized in creating stunning mobile and
            web apps that deliver exceptional user experiences.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a
              href="#projects"
              className="cosmic-button w-full sm:w-auto px-8 py-3"
            >
              View my Work
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
        <span className="text-xs sm:text-sm text-muted-foreground mb-2">
          Scroll Down
        </span>
        <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
      </div>
    </section>
  );
};
