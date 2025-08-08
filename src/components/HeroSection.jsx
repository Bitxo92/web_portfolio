import { ArrowDown } from "lucide-react";
import Lottie from "lottie-react";

export const HeroSection = () => {
  const animationURL =
    "https://lottie.host/10267007-a44d-4c3e-9fe9-06a66bdb4b39/zDwJJd3QII.json";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-4"
    >
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 z-10">
        {/* Text Content */}
        <div className="max-w-2xl text-center lg:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I&apos;m</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Alejandro
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Patiño
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-in-delay-3">
            A FullStack Developer, specialized in creating stunning mobile and
            web apps that deliver exceptional user experiences.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View my Work
            </a>
          </div>
        </div>

        <div>
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
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
