import { ChevronsUp } from "lucide-react";

export default function Footer() {
  const scrollToHero = () => {
    const hero = document.getElementById("hero");
    if (hero) hero.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-transparent text-gray-300 py-8 mt-16">
      {/* Floating Arrow */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50 ">
        <button
          onClick={scrollToHero}
          className="p-3 bg-indigo-600 text-white rounded-md shadow-lg hover:bg-indigo-500 transition hover:cursor-pointer"
        >
          <ChevronsUp className="h-5 w-5" />
        </button>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-4 flex flex-col gap-4 items-center text-center text-foreground opacity-50">
        <p className="text-xs sm:text-sm md:text-base">
          &copy; {new Date().getFullYear()} Alejandro Patiño. All rights
          reserved.
        </p>

        <div className="flex items-center gap-2 text-xs md:text-sm font-[VT323]">
          <span>Powered by</span>
          <img
            src="https://cdn.svgporn.com/logos/react.svg"
            alt="React"
            className="size-4 md:size-5"
          />

          <span>&amp;</span>
          <img
            src="https://cdn.svgporn.com/logos/tailwindcss-icon.svg"
            alt="Tailwind CSS"
            className="size-4 md:size-5"
          />
        </div>
      </div>
    </footer>
  );
}
