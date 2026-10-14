import { LuGithub, LuLinkedin, LuFacebook } from "react-icons/lu";
import { motion } from "motion/react";

// Scroll reveal animation
const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Reusable animation component
function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/mdrakib683533",
      icon: LuGithub,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/md-rakib-b68878370/",
      icon: LuLinkedin,
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=100052994179897",
      icon: LuFacebook,
    },
  ];

  return (
    <footer className="border-y border-cyan-400/10 bg-[#0B0F14] px-4 py-8 text-slate-400 sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Copyright */}
          <Reveal>
            <p className="text-center text-sm leading-6 sm:text-left">
              © 2026 <span className="font-semibold text-white">Rakib</span>.
              All rights reserved.
            </p>
          </Reveal>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;

              return (
                <Reveal key={social.name} delay={index * 0.12}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-white/[0.02] text-slate-300 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10"
                  >
                    <Icon size={25} strokeWidth={1.8} />
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Bottom Divider */}
        <Reveal delay={0.15}>
          <div className="my-6 border-t border-cyan-400/10" />
        </Reveal>

        {/* Footer Credit */}
        <Reveal delay={0.2}>
          <p className="text-center text-xs tracking-wide text-slate-500 sm:text-sm">
            Designed &amp; Built with Passion by{" "}
            <span className="font-semibold text-slate-300">Md. Rakib</span>
          </p>
        </Reveal>
      </div>
    </footer>
  );
}

export default Footer;
