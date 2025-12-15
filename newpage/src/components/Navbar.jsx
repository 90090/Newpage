import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Work", href: "/work" },
  {
    name: "What We Offer",
    dropdown: true,
    items: [
      { name: "Branding", href: "/branding" },
      { name: "Digital Design", href: "/digitaldesign" },
      { name: "Hosting", href: "/hosting" },
      { name: "SEO", href: "/seo" },
      { name: "Web Development", href: "/web-development" },
    ],
  },
  
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [activeLink, setActiveLink] = useState("Home");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-[#1f1f1f] text-white sticky top-0 z-50 shadow-md">
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-gray-500/10 to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo (Left) */}
        <div className="flex-shrink-0">
          <a
            href="/"
            onClick={() => {
              setActiveLink("Home");
              setMobileOpen(false);
            }}
          >
            <img src="/NewPageLogo.png" alt="Company Logo" className="h-14" />
          </a>
        </div>

        {/* Center Nav Links */}
        <div className="hidden lg:flex flex-1 justify-center space-x-10 items-center">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button
                  className={`flex items-center space-x-1 text-xl font-semibold transition-all duration-300 ease-in-out ${
                    link.items.some((item) => location.pathname === item.href)
                      ? "text-orange-500"
                      : "text-white"
                  } hover:text-orange-500`}
                  onClick={() => setActiveLink(link.name)}
                >
                  <span>{link.name}</span>
                  <ChevronDown
                    className={`w-6 h-6 transition-transform duration-300 ${
                      isDropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
            
                {isDropdownOpen && (
                  <div className="absolute left-0 w-56 bg-[#323232] rounded shadow-lg py-2 z-10 transition-all duration-300 ease-in-out">
                    {link.items.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={`block px-4 py-2 text-md ${
                          location.pathname === item.href
                            ? "text-orange-500"
                            : "text-white"
                        } hover:text-orange-500 font-semibold transition-all duration-300 ease-in-out`}
                        onClick={() => {
                          setActiveLink(item.name);
                          setIsDropdownOpen(false); 
                          setMobileOpen(false);
                        }}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className={`font-semibold ${ 
                  location.pathname === link.href
                    ? "text-orange-500"
                    : "text-white"
                } hover:text-orange-500 transition text-xl`}
                onClick={() => {
                  setActiveLink(link.name);
                  setMobileOpen(false);
                }}
              >
                {link.name}
              </a>
            )
          )}
        </div>

        {/* CTA Button (Right) */}
        <div className="hidden lg:flex flex-shrink-0">
          <a
            href="/contact"
            className="bg-orange-500 font-semibold rounded-full text-white px-4 py-2  hover:bg-orange-600 transition"
            onClick={() => {
              setActiveLink("");
              setMobileOpen(false);
            }}
          >
            Request a Free Quote
          </a>
        </div>

        {/* Mobile Hamburger (Right) */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle Menu">
            {mobileOpen ? (
              <XMarkIcon className="h-7 w-7 text-white transition-transform duration-300" />
            ) : (
              <Bars3Icon className="h-7 w-7 text-white transition-transform duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          mobileOpen ? "max-h-screen opacity-100 scale-100" : "max-h-0 opacity-0 scale-95"
        } bg-[#1f1f1f] px-5 pb-5 space-y-3 rounded-b-2xl shadow-lg`}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-gray-500/10 to-transparent pointer-events-none"></div>
        {navLinks.map((link, index) =>
          link.dropdown ? (
            <div key={index}>
              <button
                onClick={() =>
                  setDropdownOpen(dropdownOpen === link.name ? null : link.name)
                }
                className={`flex justify-between items-center w-full text-orange-500 text-xl font-semibold hover:text-orange-500 transition pt-2 mb-3
                ${dropdownOpen === link.name ? " text-orange-500" : "text-white"}`}
              >
                {link.name}
                <ChevronDown
                  className={`w-6 h-6 transition-transform duration-300 ${
                    dropdownOpen === link.name ? "rotate-180 text-orange-500" : "rotate-0"
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  dropdownOpen === link.name ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                } pl-4 mt-2 space-y-2`}
              >
                {link.items.map((item, subIndex) => (
                  <a
                    key={subIndex}
                    href={item.href}
                    className={`block text-lg font-semibold ${
                      location.pathname === item.href
                        ? "text-orange-500"
                        : "text-gray-200 hover:text-orange-500"
                    } transition`}
                    onClick={() => {
                      setActiveLink(item.name);
                      setMobileOpen(false);
                      setDropdownOpen(null);
                    }}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <a
              key={index}
              href={link.href}
              className={`block text-xl pt-2 font-semibold ${
                location.pathname === link.href
                  ? "text-orange-500"
                  : "text-white hover:text-orange-500"
              } transition`}
              onClick={() => {
                setActiveLink(link.name);
                setMobileOpen(false);
              }}
            >
              {link.name}
            </a>
          )
        )}

        <a
          href="/contact"
          className="block bg-orange-500 text-white text-lg font-semibold px-5 py-3 rounded-full text-center hover:bg-orange-600 transition-all duration-300 shadow-md hover:shadow-orange-500/30"
          onClick={() => {
            setActiveLink("");
            setMobileOpen(false);
          }}
        >
          Request a Free Quote
        </a>
      </div>
    </nav>
  );
}
