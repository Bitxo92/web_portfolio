const skillCategories = [
  {
    title: "Web Development",
    skills: [
      {
        name: "HTML/CSS",
        level: 95,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "JavaScript",
        level: 90,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "React",
        level: 85,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Tailwind",
        level: 90,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "Node.js",
        level: 90,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express",
        level: 90,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "Django",
        level: 80,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
      },
    ],
  },
  {
    title: "App Development",
    skills: [
      {
        name: "Flutter",
        level: 80,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      },
      {
        name: "Android Studio",
        level: 75,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
      },
    ],
  },
  {
    title: "Databases",
    skills: [
      {
        name: "MongoDB",
        level: 90,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "MySQL",
        level: 85,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "SQLite",
        level: 80,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
      },
      {
        name: "PostgreSQL",
        level: 80,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      {
        name: "JavaScript",
        level: 90,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "Java",
        level: 85,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "Python",
        level: 80,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "Dart",
        level: 75,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
      },
    ],
  },
];

export const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="scroll-mt-16 py-12 sm:py-16 md:py-24 px-4 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="space-y-8 sm:space-y-12">
          {skillCategories.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 border-b border-primary/40 pb-2">
                {category.title}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {category.skills.map((skill, key) => (
                  <div
                    key={key}
                    className="bg-card p-4 sm:p-6 rounded-lg shadow-xs card-hover transition-transform duration-300 hover:scale-105"
                  >
                    {/* Skill Name + Logo */}
                    <div className="flex items-center gap-2 sm:gap-3">
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-5 h-5 sm:w-6 sm:h-6"
                        loading="lazy"
                      />
                      <h4 className="font-semibold text-base sm:text-lg font-[VT323]">
                        {skill.name}
                      </h4>
                    </div>
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
