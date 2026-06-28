"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const profileLinks = {
  linkedin: "https://www.linkedin.com/in/avinash-kumar-singh-sde/",
  github: "https://github.com/AvinashSingh0001",
  resume: "/Avinash_Kumar_Singh_Android_Engineer.pdf",
  email: "mailto:Avinashkumarsingh0001@gmail.com",
  gmailCompose:
    "https://mail.google.com/mail/?view=cm&fs=1&to=Avinashkumarsingh0001@gmail.com",
};


const skills = [
  "Kotlin",
  "Jetpack Compose",
  "MVVM",
  "Clean Architecture",
  "Hilt",
  "Coroutines",
  "REST APIs",
  "Modularization",
  "Performance Optimization",
  "Android 14/15",
  "KMP",
  "AI-Assisted Development",
];

const edgeCards = [
  {
    label: "01 / Mobile Systems",
    title: "Native Android engineering built for scale",
    desc: "I build Android applications with clean architecture, reusable modules, stable API integration, and UI systems that stay maintainable as products grow.",
  },
  {
    label: "02 / Performance",
    title: "Startup, crash, memory and battery focused delivery",
    desc: "I look beyond screens and focus on production behavior: lifecycle safety, startup path, background work, profiling, and user-visible performance.",
  },
  {
    label: "03 / Product Thinking",
    title: "Engineering that solves business problems",
    desc: "From logistics workflows to delivery validation, my focus is converting messy operational requirements into reliable mobile features.",
  },
];

const projects = [
  {
    tag: "Enterprise Android",
    title: "Unified Multi-Module Android Application",
    desc: "Architected a scalable Android platform consolidating multiple business workflows into a unified modular app experience.",
    impact: "Reduced fake delivery attempts by 87%",
    stack: "Kotlin • Jetpack Compose • Hilt • MVVM • Clean Architecture",
  },
  {
    tag: "Location Intelligence",
    title: "Geofencing Delivery Validation System",
    desc: "Implemented real-time location validation using Android device APIs to improve delivery authentication and reduce operational misuse.",
    impact: "Production-ready scalable implementation",
    stack: "Android SDK • Location APIs • Coroutines • REST APIs",
  },
  {
    tag: "Platform Workflow",
    title: "Vendor Onboarding Platform",
    desc: "Rebuilt onboarding workflows with cleaner UI flow, backend integration, and better operational visibility for internal teams.",
    impact: "Deployed across 69% operational hubs",
    stack: "React • REST APIs • Dashboard Integrations",
  },
];

