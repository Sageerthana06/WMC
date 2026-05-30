import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaMoon, FaSun, FaMapMarkerAlt } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import { COMPANY } from "../../data/initialData";
import { mainNavLinks } from "../../data/navLinks";

// 1. ADD THIS IMPORT LINE:
import logo from "../../assets/logo.jpg";

const linkClass = (isActive, compact = false) =>
  `relative shrink-0 whitespace-nowrap font-medium transition-colors ${
    compact
      ? "px-1.5 py-1.5 text-[10px] sm:px-2 sm:text-[11px]"
      : "px-2.5 py-2 text-[13px] lg:px-3 lg:text-sm"
  } ${isActive ? "text-cyan-400" : "text-slate-300 hover:text-white"}`;

export default function Navbar() {
  // ... (keep all your existing logic here, from const [extrasOpen... to the end of goToMap)

  // (Assuming your existing logic remains unchanged)
  const [extrasOpen, setExtrasOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setExtrasOpen(false);
  }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goToMap = () => {
    setExtrasOpen(false);
    if (location.pathname === "/contact") {
      document
        .getElementById("location")
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/contact#location");
    }
  };

  const NavItem = ({ to, label, end, compact }) => (
    <li className="shrink-0">
      <NavLink
        to={to}
        end={end}
        className={({ isActive }) =>
          `group block ${linkClass(isActive, compact)}`
        }
      >
        {({ isActive }) => (
          <>
            {label}
            <span
              className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-cyan-400 transition-all duration-300 ${
                isActive ? "w-full" : "w-0 group-hover:w-2/3"
              }`}
            />
          </>
        )}
      </NavLink>
    </li>
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-dark shadow-lg" : "bg-slate-950/60 backdrop-blur-md"
      }`}
    >
      <nav
        className="mx-auto flex h-14 max-w-7xl items-center gap-1.5 px-2 sm:gap-2 sm:px-4 md:h-16 lg:px-8"
        aria-label="Main navigation"
      >
        <Link to="/" className="flex shrink-0 items-center gap-4">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-10 md:h-12 md:w-12 object-contain"
          />
          <span className="hidden whitespace-nowrap font-display text-lg font-bold text-white md:block">
            World Entrepreneurs Export & Import (PVT) LTD
          </span>
        </Link>
        {/* ... (rest of your existing JSX remains the same) */}

        <div className="min-w-0 flex-1 overflow-x-auto scrollbar-hide">
          <ul className="flex flex-row items-center justify-start gap-0 pr-1 md:justify-center">
            {mainNavLinks.map((link) => (
              <NavItem key={link.to} {...link} compact />
            ))}
            <li className="shrink-0 md:hidden">
              <button
                type="button"
                onClick={goToMap}
                className={`${linkClass(false, true)} text-sky-300`}
              >
                Map
              </button>
            </li>
          </ul>
        </div>

        <div className="hidden shrink-0 items-center gap-2 md:flex">
          <button
            type="button"
            onClick={goToMap}
            className="flex items-center gap-1 whitespace-nowrap px-2 py-2 text-sm font-medium text-sky-300 hover:text-sky-200"
          >
            <FaMapMarkerAlt className="h-3.5 w-3.5 text-sky-400" />
            Map
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-lg border border-white/10 bg-white/5 p-2 text-slate-300 hover:text-white"
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <FaSun className="h-5 w-5" />
            ) : (
              <FaMoon className="h-5 w-5" />
            )}
          </button>
          <Link
            to="/contact"
            className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 hover:opacity-90"
          >
            Contact
          </Link>
        </div>

        <button
          type="button"
          className="flex shrink-0 rounded-lg border border-white/10 bg-white/5 p-2 text-white md:hidden"
          onClick={() => setExtrasOpen(!extrasOpen)}
          aria-expanded={extrasOpen}
          aria-label="More options"
        >
          {extrasOpen ? (
            <HiX className="h-5 w-5" />
          ) : (
            <HiMenuAlt3 className="h-5 w-5" />
          )}
        </button>
      </nav>

      {/* ... (rest of AnimatePresence code) */}
      <AnimatePresence>
        {extrasOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/10 bg-slate-950/95 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-0.5 px-3 py-3">
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block rounded-lg px-4 py-2.5 text-sm font-medium ${isActive ? "bg-cyan-500/20 text-cyan-400" : "text-slate-300"}`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li className="flex gap-2">
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 py-2.5 text-sm text-slate-300"
                >
                  {darkMode ? <FaSun /> : <FaMoon />} Theme
                </button>
                <Link
                  to="/contact"
                  className="flex flex-1 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-2.5 text-sm font-semibold text-white"
                >
                  Get Quote
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
