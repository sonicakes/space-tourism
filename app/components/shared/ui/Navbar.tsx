import { NavLink } from "react-router";
import { useState } from "react";
import logo from "../../../assets/icons/shared/logo.svg";
import bars from "../../../assets/icons/shared/icon-hamburger.svg";
import close from "../../../assets/icons/shared/icon-close.svg";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = ["Home", "Destination", "Crew", "Technology"];
  //todo - refactor Nav link in separate comp to avoid repetition

  const base =
    "preset-8 relative mb-8 md:mb-0 mb-8 md:py-10 flex gap-3 transition hover:text-blue-300 md:hover:border-white/50 md:border-b-3 border-transparent";
  const active =
    "preset-8 relative mb-8 md:mb-0 flex gap-3 md:py-10 font-semibold border-r-4 border-white md:border-x-0 md:border-b-3";
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center py-6 md:py-0 px-6 md:px-0">
      <NavLink
        to="/"
        className="md:ml-10 lg:ml-16 flex justify-center items-center w-10 h-10 md:min-w-12 md:min-h-12"
      >
        <img src={logo} className="hover:invert-30 w-full h-full" />
      </NavLink>

      {/* divider */}
      <div className="hidden lg:block relative left-15 z-100 divider h-px w-1/2 bg-white/25"></div>

      {/* desktop */}
      <div className="hidden relative md:flex justify-center md:pr-10 lg:pr-16 md:pl-28 lg:pl-40 items-center gap-6 lg:gap-12 bg-blue-900/15 md:bg-white/5 backdrop-blur-lg ">
        <NavLink
          className={({ isActive }) =>
            `relative flex gap-3 preset-8 mb-8  md:mb-0  md:py-10 transition-colors ${isActive ? "text-white border-r-4 border-white md:border-x-0" : "text-blue-300 hover:text-white/50"}`
          }
          to="/"
        >
          {({ isActive }) => (
            <>
              <span className="font-bold mr-2">00</span> Home
              {isActive && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.75 bg-white"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </>
          )}
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `relative flex gap-3 preset-8 mb-8  md:mb-0  md:py-10 transition-colors ${isActive ? "text-white border-r-4 border-white md:border-x-0" : "text-blue-300 hover:text-white/50"}`
          }
          to="/destination"
        >
          {({ isActive }) => (
            <>
              <span className="font-bold mr-2">01</span> Destination
              {isActive && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.75 bg-white"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </>
          )}
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `relative flex gap-3 preset-8 mb-8  md:mb-0  md:py-10 transition-colors ${isActive ? "text-white border-r-4 border-white md:border-x-0" : "text-blue-300 hover:text-white/50"}`
          }
          to="/crew"
        >
          {({ isActive }) => (
            <>
              <span className="font-bold mr-2">02</span> Crew
              {isActive && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.75 bg-white"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </>
          )}
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `relative flex gap-3 preset-8 mb-8  md:mb-0  md:py-10 transition-colors ${isActive ? "text-white border-r-4 border-white md:border-x-0" : "text-blue-300 hover:text-white/50"}`
          }
          to="/technology"
        >
          {({ isActive }) => (
            <>
              <span className="font-bold mr-2">03</span> Technology
              {isActive && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.75 bg-white"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </>
          )}
        </NavLink>
      </div>

      <div className="flex items-center gap-4 md:hidden">
        <button
          title="Mobile menu"
          className="cursor-pointer z-100 relative"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <img src={close} /> : <img src={bars} />}
        </button>
      </div>

      {/* mob nav */}
      {menuOpen && (
        <div className="bg-blue-900/15 backdrop-blur-lg top-0 right-0 w-2/3 md:hidden h-screen absolute ">
          <div className="flex flex-col pt-32 pl-8">
            <NavLink
              className={({ isActive }) => (isActive ? active : base)}
              to="/"
              onClick={() => setMenuOpen(false)}
            >
              <span className="font-bold">00</span>Home
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? active : base)}
              to="/destination"
              onClick={() => setMenuOpen(false)}
            >
              <span className="font-bold">01</span>Destination
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? active : base)}
              to="/crew"
              onClick={() => setMenuOpen(false)}
            >
              <span className="font-bold">02</span>Crew
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? active : base)}
              to="/technology"
              onClick={() => setMenuOpen(false)}
            >
              <span className="font-bold">03</span>Technology
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
