import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "motion/react";
import { LuPhone, LuMail, LuMapPin, LuSend } from "react-icons/lu";

// Scroll
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

function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const contactInfo = [
    {
      icon: LuPhone,
      title: "Phone",
      value: "01878212749",
      href: "tel:01878212749",
    },
    {
      icon: LuMail,
      title: "Email",
      value: "md.rakib683533@gmail.com",
      href: "mailto:md.rakib683533@gmail.com",
    },
    {
      icon: LuMapPin,
      title: "Location",
      value: "Dhaka, Bangladesh",
      href: null,
    },
  ];

  const inputClass =
    "w-full rounded-lg border border-cyan-400/20 bg-[#0B0F14]/60 px-3 py-2 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20";

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);
    setStatus("");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: event.target.name.value,
          email: event.target.email.value,
          message: event.target.message.value,
          title: "Portfolio Contact Message",
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      );

      setStatus("Message sent successfully!");
      event.target.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("Message could not be sent. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-[#0B0F14] px-4 py-14 text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        
        <div className="mb-8 text-center">
          <Reveal>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Contact Me
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Let's Connect <span className="text-cyan-400">Together</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
              Have a project in mind or looking for a developer? Feel free to
              reach out. I'd love to hear from you.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2">
          {/* Contact Information card */}
          <Reveal>
            <div className="h-full rounded-2xl border border-cyan-400/20 bg-[#0F2635]/60 p-5 transition duration-300 hover:border-cyan-400/40 sm:p-6">
              <Reveal>
                <div className="mb-6 flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                    <LuMail size={23} />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold">Contact Information</h3>
                    <h4 className="mt-2 text-base font-semibold text-cyan-400">
                      Let's start a conversation
                    </h4>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="mb-6 text-sm leading-6 text-slate-400">
                  I'm always open to discussing new projects, creative ideas,
                  and opportunities to build impactful digital solutions
                  together.
                </p>
              </Reveal>

              <div className="space-y-3">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <Reveal key={item.title} delay={index * 0.1}>
                      <div className="flex items-center gap-3 rounded-xl border border-cyan-400/10 bg-[#0B0F14]/40 p-3 transition hover:border-cyan-400/40">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                          <Icon size={20} />
                        </div>

                        <div className="min-w-0">
                          <p className="mb-1 text-xs text-slate-500">
                            {item.title}
                          </p>

                          {item.href ? (
                            <a
                              href={item.href}
                              className="break-all text-sm font-semibold text-slate-200 transition hover:text-cyan-400"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-sm font-semibold text-slate-200">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </Reveal>

          {/* Send a Message card */}
          <Reveal delay={0.15}>
            <div className="h-full rounded-2xl border border-cyan-400/20 bg-[#0F2635]/60 p-5 transition duration-300 hover:border-cyan-400/40 sm:p-6">
              <Reveal>
                <div className="mb-5 flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                    <LuSend size={22} />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold">Send a Message</h3>
                    <h4 className="mt-2 text-base font-semibold text-cyan-400">
                      Feel free to contact me
                    </h4>
                  </div>
                </div>
              </Reveal>

              <form onSubmit={handleSubmit} className="space-y-3">
                <Reveal delay={0.05}>
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-1.5 block text-sm font-medium text-slate-200"
                    >
                      Your Name
                    </label>

                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      autoComplete="name"
                      required
                      className={inputClass}
                    />
                  </div>
                </Reveal>

                <Reveal delay={0.1}>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-1.5 block text-sm font-medium text-slate-200"
                    >
                      Your Email
                    </label>

                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      autoComplete="email"
                      required
                      className={inputClass}
                    />
                  </div>
                </Reveal>

                <Reveal delay={0.15}>
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-1.5 block text-sm font-medium text-slate-200"
                    >
                      Your Message
                    </label>

                    <textarea
                      id="contact-message"
                      name="message"
                      rows={3}
                      placeholder="Write your message..."
                      required
                      className={`${inputClass} resize-y`}
                    />
                  </div>
                </Reveal>

                {status && (
                  <Reveal>
                    <p
                      role="status"
                      className={`text-sm ${
                        status.includes("successfully")
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {status}
                    </p>
                  </Reveal>
                )}

                <Reveal delay={0.2}>
                  <button
                    type="submit"
                    disabled={isSending}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-[#0B0F14] shadow-lg shadow-cyan-400/10 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSending ? "Sending..." : "Send Message"}
                    <LuSend size={16} />
                  </button>
                </Reveal>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;
