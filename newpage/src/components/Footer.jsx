import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-[#1f1f1f] text-white py-12 px-8 overflow-hidden">
      {/* Gradient Accent Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-gray-500/10 to-transparent pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        {/* LEFT: Brand and tagline */}
        <div className="text-center md:text-left max-w-md">
          <h1 className="text-xl md:text-2xl font-semibold mb-2">
            NewPage - Your Digital Growth Partner
          </h1>
          <p className="text-slate-300 text-sm leading-relaxed mb-4">
            NewPage doesn't stop at having the best website design in CT.
            We create a lasting presence for you on the web and in the minds of your consumers.
          </p>
          <p className="text-slate-400 text-xs">
            © 2025 NewPage. All rights reserved. &nbsp;|&nbsp;
            <a
              href="/privacyterms"
              className="hover:text-orange-400 transition-colors"
            >
              Privacy & Terms
            </a>
          </p>
        </div>

        {/* CENTER: Navigation */}
        <div className="flex flex-wrap justify-center gap-x-8 text-sm font-medium text-slate-200">
          <a href="/" className="hover:text-orange-400 transition-colors">
            Home
          </a>
          <a href="/about" className="hover:text-orange-400 transition-colors">
            About
          </a>
          <a href="/work" className="hover:text-orange-400 transition-colors">
            Our Work
          </a>
          <a href="/contact" className="hover:text-orange-400 transition-colors">
            Contact
          </a>
        </div>

        {/* RIGHT: Logo Placeholder */}
        <div className="flex justify-center md:justify-end">
          <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center">
            <img
              src="Icon.png"
              alt="NewPage logo"
              className="w-10 h-10 object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
