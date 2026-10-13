function Navbar() {
  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Education", id: "education" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const handleScroll = (id) => {
    window.history.replaceState(null, "", `/#${id}`);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className="navbar sticky top-0 z-50 bg-base-100 shadow-sm px-4 md:px-8">
      {/* Left: Portfolio Logo */}
      <div className="navbar-start">
        <button
          onClick={() => handleScroll("home")}
          className="text-xl font-bold text-primary whitespace-nowrap"
        >
          My Portfolio
        </button>
      </div>

      {/* Center: Navigation Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleScroll(link.id)}
                className="font-medium"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Right: Resume Button */}
      <div className="navbar-end gap-2">
        <a
          href="#"
          onClick={(event) => event.preventDefault()}
          className="btn btn-primary text-white hidden sm:inline-flex"
        >
          Resume
        </a>

        {/* Mobile Menu */}
        <div className="dropdown dropdown-end lg:hidden">
          <button
            tabIndex={0}
            type="button"
            className="btn btn-ghost btn-circle"
            aria-label="Open navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <ul
            tabIndex={0}
            className="menu dropdown-content mt-3 w-52 rounded-box bg-base-100 p-2 shadow-lg"
          >
            {navLinks.map((link) => (
              <li key={link.id}>
                <button onClick={() => handleScroll(link.id)}>
                  {link.name}
                </button>
              </li>
            ))}

            <li className="sm:hidden">
              <a href="#" onClick={(event) => event.preventDefault()}>
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
