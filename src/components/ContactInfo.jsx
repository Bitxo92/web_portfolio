import { useEffect, useState } from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

export const ContactInfo = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch(
      "https://lottie.host/10267007-a44d-4c3e-9fe9-06a66bdb4b39/zDwJJd3QII.json"
    )
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);
  const smoothEase = [0.25, 0.1, 0.25, 1];

  return (
    <section
      id="contact"
      className="scroll-mt-16 py-12 px-4 sm:py-20 sm:px-6 bg-transparent text-foreground flex flex-col items-center gap-6 sm:gap-8"
    >
      {/* Header */}
      <motion.h2
        className="text-2xl sm:text-4xl font-bold text-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: smoothEase }}
        viewport={{ once: true }}
      >
        <span className="neon-white"> Let`s</span>{" "}
        <span className="text-primary neon-purple">Connect</span>
      </motion.h2>

      {/* Description text */}
      <motion.p
        className="max-w-xl text-center text-base sm:text-lg leading-relaxed font-[VT323]"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: smoothEase, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Feel free to reach out via{" "}
        <a href="mailto:alexpatino1992@gmail.com">
          <span className="text-primary neon-purple">email</span>{" "}
        </a>
        or connect with me on{" "}
        <a
          href="https://www.linkedin.com/in/alejandro-m-pati%C3%B1o-garcia-41b000309/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-primary neon-purple">Linkedin</span>
        </a>{" "}
        and{" "}
        <a
          href="https://github.com/Bitxo92"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-primary neon-purple">GitHub</span>
        </a>{" "}
        . I'd love to hear from you!
      </motion.p>

      {/* Avatar SVG */}
      <div className="w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 flex justify-center items-center">
        <img
          src={"./avatar_laptop_dog.svg"}
          alt="avatar"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Icons Row */}
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
        <a
          href="mailto:alexpatino1992@gmail.com"
          className="transition-transform duration-300 hover:scale-110 hover:animate-shake neon-mail"
        >
          <Mail className="w-6 h-6 sm:w-8 sm:h-8" />
        </a>

        <a
          href="https://www.linkedin.com/in/alejandro-m-pati%C3%B1o-garcia-41b000309/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 hover:scale-110 hover:animate-shake neon-linkedin"
        >
          <Linkedin className="w-6 h-6 sm:w-8 sm:h-8 " />
        </a>

        <a
          href="https://github.com/Bitxo92"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 hover:scale-110 hover:animate-shake neon-github"
        >
          <Github className="w-6 h-6 sm:w-8 sm:h-8" />
        </a>
      </div>
    </section>
  );
};
