import { motion } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const viewportSettings = {
  once: true,
  amount: 0.15,
};

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function About() {
  const highlights = [
    {
      number: "01",
      title: "Frontend Development",
      description:
        "Creating responsive, accessible, and user-friendly interfaces with modern web technologies.",
    },
    {
      number: "02",
      title: "Backend Development",
      description:
        "Learning to build reliable APIs, manage data, and develop secure web applications.",
    },
    {
      number: "03",
      title: "Continuous Learning",
      description:
        "Improving my skills through practical projects, problem-solving, and consistent learning.",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0B0F14] px-5 py-24 text-white sm:px-8 md:px-10 lg:px-16"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-32 h-80 w-80 rounded-full bg-cyan-500/[0.06] blur-[110px]" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-teal-500/[0.05] blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <Reveal>
            <p className="mb-3 text-sm font-bold tracking-[0.25em] text-cyan-400">
              GET TO KNOW ME
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              About <span className="text-cyan-400">Me</span>
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400" />
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              Get to know my background, my passion for development, and my
              journey toward becoming a Full Stack Developer.
            </p>
          </Reveal>
        </div>

        {/* Profile and Introduction */}
        <div className="grid items-center gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16 lg:gap-20">
          {/* Left: Profile Image */}
          <Reveal>
            <div className="flex justify-center">
              <div className="relative w-full max-w-sm">
                {/* Soft Image Glow */}
                <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-cyan-400/20 via-transparent to-teal-400/20 blur-xl" />

                {/* Image Frame */}
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#101820] p-2 shadow-2xl shadow-black/30">
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src="/profile.png"
                      alt="Md. Rakib - About Me"
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover object-center transition duration-700 hover:scale-[1.03]"
                    />
                  </div>
                </div>

                {/* Decorative Accent */}
                <div className="absolute -bottom-3 -right-3 h-20 w-20 rounded-br-2xl border-b-2 border-r-2 border-cyan-400/60" />

                <div className="absolute -left-3 -top-3 h-16 w-16 rounded-tl-2xl border-l-2 border-t-2 border-teal-400/60" />
              </div>
            </div>
          </Reveal>

          {/* Right: About Content */}
          <div>
            <Reveal>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-400">
                Who I Am
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h3 className="text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
                Hi, I'm Rakib.
                <span className="mt-2 block text-slate-300">
                  An aspiring{" "}
                  <span className="text-cyan-400">Full Stack Developer.</span>
                </span>
              </h3>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-6 leading-8 text-slate-400">
                I'm a Computer Science and Technology student with a strong
                interest in web development. I enjoy turning ideas into
                interactive, responsive, and meaningful web experiences.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-4 leading-8 text-slate-400">
                I'm continuously improving my skills in frontend and backend
                technologies by building projects, exploring new concepts, and
                learning to write clean, maintainable code.
              </p>
            </Reveal>

            {/* Career Goal */}
            <Reveal delay={0.1}>
              <div className="mt-8 rounded-xl border border-cyan-400/15 bg-[#101820] p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-10 w-1 shrink-0 rounded-full bg-cyan-400" />

                  <div>
                    <h4 className="text-lg font-bold text-white">
                      My Career Goal
                    </h4>

                    <p className="mt-2 text-sm leading-7 text-slate-400 sm:text-base">
                      To become a skilled Full Stack Developer and build
                      practical, reliable applications that solve real-world
                      problems.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Personal Approach */}
            <Reveal delay={0.15}>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-cyan-400" />
                  Problem Solving
                </span>

                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-cyan-400" />
                  Clean Code
                </span>

                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-cyan-400" />
                  Lifelong Learning
                </span>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Development Focus */}
        <div className="mt-24">
          {/* Focus Heading */}
          <Reveal>
            <div className="mb-10 text-center">
              <p className="mb-3 text-sm font-bold tracking-[0.2em] text-cyan-400">
                MY DEVELOPMENT JOURNEY
              </p>

              <h3 className="text-2xl font-bold sm:text-3xl">
                What I'm <span className="text-cyan-400">Focused On</span>
              </h3>
            </div>
          </Reveal>

          {/* Highlight Cards */}
          <div className="grid gap-5 md:grid-cols-3">
            {highlights.map((item, index) => (
              <Reveal key={item.number} delay={index * 0.12}>
                <div className="group h-full rounded-xl border border-white/10 bg-[#101820]/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-[#0F2635]/70 sm:p-7">
                  <span className="text-sm font-bold tracking-widest text-cyan-400/70 transition group-hover:text-cyan-300">
                    {item.number}
                  </span>

                  <h4 className="mt-4 text-lg font-bold text-white">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>

                  <div className="mt-6 h-0.5 w-10 rounded-full bg-cyan-400/50 transition-all duration-300 group-hover:w-16 group-hover:bg-cyan-400" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
