"use client";
import { motion } from "framer-motion";

export default function Portfolio() {
  const skills = [
    "Kotlin",
    "Jetpack Compose",
    "Clean Architecture",
    "MVVM",
    "Android SDK",
    "Hilt",
    "Coroutines",
    "Performance Optimization",
    "Kotlin Multiplatform",
    "AI-Assisted Development",
  ];

  const achievements = [
    {
      title: "47% Crash Reduction",
      desc: "Improved production stability through profiling, optimization, and architectural improvements.",
    },
    {
      title: "30% Faster Startup",
      desc: "Optimized startup performance and reduced memory bottlenecks in production Android applications.",
    },
    {
      title: "Android 14 → 15 Migration",
      desc: "Led platform migration and AGP upgrade while resolving runtime and dependency issues.",
    },
  ];

  const projects = [
    {
      title: "Unified Multi-Module Android Application",
      desc: "Architected scalable Android application consolidating multiple business workflows into a unified modular platform.",
      metrics: "Reduced fake delivery attempts by 87%",
      stack: "Kotlin • Compose • Hilt • MVVM • Clean Architecture",
    },
    {
      title: "Geofencing Delivery Validation System",
      desc: "Implemented real-time location validation system using device APIs for delivery authentication.",
      metrics: "Production-ready scalable implementation",
      stack: "Android SDK • Location APIs • Coroutines",
    },
    {
      title: "Vendor Onboarding Platform",
      desc: "Rebuilt onboarding workflow platform improving operational control and system reliability.",
      metrics: "Deployed across 69% operational hubs",
      stack: "React • REST APIs • Backend Integrations",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-500/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-orange-400/10 blur-[100px] rounded-full animate-pulse" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ff7b0020,transparent_40%)]" />

      <nav className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-black/60">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-wider">
            AVINASH<span className="text-orange-500">.DEV</span>
          </h1>

          <div className="hidden md:flex gap-8 text-sm text-zinc-300">
            <a href="#about" className="hover:text-orange-400 transition">About</a>
            <a href="#skills" className="hover:text-orange-400 transition">Skills</a>
            <a href="#projects" className="hover:text-orange-400 transition">Projects</a>
            <a href="#contact" className="hover:text-orange-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      <section className="relative max-w-7xl mx-auto px-6 pt-24 pb-20 grid lg:grid-cols-2 gap-16 items-center z-10">
        <div>
          <div className="inline-flex items-center gap-2 border border-orange-500/30 bg-orange-500/10 rounded-full px-4 py-2 text-sm text-orange-300 mb-6">
            Android Engineer • Kotlin • Jetpack Compose
          </div>

          <h1 className="text-5xl lg:text-7xl font-black leading-tight">
            Building
            <span className="block text-orange-500">Scalable Android</span>
            Experiences.
          </h1>

          <p className="mt-8 text-zinc-400 text-lg leading-relaxed max-w-2xl">
            Android Engineer focused on performance optimization, scalable mobile architecture, and modern Android development. Experienced in Jetpack Compose, Clean Architecture, modular systems, and production-grade Android applications.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://github.com/AvinashSingh0001"
              target="_blank"
              className="px-6 py-3 rounded-2xl bg-orange-500 text-black font-semibold hover:scale-105 transition"
            >
              View GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/avinash-kumar-singh-sde/"
              target="_blank"
              className="px-6 py-3 rounded-2xl border border-white/20 hover:border-orange-500 hover:text-orange-400 transition"
            >
              LinkedIn
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-14">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-3xl font-bold text-orange-500">47%</h3>
              <p className="text-sm text-zinc-400 mt-2">Crash Reduction</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-3xl font-bold text-orange-500">30%</h3>
              <p className="text-sm text-zinc-400 mt-2">Startup Boost</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-3xl font-bold text-orange-500">87%</h3>
              <p className="text-sm text-zinc-400 mt-2">Fraud Reduction</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-orange-500/20 blur-3xl rounded-full" />

          <motion.div
            initial={{ opacity: 0, rotateY: 25, y: 40 }}
            animate={{ opacity: 1, rotateY: 0, y: 0 }}
            transition={{ duration: 1 }}
            whileHover={{ rotateY: -8, rotateX: 6, scale: 1.03 }}
            className="relative rounded-[32px] border border-orange-500/20 bg-zinc-950/80 backdrop-blur-2xl p-4 shadow-[0_0_80px_rgba(249,115,22,0.25)]"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <img
              src="/images/xpressbees.png"
              alt="project"
              className="rounded-3xl w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section id="about" className="max-w-7xl mx-auto px-6 py-20">
        <div className="rounded-[36px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-orange-400 uppercase tracking-[0.3em] text-sm mb-4">
                About Me
              </p>

              <h2 className="text-4xl font-black leading-tight">
                Engineering Products With
                <span className="text-orange-500"> Performance & Scale</span>
              </h2>
            </div>

            <div>
              <p className="text-zinc-400 leading-relaxed text-lg">
                I specialize in Android applications that prioritize scalability, performance, maintainability, and user experience. My work includes Android platform migrations, modular architectures, optimization initiatives, and production-ready feature development using modern Android technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-orange-400 uppercase tracking-[0.3em] text-sm mb-3">
              Expertise
            </p>
            <h2 className="text-4xl font-black">Core Engineering Skills</h2>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="px-5 py-3 rounded-2xl border border-white/10 bg-white/5 hover:border-orange-500 hover:bg-orange-500/10 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <p className="text-orange-400 uppercase tracking-[0.3em] text-sm mb-3">
            Impact
          </p>
          <h2 className="text-4xl font-black">Production Achievements</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((item) => (
            <div
              key={item.title}
              className="group rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-orange-500/50 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(249,115,22,0.2)] transition duration-500"
            >
              <h3 className="text-2xl font-bold text-orange-500 mb-4">
                {item.title}
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <p className="text-orange-400 uppercase tracking-[0.3em] text-sm mb-3">
            Projects
          </p>
          <h2 className="text-4xl font-black">Featured Engineering Work</h2>
        </div>

        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-orange-500/40 hover:-translate-y-2 hover:shadow-[0_0_50px_rgba(249,115,22,0.18)] transition duration-500"
            >
              <div className="grid lg:grid-cols-3 gap-10 items-center">
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

                  <p className="text-zinc-400 leading-relaxed mb-5">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <div className="px-4 py-2 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-300 text-sm">
                      {project.stack}
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-black/40 p-8 text-center">
                  <p className="text-sm text-zinc-500 mb-3">Impact</p>
                  <h4 className="text-2xl font-bold text-orange-500">
                    {project.metrics}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-4">
            <img
              src="/images/capture-ui.png"
              alt="android ui"
              className="rounded-3xl w-full"
            />
          </div>

          <div>
            <p className="text-orange-400 uppercase tracking-[0.3em] text-sm mb-3">
              Design + Engineering
            </p>

            <h2 className="text-4xl font-black leading-tight mb-6">
              Crafting Modern Mobile
              <span className="text-orange-500"> User Experiences</span>
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed">
              Beyond engineering architecture, I focus heavily on intuitive mobile experiences, smooth performance, and scalable UI systems using Jetpack Compose and modern Android principles.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-5xl mx-auto px-6 py-24 text-center">
        <div className="rounded-[40px] border border-orange-500/20 bg-orange-500/10 p-16">
          <p className="text-orange-300 uppercase tracking-[0.3em] text-sm mb-4">
            Open To Opportunities
          </p>

          <h2 className="text-5xl font-black leading-tight mb-6">
            Let's Build Something
            <span className="text-orange-500"> Exceptional</span>
          </h2>

          <p className="text-zinc-300 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Interested in Android engineering, scalable mobile systems, modern architecture, or product-focused mobile development? Let’s connect.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <a
              href="mailto:avinashkumarsingh0001@gmail.com"
              className="px-8 py-4 rounded-2xl bg-orange-500 text-black font-bold hover:scale-105 transition"
            >
              Contact Me
            </a>

            <a
              href="https://github.com/AvinashSingh0001"
              target="_blank"
              className="px-8 py-4 rounded-2xl border border-white/20 hover:border-orange-500 hover:text-orange-400 transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
