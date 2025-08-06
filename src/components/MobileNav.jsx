import React from "react";
import { useStateContext } from "../contexts/useStateContext";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from ".";

const MobileNav = () => {
  const { isOpen, setIsOpen, setMode, currentMode } = useStateContext();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Hamburger Button */}
      <button
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="fixed top-2 right-6 z-50 flex flex-col justify-center items-center w-10 h-10 focus:outline-none focus:ring-2 focus:ring-[#3ecf8e] group md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`block h-0.5 w-6 bg-gray-800 dark:bg-gray-200 rounded transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block h-0.5 w-6 bg-gray-800 dark:bg-gray-200 rounded transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] my-1 ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block h-0.5 w-6 bg-gray-800 dark:bg-gray-200 rounded transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed md:hidden min-h-full w-2/3 shadow-2xl bg-white/90 dark:bg-[#171717]/90 backdrop-blur-lg right-0 top-0 transform transition-transform duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] z-40 border-l border-gray-200 dark:border-gray-700 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="m-6">
          <div className="flex flex-col justify-center items-center pt-20 pb-8 gap-3 dark:text-gray-200 text-center">
            <Link
              className={`w-full rounded-lg py-2 px-4 relative group transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]
                dark:text-gray-200 font-medium focus:outline-none focus:ring-2 focus:ring-[#3ecf8e] focus:ring-offset-2
                hover:scale-105 hover:bg-gray-100 dark:hover:bg-[#121212] hover:font-semibold
                ${
                  isActive("/")
                    ? "text-[#3ecf8e] font-bold after:scale-x-100"
                    : "after:scale-x-0"
                }
                after:content-[''] after:absolute after:left-4 after:bottom-2 after:h-0.5 after:w-3/4 after:bg-[#3ecf8e] after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.25,0.1,0.25,1)] after:origin-left group-hover:after:scale-x-100
              `}
              to="/"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              className={`w-full rounded-lg py-2 px-4 relative group transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]
                dark:text-gray-200 font-medium focus:outline-none focus:ring-2 focus:ring-[#3ecf8e] focus:ring-offset-2
                hover:scale-105 hover:bg-gray-100 dark:hover:bg-[#121212] hover:font-semibold
                ${
                  isActive("/Jobs")
                    ? "text-[#3ecf8e] font-bold after:scale-x-100"
                    : "after:scale-x-0"
                }
                after:content-[''] after:absolute after:left-4 after:bottom-2 after:h-0.5 after:w-3/4 after:bg-[#3ecf8e] after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.25,0.1,0.25,1)] after:origin-left group-hover:after:scale-x-100
              `}
              to="/Jobs"
              onClick={() => setIsOpen(false)}
            >
              Jobs
            </Link>
            <Link
              className={`w-full rounded-lg py-2 px-4 relative group transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]
                dark:text-gray-200 font-medium focus:outline-none focus:ring-2 focus:ring-[#3ecf8e] focus:ring-offset-2
                hover:scale-105 hover:bg-gray-100 dark:hover:bg-[#121212] hover:font-semibold
                ${
                  isActive("/PostJob")
                    ? "text-[#3ecf8e] font-bold after:scale-x-100"
                    : "after:scale-x-0"
                }
                after:content-[''] after:absolute after:left-4 after:bottom-2 after:h-0.5 after:w-3/4 after:bg-[#3ecf8e] after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.25,0.1,0.25,1)] after:origin-left group-hover:after:scale-x-100
              `}
              to="/PostJob"
              onClick={() => setIsOpen(false)}
            >
              Post Job
            </Link>
            <Link
              className={`w-full rounded-lg py-2 px-4 relative group transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]
                dark:text-gray-200 font-medium focus:outline-none focus:ring-2 focus:ring-[#3ecf8e] focus:ring-offset-2
                hover:scale-105 hover:bg-gray-100 dark:hover:bg-[#121212] hover:font-semibold
                ${
                  isActive("/AboutUs")
                    ? "text-[#3ecf8e] font-bold after:scale-x-100"
                    : "after:scale-x-0"
                }
                after:content-[''] after:absolute after:left-4 after:bottom-2 after:h-0.5 after:w-3/4 after:bg-[#3ecf8e] after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.25,0.1,0.25,1)] after:origin-left group-hover:after:scale-x-100
              `}
              onClick={() => setIsOpen(false)}
              to="/AboutUs"
            >
              About Us
            </Link>
            <Link
              className={`w-full rounded-lg py-2 px-4 relative group transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]
                dark:text-gray-200 font-medium focus:outline-none focus:ring-2 focus:ring-[#3ecf8e] focus:ring-offset-2
                hover:scale-105 hover:bg-gray-100 dark:hover:bg-[#121212] hover:font-semibold
                ${
                  isActive("/ContactUs")
                    ? "text-[#3ecf8e] font-bold after:scale-x-100"
                    : "after:scale-x-0"
                }
                after:content-[''] after:absolute after:left-4 after:bottom-2 after:h-0.5 after:w-3/4 after:bg-[#3ecf8e] after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.25,0.1,0.25,1)] after:origin-left group-hover:after:scale-x-100
              `}
              onClick={() => setIsOpen(false)}
              to="/ContactUs"
            >
              Contact Us
            </Link>
            <Link
              className={`w-full rounded-lg py-2 px-4 relative group transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]
                dark:text-gray-200 font-medium focus:outline-none focus:ring-2 focus:ring-[#3ecf8e] focus:ring-offset-2
                hover:scale-105 hover:bg-gray-100 dark:hover:bg-[#121212] hover:font-semibold
                ${
                  isActive("/Dashboard")
                    ? "text-[#3ecf8e] font-bold after:scale-x-100"
                    : "after:scale-x-0"
                }
                after:content-[''] after:absolute after:left-4 after:bottom-2 after:h-0.5 after:w-3/4 after:bg-[#3ecf8e] after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.25,0.1,0.25,1)] after:origin-left group-hover:after:scale-x-100
              `}
              onClick={() => setIsOpen(false)}
              to="/Dashboard"
            >
              Dashboard
            </Link>
          </div>

          <div className="mt-12 flex flex-col gap-4 items-center">
            <div>
              <Link
                to="/Login"
                onClick={() => setIsOpen(false)}
                className="flex justify-center py-3 px-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 text-black dark:text-gray-200 font-semibold w-64 transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:scale-105 hover:border-[#3ecf8e] hover:text-[#3ecf8e] focus:outline-none focus:ring-2 focus:ring-[#3ecf8e] focus:ring-offset-2"
              >
                Login
              </Link>
            </div>
            <div>
              <Link
                to="/Register"
                onClick={() => setIsOpen(false)}
                className="flex justify-center py-3 px-6 rounded-lg bg-[#3ecf8e] hover:bg-[#2ebd6b] text-white font-semibold w-64 transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#3ecf8e] focus:ring-offset-2 shadow-lg hover:shadow-xl"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
