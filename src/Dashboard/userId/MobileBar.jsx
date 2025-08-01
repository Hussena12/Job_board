import React from "react";
import { FiHome, FiBriefcase, FiPlusCircle, FiList } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa";

const MobileBar = ({ activePage, setActivePage }) => {
  return (
    <section className="">
      <div className="md:hidden fixed bottom-0 w-full ">
        <div className="flex gap-4 justify-between text-gray-600 bg-white z-50 h-18  px-8 text-sm h-16 dark:bg-black dark:text-gray-300">
          <button
            onClick={() => setActivePage("home")}
            className={`flex flex-col justify-center items-center px-3 hover:bg-neutral-100 dark:hover:bg-neutral-950  `}
          >
            <FiHome className="text-[1.4rem]" />
            <span>Home</span>
          </button>
          <button
            onClick={() => setActivePage("jobs")}
            className={`flex flex-col justify-center items-center  px-3 hover:bg-neutral-100 dark:hover:bg-neutral-950 `}
          >
            <FiBriefcase className="text-[1.4rem]" />
            <span>Jobs</span>
          </button>
          <button
            onClick={() => setActivePage("post")}
            className={`flex flex-col justify-center items-center  px-3 hover:bg-neutral-100 dark:hover:bg-neutral-950 `}
          >
            <FiPlusCircle className="text-[1.4rem]" />
            <span>Post</span>
          </button>
          <button
            onClick={() => setActivePage("saved")}
            className={`flex flex-col justify-center items-center  px-3 hover:bg-neutral-100 dark:hover:bg-neutral-950 `}
          >
            <FaRegBookmark className="text-[1.4rem]" />
            <span>Saved</span>
          </button>
          <button
            onClick={() => setActivePage("myPost")}
            className={`flex flex-col justify-center items-center  px-3 hover:bg-neutral-100 dark:hover:bg-neutral-950 `}
          >
            <FiList className="text-[1.4rem]" />
            <span>Posted</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MobileBar;
