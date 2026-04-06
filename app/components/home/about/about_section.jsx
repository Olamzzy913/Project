"use client";

import {
  FaMobileAlt,
  FaCode,
  FaEnvelope,
  FaStar,
  FaRocket,
  FaShieldAlt,
  FaTachometerAlt,
} from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import React, { useState, useEffect } from "react";
import { FaFlutter, FaDartLang, FaFile } from "react-icons/fa6";
import { SiNextdotjs, SiNuxt, SiVuedotjs, SiNodedotjs } from "react-icons/si";

export default function AboutMe() {
  const [displayText, setDisplayText] = useState("");
  const [activeTech, setActiveTech] = useState("mobile");
  const fullText = "> Building cross-platform experiences with Flutter & React";

  // Typing animation effect
  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 50);
    return () => clearInterval(typing);
  }, []);

  const orbitItems = [
    { name: "Flutter", icon: FaFlutter, color: "#40C4FF", category: "mobile" },
    { name: "Dart", icon: FaDartLang, color: "#00B4AB", category: "mobile" },
    { name: "React", icon: FaReact, color: "#61DAFB", category: "web" },
    { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF", category: "web" },
    { name: "Vue.js", icon: SiVuedotjs, color: "#42B883", category: "web" },
    { name: "Nuxt.js", icon: SiNuxt, color: "#00DC82", category: "web" },
    {
      name: "Firebase",
      icon: IoLogoFirebase,
      color: "#FFCA28",
      category: "backend",
    },
    {
      name: "Node.js",
      icon: SiNodedotjs,
      color: "#68A063",
      category: "backend",
    },
  ];

  const categoryDetails = {
    mobile: {
      title: "Mobile Development",
      subtitle: "Cross-platform • Native performance",
      icon: FaMobileAlt,
      color: "#40C4FF",
      technologies: ["Flutter", "Dart"],
      description:
        "Building high-performance, cross-platform mobile apps with Flutter for iOS and Android. Expertise in state management, animations, and native integrations. With over 12+ successful app launches, I've helped businesses reach millions of users across both major mobile platforms.",
      stats: [
        { label: "Apps Delivered", value: "12+", icon: FaRocket },
        { label: "Client Rating", value: "4.9★", icon: FaStar },
        { label: "Performance", value: "60fps", icon: FaTachometerAlt },
      ],
      features: [
        "iOS & Android",
        "Custom Animations",
        "State Management",
        "Native Features",
      ],
    },
    web: {
      title: "Web Development",
      subtitle: "Modern frameworks • Scalable architecture",
      icon: MdWeb,
      color: "#61DAFB",
      technologies: ["React", "Next.js", "Vue.js", "Nuxt.js"],
      description:
        "Architecting scalable web applications using React, Next.js, Vue, and Nuxt. Focus on performance, SEO, and responsive design. I've built over 20+ websites and web applications, achieving sub-1.2s load times and 90+ Lighthouse scores.",
      stats: [
        { label: "Websites Built", value: "20+", icon: FaRocket },
        { label: "Client Rating", value: "4.8★", icon: FaStar },
        { label: "Load Time", value: "<1.2s", icon: FaTachometerAlt },
      ],
      features: ["SSR/SSG", "API Routes", "SEO Optimized", "Responsive Design"],
    },
    backend: {
      title: "Backend Engineering",
      subtitle: "Real-time • Cloud-native",
      icon: FaCode,
      color: "#FFCA28",
      technologies: ["Firebase", "Node.js"],
      description:
        "Leveraging Firebase and Node.js for real-time databases, authentication, push notifications, and scalable backend services. Built 15+ robust APIs handling thousands of concurrent users with sub-100ms response times.",
      stats: [
        { label: "APIs Built", value: "15+", icon: FaRocket },
        { label: "Uptime", value: "99.9%", icon: FaShieldAlt },
        { label: "Response", value: "<100ms", icon: FaTachometerAlt },
      ],
      features: [
        "Auth System",
        "Real-time DB",
        "Push Notifications",
        "Cloud Functions",
      ],
    },
  };

  const activeDetails = categoryDetails[activeTech];

  const experiences = [
    {
      role: "Senior Mobile Developer",
      company: "Tech201.",
      period: "2024 - Present",
      description:
        "Leading mobile development for cross-platform apps serving 500K+ users. Implemented CI/CD pipelines and reduced build times by 40%.",
      icon: FaMobileAlt,
    },
    {
      role: "Full Stack Developer",
      company: "Freelancer.",
      period: "2022 - 2024",
      description:
        "Developed and maintained 10+ web applications using React and Node.js. Improved application performance by 35% through optimization.",
      icon: MdWeb,
    },
    {
      role: "Frontend Developer",
      company: "Freelancer",
      period: "2021 - 2022",
      description:
        "Built responsive websites and interactive web applications for clients across fintech, e-commerce, and healthcare sectors.",
      icon: FaCode,
    },
  ];

  const handleHireMe = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent("Hiring Inquiry - Frontend Developer");
    const body = encodeURIComponent(
      `Hi Emmanuel,

I came across your portfolio and I'm impressed with your work in web and mobile development.

I'd like to discuss a potential opportunity to work together.

Could we schedule a quick call to discuss further?

Best regards,
[Your Name]`,
    );

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=emmanuelojelade7@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank");
  };

  return (
    <section className="bg-[#050505] min-h-screen py-12 md:py-24 relative overflow-hidden selection:bg-[#01E8F0] selection:text-black">
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full blur-[150px] opacity-10 bg-[#01E8F0] pointer-events-none" />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(1,232,240,0.1)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 bg-[#01E8F0]/10 px-3 md:px-4 py-2 rounded-full border border-[#01E8F0]/30">
              <div className="w-2 h-2 rounded-full bg-[#01E8F0] animate-pulse" />
              <span className="text-[#01E8F0] font-mono text-[10px] md:text-xs tracking-wider">
                ABOUT_ME.EXE
              </span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-6">
            <span className="text-white">Crafting </span>
            <span className="text-[#01E8F0] relative">
              Digital Excellence
              <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-linear-to-r from-[#01E8F0] to-transparent" />
            </span>
          </h1>

          <div className="font-mono text-base md:text-lg text-white/60 mb-4">
            <span className="text-[#01E8F0]">{">"}</span>{" "}
            <span className="border-r-2 border-[#01E8F0]">{displayText}</span>
          </div>
        </div>

        {/* Bio Section */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <p className="text-white/60 text-base md:text-lg leading-relaxed">
            I'm <span className="text-[#01E8F0]">Ojelade Olamide Emmanuel</span>
            , a passionate mobile and web developer with over 5 years of
            experience building applications that solve real-world problems. I
            specialize in <span className="text-[#01E8F0]">Flutter</span> for
            cross-platform mobile, and{" "}
            <span className="text-[#01E8F0]">React/Next.js</span> for modern web
            applications.
          </p>
        </div>

        {/* MAIN SECTION: Orbit Animation (Left) + Info Card (Right) */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center mb-24 md:mb-32">
          {/* LEFT: ORBIT ANIMATION - ROTATING */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative flex items-center justify-center">
              {/* Radial Glow */}
              <div
                className="absolute rounded-full transition-all duration-1000 opacity-30"
                style={{
                  width: "min(520px, 90vw)",
                  height: "min(520px, 90vw)",
                  background:
                    "radial-gradient(circle, #01E8F0 0%, transparent 70%)",
                  filter: "blur(50px)",
                  zIndex: 0,
                }}
              />

              {/* Static Rings */}
              <div className="absolute rounded-full border border-[#01E8F0]/20 w-[min(450px,80vw)] h-[min(450px,80vw)] pointer-events-none" />
              <div className="absolute rounded-full border border-[#01E8F0]/10 w-[min(380px,68vw)] h-[min(380px,68vw)] pointer-events-none" />
              <div className="absolute rounded-full border border-[#01E8F0]/5 w-[min(310px,55vw)] h-[min(310px,55vw)] pointer-events-none" />

              {/* Rotating Orbit Container */}
              <div className="relative w-[min(480px,85vw)] h-[min(480px,85vw)] animate-orbit-rotate">
                {orbitItems.map((item, idx) => {
                  const angle = (idx * 360) / orbitItems.length;
                  const radius = 180;
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;

                  return (
                    <div
                      key={item.name}
                      className="absolute animate-counter-rotate"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <button
                        onClick={() => setActiveTech(item.category)}
                        className={`icon-box group/icon transition-all duration-300 ${
                          activeTech === item.category
                            ? "scale-110 border-[#01E8F0] shadow-[0_0_20px_rgba(1,232,240,0.5)]"
                            : ""
                        }`}
                      >
                        <item.icon
                          className="w-5 h-5 md:w-7 md:h-7 transition-all duration-300 group-hover/icon:scale-110"
                          style={{ color: item.color }}
                        />
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                          <span className="text-[9px] font-mono text-[#01E8F0] bg-black/90 px-2 py-1 rounded border border-[#01E8F0]/30">
                            {item.name}
                          </span>
                        </div>
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Center Core */}
              <div className="absolute z-10 p-2 md:p-3 rounded-full border-2 border-[#01E8F0]/40 bg-black/60 backdrop-blur-md shadow-[0_0_50px_rgba(1,232,240,0.3)] transition-all duration-500 hover:scale-110">
                <div className="h-16 w-16 md:h-24 md:w-24 rounded-full bg-linear-to-br from-[#01E8F0]/20 to-transparent flex items-center justify-center">
                  <FaCode className="text-2xl md:text-4xl text-[#01E8F0]" />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: DETAIL CARD - FIXED HEIGHT WITH SCROLL */}
          <div className="w-full lg:w-1/2">
            <div className="relative group">
              {/* Glow effect behind card */}
              <div className="absolute -inset-1 bg-linear-to-r from-[#01E8F0]/30 to-[#01E8F0]/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Main Card - Fixed height container */}
              <div className="relative overflow-hidden rounded-2xl border border-[#01E8F0]/20 bg-linear-to-br from-black/80 to-black/40 backdrop-blur-xl shadow-2xl ">
                {/* Scanline effect */}
                <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-transparent via-[#01E8F0]/5 to-transparent animate-scan-slow" />

                {/* Scrollable Content */}
                <div className=" overflow-y-auto p-5 md:p-6 lg:p-8 custom-scrollbar">
                  {/* Header with category badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-[#01E8F0]/10 border border-[#01E8F0]/20 shrink-0">
                        <activeDetails.icon
                          className="text-xl md:text-2xl"
                          style={{ color: activeDetails.color }}
                        />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-white">
                          {activeDetails.title}
                        </h3>
                        <p className="text-white/40 text-[10px] md:text-xs font-mono">
                          {activeDetails.subtitle}
                        </p>
                      </div>
                    </div>
                    <div className="px-2 md:px-3 py-1 md:py-1.5 rounded-full bg-[#01E8F0]/10 border border-[#01E8F0]/20 shrink-0 ml-2">
                      <span className="text-[#01E8F0] font-mono text-[8px] md:text-[10px] uppercase tracking-wider whitespace-nowrap">
                        Active Stack
                      </span>
                    </div>
                  </div>

                  {/* Technologies - Clean grid */}
                  <div className="mb-6">
                    <h4 className="text-[#01E8F0] font-mono text-[10px] md:text-xs mb-3 uppercase tracking-wider flex items-center gap-2">
                      <FaCode className="text-[8px] md:text-[10px]" />
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeDetails.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 md:px-4 py-1.5 md:py-2 rounded-lg bg-white/5 border border-white/10 text-white/90 text-xs md:text-sm font-medium hover:border-[#01E8F0]/40 hover:text-[#01E8F0] transition-all hover:scale-105"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <h4 className="text-[#01E8F0] font-mono text-[10px] md:text-xs mb-2 uppercase tracking-wider">
                      Expertise
                    </h4>
                    <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                      {activeDetails.description}
                    </p>
                  </div>

                  {/* Stats Cards */}
                  <div className="grid grid-cols-3 gap-2 md:gap-3 mb-6">
                    {activeDetails.stats.map((stat, idx) => (
                      <div
                        key={idx}
                        className="text-center p-2 md:p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#01E8F0]/30 transition-all group/stat"
                      >
                        <stat.icon className="text-[#01E8F0] text-base md:text-lg mx-auto mb-1 md:mb-2 group-hover/stat:scale-110 transition-transform" />
                        <div className="text-white font-bold text-xs md:text-sm">
                          {stat.value}
                        </div>
                        <div className="text-white/40 text-[7px] md:text-[9px] font-mono uppercase">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-[#01E8F0] font-mono text-[10px] md:text-xs mb-3 uppercase tracking-wider">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {activeDetails.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[#01E8F0]" />
                          <span className="text-white/50 text-[10px] md:text-xs">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Decorative corner accent - positioned absolutely within the fixed container */}
                <div className="absolute bottom-2 right-2 md:bottom-3 md:right-3 text-[#01E8F0]/5 text-5xl md:text-7xl font-bold pointer-events-none">
                  {activeTech === "mobile" && "📱"}
                  {activeTech === "web" && "🌐"}
                  {activeTech === "backend" && "⚡"}
                </div>

                {/* Subtle gradient fade at bottom to indicate scroll */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-linear-to-t from-black/60 to-transparent pointer-events-none rounded-b-2xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3 md:gap-4 max-w-3xl mx-auto mb-16 md:mb-24">
          {[
            { value: "5+", label: "Years Experience" },
            { value: "50+", label: "Projects Completed" },
            { value: "20+", label: "Happy Clients" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-3 md:p-4 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm hover:border-[#01E8F0]/30 transition-all group"
            >
              <div className="text-xl md:text-2xl font-bold text-[#01E8F0] group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-[8px] md:text-[10px] font-mono text-white/40 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-8 md:mb-12">
            <div className="h-px flex-1 bg-linear-to-r from-[#01E8F0] to-transparent" />
            <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-[#01E8F0]">#</span>
              Journey Timeline
            </h2>
            <div className="h-px flex-1 bg-linear-to-l from-[#01E8F0] to-transparent" />
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="group relative p-5 md:p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-[#01E8F0]/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute top-3 right-3 md:top-4 md:right-4 text-[#01E8F0]/30 text-2xl md:text-4xl font-bold">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <div className="relative z-10">
                  <exp.icon className="text-xl md:text-2xl text-[#01E8F0] mb-3" />
                  <div className="text-[#01E8F0] font-mono text-[10px] md:text-xs mb-2">
                    {exp.period}
                  </div>
                  <h3 className="text-base md:text-xl font-bold text-white mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-white/60 text-xs md:text-sm mb-3">
                    {exp.company}
                  </p>
                  <p className="text-white/40 text-[10px] md:text-xs leading-relaxed">
                    {exp.description}
                  </p>
                </div>
                <div className="absolute inset-0 rounded-xl bg-linear-to-r from-[#01E8F0]/0 via-[#01E8F0]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy & Call to Action */}
        <div className="text-center">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-[#01E8F0]/20 blur-3xl rounded-full" />
            <blockquote className="relative max-w-3xl mx-auto p-6 md:p-8 border border-[#01E8F0]/20 rounded-2xl bg-black/40 backdrop-blur-sm">
              <div className="text-3xl md:text-4xl text-[#01E8F0] mb-4">"</div>
              <p className="text-white/80 text-base md:text-lg lg:text-xl leading-relaxed">
                Code is poetry written for both machines and humans. I strive to
                write elegant solutions that are scalable, maintainable, and
                delightful to use.
              </p>
              <div className="text-[#01E8F0] font-mono text-xs md:text-sm mt-4 flex items-center justify-center gap-2">
                <span className="w-6 md:w-8 h-px bg-[#01E8F0]" />
                Always learning, always building
                <span className="w-6 md:w-8 h-px bg-[#01E8F0]" />
              </div>
            </blockquote>
          </div>

          {/* Contact/Resume Button */}
          <div className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() =>
                window.open(
                  "https://docs.google.com/document/d/1EWhKnJwPeDBeGhVPBsOsm_Cl5_SJGVEXExTsCxhcCL8/edit?usp=sharing",
                  "_blank",
                )
              }
              className="px-6 md:px-8 py-2.5 md:py-3 cursor-pointer bg-[#01E8F0] text-black font-mono text-xs md:text-sm font-bold uppercase tracking-wider rounded-xl hover:shadow-[0_0_25px_#01E8F0] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              <FaFile className="text-sm hidden sm:block" />
              View Resume
            </button>
            <button
              onClick={handleHireMe}
              className="px-6 md:px-8 py-2.5 md:py-3 cursor-pointer border border-[#01E8F0] text-[#01E8F0] font-mono text-xs md:text-sm font-bold uppercase tracking-wider rounded-xl hover:bg-[#01E8F0]/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FaEnvelope className="text-sm hidden sm:block" />
              Contact Me
            </button>
          </div>

          {/* Terminal-style footer */}
          <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3 font-mono text-[8px] md:text-[10px] text-white/20">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#01E8F0] animate-pulse" />
              <span>SYSTEM_STATUS: ACTIVE</span>
            </div>
            <span className="tracking-wider text-center">
              {">"} ready_for_opportunities = true
            </span>
            <div className="flex gap-1">
              <div className="w-1 h-1 rounded-full bg-[#01E8F0]/40" />
              <div className="w-1 h-1 rounded-full bg-[#01E8F0]/40" />
              <div className="w-1 h-1 rounded-full bg-[#01E8F0]/40" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes orbit-rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes counter-rotate {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(-360deg);
          }
        }

        @keyframes scan-slow {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }

        .animate-orbit-rotate {
          animation: orbit-rotate 20s linear infinite;
        }

        .animate-counter-rotate {
          animation: counter-rotate 20s linear infinite;
        }

        .animate-scan-slow {
          animation: scan-slow 8s linear infinite;
        }

        .icon-box {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 16px;
          background: rgba(10, 17, 20, 0.9);
          border: 1px solid rgba(1, 232, 240, 0.3);
          backdrop-filter: blur(8px);
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
          cursor: pointer;
        }

        .icon-box:hover {
          border-color: #01e8f0;
          box-shadow: 0 0 25px rgba(1, 232, 240, 0.4);
          transform: scale(1.1);
        }

        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #01e8f0 rgba(1, 232, 240, 0.1);
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(1, 232, 240, 0.1);
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #01e8f0;
          border-radius: 10px;
        }

        @media (min-width: 768px) {
          .icon-box {
            width: 64px;
            height: 64px;
            border-radius: 20px;
          }
        }
      `}</style>
    </section>
  );
}
