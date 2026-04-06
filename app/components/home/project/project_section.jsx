"use client";

import React, { useState, useEffect, useRef } from "react";

const projects = [
  {
    id: "wales-b",
    name: "Wales-b",
    type: "CRYPTO & GIFTCARD TRADING HUB",
    platform: "web",
    tagline: "Trade crypto and giftcards with confidence",
    description:
      "Enabled $30K+ monthly trades after UI optimizations, with 95% 30-day retention. Complex workflows caused 25% abandonment before redesign. Delivered 50% faster UI via lazy loading and API optimizations. Reduced fraud with QR-code auth and audit logs.",
    tech: ["Vue JS", "Tailwind", "Ably"],
    metrics: {
      performance: "1.5s load",
      uptime: "99.9%",
      impact: "50% faster",
      users: "30K+ monthly trades",
    },
    color: "#01E8F0",
    bg: "#162020",
    shot: "./wales-b.png",
    demo: "https://app.walesb.ng/auth/login",
    appStoreUrl: null,
    playStoreUrl: null,
    url: "www.walesb.ng",
    stats: [
      { label: "Load Time Improvement", value: "4s → 1.5s", progress: 62 },
      { label: "User Retention", value: "95%", progress: 95 },
      { label: "Trade Volume", value: "$30K+", progress: 88 },
    ],
  },
  {
    id: "botes",
    name: "Botes",
    type: "WELLNESS E-COMMERCE PLATFORM",
    platform: "web",
    tagline: "High-conversion wellness storefront",
    description:
      "Built a performant Nuxt.js storefront processing 500+ monthly orders, with 98% uptime. Reduced payment steps from 5 → 2, cutting abandonment by 35%. Achieved 1.2s page loads via Nuxt.js SSR and image lazy-loading. Enabled admin control panel for status updates and user management with no backend help needed.",
    tech: ["Nuxt.js", "Tailwind", "Paystack", "VeeValidate"],
    metrics: {
      performance: "1.2s load",
      uptime: "98%",
      impact: "35% less abandonment",
      users: "500+ monthly orders",
    },
    color: "#01E8F0",
    bg: "#162020",
    shot: "./botes.png",
    demo: "https://botes.live/",
    appStoreUrl: null,
    playStoreUrl: null,
    github: "https://github.com/username/botes",
    url: "www.botes.com",
    stats: [
      { label: "Cart Abandonment", value: "-35%", progress: 65 },
      { label: "Load Time", value: "1.2s", progress: 85 },
      { label: "Payment Errors", value: "0%", progress: 100 },
    ],
  },
  {
    id: "grild",
    name: "Glided",
    type: "HOME ESSENTIALS E-COMMERCE",
    platform: "web",
    tagline: "Shop home essentials with real-time inventory",
    description:
      "Streamlined home essentials shopping with real-time inventory and secure checkout. Inventory sync issues caused overselling before redesign. Built real-time inventory management with Firebase eliminating overselling by 100%. Reduced cart abandonment by 35% with secure checkout flow.",
    tech: ["Next.js", "Firebase", "Tailwind CSS", "Stripe"],
    metrics: {
      performance: "1.8s load",
      uptime: "99.9%",
      impact: "35% less abandonment",
      users: "10K+ monthly shoppers",
    },
    color: "#01E8F0",
    bg: "#162020",
    shot: "./glided.png",
    demo: "https://gildedhomeessentials.com.ng/",
    appStoreUrl: null,
    playStoreUrl: null,
    url: "www.grild.com",
    stats: [
      { label: "Overselling Reduction", value: "100%", progress: 100 },
      { label: "Cart Abandonment", value: "-35%", progress: 65 },
      { label: "Mobile Conversion", value: "+25%", progress: 85 },
    ],
  },
  {
    id: "oyato",
    name: "Oyato",
    type: "BNPL E-COMMERCE MOBILE APP",
    platform: "mobile",
    tagline: "Buy now, pay later — instantly",
    description:
      "Enabled instant purchases with Buy Now Pay Later feature, driving higher conversion rates. Users abandoned carts due to upfront payment requirements before BNPL integration. Built seamless BNPL checkout flow reducing cart abandonment by 40%. Integrated Google Auth for 1-click login improving onboarding by 60%.",
    tech: ["Flutter", "Google Auth", "Ably", "Firebase"],
    metrics: {
      performance: "1.2s load",
      uptime: "99.8%",
      impact: "40% less abandonment",
      users: "5K+ active users",
    },
    color: "#01E8F0",
    bg: "#162020",
    shot: "https://i.pinimg.com/1200x/fe/63/ad/fe63ad6cdc3f130c4f3fe048f71bf60b.jpg",
    demo: "https://oyato.demo.com",
    appStoreUrl: "https://apps.apple.com/app/oyato",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.oyato",
    github: "https://github.com/username/oyato",
    url: "www.oyato.com",
    stats: [
      { label: "Cart Abandonment", value: "-40%", progress: 60 },
      { label: "User Onboarding", value: "+60%", progress: 80 },
      { label: "Conversion Rate", value: "+25%", progress: 75 },
    ],
    appScreens: {
      splash: "./oyato-splash.png", // Your actual splash screen image
      welcome: "./oyato-welcome.png",
      home: "./oyato-home.png",
    },
  },
  {
    id: "axion",
    name: "Axion",
    type: "ASSET TRADING WIDGET",
    platform: "web",
    tagline: "Buy and sell assets in seconds",
    description:
      "Enabled seamless buying and selling of assets with real-time market updates. Slow trade execution caused users to miss market opportunities before optimization. Built intuitive widget interface reducing trade execution time by 60%. Implemented real-time price updates improving decision-making for users.",
    tech: ["Vue.js", "WebSocket", "Tailwind", "Node.js"],
    metrics: {
      performance: "0.9s load",
      uptime: "99.9%",
      impact: "60% faster trades",
      users: "8K+ active traders",
    },
    color: "#01E8F0",
    bg: "#162020",
    shot: "./axion.png",
    demo: "https://axionexchange.io/",
    appStoreUrl: null,
    playStoreUrl: null,
    github: "https://github.com/username/axions",
    url: "www.axions.com",
    stats: [
      { label: "Trade Execution", value: "-60%", progress: 60 },
      { label: "Mobile Trades", value: "+45%", progress: 85 },
      { label: "User Engagement", value: "+50%", progress: 90 },
    ],
  },
];

