import { useState } from "react";
import { motion } from "motion/react";
import { VscVscode } from "react-icons/vsc";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiC,
  SiCplusplus,
  SiFigma,
  SiVercel,
} from "react-icons/si";

// Reusable scroll reveal animation
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// প্রতিটি element scroll করলে নিচ থেকে fade-in হবে
function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={fadeUp}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState("");

  const skillGroups = [
    {
      title: "Frontend",
      subtitle: "Building user interfaces",
      accent: "cyan",
      skills: [
        { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
        { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
        { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
        { name: "React", icon: FaReact, color: "text-cyan-400" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-300" },
      ],
    },
    {
      title: "Backend & Database",
      subtitle: "Building application logic",
      accent: "teal",
      skills: [
        { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
        { name: "Express.js", icon: SiExpress, color: "text-slate-200" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
        { name: "Firebase", icon: SiFirebase, color: "text-yellow-400" },
        { name: "C", icon: SiC, color: "text-blue-400" },
        { name: "C++", icon: SiCplusplus, color: "text-blue-500" },
      ],
    },
    {
      title: "Tools",
      subtitle: "Design & development workflow",
      accent: "blue",
      skills: [
        { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
        { name: "GitHub", icon: FaGithub, color: "text-white" },
        { name: "VS Code", icon: VscVscode, color: "text-blue-500" },
        { name: "Figma", icon: SiFigma, color: "text-pink-400" },
        { name: "Pixso", icon: SiFigma, color: "text-purple-400" },
        { name: "Vercel", icon: SiVercel, color: "text-white" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#0B0F14] px-5 py-20 text-white sm:px-8 sm:py-24 md:px-10 lg:px-16"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-cyan-500/[0.06] blur-[110px]" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-teal-500/[0.05] blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <Reveal>
            <p className="mb-3 text-xs font-bold tracking-[0.25em] text-cyan-400 sm:text-sm">
              MY TECHNICAL EXPERTISE
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">
              My <span className="text-cyan-400">Skills</span>
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400" />
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              The technologies and tools I use to build projects, solve
              problems, and bring ideas to life.
            </p>
          </Reveal>
        </div>

        {/* Three Equal Cards */}
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, groupIndex) => (
            <Reveal key={group.title} delay={groupIndex * 0.12}>
              <div
                onMouseLeave={() => setHoveredSkill("")}
                className="group/card flex h-full flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-[#12202A] to-[#101820] p-5 shadow-xl shadow-black/10 transition duration-300 hover:border-cyan-400/25 hover:shadow-cyan-400/5 sm:p-6"
              >
                {/* Card Heading */}
                <Reveal>
                  <div className="mb-6 flex min-h-[60px] items-center gap-3">
                    <div
                      className={`h-10 w-1 shrink-0 rounded-full ${
                        group.accent === "cyan"
                          ? "bg-cyan-400"
                          : group.accent === "teal"
                            ? "bg-teal-400"
                            : "bg-blue-400"
                      }`}
                    />

                    <div className="min-w-0">
                      <h3 className="text-lg font-bold transition-colors duration-200 group-hover/card:text-cyan-300 sm:text-xl">
                        {hoveredSkill.startsWith(`${group.title}:`)
                          ? hoveredSkill.split(":")[1]
                          : group.title}
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {group.subtitle}
                      </p>
                    </div>
                  </div>
                </Reveal>

                {/* Individual Skill Items */}
                <div className="grid flex-1 grid-cols-2 gap-3">
                  {group.skills.map((skill, skillIndex) => {
                    const Icon = skill.icon;

                    return (
                      <Reveal key={skill.name} delay={skillIndex * 0.06}>
                        <div
                          onMouseEnter={() =>
                            setHoveredSkill(`${group.title}:${skill.name}`)
                          }
                          onFocus={() =>
                            setHoveredSkill(`${group.title}:${skill.name}`)
                          }
                          onBlur={() => setHoveredSkill("")}
                          tabIndex={0}
                          className="flex min-h-[112px] flex-col items-center justify-center rounded-xl border border-white/[0.07] bg-[#0B0F14]/80 px-2 py-4 text-center transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-[#0F2635] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                        >
                          <Icon
                            aria-hidden="true"
                            className={`mb-3 text-3xl transition duration-300 hover:scale-110 sm:text-4xl ${skill.color}`}
                          />

                          <span className="text-xs font-semibold leading-5 text-slate-300 sm:text-sm">
                            {skill.name}
                          </span>
                        </div>
                      </Reveal>
                    );
                  })}
                </div>

                {/* Card Footer */}
                <Reveal delay={0.15}>
                  <div className="mt-5 flex items-center gap-2 border-t border-white/[0.07] pt-4">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        group.accent === "cyan"
                          ? "bg-cyan-400"
                          : group.accent === "teal"
                            ? "bg-teal-400"
                            : "bg-blue-400"
                      }`}
                    />

                    <p className="text-xs text-slate-500">
                      {group.skills.length} skills
                    </p>
                  </div>
                </Reveal>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mt-12 text-center">
          <Reveal>
            <p className="text-lg font-semibold text-slate-300 sm:text-xl">
              Always Learning, Always{" "}
              <span className="text-cyan-400">Building.</span>
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-500">
              Continuously exploring new technologies and improving my skills
              through hands-on projects and practice.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Skills;
