import SectionDisplay from "./section_display";

export default function HeroSection() {
  return (
    <>
      <section className="flex items-center justify-center min-h-screen py-20">
        <div className="container">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div className="flex flex-col">
              <div className="mb-6 flex justify-left lg:justify-start mt-6 lg:mt-0">
                <div className="inline-flex items-center px-2 py-1 sm:px-4 sm:py-2 rounded-full bg-[#1c1c1c] border-white border-[0.5px] shadow-[0_0_10px_#00e7b141] text-[10px] sm:text-sm font-medium text-[#01E8F0] animate-pulse">
                  <span>⚡ Frontend Developer | Web & Mobile</span>
                </div>
              </div>
              <h2 className="text-left text-[clamp(40px,6vw,90px)] tracking-[-0.04em] leading-[0.9] font-bold mb-8 text-[#01E8F0] max-w-full wrap-break-word">
                Building for Web & Mobile
              </h2>
              <p className="text-[#ffffffb7] text-[clamp(14px,1.2vw,18px)] leading-normal mb-12 max-w-full mx-auto lg:mx-0 text-left mt-7 sm:mt-0">
                I'm a frontend developer specializing in building responsive web
                applications and native mobile experiences for iOS and Android.
                I transform ideas into seamless, pixel-perfect interfaces that
                users love.
              </p>{" "}
              <div className="flex gap-5 items-center flex-wrap">
                {/* Filled Button */}
                <button className="group/btn px-6 py-3 bg-linear-to-r from-[#01E8F0] to-[#01c4cb] text-black text-[11px] font-black uppercase tracking-widest rounded-xl hover:shadow-[0_0_20px_#01E8F0] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Hire me
                </button>

                {/* Outline Button */}
                <button className="px-6 py-3 bg-transparent text-[#01E8F0]  text-[11px] font-black uppercase tracking-widest rounded-xl inline-flex items-center justify-center gap-3 whitespace-nowrap border border-[#01E8F0] hover:bg-[#01E8F0] hover:text-black hover:shadow-[0_0_20px_rgba(1,232,240,0.4)] active:scale-95 transition-all duration-500 ease-in-out relative overflow-hidden">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  View Projects
                </button>
              </div>
              {/* Platform Icons */}
              <div className="flex gap-6 mt-10 text-[#01E8F0]">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
                  </svg>
                  <span className="text-sm text-white">Web</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <span className="text-sm text-white">iOS</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 12c0-1-.2-2-.5-3H6.5c-.3 1-.5 2-.5 3s.2 2 .5 3h11c.3-1 .5-2 .5-3zM6 15c.2.7.5 1.4.8 2h10.4c.3-.6.6-1.3.8-2H6zm1.2-5c.3-.6.5-1.3.8-2h8c.3.7.6 1.4.8 2H7.2zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
                  </svg>
                  <span className="text-sm text-white">Android</span>
                </div>
              </div>
            </div>

            <SectionDisplay />
          </div>
        </div>
      </section>
    </>
  );
}
