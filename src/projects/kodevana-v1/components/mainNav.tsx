import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu_bar } from "../assets";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative flex bg-slate-900 justify-center md:py-3">
      <div className="relative md:py-2 w-full md:w-fit md:px-7 flex items-center justify-center bg-slate-950 rounded-md shadow-2xl">
        {/* Logo */}
        <div className="md:mr-10 lg:mr-40 py-2 xl:py-3">
          <NavLink to="/projects/kodevana-v1">
            <p className="text-yellow-400 text-3xl xs:text-4xl xl:text-5xl font-bold">
              Kode<span className="text-slate-50">Vana</span>
            </p>
          </NavLink>
        </div>

        {/* Nav Items */}
        <div className="flex py-5 md:p-0 text-slate-50">
          <ul className="hidden md:inline-flex md:gap-3 lg:gap-7">
            <NavLink to="/projects/kodevana-v1">
              <li className="relative text-xl xl:text-2xl py-4 text-white font-semibold hover:text-yellow-400 cursor-pointer transition duration-500 group">
                Home
                <div className="absolute bottom-2 h-1 w-5 hidden bg-yellow-400 group-hover:block rounded-full transition duration-500"></div>
              </li>
            </NavLink>
            <NavLink to="/projects/kodevana-v1/blog">
              <li className="relative text-xl xl:text-2xl py-4 text-white font-semibold hover:text-yellow-400 cursor-pointer transition duration-500 group">
                Blogs
                <div className="absolute bottom-2 h-1 w-5 hidden bg-yellow-400 group-hover:block rounded-full transition duration-500"></div>
              </li>
            </NavLink>
            <NavLink to="/projects/kodevana-v1/project">
              <li className="relative text-xl xl:text-2xl py-4 text-white font-semibold hover:text-yellow-400 cursor-pointer transition duration-500 group">
                Projects
                <div className="absolute bottom-2 h-1 w-5 hidden bg-yellow-400 group-hover:block rounded-full transition duration-500"></div>
              </li>
            </NavLink>
            <NavLink to="/projects/kodevana-v1/about">
              <li className="relative text-xl xl:text-2xl py-4 text-white font-semibold hover:text-yellow-400 cursor-pointer transition duration-500 group">
                About
                <div className="absolute bottom-2 h-1 w-5 hidden bg-yellow-400 group-hover:block rounded-full transition duration-500"></div>
              </li>
            </NavLink>
            <NavLink to="/projects/kodevana-v1/contact">
              <li className="relative text-xl xl:text-2xl py-4 text-white font-semibold hover:text-yellow-400 cursor-pointer transition duration-500 group">
                Contact
                <div className="absolute bottom-2 h-1 w-5 hidden bg-yellow-400 group-hover:block rounded-full transition duration-500"></div>
              </li>
            </NavLink>
          </ul>

          {/* Menu Button */}
          <div className="inline-flex md:hidden">
            <img
              className="w-8 sm:w-9 h-8 sm:h-9 p-1 ml-7 rounded-md bg-slate-700 hover:shadow-xl"
              src={Menu_bar}
              alt="Menu Button"
              onClick={toggleMenu}
            />
          </div>
        </div>

        {/* Menu bar for small screens */}
        {isMenuOpen && (
          <div className="absolute w-full py-3 rounded-b-md top-14 xs:top-16 md:hidden text-center bg-slate-950 z-10">
            <ul className="text-base font-bold leading-5 text-slate-50">
              <li className="">
                <NavLink to="/projects/kodevana-v1">Home</NavLink>
              </li>
              <li className="mt-5">
                <NavLink to="/projects/kodevana-v1/blog">Blogs</NavLink>
              </li>
              <li className="mt-5">
                <NavLink to="/projects/kodevana-v1/project">Projects</NavLink>
              </li>
              <li className="mt-5">
                <NavLink to="/projects/kodevana-v1/about">About</NavLink>
              </li>
              <li className="mt-5 mb-5">
                <NavLink to="/projects/kodevana-v1/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
