import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Web Development",
    skills: [
      {
        name: "HTML/CSS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Tailwind",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "Node.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Django",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
      },
    ],
  },
  {
    title: "App Development",
    skills: [
      {
        name: "Flutter",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      },
      {
        name: "Android Studio",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
      },
      {
        name: "Firebase",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg",
      },
      {
        name: "Supabase",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
      },
    ],
  },
  {
    title: "Databases",
    skills: [
      {
        name: "MongoDB",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "MySQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "SQLite",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
      },
      {
        name: "PostgreSQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "Java",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "Python",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "Dart",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
      },
    ],
  },
];

export const SkillsSection = () => {
  const smoothEase = [0.25, 0.1, 0.25, 1];
  return (
    <section
      id="skills"
      className="scroll-mt-16 py-12 sm:py-16 md:py-24 px-4 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: smoothEase }}
          viewport={{ once: false }}
        >
          <span className="neon-white">My</span>{" "}
          <span className="text-primary neon-purple">Skills</span>
        </motion.h2>

        <div className="space-y-8 sm:space-y-12">
          {skillCategories.map((category, idx) => (
            <div key={idx}>
              <motion.h3
                className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 border-b border-primary/40 pb-2 neon-white"
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  ease: smoothEase,
                  delay: idx * 0.2,
                }}
                viewport={{ once: false }}
              >
                {category.title}
              </motion.h3>

              <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10">
                {category.skills.map((skill, key) => (
                  <div
                    key={key}
                    className="flex flex-col items-center gap-2 transition-transform duration-300 hover:scale-110 min-w-[80px] sm:min-w-[100px]"
                  >
                    <motion.img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16"
                      loading="lazy"
                      initial={{ opacity: 0, x: 80 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.5,
                        ease: smoothEase,
                        delay: idx * 0.2,
                      }}
                      viewport={{ once: false }}
                    />
                    <span className="text-xs sm:text-sm md:text-base text-center font-[VT323] neon-white">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
