import React from "react";

export default function SectionDisplay() {
  return (
    <div className="relative w-full h-150 flex items-center justify-center  font-sans">
      <div className="relative flex items-center justify-center group w-full max-w-5xl">
        {/* --- INFO CARDS CONTAINER --- */}
        <div className="absolute -top-40 -right-30 w-80 z-20 pointer-events-none">
          {/* ANDROID CARD */}
          <div className="info-card android-info">
            <div className="card-content">
              <div className="scan-line" />
              <div className="status-bar">
                <div className="status-dot" />
                <span>System Active • 01</span>
              </div>
              <h2 className="card-title">
                Android <span className="text-[#01E8F0]">Expert</span>
              </h2>
              <p className="card-description">
                Building high-performance, native mobile experiences with
                seamless UI/UX.
              </p>
              <div className="card-footer">
                <span className="footer-tag">Flutter / Dart</span>
                <span className="footer-version">V.2.0</span>
              </div>
            </div>
          </div>

          {/* APPLE CARD */}
          <div className="info-card apple-info">
            <div className="card-content">
              <div className="scan-line" />
              <div className="status-bar">
                <div className="status-dot" />
                <span>System Active • 02</span>
              </div>
              <h2 className="card-title">
                iOS <span className="text-[#01E8F0]">Architect</span>
              </h2>
              <p className="card-description">
                Crafting premium, fluid applications for the entire Apple
                ecosystem.
              </p>
              <div className="card-footer">
                <span className="footer-tag">Flutter / Dart</span>
                <span className="footer-version">V.4.1</span>
              </div>
            </div>
          </div>

          {/* WEB CARD */}
          <div className="info-card web-info">
            <div className="card-content">
              <div className="scan-line" />
              <div className="status-bar">
                <div className="status-dot" />
                <span>System Active • 03</span>
              </div>
              <h2 className="card-title">
                Web <span className="text-[#01E8F0]">Developer</span>
              </h2>
              <p className="card-description">
                Architecting scalable, lightning-fast web apps with modern
                frameworks.
              </p>
              <div className="card-footer">
                <span className="footer-tag">
                  React / Next.js || Vue / Nuxt js
                </span>
                <span className="footer-version">V.9.0</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- ORBIT SECTION --- */}
        <div className="relative flex items-center justify-center scale-75 md:scale-100">
          {/* Main Radial Glow */}
          <div
            className="absolute rounded-full transition-all duration-1000 group-hover:scale-150 opacity-20 group-hover:opacity-40"
            style={{
              width: "400px",
              height: "400px",
              background:
                "radial-gradient(circle, #01E8F0 0%, transparent 70%)",
              filter: "blur(40px)",
              zIndex: 0,
            }}
          />

          {/* Static Visual Ring */}
          <div className="absolute rounded-full border border-[#01E8F0]/10 w-68 h-68 pointer-events-none" />

          {/* Rotating Orbit Container */}
          <div className="relative w-85 h-85 animate-slowBounce">
            {/* ANDROID ICON */}
            <div className="orbiting-wrapper" style={{ animationDelay: "0s" }}>
              <div className="icon-box group/icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#01E8F0"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path
                    d="M17.6 9.2L19.2 6.4C19.4 6.1 19.3 5.7 19 5.5C18.7 5.3 18.3 5.4 18.1 5.7L16.4 8.6C15.2 7.9 13.8 7.5 12.2 7.5C10.6 7.5 9.2 7.9 8 8.6L6.3 5.7C6.1 5.4 5.7 5.3 5.4 5.5C5.1 5.7 5 6.1 5.2 6.4L6.8 9.2C4.6 10.6 3 13.1 3 16H21.4C21.4 13.1 19.8 10.6 17.6 9.2Z"
                    fill="rgba(1,232,240,0.1)"
                  />
                </svg>
              </div>
            </div>

            {/* APPLE ICON */}
            <div className="orbiting-wrapper" style={{ animationDelay: "-4s" }}>
              <div className="icon-box group/icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#01E8F0">
                  <path d="M16.365 1.43c0 1.14-.466 2.224-1.22 3.01-.79.81-2.08 1.44-3.21 1.36-.14-1.1.43-2.27 1.2-3.06.77-.79 2.1-1.4 3.23-1.31zM20.1 17.1c-.54 1.25-.8 1.8-1.49 2.9-.96 1.53-2.32 3.44-4.02 3.46-1.52.02-1.91-.98-3.97-.97-2.06.01-2.49.99-4.01.98-1.7-.02-2.98-1.74-3.94-3.27-2.69-4.31-2.97-9.37-1.31-11.93 1.18-1.83 3.04-2.9 4.79-2.9 1.78 0 2.9.99 3.97.99 1.05 0 2.54-1.23 4.29-1.05.73.03 2.77.29 4.08 2.19-.1.06-2.44 1.43-2.41 4.26.03 3.38 2.96 4.51 2.99 4.52z" />
                </svg>
              </div>
            </div>

            {/* WEB ICON */}
            <div className="orbiting-wrapper" style={{ animationDelay: "-8s" }}>
              <div className="icon-box group/icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#01E8F0"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
            </div>
          </div>

          {/* CENTER LOGO */}
          <div className="absolute z-10 p-2 rounded-full border border-[#01E8F0]/20 bg-black/50 backdrop-blur-sm shadow-[0_0_50px_rgba(1,232,240,0.2)] transition-all duration-500 group-hover:scale-110">
            <img
              src="./logo.png"
              alt="logo"
              className="h-32 w-32 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slowBounce {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes mainOrbit {
          from { transform: translate(-50%, -50%) rotate(0deg) translateX(136px) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg) translateX(136px) rotate(-360deg); }
        }

        @keyframes cardFade {
          0%, 100% { opacity: 0; transform: translateX(40px) scale(0.9); filter: blur(10px); visibility: hidden; }
          5%, 28% { opacity: 1; transform: translateX(0px) scale(1); filter: blur(0px); visibility: visible; }
          33% { opacity: 0; transform: translateX(-20px) scale(0.95); filter: blur(5px); visibility: hidden; }
        }

        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }

        .animate-slowBounce { animation: slowBounce 6s ease-in-out infinite; }

        .orbiting-wrapper {
          position: absolute;
          left: 50%;
          top: 50%;
          animation: mainOrbit 12s linear infinite;
        }

        .icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(10, 17, 20, 0.8);
          border: 1px solid rgba(1, 232, 240, 0.2);
          backdrop-filter: blur(8px);
          transition: all 0.4s ease;
          box-shadow: 0 4px 15px rgba(0,0,0,0.5);
        }

        .group:hover .orbiting-wrapper,
        .group:hover .info-card {
          animation-play-state: paused;
        }

        /* --- MODERN CARD STYLING --- */
        .info-card {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          animation: cardFade 12s infinite;
        }

        .android-info { animation-delay: -0.5s; }
        .apple-info { animation-delay: -4.5s; }
        .web-info { animation-delay: -8.5s; }

        .card-content {
          position: relative;
          overflow: hidden;
          border-radius: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(10, 17, 20, 0.85);
          padding: 1.5rem;
          backdrop-filter: blur(20px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        .scan-line {
          position: absolute;
          inset: 0;
          height: 200%;
          width: 100%;
          background: linear-gradient(to bottom, transparent, rgba(1, 232, 240, 0.05), transparent);
          animation: scan 3s linear infinite;
        }

        .status-bar {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
        }

        .status-dot {
          height: 6px;
          width: 6px;
          border-radius: 99px;
          background: #01E8F0;
          box-shadow: 0 0 10px #01E8F0;
          animation: pulse 2s infinite;
        }

        .status-bar span {
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: rgba(1, 232, 240, 0.6);
          font-weight: 700;
        }

        .card-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: white;
          margin-bottom: 0.5rem;
          letter-spacing: -0.02em;
        }

        .card-description {
          font-size: 0.875rem;
          line-height: 1.5;
          color: #94a3b8;
          font-weight: 500;
        }

        .card-footer {
          margin-top: 1.25rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer-tag {
          font-size: 10px;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .footer-version {
          font-family: monospace;
          font-size: 11px;
          color: #01E8F0;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}
