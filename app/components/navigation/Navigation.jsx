// import React from "react";

// export default function Navigation() {
//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
//       <nav className="flex items-center justify-between w-full max-w-7xl px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl">
//         {/* Logo Section */}
//         <div className="flex items-center gap-3 group cursor-pointer">
//           <img
//             src="./logo.png"
//             alt="Dev Innovator Logo"
//             className="object-contain h-10 transition-transform duration-300 group-hover:scale-110"
//           />
//           <div className="flex flex-col justify-center">
//             <h4 className="text-[#01E8F0] text-2xl font-black tracking-tighter leading-none">
//               DEV
//             </h4>
//             <span className="text-[10px] uppercase font-bold text-gray-400 tracking-[0.2em] leading-none mt-1">
//               Innovator
//             </span>
//           </div>
//         </div>

//         {/* Links */}
//         <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
//           {["About", "Projects", "Testimonials", "Contact"].map((item) => (
//             <li key={item}>
//               <a
//                 href={`#${item.toLowerCase()}`}
//                 className="hover:text-[#01E8F0] transition-colors duration-200"
//               >
//                 {item}
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* CTA Section */}
//         <div className="flex items-center">
//           <button className="px-5 py-2.5 bg-[#01E8F0] text-black font-bold text-sm rounded-lg hover:bg-[#00cfd8] hover:shadow-[0_0_20px_rgba(1,232,240,0.4)] transition-all active:scale-95">
//             Get Started
//           </button>
//         </div>
//       </nav>
//     </header>
//   );
// }

import React from "react";

export default function Navigation() {
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
        <div className="flex items-center gap-2 group cursor-pointer">
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
          {["About", "Projects", "Testimonials", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-[#01E8F0] font-semibold text-[#ffffff80] transition-colors duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Section */}
        <div className="flex items-center">
          <button className="px-5 py-2.5 bg-[#01E8F0] text-black font-bold text-sm rounded-lg hover:bg-[#00cfd8] hover:shadow-[0_0_20px_rgba(1,232,240,0.4)] transition-all active:scale-95">
            Get Started
          </button>
        </div>
      </nav>
    </header>
  );
}
