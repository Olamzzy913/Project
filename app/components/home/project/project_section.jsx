"use client";

import React, { useState, useEffect, useRef } from "react";

const projects = [
  {
    id: "elysian-bank",
    name: "Elysian Bank",
    type: "FINTECH SYSTEM",
    platform: "web", // Web project - shows monitor
    tagline: "Banking at the speed of light",
    description:
      "Next-gen fintech platform processing 10K+ transactions per second with millisecond latency. Features include quantum-resistant encryption and AI fraud detection.",
    tech: ["React", "WebSocket", "Redis", "PostgreSQL"],
    metrics: {
      performance: "2.3s load",
      uptime: "99.9%",
      impact: "47% faster",
      users: "50K+ active",
    },
    color: "#01E8F0",
    bg: "#162020",
    shot: "https://i.pinimg.com/1200x/fe/63/ad/fe63ad6cdc3f130c4f3fe048f71bf60b.jpg",
    demo: "https://elysian-bank.demo.com",
    github: "https://github.com/username/elysian-bank",
    url: "www.elysian-bank.com",
    stats: [
      { label: "Transaction Speed", value: "0.8ms", progress: 98 },
      { label: "Security Rating", value: "A+", progress: 96 },
      { label: "User Growth", value: "+284%", progress: 85 },
    ],
  },
  {
    id: "nebula-store",
    name: "Nebula Store",
    type: "AI E-COMMERCE",
    platform: "web", // Web project - shows monitor
    tagline: "Where intelligence meets commerce",
    description:
      "AI-powered platform with TensorFlow recommendation engines achieving 32% higher conversion rates. Real-time inventory sync with predictive demand forecasting.",
    tech: ["Next.js", "TensorFlow", "MongoDB", "Python"],
    metrics: {
      conversion: "+32%",
      gmv: "$2.4M",
      engagement: "4.2min",
      retention: "78%",
    },
    color: "#01E8F0",
    bg: "#162020",
    shot: "https://i.pinimg.com/736x/8e/80/1a/8e801ab0325335e3c48f9b345672a589.jpg",
    demo: "https://nebula-store.demo.com",
    github: "https://github.com/username/nebula-store",
    url: "www.nebula-store.ai",
    stats: [
      { label: "Conversion Rate", value: "+32%", progress: 92 },
      { label: "Load Speed", value: "1.8s", progress: 88 },
      { label: "AI Accuracy", value: "94%", progress: 94 },
    ],
  },
  {
    id: "pulse-dash",
    name: "Pulse Dashboard",
    type: "ANALYTICS HUD",
    platform: "web", // Web project - shows monitor
    tagline: "See the invisible",
    description:
      "Real-time analytics dashboard processing 10M+ data points daily with sub-100ms query times. Custom visualization engine built with D3.js for enterprise insights.",
    tech: ["Vue.js", "D3.js", "ClickHouse", "Socket.io"],
    metrics: {
      throughput: "10M+/day",
      latency: "<100ms",
      clients: "200+",
      accuracy: "99.5%",
    },
    color: "#01E8F0",
    bg: "#162020",
    shot: "https://i.pinimg.com/736x/d1/3e/b0/d13eb03aaf9cff5beaa3779ef811d562.jpg",
    demo: "https://pulse-dash.demo.com",
    github: "https://github.com/username/pulse-dash",
    url: "www.pulse-dash.io",
    stats: [
      { label: "Data Points", value: "10M+", progress: 100 },
      { label: "Query Speed", value: "87ms", progress: 95 },
      { label: "Uptime", value: "99.99%", progress: 99 },
    ],
  },
  {
    id: "quantum-chat",
    name: "Quantum Chat",
    type: "ENCRYPTED COMMS",
    platform: "mobile", // Mobile app - shows phone frames
    tagline: "Unbreakable connections",
    description:
      "End-to-end encrypted messaging platform using Signal Protocol with quantum-resistant cryptography. Features self-destructing messages and secure voice/video calls.",
    tech: ["React Native", "WebRTC", "Signal", "Firebase"],
    metrics: {
      downloads: "100K+",
      rating: "4.8★",
      speed: "<50ms",
      security: "AES-256",
    },
    color: "#01E8F0",
    bg: "#162020",
    shot: "https://i.pinimg.com/736x/ab/2b/11/ab2b11d431d9c46d3c72bf3cd3621980.jpg",
    demo: "https://quantum-chat.demo.com",
    github: "https://github.com/username/quantum-chat",
    url: "www.quantum.chat",
    stats: [
      { label: "Active Users", value: "50K+", progress: 88 },
      { label: "Message Speed", value: "<50ms", progress: 96 },
      { label: "Security Score", value: "A++", progress: 99 },
    ],
    // App screens for mobile frame (splash, welcome, home)
    appScreens: {
      splash:
        "https://i.pinimg.com/736x/ab/2b/11/ab2b11d431d9c46d3c72bf3cd3621980.jpg",
      welcome:
        "https://i.pinimg.com/736x/8e/80/1a/8e801ab0325335e3c48f9b345672a589.jpg",
      home: "https://i.pinimg.com/1200x/fe/63/ad/fe63ad6cdc3f130c4f3fe048f71bf60b.jpg",
    },
  },
  // NEW MOBILE PROJECT: Aether Health (Healthcare App)
  {
    id: "aether-health",
    name: "Aether Health",
    type: "HEALTHTECH APP",
    platform: "mobile", // Mobile app - shows phone frames
    tagline: "Your health, intelligently monitored",
    description:
      "AI-driven health companion providing real-time vitals tracking, medication reminders, and personalized wellness insights. Seamlessly integrates with wearables and telemedicine services.",
    tech: ["React Native", "TensorFlow Lite", "Firebase", "HealthKit"],
    metrics: {
      users: "120K+",
      rating: "4.9★",
      insights: "10M+",
      recovery: "32% faster",
    },
    color: "#01E8F0",
    bg: "#162020",
    shot: "https://i.pinimg.com/736x/ab/2b/11/ab2b11d431d9c46d3c72bf3cd3621980.jpg",
    demo: "https://aether-health.demo.com",
    github: "https://github.com/username/aether-health",
    url: "www.aether.health",
    stats: [
      { label: "User Retention", value: "89%", progress: 92 },
      { label: "AI Accuracy", value: "96%", progress: 96 },
      { label: "Response Time", value: "<0.3s", progress: 98 },
    ],
    appScreens: {
      splash:
        "https://i.pinimg.com/1200x/fe/63/ad/fe63ad6cdc3f130c4f3fe048f71bf60b.jpg",
      welcome:
        "https://i.pinimg.com/736x/d1/3e/b0/d13eb03aaf9cff5beaa3779ef811d562.jpg",
      home: "https://i.pinimg.com/736x/8e/80/1a/8e801ab0325335e3c48f9b345672a589.jpg",
    },
  },
];

