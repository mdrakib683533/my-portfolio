import { useEffect, useState } from "react";

function Home() {
  const fullName = "Md. Rakib";
  const [displayName, setDisplayName] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!isDeleting && displayName === fullName) {
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayName === "") {
      timeout = setTimeout(() => setIsDeleting(false), 500);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayName((current) =>
            isDeleting
              ? fullName.slice(0, current.length - 1)
              : fullName.slice(0, current.length + 1),
          );
        },
        isDeleting ? 90 : 180,
      );
    }

    return () => clearTimeout(timeout);
  }, [displayName, isDeleting]);

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#0B0F14] px-5 py-16 text-white sm:px-8 md:px-10 lg:px-12 xl:px-16"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#0F2635] opacity-80 blur-[100px] animate-pulse" />
      <div className="pointer-events-none absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[110px]" />

      <div className="relative z-10 grid w-full grid-cols-1 items-center gap-12 md:grid-cols-[1fr_auto] lg:grid-cols-[1fr_auto] lg:gap-16">
        {/* Left: Introduction */}
        <div className="order-2 text-center md:order-1 md:text-left">
          <p className="mb-5 inline-block rounded-full border border-cyan-400/20 bg-[#0F2635] px-4 py-2 text-xs font-bold tracking-[0.2em] text-cyan-300 sm:text-sm">
            WELCOME TO MY PORTFOLIO
          </p>

          <p className="mb-2 text-lg text-slate-400">Hello, I'm</p>

          <h1 className="min-h-[1.3em] text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-teal-400 bg-clip-text text-transparent">
              {displayName}
            </span>
            <span className="ml-1 inline-block animate-pulse text-cyan-400">
              |
            </span>
          </h1>

          <h2 className="mt-5 text-xl font-semibold text-cyan-400 sm:text-2xl">
            Jr. Full Stack Developer
          </h2>

          <p className="mx-auto mt-6 max-w-lg leading-8 text-slate-400 md:mx-0">
            I enjoy building responsive and user-friendly web applications with
            modern web technologies. I'm continuously learning and improving my
            development skills.
          </p>

          {/* Action Buttons */}
          <div className="mt-9 flex flex-wrap justify-center gap-4 md:justify-start">
            <button
              onClick={() => handleScroll("projects")}
              className="btn border-0 bg-cyan-400 px-6 font-semibold text-[#0B0F14] shadow-lg shadow-cyan-400/20 transition duration-300 hover:scale-105 hover:bg-cyan-300"
            >
              View Projects
            </button>

            <button
              onClick={() => handleScroll("contact")}
              className="btn border border-cyan-400/60 bg-transparent px-6 font-semibold text-cyan-300 transition duration-300 hover:scale-105 hover:border-cyan-300 hover:bg-[#0F2635]"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Right: Professional Photo */}
        <div className="order-1 flex justify-center md:order-2 md:justify-self-end md:-translate-x-8">
          <div className="relative">
            {/* Animated Glow Ring */}
            <div className="absolute -inset-3 animate-pulse rounded-full bg-gradient-to-r from-cyan-400 via-teal-500 to-blue-500 opacity-30 blur-xl" />

            <div className="relative rounded-full border-2 border-cyan-400/70 bg-[#0F2635] p-2 shadow-2xl shadow-cyan-500/10">
              <div className="h-64 w-64 overflow-hidden rounded-full sm:h-80 sm:w-80 lg:h-[420px] lg:w-[420px]">
                <img
                  src="/profile2.png"
                  alt="Md. Rakib - Jr. Full Stack Developer"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Decorative Dot */}
            <span className="absolute right-5 top-5 h-5 w-5 animate-ping rounded-full bg-cyan-400/60" />
            <span className="absolute bottom-8 left-0 h-4 w-4 rounded-full bg-teal-400 shadow-lg shadow-teal-400/50" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
