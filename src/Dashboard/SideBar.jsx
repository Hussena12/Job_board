import React from "react";
import { FiHome, FiBriefcase, FiPlusCircle, FiList } from "react-icons/fi";
import { FaRegBuilding } from "react-icons/fa";

const SideBar = ({ activePage, setActivePage }) => {
  return (
    <div className=" fixed bottom-0 w-full ">
      <div className="flex gap-6  text-gray-600 bg-white z-50 h-18 justify-center text-sm h-16 dark:bg-black dark:text-gray-100">
        <button
          onClick={() => setActivePage("home")}
          className={`flex flex-col justify-center items-center `}
        >
          <FiHome className="text-[1.4rem]" />
          <span>Home</span>
        </button>
        <button
          onClick={() => setActivePage("jobs")}
          className={`flex flex-col justify-center items-center`}
        >
          <FiBriefcase className="text-[1.4rem]" />
          <span>Jobs</span>
        </button>
        <button
          onClick={() => setActivePage("post")}
          className={`flex flex-col justify-center items-center`}
        >
          <FiPlusCircle className="text-[1.4rem]" />
          <span>Post</span>
        </button>
        <button
          onClick={() => setActivePage("post")}
          className={`flex flex-col justify-center items-center`}
        >
          <FaRegBuilding className="text-[1.4rem]" />
          <span>Company</span>
        </button>
        <button
          onClick={() => setActivePage("myPost")}
          className={`flex flex-col justify-center items-center`}
        >
          <FiList className="text-[1.4rem]" />
          <span>My Post</span>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
