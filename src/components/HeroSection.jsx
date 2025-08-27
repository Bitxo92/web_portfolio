import { ChevronsDown } from "lucide-react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
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
  const smoothEase = [0.25, 0.1, 0.25, 1];

  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col justify-center px-4 py-16 sm:py-24"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 z-10">
        {/* Text Content */}
        <div className="max-w-2xl w-full text-center lg:text-left space-y-4 lg:space-y-6 mt-8 lg:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: smoothEase }}
              viewport={{ once: false }}
            >
              Hi, I&apos;m{" "}
            </motion.span>{" "}
            <br />
            <span className="inline-flex flex-wrap">
              <motion.span
                className="text-primary neon-purple"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: smoothEase, delay: 0.2 }}
                viewport={{ once: false }}
              >
                Alejandro
              </motion.span>
              <motion.span
                className="text-gradient ml-2 neon-white"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: smoothEase, delay: 0.2 }}
                viewport={{ once: false }}
              >
                Patiño
              </motion.span>
            </span>
          </h1>

          <span
            ref={el}
            className="inline-block text-base sm:text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-in-delay-3 min-h-[30px] font-[VT323] dark:neon-white"
          ></span>
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a
              href="#projects"
              className=" cosmic-button w-full sm:w-auto px-8 py-3 neon-button"
            >
              <span className="neon-white">View my Work</span>
            </a>
          </div>
        </div>
        {/* Avatar with Animated Border + Levitation */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative size-72 sm:size-80 md:size-96">
            <div className="animate-spin-slow" />
            <div className="absolute inset-[3px] rounded-full bg-background" />
            <motion.img
              src="/avatar.png"
              alt="Programmer Avatar"
              className="absolute inset-[3px] w-full h-full object-cover rounded-full bg-white dark:bg-black"
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.01, 1],
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-xs sm:text-sm text-muted-foreground mb-2 font-[VT323]">
          Scroll Down
        </span>
        <ChevronsDown className="h-4 w-4 sm:h-5 sm:w-5 text-primary neon-purple" />
      </div>
    </section>
  );
};
