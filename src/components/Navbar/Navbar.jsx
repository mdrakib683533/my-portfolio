import { useEffect, useState } from "react";
import { LuDownload, LuMenu, LuX } from "react-icons/lu";

function Navbar() {
  const [visible, setVisible] = useState(true);
  const [isHome, setIsHome] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "HOME", id: "home" },
    { name: "ABOUT", id: "about" },
    { name: "SKILLS", id: "skills" },
    { name: "EDUCATION", id: "education" },
    { name: "PROJECTS", id: "projects" },
    { name: "CONTACT", id: "contact" },
  ];

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsHome(currentScrollY < 80);

      if (currentScrollY < 80) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setVisible(false);
        setMenuOpen(false);
      } else if (currentScrollY < lastScrollY) {
        setVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = (id) => {
    window.history.replaceState(null, "", `/#${id}`);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMenuOpen(false);
  };

  const linkClass = () =>
    `rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300 ${
      isHome
        ? "text-white hover:bg-white/10 hover:text-cyan-400"
        : "text-slate-300 hover:bg-cyan-400/10 hover:text-cyan-400"
    }`;

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } ${
        isHome
          ? "border-transparent bg-transparent"
          : "border-cyan-400/10 bg-[#0B0F14]/95 shadow-lg shadow-black/20 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left Side: Mobile Menu + Logo */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className={`rounded-xl p-2 transition hover:bg-cyan-400/10 hover:text-cyan-400 lg:hidden ${
              isHome ? "text-white" : "text-slate-200"
            }`}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
          >
            {menuOpen ? <LuX size={24} /> : <LuMenu size={24} />}
          </button>

          {/* Logo */}
          <button
            type="button"
            onClick={() => handleScroll("home")}
            className="cursor-pointer text-2xl font-extrabold tracking-wider text-white transition hover:text-cyan-400 sm:text-3xl"
            aria-label="Go to Home"
          >
            RAKIB<span className="text-cyan-400">.</span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => handleScroll(link.id)}
              className={`${linkClass(link.id)} cursor-pointer`}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Right Side: Resume Button */}
        <a
          href="/Resume.pdf"
          download="Rakib-Resume.pdf"
          className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-lg border border-cyan-400 px-3 py-2 text-xs font-bold text-cyan-400 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-400 hover:text-[#0B0F14] hover:shadow-lg hover:shadow-cyan-400/10 sm:gap-2 sm:px-4 sm:text-sm"
        >
          RESUME
          <LuDownload size={16} />
        </a>
      </div>

      {/* Mobile Navigation Dropdown */}
      {menuOpen && (
        <div className="border-t border-cyan-400/10 bg-[#0B0F14]/98 px-4 pb-4 pt-3 shadow-xl backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleScroll(link.id)}
                className="cursor-pointer rounded-lg px-4 py-3 text-left text-sm font-medium text-slate-200 transition hover:bg-cyan-400/10 hover:text-cyan-400"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
