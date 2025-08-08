import React from "react";

const techLogos = {
  Flutter: "https://cdn.svgporn.com/logos/flutter.svg",
  Dart: "https://cdn.svgporn.com/logos/dart.svg",
  Supabase: "https://cdn.svgporn.com/logos/supabase.svg",
  Firebase: "https://cdn.svgporn.com/logos/firebase.svg",
  Stripe: "https://cdn.svgporn.com/logos/stripe.svg",
};

const projects = [
  {
    id: 1,
    title: "DogWalkz",
    description: "",
    image: "/projects/DogWalkz_Banner.png",
    tags: ["Flutter", "Dart", "Supabase", "Firebase", "Stripe"],
    githubUrl: "https://github.com/Bitxo92/DogWalkz",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Welcome to my projects showcase, where creativity meets functionality.
          Here you’ll find a curated selection of my work, highlighting my
          skills. Each project reflects my commitment to quality, attention to
          detail, and innovative problem-solving.
        </p>

        <div
          className={`grid gap-10 ${
            projects.length === 1
              ? "grid-cols-1 justify-items-center"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative group bg-card rounded-lg shadow-lg overflow-hidden w-full max-w-md"
            >
              {/* Wrap image in link */}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-64 overflow-hidden relative"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 text-white pointer-events-none">
                  <img
                    src="https://cdn.svgporn.com/logos/github-icon.svg"
                    alt="GitHub"
                    className="w-12 h-12"
                  />
                  <span className="text-sm font-medium select-none">
                    Open on GitHub
                  </span>
                </div>
              </a>

              <div className="p-6">
                <div className="flex flex-wrap gap-4 justify-center mb-4">
                  {project.tags.map((tag) =>
                    techLogos[tag] ? (
                      <img
                        key={tag}
                        src={techLogos[tag]}
                        alt={tag}
                        className="w-10 h-10"
                        loading="lazy"
                      />
                    ) : null
                  )}
                </div>
                <h3 className="text-lg font-semibold text-center">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