const milestones = [
  { value: "47%", label: "Crash reduction", desc: "Improved production stability through profiling and architecture fixes." },
  { value: "30%", label: "Startup boost", desc: "Reduced app startup delay and optimized heavy loading paths." },
  { value: "87%", label: "Fraud reduction", desc: "Helped reduce fake delivery attempts through validation systems." },
  { value: "1.5+", label: "Years experience", desc: "Hands-on Android development across production applications." },
];

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-[#05070b] text-white selection:bg-cyan-300 selection:text-black">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[130px]" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-blue-700/20 blur-[120px]" />
      </div>

      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#05070b]/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#home" className="text-sm font-bold tracking-[0.35em] text-white">
            AVINASH<span className="text-cyan-300">.DEV</span>
          </a>
          <div className="hidden items-center gap-7 text-xs uppercase tracking-[0.22em] text-white/60 md:flex">
            <a className="hover:text-cyan-300" href="#edge">Edge</a>
            <a className="hover:text-cyan-300" href="#work">Work</a>
            <a className="hover:text-cyan-300" href="#skills">Skills</a>
            <a className="hover:text-cyan-300" href={profileLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="hover:text-cyan-300" href={profileLinks.resume} target="_blank" rel="noreferrer">Resume</a>
            <a className="hover:text-cyan-300" href="#contact">Contact</a>
          </div>
          <div className="flex items-center gap-2">
            <a href={profileLinks.resume} target="_blank" rel="noreferrer" className="hidden rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/75 hover:border-cyan-300 hover:text-cyan-200 sm:inline-flex">
              View Resume
            </a>
            <a href={profileLinks.resume} download className="hidden rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/75 hover:border-cyan-300 hover:text-cyan-200 sm:inline-flex">
              Download
            </a>
            <a
              href={profileLinks.gmailCompose}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-cyan-300/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200 hover:bg-cyan-300 hover:text-black"
            >
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      <section id="home" className="mx-auto grid min-h-[88vh] max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7 }}>
          <p className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-cyan-200">
            Android Engineer • Kotlin • Jetpack Compose
          </p>
          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-white md:text-7xl lg:text-8xl">
            Building Mobile Systems for Real-World Scale.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65">
            I am Avinash Kumar Singh, an Android Developer focused on scalable architecture, performance optimization, modern UI, and production-grade mobile experiences.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="https://github.com/AvinashSingh0001" target="_blank" className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-bold text-black hover:bg-white">
              View GitHub
            </a>
            <a href={profileLinks.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white hover:border-cyan-300 hover:text-cyan-200">
              LinkedIn Profile
            </a>
            <a href={profileLinks.resume} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white hover:border-cyan-300 hover:text-cyan-200">
              View Resume
            </a>
            <a href={profileLinks.resume} download className="rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white hover:border-cyan-300 hover:text-cyan-200">
              Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl backdrop-blur-xl">
            <div className="rounded-[1.5rem] border border-cyan-300/20 bg-black/40 p-6">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.25em] text-white/45">Mobile Intelligence</span>
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_25px_#67e8f9]" />
              </div>
              <div className="space-y-4">
                {milestones.slice(0, 3).map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <p className="text-4xl font-semibold tracking-[-0.04em] text-cyan-200">{item.value}</p>
                    <p className="mt-1 text-sm font-semibold text-white">{item.label}</p>
                    <p className="mt-2 text-sm leading-6 text-white/50">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="edge" className="mx-auto max-w-7xl px-5 py-24">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">Our Edge</p>
        <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
          From app screens to intelligent mobile systems.
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {edgeCards.map((card) => (
            <motion.article key={card.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="rounded-[1.7rem] border border-white/10 bg-white/[0.04] p-7 hover:border-cyan-300/40">
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-200/80">{card.label}</p>
              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em]">{card.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/55">{card.desc}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] py-20">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 md:grid-cols-4">
          {milestones.map((item) => (
            <div key={item.label} className="rounded-[1.5rem] bg-black/25 p-6">
              <p className="text-5xl font-semibold tracking-[-0.06em] text-white">{item.value}</p>
              <p className="mt-3 font-semibold text-cyan-200">{item.label}</p>
              <p className="mt-2 text-sm leading-6 text-white/50">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-5 py-24">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">Featured Work</p>
            <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
              Production projects with measurable outcomes.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-white/55">
            A recruiter should quickly understand not only what you built, but why it mattered to the product and business.
          </p>
        </div>
        <div className="mt-12 space-y-5">
          {projects.map((project, index) => (
            <motion.article key={project.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: index * 0.08 }} className="grid gap-6 rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-6 md:grid-cols-[0.7fr_1.3fr_0.8fr] md:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-cyan-200/80">{project.tag}</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">{project.title}</h3>
              </div>
              <div>
                <p className="text-sm leading-7 text-white/58">{project.desc}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/35">{project.stack}</p>
              </div>
              <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-cyan-200">Impact</p>
                <p className="mt-3 text-lg font-semibold text-white">{project.impact}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-5 py-24">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-7 md:p-12">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">Tech Stack</p>
          <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
            Secure. Scalable. Product-focused Android.
          </h2>
          <div className="mt-10 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full border border-white/10 bg-black/25 px-4 py-2 text-sm text-white/70">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-center">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">Developer Note</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
              “Good mobile engineering is not only about writing code. It is about making the product reliable in the real world.”
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-white/60">
            <p>
              I focus on the parts users may never see directly: startup time, app lifecycle, memory behavior, background execution, API failure handling, modular code boundaries, and UI consistency.
            </p>
            <p>
              My goal is to grow into a strong product-focused Android engineer who can own features end-to-end and bring AI-assisted development into practical mobile workflows.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-24">
        <div className="rounded-[2.2rem] border border-cyan-300/20 bg-cyan-300/10 p-8 text-center md:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-100">Open To Opportunities</p>
          <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.05em] md:text-7xl">
            Let’s build Android products that feel fast, stable and scalable.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-white/60">
            Interested in Android development, Jetpack Compose, Kotlin, architecture, performance optimization, or AI-powered mobile experiences? Let’s connect.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a href={profileLinks.gmailCompose} target="_blank" rel="noreferrer" className="rounded-full bg-white px-7 py-3 text-sm font-bold text-black hover:bg-cyan-200">
              Contact Me
            </a>
            <a href={profileLinks.github} target="_blank" rel="noreferrer" className="rounded-full border border-white/20 px-7 py-3 text-sm font-bold text-white hover:border-white">
              Portfolio Repo
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-xs uppercase tracking-[0.25em] text-white/35">
        © 2026 Avinash Kumar Singh • Android Engineer
      </footer>
    </main>
  );
}
