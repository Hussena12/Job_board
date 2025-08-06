import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Button, MobileNav } from "@/components";
import { useStateContext } from "../contexts/useStateContext";

const Navbar = () => {
  const { isOpen, setIsOpen } = useStateContext();
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center  pb-16">
      <header className=" bg-white shadow p-3  px-2 w-[80rem] md:max-w-[80rem] dark:bg-[#000]  dark:backdrop-blur-m dark:text-white md:mt-4 md:rounded-[2rem]  z-50 ">
        <div className="   flex  gap-24 md:mx-6 mx-4 justify-between ">
          <Link to="/" className="flex items-center gap-1">
            <img src="/logo.svg" alt="logo" className="w-8 h-8" />
            <p className="text-[1.25rem]">GetJob</p>
          </Link>

          <nav className="hidden md:flex w-full  items-center   lg:pl-36 md:pl-18 md:text-sm ml:text-md">
            <div className="flex  justify-center items-center space-x-6 ">
              <Link className="hover:text-[#3ecf8e] " to="/">
                Home
              </Link>

              <Link className="hover:text-[#3ecf8e]" to="/Jobs">
                Jobs
              </Link>
              <Link className="hover:text-[#3ecf8e] " to="/PostJob">
                Post Job
              </Link>
              <Link className="hover:text-[#3ecf8e]" to="/AboutUs">
                About Us
              </Link>
              <Link className="hover:text-[#3ecf8e]" to="/ContactUs">
                Contact Us
              </Link>
              {/* <Link className="hover:text-[#3ecf8e]" to="/Dashboard">
                Dashboard
              </Link> */}
            </div>

            <div className="flex-1 flex justify-end items-center">
              <Link className="pl-4 py-2 pr-2 " to="/Login">
                Login
              </Link>
              <Link className="" to="/Register">
                <Button
                  text="Register"
                  color="white"
                  borderRadius="100px"
                  size="4"
                  padding="6px 9px"
                  className="dark:bg-[#3ecf8ece] bg-[#1F2937]"
                />
              </Link>
            </div>
          </nav>

          {/* <div className="md:hidden flex  items-center text-3xl mx-2   ">
            <button
              className={isOpen ? "dark:text-gray-200" : ""}
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-gray-500"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 6 L18 18 M6 18 L18 6"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div> */}
        </div>
      </header>

      {/* mobile view  */}

      <MobileNav />
    </div>
  );
};

export default Navbar;
