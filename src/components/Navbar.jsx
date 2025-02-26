import React from "react";
import { FaArrowDown, FaDownload } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  const links = (
    <>
      <li onClick={() => scrollToSection("home")} className="mr-2 font-bold ">
        <Link to={"/"} > Home</Link>
      </li>
      <li onClick={() => scrollToSection("about")} className="mr-2 font-bold ">
        <Link  > About Me</Link>
      </li>

      <li onClick={() => scrollToSection("skills")} className="mr-2 font-bold ">
        <Link > Skills</Link>
      </li>
      <li
        onClick={() => scrollToSection("projects")}
        className="mr-2 font-bold "
      >
        <Link > My Projects</Link>
      </li>
     
      <li
        onClick={() => scrollToSection("contact")}
        className="mr-2 font-bold "
      >
        <Link >Contact Me</Link>
      </li>
    </>
  );
  return (
    <div className="  sticky top-0 z-10 bg-black   ">
      <div className="navbar p-3   container z-auto mx-auto  ">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-purple-700  lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 dark:bg-[#434342] dark:text-white  rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          <Link to="/" className="flex items-center gap-2  ">
            <img className="w-7 mx-auto rounded-full" src={logo} alt="" />
            <a className=" font-bold bg-gradient-to-l from-blue-400 to-purple-600 bg-clip-text text-transparent md:text-xl">R A K I B</a>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu text-purple-700 menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end  relative   space-x-3 flex gap-5">
          {" "}
          <div className="group mr-8 sm:mr-36 md:mr-6 xl:mr-20  ">
            <div className="absolute top-10 left-6 md:left-1/2  transform -translate-x-1/2 bg-gray-200 text-black text-sm rounded-md px-2  opacity-0 w-fit group-hover:opacity-100 transition-opacity"></div>
          </div>
          <button className="text-sm  hover:text-purple-500  font-bold  py-2 px-3   gap-1 text-white rounded-md bg-purple-950">
            {" "}
            <a
              className="flex items-center gap-2"
              href="/resume of Rakib molla.pdf"
                download="Resume_of_Rakib_Molla.pdf"
            >
            Resume
              <FaDownload />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
