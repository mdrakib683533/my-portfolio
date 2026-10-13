import { useParams } from "react-router";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projectDetails = {
  "zap-shift": {
    number: "01",
    title: "Zap Shift",
    subtitle: "Parcel Delivery Management System",
    image: "/image.png",
    accent: "emerald",
    overview:
      "Zap Shift is a full-stack parcel delivery management platform designed to simplify parcel booking, delivery tracking, and delivery operations. It provides different dashboards and features for customers, riders, and administrators.",
    features: [
      "Parcel booking and management",
      "Parcel tracking and delivery status updates",
      "Role-based dashboards for users, riders, and admins",
      "Rider management and approval workflow",
      "Online payment integration using Stripe",
      "Payment history and parcel management",
      "Secure authentication using Firebase and JWT",
    ],
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
  },

  "job-box": {
    number: "02",
    title: "Job Box",
    subtitle: "Job Portal Platform",
    image: "/image1.png",
    accent: "cyan",
    overview:
      "Job Box is a career-focused web platform designed to help users explore job opportunities and access career-related information through a modern, responsive interface.",
    features: [
      "Responsive job portal interface",
      "Firebase authentication",
      "Client-side routing with React Router",
      "Backend API built with Node.js and Express.js",
      "MongoDB database integration",
      "JWT-based authentication for protected API access",
    ],
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
  },
};

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projectDetails[projectId];

  // Handle invalid project URLs
  if (!project) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#0B0F14] px-4 text-center text-white">
        <h1 className="text-4xl font-bold">Project Not Found</h1>

        <p className="mt-4 text-gray-400">
          The project you are looking for does not exist.
        </p>

        <a
          href="/#projects"
          className="mt-7 inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-[#0B0F14] transition hover:bg-cyan-300"
        >
          <FaArrowLeft />
          Back to Projects
        </a>
      </main>
    );
  }

  const isZapShift = project.accent === "emerald";

  const accentText = isZapShift ? "text-emerald-400" : "text-cyan-400";

  const accentBorder = isZapShift
    ? "hover:border-emerald-400 hover:bg-[#00BF83]"
    : "hover:border-cyan-400 hover:bg-cyan-400";

  return (
    <main className="min-h-screen bg-[#0B0F14] px-4 py-16 text-white sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Back button */}
        <a
          href="/#projects"
          className="mb-10 inline-flex items-center gap-2 text-gray-400 transition hover:text-white"
        >
          <FaArrowLeft />
          Back to Projects
        </a>

        {/* Project heading */}
        <div className="mb-12">
          <p
            className={`mb-4 text-sm font-semibold uppercase tracking-[0.25em] ${accentText}`}
          >
            PROJECT {project.number} / DETAILS
          </p>

          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            {project.title}
            <span className={accentText}>.</span>
          </h1>

          <p className="mt-4 text-lg text-gray-400 sm:text-xl">
            {project.subtitle}
          </p>
        </div>

        {/* Project screenshot */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#101820] shadow-2xl">
          <img
            src={project.image}
            alt={`${project.title} website screenshot`}
            className="aspect-[3/1.67] w-full object-cover object-top"
          />
        </div>

        {/* Project overview */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Project <span className={accentText}>Overview</span>
          </h2>

          <p className="mt-5 max-w-4xl text-base leading-8 text-gray-400 sm:text-lg">
            {project.overview}
          </p>
        </section>

        {/* Project features */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Key <span className={accentText}>Features</span>
          </h2>

          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-[#101820] p-4 text-gray-300"
              >
                <span className={`mt-1 ${accentText}`}>●</span>
                <span className="leading-7">{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Technologies used */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Technologies <span className={accentText}>Used</span>
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-lg border border-white/10 bg-[#101820] px-4 py-2.5 text-sm font-medium text-gray-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

        {/* Live demo and repositories */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Explore the <span className={accentText}>Project</span>
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-lg border border-transparent bg-white px-5 py-3 font-semibold text-[#0B0F14] transition ${accentBorder} hover:text-[#0B0F14]`}
            >
              Live Demo
              <FaExternalLinkAlt className="text-xs" />
            </a>

            <a
              href={project.client}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-gray-300 transition ${accentBorder} hover:text-[#0B0F14]`}
            >
              <FaGithub />
              Client Repository
            </a>

            <a
              href={project.server}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-gray-300 transition ${accentBorder} hover:text-[#0B0F14]`}
            >
              <FaGithub />
              Server Repository
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProjectDetails;
