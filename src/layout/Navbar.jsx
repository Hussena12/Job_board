import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "@/components";
import { useStateContext } from "../contexts/useStateContext";

const Navbar = () => {
  const { isOpen, setIsOpen, setMode, currentMode } = useStateContext();
  return (
    <div className="static flex justify-center">
      <header className="bg-white shadow p-3  px-2 w-[86rem] dark:bg-[#000]  dark:backdrop-blur-m dark:text-white mt-4 rounded-[2rem] ">
        <div className="  navbar flex  gap-24 md:mx-6 mx-4 justify-between ">
          <div className="flex text-xl font-bold ml:mr-8 items-center">
            GEtjob
          </div>

          <nav className="hidden md:flex w-full  items-center   lg:pl-36 md:pl-18 md:text-sm ml:text-md">
            <div className="flex  justify-center items-center space-x-6 ">
              <Link className="hover:text-[#3ecf8e] " to="/Home">
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
              <Link className="hover:text-[#3ecf8e]" to="/Dashboard">
                Dashboard
              </Link>
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

          <div className="md:hidden flex  items-center text-3xl flex-end z-20">
            <button
              className={isOpen ? "dark:text-gray-200" : ""}
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8"
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
          </div>
        </div>
      </header>

      {/* mobile view  */}

      <>
        <div
          className={`fixed md:hidden min-h-screen w-2/3 shadow-xl bg-white dark:bg-[#171717] right-0 top-0 transform transition-transform duration-300 ease-in-out z-10  ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } `}
        >
          <div className=" m-6">
            <div className="flex flex-col justify-center items-center pt-20 pb-6 gap-1 dark:text-gray-200 text-center">
              <Link
                className="w-full rounded-sm hover:text-gray-700 py-2 hover:bg-gray-100  dark:hover:bg-[#121212] dark:text-gray-200"
                to="/"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                className="w-full rounded-sm hover:text-gray-700 py-2 hover:bg-gray-100  dark:hover:bg-[#121212] dark:text-gray-200"
                to="/Jobs"
                onClick={() => setIsOpen(false)}
              >
                Jobs
              </Link>
              <Link
                className="w-full rounded-sm hover:text-gray-700 py-2 hover:bg-gray-100  dark:hover:bg-[#121212] dark:text-gray-200"
                to="/PostJob"
                onClick={() => setIsOpen(false)}
              >
                Post
              </Link>{" "}
              <Link
                onClick={() => setIsOpen(false)}
                className="w-full rounded-sm hover:text-gray-700 py-2 hover:bg-gray-100  dark:hover:bg-[#121212] dark:text-gray-200"
                to="/AboutUs"
              >
                About Us
              </Link>
              <Link
                onClick={() => setIsOpen(false)}
                className="w-full rounded-sm hover:text-gray-700 py-2 hover:bg-gray-100  dark:hover:bg-[#121212] dark:text-gray-200"
                to="/ContactUs"
              >
                Contact Us
              </Link>
            </div>

            <div className="mt-6 border-t-1 border-color p-4 m-4">
              <p className="font-semibold text-lg dark:text-gray-200">
                Theme Options
              </p>

              <div className="flex gap-2 dark:text-gray-200">
                <input
                  id="light"
                  type="radio"
                  name="theme"
                  value="Light"
                  onChange={setMode}
                  className="cursor-pointer"
                  checked={currentMode === "Light"}
                />
                <label htmlFor="light">Light</label>
              </div>
              <div className="flex gap-2 dark:text-gray-200">
                <input
                  id="dark"
                  type="radio"
                  name="theme"
                  value="Dark"
                  className="cursor-pointer"
                  onChange={setMode}
                  checked={currentMode === "Dark"}
                />
                <label htmlFor="dark">Dark</label>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4  items-center ">
              <div className="  ">
                <Link
                  to="/Login"
                  onClick={() => setIsOpen(false)}
                  className="flex justify-center py-2 px-4 rounded-md border-1 text-black font-bold  w-64 dark:text-gray-200"
                >
                  Login
                </Link>
              </div>
              <div className=" ">
                <Link
                  to="/Register"
                  onClick={() => setIsOpen(false)}
                  className="flex justify-center py-2 px-4 rounded-md bg-[#1F2937] text-white  w-64"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Navbar;
