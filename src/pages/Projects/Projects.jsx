import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const projects = [
  {
    id: 1,
    number: "01",
    title: "Zap Shift",
    subtitle: "Parcel Delivery Management System",
    description:
      "A full-stack parcel delivery platform featuring parcel booking, real-time delivery tracking, role-based dashboards, rider management, online payments, and secure authentication.",
    image: "/image.png",
    technologies: [
      "React",
      "Tailwind CSS",
      "TanStack Query",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "JWT",
      "Stripe",
    ],
    live: "https://zap-shift-client-phi.vercel.app/",
    client: "https://github.com/mdrakib683533/zap-shift-client",
    server: "https://github.com/mdrakib683533/zap-shift-server",
    accent: "emerald",
  },
  {
    id: 2,
    number: "02",
    title: "Job Box",
    subtitle: "Job Portal Platform",
    description:
      "A full-stack career platform designed to help users explore job opportunities, access career information, and interact with a modern job portal with secure authentication.",
    image: "/image1.png",
    technologies: [
      "React",
      "Tailwind CSS",
      "Firebase",
      "React Router",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    live: "https://career-code-client-20f2a.web.app/",
    client: "https://github.com/mdrakib683533/career-code-client",
    server: "https://github.com/mdrakib683533/career-code-server1",
    accent: "cyan",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[#0B0F14] px-4 py-24 text-white sm:px-6 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-20 text-center md:mb-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            My Recent Work
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Featured <span className="text-cyan-400">Projects.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            Explore my full-stack projects, the technologies I use, and the
            real-world solutions I build through web development.
          </p>
        </div>

        {/* Project showcase */}
        <div className="space-y-24 md:space-y-32 lg:space-y-40">
          {projects.map((project, index) => {
            const isZapShift = project.accent === "emerald";
            const imageFirst = index % 2 === 0;

            const accentColor = isZapShift
              ? "text-emerald-400"
              : "text-cyan-400";

            const hoverColor = isZapShift
              ? "hover:bg-[#00BF83] hover:border-[#00BF83] hover:text-[#0B0F14]"
              : "hover:bg-cyan-400 hover:border-cyan-400 hover:text-[#0B0F14]";

            return (
              <article
                key={project.id}
                className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16"
              >
                {/* Project image */}
                <div
                  className={`group relative min-w-0 ${
                    imageFirst ? "md:order-1" : "md:order-2"
                  }`}
                >
                  {/* Image glow */}
                  <div
                    className={`absolute -inset-3 rounded-3xl opacity-15 blur-2xl transition-opacity duration-500 group-hover:opacity-35 ${
                      isZapShift ? "bg-emerald-400" : "bg-cyan-400"
                    }`}
                  />

                  {/* Image has no link and is not clickable */}
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#101820] shadow-2xl">
                    {/* Browser-style header */}
                    <div className="flex items-center gap-2 border-b border-white/10 bg-[#101820] px-4 py-3 sm:px-5">
                      <span className="h-3 w-3 shrink-0 rounded-full bg-red-400" />
                      <span className="h-3 w-3 shrink-0 rounded-full bg-yellow-400" />
                      <span className="h-3 w-3 shrink-0 rounded-full bg-green-400" />

                      <span className="ml-3 min-w-0 flex-1 truncate rounded-md bg-white/5 px-3 py-2 text-xs text-gray-400 sm:text-sm">
                        {project.title}
                      </span>
                    </div>

                    {/* Screenshot: 3:2.5 ratio */}
                    <div className="overflow-hidden bg-[#101820]">
                      <img
                        src={project.image}
                        alt={`${project.title} website screenshot`}
                        loading="lazy"
                        className="pointer-events-none aspect-[3/1.67] w-full object-cover object-top"
                      />
                    </div>

                    {/* Project number */}
                    <div
                      className={`absolute bottom-5 left-5 rounded-lg border border-white/10 bg-[#0B0F14]/90 px-4 py-2.5 text-sm font-semibold tracking-widest backdrop-blur-sm ${accentColor}`}
                    >
                      PROJECT {project.number}
                    </div>
                  </div>
                </div>

                {/* Project information: same column width as image */}
                <div
                  className={`min-w-0 ${
                    imageFirst ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <p
                    className={`mb-4 text-sm font-semibold uppercase tracking-[0.15em] sm:text-base sm:tracking-[0.2em] ${accentColor}`}
                  >
                    {project.subtitle}
                  </p>

                  <h3 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
                    {project.title}
                    <span className={accentColor}>.</span>
                  </h3>

                  <p className="mt-6 text-base leading-8 text-gray-400 sm:text-lg sm:leading-9">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-8">
                    <h4 className="mb-4 text-base font-semibold text-gray-200">
                      Technologies
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className={`rounded-lg border border-white/10 bg-[#101820] px-3 py-2 text-sm font-medium text-gray-300 transition-colors duration-300 ${
                            isZapShift
                              ? "hover:border-emerald-400/50 hover:text-emerald-300"
                              : "hover:border-cyan-400/50 hover:text-cyan-300"
                          }`}
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="mt-9 flex flex-wrap items-center gap-3">
                    {/* Live Demo */}
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex items-center gap-2 rounded-lg border border-transparent bg-white px-4 py-3 text-sm font-semibold text-[#0B0F14] transition-all duration-300 sm:px-5 ${hoverColor}`}
                    >
                      Live Demo
                      <FaExternalLinkAlt className="text-xs" />
                    </a>

                    {/* Client repository */}
                    <a
                      href={project.client}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-3 text-sm font-medium text-gray-300 transition-all duration-300 sm:px-5 ${hoverColor}`}
                    >
                      <FaGithub className="text-base" />
                      Client
                    </a>

                    {/* Server repository */}
                    <a
                      href={project.server}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-3 text-sm font-medium text-gray-300 transition-all duration-300 sm:px-5 ${hoverColor}`}
                    >
                      <FaGithub className="text-base" />
                      Server
                    </a>

                    {/* Navigate to the project details page */}
                    <Link
                      to={`/projects/${project.id === 1 ? "zap-shift" : "job-box"}`}
                      className={`group/details inline-flex items-center gap-2 rounded-lg border px-4 py-3 text-sm font-semibold text-gray-200 transition-all duration-300 sm:px-5 ${hoverColor} ${
                        isZapShift
                          ? "border-emerald-400/40"
                          : "border-cyan-400/40"
                      }`}
                    >
                      Details
                      <FaArrowRight className="text-xs transition-transform duration-300 group-hover/details:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