export default function ExceptionalProjects() {
  const [active, setActive] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [osType, setOsType] = useState("ios");
  const stageRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!stageRef.current || !isHovering) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x: x * 10, y: y * 5 });
  };

  useEffect(() => {
    if (isHovering) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovering]);

  const handleDownloadApp = (project) => {
    if (project.platform === "mobile") {
      if (osType === "ios" && project.appStoreUrl) {
        window.open(project.appStoreUrl, "_blank");
      } else if (osType === "android" && project.playStoreUrl) {
        window.open(project.playStoreUrl, "_blank");
      } else if (project.demo) {
        window.open(project.demo, "_blank");
      }
    } else {
      window.open(project.demo, "_blank");
    }
  };

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

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 lg:items-start">
          {/* LEFT: INTERACTIVE LIST */}
          <div className="w-full lg:w-5/12 space-y-2">
            <div className="mb-8 md:mb-12">
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
                className="h-100 md:h-125 overflow-y-auto pr-2 space-y-0 group/scroll custom-scrollbar-on-hover"
                style={{ scrollBehavior: "smooth" }}
              >
                {projects.map((project, index) => (
                  <div
                    key={project.id}
                    onMouseEnter={() => setActive(index)}
                    className="group cursor-pointer relative py-4 md:py-6 border-b border-white/5 overflow-hidden transition-all duration-500"
                  >
                    <div
                      className={`absolute inset-0 bg-linear-to-r from-[#01E8F0]/0 via-[#01E8F0]/0 to-transparent transition-all duration-700 ${
                        active === index
                          ? "from-[#01E8F0]/20"
                          : "group-hover:from-[#01E8F0]/5"
                      }`}
                    />

                    <div className="flex items-baseline gap-4 md:gap-6 relative z-10 transition-all duration-500 group-hover:translate-x-2 md:group-hover:translate-x-4">
                      <span
                        className={`font-mono text-xs md:text-sm transition-all duration-300 ${
                          active === index
                            ? "text-[#01E8F0] shadow-[0_0_15px_currentColor] scale-110"
                            : "text-white/20 group-hover:text-white/40"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1">
                        <h3
                          className={`text-xl md:text-3xl lg:text-4xl font-bold tracking-tighter transition-all duration-500 ${
                            active === index
                              ? "text-white translate-x-1 md:translate-x-2"
                              : "text-white/10 group-hover:text-white/20 group-hover:translate-x-1"
                          }`}
                        >
                          {project.name}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <p
                            className={`text-[10px] md:text-xs font-mono transition-all duration-300 ${
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
                        className={`w-3 h-3 md:w-4 md:h-4 transition-all duration-500 ${
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
            <div className="mt-6 md:mt-8 pt-4 font-mono text-[10px] text-white/20 flex items-center gap-2 border-t border-white/5">
              <span className="text-[#01E8F0] animate-pulse">{">"}_</span>
              <span className="tracking-wider hidden sm:inline">
                active_project --id {projects[active].id} --platform{" "}
                {projects[active].platform}
              </span>
              <span className="tracking-wider sm:hidden">
                {projects[active].id}
              </span>
              <div className="flex-1" />
              <div className="flex gap-1">
                <div className="w-1 h-1 rounded-full bg-[#01E8F0]/40" />
                <div className="w-1 h-1 rounded-full bg-[#01E8F0]/40" />
                <div className="w-1 h-1 rounded-full bg-[#01E8F0]/40" />
              </div>
            </div>
          </div>

          {/* RIGHT: DISPLAY STAGE - FIXED HEIGHT WITH SCROLL */}
          <div className="w-full lg:w-7/12 mt-8 lg:mt-0">
            <div
              ref={stageRef}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => {
                setIsHovering(false);
                setMousePosition({ x: 0, y: 0 });
              }}
              onMouseMove={handleMouseMove}
              className="relative rounded-2xl md:rounded-3xl h-150 md:h-162.5 lg:h-192"
              style={{
                transform: `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
                transition: isHovering ? "none" : "all 0.5s ease-out",
              }}
            >
              {/* Animated Border Stage */}
              <div className="absolute inset-0 rounded-2xl md:rounded-3xl overflow-hidden p-0.5">
                <div
                  className="absolute -inset-full animate-border-spin"
                  style={{
                    background: `conic-gradient(from 0deg, transparent 0%, transparent 18%, ${projects[active].color} 25%, transparent 40%, transparent 100%)`,
                  }}
                />
                <div
                  className="absolute inset-px rounded-2xl md:rounded-3xl z-0"
                  style={{
                    backgroundColor: projects[active].bg,
                  }}
                />
              </div>

              {/* Inner Background */}
              <div
                className="absolute inset-0.5 rounded-2xl md:rounded-3xl"
                style={{
                  backgroundColor: projects[active].bg,
                }}
              />

              {/* Card Content - SCROLLABLE */}
              <div className="relative rounded-2xl md:rounded-3xl p-5 md:p-6 lg:p-8 h-full z-10 overflow-y-auto lg:overflow-hidden custom-scrollbar-on-hover">
                <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-linear-to-r from-[#01E8F0]/0 via-[#01E8F0]/10 to-[#01E8F0]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Top Section: Tech Stack + OS Toggle */}
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 relative z-10 mb-4">
                  <div className="space-y-2 w-full sm:w-auto">
                    <span className="text-[#01E8F0] font-mono text-[10px] md:text-[11px] tracking-widest uppercase bg-[#01E8F0]/10 px-3 md:px-4 py-1.5 rounded-full border border-[#01E8F0]/20 inline-block">
                      {projects[active].type}
                    </span>
                    <div className="flex gap-1.5 md:gap-2 pt-3 flex-wrap">
                      {projects[active].tech.map((t, idx) => (
                        <span
                          key={t}
                          className="px-2 md:px-3 py-1 md:py-1.5 border border-white/10 rounded text-[9px] md:text-[10px] text-white/60 font-mono hover:border-[#01E8F0]/30 hover:text-[#01E8F0] transition-all cursor-default"
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

                {/* Display Content */}
                {projects[active].platform === "web" ? (
                  /* MONITOR DISPLAY */
                  <div className="relative w-full mt-10 mb-4 z-10">
                    <div className="relative rounded-xl p-2 shadow-2xl">
                      <div className="absolute inset-0 rounded-xl bg-[#C0C0C0] pointer-events-none" />
                      <div className="relative bg-black rounded-lg overflow-hidden shadow-inner">
                        <div className="relative">
                          <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-transparent via-[#01E8F0]/5 to-transparent bg-size-[100%_4px] animate-scan" />
                          <div className="absolute inset-0 pointer-events-none bg-black/20 animate-pulse" />

                          {/* Browser Chrome */}
                          <div className="bg-[#0a0a0a] border-b border-[#01E8F0]/30">
                            <div className="px-2 md:px-4 py-2 flex items-center gap-1 md:gap-2">
                              <div className="flex gap-1 md:gap-1.5">
                                <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-red-500" />
                                <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-yellow-500" />
                                <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-green-500" />
                              </div>
                              <div className="flex-1 mx-2 md:mx-3">
                                <div className="bg-[#252524] rounded-md px-2 md:px-3 py-0.5 md:py-1 text-center border border-[#01E8F0]/20">
                                  <span className="text-gray-400 text-[9px] md:text-[11px] font-mono truncate block">
                                    {projects[active].url}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-center gap-1 md:gap-1.5">
                                <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[#01E8F0] shadow-[0_0_4px_#01E8F0] animate-pulse" />
                                <span className="text-[7px] md:text-[8px] text-[#01E8F0]/60 font-mono hidden sm:inline">
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
                                className="w-full h-40 md:h-56 object-cover brightness-90 contrast-110 saturate-90 hover:brightness-100 hover:contrast-100 transition-all duration-500"
                              />
                              <div className="absolute inset-0 pointer-events-none bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%224%22%20height%3D%224%22%20viewBox%3D%220%200%204%204%22%3E%3Crect%20width%3D%221%22%20height%3D%221%22%20fill%3D%22rgba(1%2C232%2C240%2C0.1)%22%2F%3E%3C%2Fsvg%3E')] bg-repeat" />
                            </div>
                            <div className="absolute inset-0 pointer-events-none bg-gradient-radial from-transparent via-transparent to-black/40" />
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#01E8F0] to-transparent opacity-50" />
                        </div>
                      </div>
                      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-12 md:w-16 h-3 md:h-4 bg-linear-to-b from-[#1a1a1a] to-[#C0C0C0] rounded-b-md">
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 md:w-12 h-1.5 md:h-2 bg-[#999999]" />
                      </div>
                    </div>
                  </div>
                ) : (
                  /* MOBILE FRAMES */
                  <div className="relative w-full mt-10 mb-4 z-10 flex justify-center gap-2 sm:gap-3 md:gap-4 flex-wrap">
                    {[
                      { key: "welcome", label: "Welcome" },
                      { key: "splash", label: "Splash" },
                      { key: "home", label: "Home" },
                    ].map((screen) => (
                      <div
                        key={screen.key}
                        className="relative group/frame transition-transform duration-300 hover:scale-105"
                      >
                        <div
                          className={`relative w-20 sm:w-24 md:w-28 lg:w-32  overflow-hidden shadow-2xl ${
                            osType === "ios"
                              ? "border-4 border-gray-300 rounded-3xl"
                              : "border-4 border-gray-700 rounded-xl"
                          }`}
                        >
                          {osType === "ios" && (
                            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1/3 h-1.5 bg-black rounded-full z-20" />
                          )}
                          <div className="relative bg-black">
                            <img
                              src={
                                projects[active].appScreens?.[screen.key] ||
                                projects[active].shot
                              }
                              alt={`${projects[active].name} ${screen.key}`}
                              className="w-full h-auto object-cover aspect-9/19"
                            />
                          </div>
                          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-6 sm:w-8 h-0.5 bg-gray-400 rounded-full" />
                          <div className="absolute inset-0 bg-black/0 group-hover/frame:bg-black/20 transition-colors duration-300" />
                        </div>
                        <p className="text-center text-[8px] md:text-[10px] text-white/40 mt-1 md:mt-2 font-mono">
                          {screen.label}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Content Section */}
                <div className="relative z-10 mt-8 animate-in">
                  <div className="mb-2">
                    <span className="text-xs md:text-sm font-mono text-[#01E8F0]/60">
                      {projects[active].tagline}
                    </span>
                  </div>
                  <h4 className="text-base md:text-xl lg:text-2xl text-white font-bold mb-3 md:mb-4 leading-tight">
                    {projects[active].description.split(".")[0]}.
                  </h4>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-2 md:gap-4 mb-4 md:mb-6">
                    {Object.entries(projects[active].metrics).map(
                      ([key, value]) => (
                        <div
                          key={key}
                          className="border-l-2 border-[#01E8F0]/30 pl-2 md:pl-3"
                        >
                          <div className="text-[8px] md:text-[10px] font-mono text-white/40 uppercase tracking-wider mb-0.5 md:mb-1">
                            {key}
                          </div>
                          <div className="text-xs md:text-sm text-white font-semibold">
                            {value}
                          </div>
                        </div>
                      ),
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4 pb-2">
                    <button
                      onClick={() => handleDownloadApp(projects[active])}
                      className="group/btn px-4 md:px-6 py-2.5 md:py-3 bg-linear-to-r from-[#01E8F0] to-[#01c4cb] text-black text-[10px] md:text-[11px] font-black uppercase tracking-widest rounded-xl hover:shadow-[0_0_20px_#01E8F0] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                    >
                      <span>
                        {projects[active].platform === "mobile"
                          ? `Download on ${osType === "ios" ? "App Store" : "Google Play"}`
                          : "Explore Case Study"}
                      </span>
                      <svg
                        className="w-3 h-3 md:w-3.5 md:h-3.5 group-hover/btn:translate-x-1 transition-transform"
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
                    <button
                      onClick={handleHireMe}
                      className="px-4 md:px-5 py-2.5 md:py-3 border border-white/20 text-white/60 hover:text-[#01E8F0] hover:border-[#01E8F0] text-[10px] md:text-[11px] font-mono uppercase tracking-wider rounded-xl transition-all duration-300"
                    >
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
            <div className="mt-4 md:mt-6 flex justify-between items-center px-2 md:px-4 opacity-40 hover:opacity-70 transition-opacity">
              <div className="flex gap-2 md:gap-4 font-mono text-[8px] md:text-[9px] text-white/60">
                <span className="flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-[#01E8F0] animate-pulse" />
                  SYSTEM_ACTIVE
                </span>
                <span className="hidden sm:inline">
                  PROJECT_{projects[active].id.toUpperCase()}
                </span>
              </div>
              <div className="h-px flex-1 mx-4 md:mx-8 bg-linear-to-r from-transparent via-white/20 to-transparent" />
              <span className="font-mono text-[8px] md:text-[9px] text-[#01E8F0] tracking-wider">
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