export default function ExceptionalProjects() {
  const [active, setActive] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [osType, setOsType] = useState("ios");
  const stageRef = useRef(null);

  // Mouse tracking for 3D tilt effect
  const handleMouseMove = (e) => {
    if (!stageRef.current || !isHovering) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x: x * 10, y: y * 5 });
  };

  // Auto-rotate projects every 5 seconds when not hovering
  useEffect(() => {
    if (isHovering) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovering]);

  const handleExplore = (project) => {
    window.open(project.demo, "_blank");
  };

  return (
    <section className="bg-[#050505] min-h-screen py-24 relative overflow-hidden selection:bg-[#01E8F0] selection:text-black">
      {/* Dynamic Ambient Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full blur-[140px] opacity-20 transition-all duration-1000 ease-in-out pointer-events-none"
        style={{
          backgroundColor: projects[active].color,
          transform: `scale(${isHovering ? 1.2 : 1})`,
        }}
      />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(1,232,240,0.1)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:items-center">
          {/* LEFT: INTERACTIVE LIST */}
          <div className="w-full lg:w-5/12 space-y-2">
            <div className="mb-12">
              <p className="text-[#01E8F0] font-mono text-xs tracking-[0.5em] mb-2 opacity-60 animate-pulse">
                ⌨️ My projects
              </p>
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-linear-to-r from-[#01E8F0] to-transparent" />
                <span className="text-white/30 font-mono text-xs flex items-center gap-1">
                  <span className="text-[#01E8F0]">{">"}</span>
                  {String(active + 1).padStart(2, "0")}/
                  {String(projects.length).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* Scrollable Container */}
            <div className="relative">
              <div
                className="h-110 overflow-y-auto pr-2 space-y-0 group/scroll custom-scrollbar-on-hover"
                style={{ scrollBehavior: "smooth" }}
              >
                {projects.map((project, index) => (
                  <div
                    key={project.id}
                    onMouseEnter={() => setActive(index)}
                    className="group cursor-pointer relative py-6 border-b border-white/5 overflow-hidden transition-all duration-500"
                  >
                    <div
                      className={`absolute inset-0 bg-linear-to-r from-[#01E8F0]/0 via-[#01E8F0]/0 to-transparent transition-all duration-700 ${
                        active === index
                          ? "from-[#01E8F0]/20"
                          : "group-hover:from-[#01E8F0]/5"
                      }`}
                    />

                    <div className="flex items-baseline gap-6 relative z-10 transition-all duration-500 group-hover:translate-x-4">
                      <span
                        className={`font-mono text-sm transition-all duration-300 ${
                          active === index
                            ? "text-[#01E8F0] shadow-[0_0_15px_currentColor] scale-110"
                            : "text-white/20 group-hover:text-white/40"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1">
                        <h3
                          className={`text-[1.5rem] md:text-4xl font-bold tracking-tighter transition-all duration-500 ${
                            active === index
                              ? "text-white translate-x-2"
                              : "text-white/10 group-hover:text-white/20 group-hover:translate-x-1"
                          }`}
                        >
                          {project.name}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <p
                            className={`text-xs font-mono transition-all duration-300 ${
                              active === index
                                ? "text-[#01E8F0]"
                                : "text-white/20"
                            }`}
                          >
                            {project.type}
                          </p>
                          {active === index && (
                            <div className="flex gap-1">
                              <div className="w-1 h-1 rounded-full bg-[#01E8F0] animate-pulse" />
                              <div className="w-1 h-1 rounded-full bg-[#01E8F0] animate-pulse delay-150" />
                              <div className="w-1 h-1 rounded-full bg-[#01E8F0] animate-pulse delay-300" />
                            </div>
                          )}
                        </div>
                      </div>

                      <svg
                        className={`w-4 h-4 transition-all duration-500 ${
                          active === index
                            ? "opacity-100 translate-x-0 text-[#01E8F0]"
                            : "opacity-0 -translate-x-4"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>

                    <div
                      className={`absolute left-0 top-0 h-full w-0.75 bg-[#01E8F0] transition-all duration-500 ${
                        active === index
                          ? "opacity-100 shadow-[0_0_20px_#01E8F0]"
                          : "opacity-0"
                      }`}
                    >
                      <div className="absolute top-0 left-0 w-full h-1/3 bg-linear-to-b from-[#01E8F0] to-transparent" />
                    </div>

                    <div
                      className={`absolute inset-0 bg-linear-to-r from-[#01E8F0]/10 via-transparent to-transparent transition-transform duration-700 origin-left ${
                        active === index
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-50"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Terminal-style prompt */}
            <div className="mt-8 pt-4 font-mono text-[10px] text-white/20 flex items-center gap-2 border-t border-white/5">
              <span className="text-[#01E8F0] animate-pulse">{">"}_</span>
              <span className="tracking-wider">
                active_project --id {projects[active].id} --platform{" "}
                {projects[active].platform}
              </span>
              <div className="flex-1" />
              <div className="flex gap-1">
                <div className="w-1 h-1 rounded-full bg-[#01E8F0]/40" />
                <div className="w-1 h-1 rounded-full bg-[#01E8F0]/40" />
                <div className="w-1 h-1 rounded-full bg-[#01E8F0]/40" />
              </div>
            </div>
          </div>

          {/* RIGHT: DISPLAY STAGE */}
          <div className="w-full lg:w-7/12 mt-12 lg:mt-0">
            <div
              ref={stageRef}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => {
                setIsHovering(false);
                setMousePosition({ x: 0, y: 0 });
              }}
              onMouseMove={handleMouseMove}
              className="relative aspect-4/3 md:aspect-video rounded-3xl"
              style={{
                transform: `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
                transition: isHovering ? "none" : "all 0.5s ease-out",
              }}
            >
              {/* Animated Border Stage */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden p-0.5">
                <div
                  className="absolute -inset-full animate-border-spin"
                  style={{
                    background: `conic-gradient(from 0deg, transparent 0%, transparent 18%, ${projects[active].color} 25%, transparent 40%, transparent 100%)`,
                  }}
                />
                <div
                  className="absolute inset-px rounded-3xl z-0"
                  style={{
                    backgroundColor: projects[active].bg,
                  }}
                />
              </div>

              {/* Inner Background */}
              <div
                className="absolute inset-0.5 rounded-3xl"
                style={{
                  backgroundColor: projects[active].bg,
                }}
              />

              {/* Card Content */}
              <div className="relative rounded-3xl p-8 md:p-10 flex flex-col justify-between h-200 z-10">
                <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-[#01E8F0]/0 via-[#01E8F0]/10 to-[#01E8F0]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Top Section: Tech Stack + OS Toggle (only for mobile) */}
                <div className="flex justify-between items-start gap-4 relative z-10">
                  <div className="space-y-3 shrink-0">
                    <span className="text-[#01E8F0] font-mono text-[11px] tracking-widest uppercase bg-[#01E8F0]/10 px-4 py-1.5 rounded-full border border-[#01E8F0]/20">
                      {projects[active].type}
                    </span>
                    <div className="flex gap-2 pt-3 flex-wrap max-w-100">
                      {projects[active].tech.map((t, idx) => (
                        <span
                          key={t}
                          className="px-3 py-1.5 border border-white/10 rounded text-[10px] text-white/60 font-mono hover:border-[#01E8F0]/30 hover:text-[#01E8F0] transition-all cursor-default"
                          style={{
                            transitionDelay: `${idx * 50}ms`,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* OS Toggle - Only show for mobile projects */}
                  {projects[active].platform === "mobile" && (
                    <div className="flex gap-2 bg-black/40 backdrop-blur-sm rounded-full p-1 border border-white/10">
                      <button
                        onClick={() => setOsType("ios")}
                        className={`px-3 py-1.5 rounded-full text-[10px] font-mono transition-all ${
                          osType === "ios"
                            ? "bg-[#01E8F0] text-black"
                            : "text-white/60 hover:text-white"
                        }`}
                      >
                        iOS
                      </button>
                      <button
                        onClick={() => setOsType("android")}
                        className={`px-3 py-1.5 rounded-full text-[10px] font-mono transition-all ${
                          osType === "android"
                            ? "bg-[#01E8F0] text-black"
                            : "text-white/60 hover:text-white"
                        }`}
                      >
                        Android
                      </button>
                    </div>
                  )}
                </div>

                {/* Display Content - CONDITIONAL: Monitor OR Mobile Frames */}
                {projects[active].platform === "web" ? (
                  /* MONITOR DISPLAY (Original) */
                  <div className="relative w-full mt-6 z-10">
                    <div className="relative rounded-xl p-2 shadow-2xl">
                      <div className="absolute inset-0 rounded-xl bg-[#C0C0C0] pointer-events-none" />
                      <div className="relative bg-black rounded-lg overflow-hidden shadow-inner">
                        <div className="relative">
                          <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-transparent via-[#01E8F0]/5 to-transparent bg-size-[100%_4px] animate-scan" />
                          <div className="absolute inset-0 pointer-events-none bg-black/20 animate-pulse" />

                          {/* Browser Chrome */}
                          <div className="bg-[#0a0a0a] border-b border-[#01E8F0]/30">
                            <div className="px-4 py-2 flex items-center gap-2">
                              <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                              </div>
                              <div className="flex-1 mx-3">
                                <div className="bg-[#252524] rounded-md px-3 py-1 text-center border border-[#01E8F0]/20">
                                  <span className="text-gray-400 text-[11px] font-mono">
                                    {projects[active].url}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#01E8F0] shadow-[0_0_4px_#01E8F0] animate-pulse" />
                                <span className="text-[8px] text-[#01E8F0]/60 font-mono hidden sm:inline">
                                  ACTIVE
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Display Content */}
                          <div className="relative bg-black overflow-hidden">
                            <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
                            <div className="relative grayscale hover:grayscale-0 transition-all duration-700 ease-out cursor-pointer">
                              <img
                                src={projects[active].shot}
                                alt={projects[active].name}
                                className="w-full h-56 object-cover brightness-90 contrast-110 saturate-90 hover:brightness-100 hover:contrast-100 transition-all duration-500"
                              />
                              <div className="absolute inset-0 pointer-events-none bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%224%22%20height%3D%224%22%20viewBox%3D%220%200%204%204%22%3E%3Crect%20width%3D%221%22%20height%3D%221%22%20fill%3D%22rgba(1%2C232%2C240%2C0.1)%22%2F%3E%3C%2Fsvg%3E')] bg-repeat" />
                            </div>
                            <div className="absolute inset-0 pointer-events-none bg-gradient-radial from-transparent via-transparent to-black/40" />
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#01E8F0] to-transparent opacity-50" />
                        </div>
                      </div>
                      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-linear-to-b from-[#1a1a1a] to-[#C0C0C0] rounded-b-md">
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-2 bg-[#999999]" />
                      </div>
                    </div>
                  </div>
                ) : (
                  /* MOBILE FRAMES - Three frames for splash, welcome, home */
                  <div className="relative w-full mt-6 z-10 flex justify-center gap-3 sm:gap-4 flex-wrap">
                    {/* Splash Screen Frame */}
                    <div className="relative group/frame transition-transform duration-300 hover:scale-105">
                      <div
                        className={`relative w-24 sm:w-28 md:w-32 rounded-3xl overflow-hidden shadow-2xl ${
                          osType === "ios"
                            ? "border-4 border-gray-300"
                            : "border-4 border-gray-700 rounded-xl"
                        }`}
                      >
                        {osType === "ios" && (
                          <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1/3 h-2 bg-black rounded-full z-20" />
                        )}
                        <div className="relative bg-black">
                          <img
                            src={projects[active].appScreens.splash}
                            alt={`${projects[active].name} splash`}
                            className="w-full h-auto object-cover aspect-9/19"
                          />
                        </div>

                        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gray-400 rounded-full" />
                      </div>
                    </div>

                    {/* Welcome Screen Frame */}
                    <div className="relative group/frame transition-transform duration-300 hover:scale-105">
                      <div
                        className={`relative w-24 sm:w-28 md:w-32 rounded-3xl overflow-hidden shadow-2xl ${
                          osType === "ios"
                            ? "border-4 border-gray-300"
                            : "border-4 border-gray-700 rounded-xl"
                        }`}
                      >
                        {osType === "ios" && (
                          <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1/3 h-2 bg-black rounded-full z-20" />
                        )}
                        <div className="relative bg-black">
                          <img
                            src={projects[active].appScreens.welcome}
                            alt={`${projects[active].name} welcome`}
                            className="w-full h-auto object-cover aspect-9/19"
                          />
                        </div>

                        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gray-400 rounded-full" />
                      </div>
                    </div>

                    {/* Home Screen Frame */}
                    <div className="relative group/frame transition-transform duration-300 hover:scale-105">
                      <div
                        className={`relative w-24 sm:w-28 md:w-32 rounded-3xl overflow-hidden shadow-2xl ${
                          osType === "ios"
                            ? "border-4 border-gray-300"
                            : "border-4 border-gray-700 rounded-xl"
                        }`}
                      >
                        {osType === "ios" && (
                          <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1/3 h-2 bg-black rounded-full z-20" />
                        )}
                        <div className="relative bg-black">
                          <img
                            src={projects[active].appScreens.home}
                            alt={`${projects[active].name} home`}
                            className="w-full h-auto object-cover aspect-9/19"
                          />
                        </div>

                        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gray-400 rounded-full" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Middle: Content */}
                <div className="relative z-10 mt-6 animate-in">
                  <div className="mb-2">
                    <span className="text-sm font-mono text-[#01E8F0]/60">
                      {projects[active].tagline}
                    </span>
                  </div>
                  <h4 className="text-xl md:text-2xl text-white font-bold mb-4 leading-tight">
                    {projects[active].description.split(".")[0]}.
                  </h4>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(projects[active].metrics).map(
                      ([key, value]) => (
                        <div
                          key={key}
                          className="border-l-2 border-[#01E8F0]/30 pl-3"
                        >
                          <div className="text-[10px] font-mono text-white/40 uppercase tracking-wider mb-1">
                            {key}
                          </div>
                          <div className="text-sm text-white font-semibold">
                            {value}
                          </div>
                        </div>
                      ),
                    )}
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleExplore(projects[active])}
                      className="group/btn px-6 py-3 bg-linear-to-r from-[#01E8F0] to-[#01c4cb] text-black text-[11px] font-black uppercase tracking-widest rounded-xl hover:shadow-[0_0_20px_#01E8F0] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
                    >
                      <span>Explore Case Study</span>
                      <svg
                        className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                    <button className="px-5 py-3 border border-white/20 text-white/60 hover:text-[#01E8F0] hover:border-[#01E8F0] text-[11px] font-mono uppercase tracking-wider rounded-xl transition-all duration-300">
                      Hire Me
                    </button>
                  </div>
                </div>

                {/* Background Decoration */}
                <div className="absolute -bottom-8 -right-4 text-[12rem] md:text-[16rem] font-black text-white/2 select-none pointer-events-none transition-all duration-1000 group-hover:text-white/4">
                  {String(active + 1).padStart(2, "0")}
                </div>

                {/* Scanline Effect */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                  <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#01E8F0]/5 to-transparent animate-scan" />
                </div>
              </div>
            </div>

            {/* Status Footer */}
            <div className="mt-6 flex justify-between items-center px-4 opacity-40 hover:opacity-70 transition-opacity">
              <div className="flex gap-4 font-mono text-[9px] text-white/60">
                <span className="flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-[#01E8F0] animate-pulse" />
                  SYSTEM_ACTIVE
                </span>
                <span>PROJECT_{projects[active].id.toUpperCase()}</span>
              </div>
              <div className="h-px flex-1 mx-8 bg-linear-to-r from-transparent via-white/20 to-transparent" />
              <span className="font-mono text-[9px] text-[#01E8F0] tracking-wider">
                READY // v2.0
              </span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }

        .custom-scrollbar-on-hover {
          scrollbar-width: thin;
          scrollbar-color: transparent transparent;
        }

        .custom-scrollbar-on-hover:hover {
          scrollbar-color: #01e8f0 rgba(255, 255, 255, 0.05);
        }

        .custom-scrollbar-on-hover::-webkit-scrollbar {
          width: 3px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .custom-scrollbar-on-hover::-webkit-scrollbar-track {
          background: transparent;
          border-radius: 10px;
        }

        .custom-scrollbar-on-hover::-webkit-scrollbar-thumb {
          background: transparent;
          border-radius: 10px;
        }

        .custom-scrollbar-on-hover:hover::-webkit-scrollbar {
          opacity: 1;
        }

        .custom-scrollbar-on-hover:hover::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }

        .custom-scrollbar-on-hover:hover::-webkit-scrollbar-thumb {
          background: #01e8f0;
        }

        @keyframes borderSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-scan {
          animation: scan 8s linear infinite;
        }

        .bg-gradient-radial {
          background-image: radial-gradient(
            circle at center,
            var(--tw-gradient-stops)
          );
        }

        .animate-border-spin {
          animation: borderSpin 6s linear infinite;
        }

        .animate-in {
          animation: fadeIn 0.6s ease forwards;
        }
      `}</style>
    </section>
  );
}
