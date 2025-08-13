import { useEffect, useState } from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import Lottie from "lottie-react";

export const ContactInfo = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch(
      "https://lottie.host/10267007-a44d-4c3e-9fe9-06a66bdb4b39/zDwJJd3QII.json"
    )
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);

  return (
    <section
      id="contact"
      className="py-12 px-4 sm:py-20 sm:px-6 bg-background text-foreground flex flex-col items-center gap-6 sm:gap-8"
    >
      {/* Header */}
      <h2 className="text-2xl sm:text-4xl font-bold text-center">
        Lets <span className="text-primary">Connect</span>
      </h2>

      {/* Description text */}
      <p className="max-w-xl text-center text-base sm:text-lg leading-relaxed">
        Feel free to reach out via{" "}
        <a href="mailto:alexpatino1992@gmail.com">
          <span className="text-primary">email</span>{" "}
        </a>
        or connect with me on{" "}
        <a
          href="https://www.linkedin.com/in/alejandro-m-pati%C3%B1o-garcia-41b000309/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-primary">Linkedin</span>
        </a>{" "}
        and{" "}
        <a
          href="https://github.com/Bitxo92"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-primary">GitHub</span>
        </a>{" "}
        . I'd love to hear from you!
      </p>

      {/* Lottie Animation */}
      <div className="w-40 h-40 sm:w-64 sm:h-64">
        {animationData && <Lottie animationData={animationData} loop />}
      </div>

      {/* Icons Row */}
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
        <a
          href="mailto:alexpatino1992@gmail.com"
          className="transition-transform duration-300 hover:scale-110 hover:animate-shake"
        >
          <Mail className="w-6 h-6 sm:w-8 sm:h-8" />
        </a>

        <a
          href="https://www.linkedin.com/in/alejandro-m-pati%C3%B1o-garcia-41b000309/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 hover:scale-110 hover:animate-shake"
        >
          <Linkedin className="w-6 h-6 sm:w-8 sm:h-8" />
        </a>

        <a
          href="https://github.com/Bitxo92"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 hover:scale-110 hover:animate-shake"
        >
          <Github className="w-6 h-6 sm:w-8 sm:h-8" />
        </a>
      </div>
    </section>
  );
};
