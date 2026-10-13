import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import ProjectDetails from "./pages/Projects/ProjectDetails";
import Footer from "./components/Footer/Footer";

// Handle navigation to the Projects section

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (pathname !== "/") return;

    // Browser-এর automatic scroll restoration
    window.history.scrollRestoration = "manual";

    const navigationEntry = performance.getEntriesByType("navigation")[0];
    const isRefresh = navigationEntry?.type === "reload";

    if (isRefresh) {
      window.history.replaceState(null, "", "/");

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });

      return;
    }

    // Back to Projects in projects
    if (hash === "#projects") {
      const timer = setTimeout(() => {
        document.getElementById("projects")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 150);

      return () => clearTimeout(timer);
    }
  }, [pathname, hash]);

  return null;
}

// Main portfolio homepage
function Portfolio() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="education">
          <Education />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
        <section id="footer">
          <Footer></Footer>
        </section>
      </main>
    </>
  );
}

// Application routes
function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />

      <Routes>
        <Route path="/" element={<Portfolio />} />

        <Route path="/projects/:projectId" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
