"use client";

import React from "react";

export default function Navigation() {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header
      className="fixed top-0 w-full z-50 transition-all duration-300"
      style={{
        background: "rgba(0, 0, 0, 0.8)",
        backdropFilter: "blur(20px)",
        borderBottom: ".5px solid #f3f3f336",
        opacity: 1,
        transform: "none",
      }}
    >
      <nav className="flex items-center justify-between h-20 container">
        {/* Logo Section */}
        <div
          className="flex items-center gap-2 group cursor-pointer"
          onClick={(e) => handleSmoothScroll(e, "hero")}
        >
          <img
            src="./logo.png"
            alt="Dev Innovator Logo"
            className="object-contain h-10 transition-transform duration-300 group-hover:scale-110"
          />
          <div className="flex flex-col justify-center">
            <h4 className="text-[#01E8F0] text-2xl font-black tracking-tighter leading-none transition-transform duration-300 group-hover:scale-110">
              DEV
            </h4>
            <span className="text-[8px] uppercase font-bold text-gray-400 tracking-[0.2em] leading-none mt-1 transition-transform duration-300 group-hover:scale-110">
              Innovator
            </span>
          </div>
        </div>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <li>
            <a
              href="#hero"
              onClick={(e) => handleSmoothScroll(e, "hero")}
              className="hover:text-[#01E8F0] font-semibold text-[#ffffff80] transition-colors duration-200"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => handleSmoothScroll(e, "about")}
              className="hover:text-[#01E8F0] font-semibold text-[#ffffff80] transition-colors duration-200"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => handleSmoothScroll(e, "projects")}
              className="hover:text-[#01E8F0] font-semibold text-[#ffffff80] transition-colors duration-200"
            >
              Projects
            </a>
          </li>
          {/* <li>
            <a
              href="#testimonials"
              onClick={(e) => handleSmoothScroll(e, "testimonials")}
              className="hover:text-[#01E8F0] font-semibold text-[#ffffff80] transition-colors duration-200"
            >
              Testimonials
            </a>
          </li> */}
          <li>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "contact")}
              className="hover:text-[#01E8F0] font-semibold text-[#ffffff80] transition-colors duration-200"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* CTA Section */}
        <div className="flex items-center">
          <button
            onClick={() =>
              window.open(
                "https://calendly.com/emmanuelojelade7/new-meeting",
                "_blank",
              )
            }
            className="px-5 py-2.5 cursor-pointer bg-[#01E8F0] text-black font-bold text-sm rounded-lg hover:bg-[#00cfd8] hover:shadow-[0_0_20px_rgba(1,232,240,0.4)] transition-all active:scale-95"
          >
            Schedule a meeting
          </button>
        </div>
      </nav>
    </header>
  );
}
