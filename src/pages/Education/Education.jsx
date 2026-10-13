import { useEffect, useRef, useState } from "react";
import { FaGraduationCap, FaPlane } from "react-icons/fa";

const educationData = [
  {
    id: 1,
    status: "Currently Studying",
    title: "Computer Science & Engineering",
    institution: "World University of Bangladesh",
    program: "Undergraduate Program",
    year: "Present",
    result: "",
    resultLabel: "",
  },
  {
    id: 2,
    status: "Completed",
    title: "Diploma in Computer Engineering",
    institution: "Feni Computer Institute",
    program: "Diploma Program",
    year: "2026",
    result: "3.42 / 4.00",
    resultLabel: "CGPA",
  },
  {
    id: 3,
    status: "Completed",
    title: "Secondary School Certificate",
    institution: "Al Helal Academy, Sonagazi, Feni",
    program: "Science",
    year: "2021",
    result: "5.00 / 5.00",
    resultLabel: "GPA",
  },
];

const Education = () => {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  // Detect entering and leaving the Education section.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Start animation whenever the section enters the viewport.
  useEffect(() => {
    if (!isInView) return;

    const timers = educationData.map((_, index) =>
      setTimeout(
        () => {
          setActiveStep(index + 1);
        },
        1400 + index * 1800,
      ),
    );

    return () => timers.forEach(clearTimeout);
  }, [isInView]);
  // Each marker sits in the middle of its timeline row.
  const planeTop =
    activeStep === 0
      ? "0%"
      : `${((activeStep - 0.5) / educationData.length) * 100}%`;

  return (
    <section
      ref={sectionRef}
      id="education"
      className="bg-[#0B0F14] px-4 py-20 text-white sm:px-6 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            My Journey
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Education
            <span className="text-cyan-400">.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
            My academic journey and the milestones that have shaped my knowledge
            and skills.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Main vertical line */}
          <div className="absolute bottom-0 left-5 top-0 w-[2px] -translate-x-1/2 bg-slate-700 md:left-1/2">
            {/* Animated progress line */}
            <div
              className="w-full bg-cyan-400 transition-all duration-[1600ms] ease-linear"
              style={{
                height: `${(activeStep / educationData.length) * 100}%`,
              }}
            />
          </div>

          {/* Moving airplane */}
          {isInView && activeStep < educationData.length && (
            <div
              className="absolute left-5 z-20 -translate-x-1/2 -translate-y-1/2 text-cyan-400 transition-[top] duration-[1600ms] ease-linear md:left-1/2"
              style={{ top: planeTop }}
            >
              <FaPlane className="rotate-90 text-2xl drop-shadow-[0_0_8px_rgba(34,211,238,0.65)]" />
            </div>
          )}

          {/* Education entries */}
          {educationData.map((item, index) => {
            const isActive = activeStep >= index + 1;
            const isLeft = index % 2 === 0;

            return (
              <div
                key={item.id}
                className="relative grid min-h-[250px] grid-cols-[40px_minmax(0,1fr)] md:grid-cols-[1fr_40px_1fr]"
              >
                {/* Desktop left card */}
                <div
                  className={`hidden items-center py-5 md:flex ${
                    isLeft
                      ? "justify-end pr-8"
                      : "pointer-events-none invisible"
                  }`}
                >
                  {isLeft && <EducationCard item={item} isActive={isActive} />}
                </div>

                {/* Timeline marker */}
                <div className="relative flex justify-center">
                  <div
                    className={`absolute top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 transition-all duration-500 ${
                      isActive
                        ? "scale-100 border-cyan-400 bg-cyan-400/15 text-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.3)]"
                        : "scale-90 border-slate-600 bg-[#0B0F14] text-slate-600"
                    }`}
                  >
                    {isActive ? (
                      <FaGraduationCap className="text-lg" />
                    ) : (
                      <span className="h-2 w-2 rounded-full bg-current" />
                    )}
                  </div>
                </div>

                {/* Mobile card + desktop right card */}
                <div
                  className={`flex items-center py-5 pl-4 md:pl-0 ${
                    !isLeft ? "md:pl-8" : "md:pointer-events-none md:invisible"
                  }`}
                >
                  <div className="w-full md:hidden">
                    <EducationCard item={item} isActive={isActive} />
                  </div>

                  {!isLeft && (
                    <div className="hidden w-full md:block">
                      <EducationCard item={item} isActive={isActive} />
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

const EducationCard = ({ item, isActive }) => {
  return (
    <div
      className={`w-full max-w-md rounded-xl border border-cyan-400/20 bg-[#0F2635] p-5 shadow-lg transition-all duration-700 sm:p-6 ${
        isActive
          ? "translate-y-0 scale-100 opacity-100"
          : "translate-y-5 scale-[0.97] opacity-0"
      }`}
    >
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
          {item.status}
        </span>

        <span className="text-sm font-semibold text-cyan-400">{item.year}</span>
      </div>

      <h3 className="text-lg font-bold leading-snug text-white sm:text-xl">
        {item.title}
      </h3>

      <p className="mt-2 text-sm font-medium text-gray-300">
        {item.institution}
      </p>

      <p className="mt-1 text-sm text-gray-400">{item.program}</p>

      {item.result && (
        <div className="mt-4 border-t border-white/10 pt-3">
          <span className="text-xs uppercase tracking-wider text-gray-400">
            {item.resultLabel}
          </span>
          <p className="mt-1 font-semibold text-cyan-300">{item.result}</p>
        </div>
      )}
    </div>
  );
};

export default Education;
