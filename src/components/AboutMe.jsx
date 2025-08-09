import { Briefcase, Code, User } from "lucide-react";
export const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className=" container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3>Passionate Mobile & Web developer</h3>
            <p className="text-muted-foreground">
              I’m a full stack developer with a deep passion for crafting
              high-quality web and mobile applications. With expertise in both
              front-end and back-end technologies, I bring ideas to life with
              clean, efficient, and scalable code.
            </p>
            <p className="text-muted-foreground">
              I thrive on solving complex problems and delivering seamless user
              experiences through intuitive design and robust functionality. My
              goal is to build digital products that make an impact and help
              businesses grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Contact{" "}
              </a>
              <a
                href="#"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary"></Code>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Web & Mobile App Development
                  </h4>
                  <p className="text-muted-foreground">
                    I specialize in building responsive, high-performance web
                    and mobile applications using modern technologies like React
                    and Django for the web, and Flutter for cross-platform
                    mobile apps. Whether it’s a sleek single-page website or a
                    full-featured mobile app, I deliver scalable solutions
                    tailored to your needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Creating user-centered designs is key to my development
                    process. I focus on intuitive interfaces, accessibility, and
                    smooth interactions that ensure users enjoy every step of
                    their journey across web and mobile apps.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    With experience managing projects from conception to
                    deployment, I ensure deadlines are met and teams collaborate
                    efficiently. I prioritize clear communication, agile
                    methodologies, and quality assurance to guarantee successful
                    outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
