import { NavLink } from "react-router";
import { useState } from "react";
import logo from "../icons/shared/logo.svg";
import bars from "../icons/shared/icon-hamburger.svg";
import close from "../icons/shared/icon-close.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const base =
    "preset-8 mb-8 md:mb-0 mb-8 md:py-10 flex gap-3 transition hover:text-blue-300 md:hover:border-white/50 md:border-b-3 border-transparent";
  const active =
    "preset-8 mb-8 md:mb-0 flex gap-3 md:py-10 font-semibold border-r-4 border-white md:border-x-0 md:border-b-3";
  return (
    <nav className="sticky top-0 z-50 flex justify-between py-4 md:py-0 px-6 md:px-0  ">
      <NavLink
        to="/"
        className="md:ml-10 lg:ml-16 flex justify-center items-center"
      >
        <img src={logo} className="hover:invert-30" />
      </NavLink>

      {/* desktop */}
      <div className="hidden relative md:flex justify-center md:pr-10 lg:pr-16 md:pl-28 lg:pl-40 items-center gap-6 lg:gap-12 bg-blue-900/15 md:bg-white/5 backdrop-blur-lg ">
        <NavLink
          className={({ isActive }) => (isActive ? active : base)}
          to="/"
        >
          <span className="font-bold">00</span> Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? active : base)}
          to="/destination"
        >
          <span className="font-bold">01</span>Destination
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? active : base)}
          to="/crew"
        >
          <span className="font-bold">02</span>Crew
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? active : base)}
          to="/technology"
        >
          <span className="font-bold">03</span>Technology
        </NavLink>

        {/* divider */}
        <div className="absolute top-1/2 -left-35 xl:-left-75 -translate-y-1/2 hidden lg:block bg-white/25 h-0.5 w-1/4 xl:w-1/2"></div>

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
