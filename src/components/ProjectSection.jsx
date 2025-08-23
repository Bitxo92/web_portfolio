import React, { useState } from "react";

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
    description:
      "A mobile app built with Flutter and Supabase that helps dog owners find and connect with local dog walkers. Features include real-time location tracking, user profiles, and secure booking, making it easy to schedule walks and discover trusted walkers nearby.",
    image: "/projects/DogWalkz_Banner.svg",
    tags: ["Flutter", "Dart", "Supabase", "Firebase", "Stripe"],
    githubUrl: "https://github.com/Bitxo92/DogWalkz",
  },
];

export const ProjectSection = () => {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (projectId) => {
    setExpandedCards((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

  const truncateText = (text, maxLength = 100) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + "...";
  };

  return (
    <section
      id="projects"
      className="scroll-mt-16 py-12 sm:py-16 md:py-24 px-4 relative"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-center">
          <span className="neon-white">Featured</span>{" "}
          <span className="text-primary neon-purple">Projects</span>
        </h2>
        <p className="text-sm sm:text-base text-center text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto px-2 sm:px-4 font-[VT323]">
          Welcome to my projects showcase, where creativity meets functionality.
          Here you'll find a curated selection of my work, highlighting my
          skills. Each project reflects my commitment to quality, attention to
          detail, and innovative problem-solving.
        </p>

        <div
          className={`grid gap-6 sm:gap-8 md:gap-10 ${
            projects.length === 1
              ? "grid-cols-1 justify-items-center"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {projects.map((project) => {
            const isExpanded = expandedCards[project.id];
            const shouldShowReadMore = project.description.length > 100;

            return (
              <div
                key={project.id}
                className={`relative group bg-card rounded-lg shadow-lg overflow-hidden w-full max-w-[340px] sm:max-w-md mx-auto transition-all duration-300 ${
                  isExpanded ? "max-h-none" : "max-h-fit"
                }`}
              >
                {/* Project Image Link */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block aspect-[16/9] overflow-hidden relative"
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
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                    />
                    <span className="text-xs sm:text-sm font-medium select-none">
                      Open on GitHub
                    </span>
                  </div>
                </a>

                {/* Project Details */}
                <div className="p-4 sm:p-5 md:p-6">
                  {/* Project Title */}
                  <div className="mb-3">
                    <h3 className="text-base sm:text-lg font-semibold text-left ml-2 neon-linkedin">
                      {project.title}
                    </h3>
                  </div>

                  {/* Project Description */}
                  {project.description && (
                    <div className="text-left ml-2">
                      <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed font-[VT323]">
                        {isExpanded
                          ? project.description
                          : truncateText(project.description)}
                      </p>

                      <div className="flex justify-end mt-2">
                        {" "}
                        {shouldShowReadMore && (
                          <button
                            onClick={() => toggleCard(project.id)}
                            className="text-primary hover:text-primary/80 text-xs sm:text-sm md:text-baseont-medium mt-2 transition-colors duration-200 hover:cursor-pointer"
                          >
                            {isExpanded ? "Read less" : "Read more"}
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
