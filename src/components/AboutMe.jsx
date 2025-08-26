import { Briefcase, Code, User } from "lucide-react";
import { motion } from "framer-motion";

export const AboutMe = () => {
  // Smooth easing curve for all animations
  const smoothEase = [0.25, 0.1, 0.25, 1];

  return (
    <section id="about" className="scroll-mt-16 py-12 md:py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Title slides from top */}
        <motion.h2
          className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: smoothEase }}
          viewport={{ once: true }}
        >
          <span className="neon-white">About</span>{" "}
          <span className="text-primary neon-purple">Me</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left side content */}
          <div className="space-y-4 md:space-y-6">
            {/* Subtitle slides from left */}
            <motion.h3
              className="text-xl md:text-2xl font-semibold neon-white"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: smoothEase, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Passionate Mobile & Web developer
            </motion.h3>

            {/* Paragraphs slide from left with stagger */}
            <motion.p
              className="text-sm md:text-base text-muted-foreground font-[VT323]"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: smoothEase, delay: 0.4 }}
              viewport={{ once: true }}
            >
              I'm a full stack developer with a deep passion for crafting
              high-quality web and mobile applications. With expertise in both
              front-end and back-end technologies, I bring ideas to life with
              clean, efficient, and scalable code.
            </motion.p>

            <motion.p
              className="text-sm md:text-base text-muted-foreground font-[VT323]"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: smoothEase, delay: 0.6 }}
              viewport={{ once: true }}
            >
              I thrive on solving complex problems and delivering seamless user
              experiences through intuitive design and robust functionality. My
              goal is to build digital products that make an impact and help
              businesses grow.
            </motion.p>

            {/* Buttons slide from opposite directions */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4 justify-center">
              {/* Contact button slides from left */}
              <motion.a
                href="#contact"
                className="cosmic-button text-center text-sm md:text-base w-full sm:w-auto neon-button"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: smoothEase, delay: 0.8 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3, ease: smoothEase },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="neon-white">Contact</span>
              </motion.a>

              {/* CV button slides from right */}
              <motion.a
                href="/AlejandroPatino_SoftwareDeveloperCV.pdf"
                target="_blank"
                className="px-4 md:px-6 py-2 rounded-md border border-primary text-primary text-center text-sm md:text-base w-full sm:w-auto hover:shadow-[0_0_10px_rgba(139,92,246,0.5)] neon-button"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: smoothEase, delay: 0.8 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3, ease: smoothEase },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="neon-white">Download CV</span>
              </motion.a>
            </div>
          </div>

          {/* Right side cards - smooth progressive slide */}
          <div className="grid grid-cols-1 gap-4 md:gap-6">
            {/* Card 1 */}
            <motion.div
              className="neon-card gradient-border p-4 md:p-6 card-hover shadow-sm"
              initial={{ opacity: 0, x: 120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: smoothEase, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3, ease: smoothEase },
              }}
            >
              <div className="flex items-start gap-3 md:gap-4">
                <motion.div
                  className="p-2 md:p-3 rounded-full bg-primary/10 shrink-0"
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                  transition={{ duration: 0.8, ease: smoothEase, delay: 1.0 }}
                  viewport={{ once: true }}
                >
                  <Code className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </motion.div>
                <div className="text-left">
                  <motion.h4
                    className="font-semibold text-base md:text-lg mb-2 neon-linkedin"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: smoothEase, delay: 1.2 }}
                    viewport={{ once: true }}
                  >
                    Web & Mobile App Development
                  </motion.h4>
                  <motion.p
                    className="text-sm md:text-base text-muted-foreground font-[VT323]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: smoothEase, delay: 1.3 }}
                    viewport={{ once: true }}
                  >
                    I specialize in building responsive, high-performance web
                    and mobile applications using modern technologies like React
                    and Django for the web, and Flutter for cross-platform
                    mobile apps. Whether it's a sleek single-page website or a
                    full-featured mobile app, I deliver scalable solutions
                    tailored to your needs.
                  </motion.p>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="neon-card gradient-border p-4 md:p-6 card-hover shadow-sm"
              initial={{ opacity: 0, x: 120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: smoothEase, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3, ease: smoothEase },
              }}
            >
              <div className="flex items-start gap-3 md:gap-4">
                <motion.div
                  className="p-2 md:p-3 rounded-full bg-primary/10 shrink-0"
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                  transition={{ duration: 0.8, ease: smoothEase, delay: 1.2 }}
                  viewport={{ once: true }}
                >
                  <User className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </motion.div>
                <div className="text-left">
                  <motion.h4
                    className="font-semibold text-base md:text-lg mb-2 neon-linkedin"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: smoothEase, delay: 1.4 }}
                    viewport={{ once: true }}
                  >
                    UI/UX Design
                  </motion.h4>
                  <motion.p
                    className="text-sm md:text-base text-muted-foreground font-[VT323]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: smoothEase, delay: 1.5 }}
                    viewport={{ once: true }}
                  >
                    Creating user-centered designs is key to my development
                    process. I focus on intuitive interfaces, accessibility, and
                    smooth interactions that ensure users enjoy every step of
                    their journey across web and mobile apps.
                  </motion.p>
                </div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="neon-card gradient-border p-4 md:p-6 card-hover shadow-sm"
              initial={{ opacity: 0, x: 120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: smoothEase, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3, ease: smoothEase },
              }}
            >
              <div className="flex items-start gap-3 md:gap-4">
                <motion.div
                  className="p-2 md:p-3 rounded-full bg-primary/10 shrink-0"
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                  transition={{ duration: 0.8, ease: smoothEase, delay: 1.4 }}
                  viewport={{ once: true }}
                >
                  <Briefcase className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </motion.div>
                <div className="text-left">
                  <motion.h4
                    className="font-semibold text-base md:text-lg mb-2 neon-linkedin"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: smoothEase, delay: 1.6 }}
                    viewport={{ once: true }}
                  >
                    Project Management
                  </motion.h4>
                  <motion.p
                    className="text-sm md:text-base text-muted-foreground font-[VT323]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: smoothEase, delay: 1.7 }}
                    viewport={{ once: true }}
                  >
                    With experience managing projects from conception to
                    deployment, I ensure deadlines are met and teams collaborate
                    efficiently. I prioritize clear communication, agile
                    methodologies, and quality assurance to guarantee successful
                    outcomes.
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
