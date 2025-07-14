import React from "react";
import { FaRegBuilding } from "react-icons/fa";
import { FiHome, FiBriefcase, FiPlusCircle, FiList } from "react-icons/fi";
import { Tooltip } from "react-tooltip";

const SideBar = ({ ActivePage, setActivePage }) => {
  return (
    <div className="hidden md:fixed md:flex flex-col gap-8 shadow text-gray-600 dark:bg-black dark:text-gray-300  w-12 min-h-full  bg-white pt-24 border-r-1 z-[30] ">
      <button
        data-tooltip-id="sidebar-tooltip"
        data-tooltip-content="Home"
        onClick={() => setActivePage("home")}
        className={`flex flex-col justify-center items-center `}
      >
        <FiHome className="text-[1rem]" />
      </button>
      <button
        data-tooltip-id="sidebar-tooltip"
        data-tooltip-content=" Jobs"
        onClick={() => setActivePage("jobs")}
        className={`flex flex-col justify-center items-center`}
      >
        <FiBriefcase className="text-[1rem]" />
      </button>
      <button
        data-tooltip-id="sidebar-tooltip"
        data-tooltip-content=" Post"
        onClick={() => setActivePage("post")}
        className={`flex flex-col justify-center items-center`}
      >
        <FiPlusCircle className="text-[1rem]" />
      </button>
      <button
        data-tooltip-id="sidebar-tooltip"
        data-tooltip-content="Company"
        onClick={() => setActivePage("post")}
        className={`flex flex-col justify-center items-center`}
      >
        <FaRegBuilding className="text-[1rem]" />
      </button>
      <button
        data-tooltip-id="sidebar-tooltip"
        data-tooltip-content="My Post"
        onClick={() => setActivePage("myPost")}
        className={`flex flex-col justify-center items-center`}
      >
        <FiList className="text-[1rem]" />
      </button>

      <Tooltip
        id="sidebar-tooltip"
        place="right"
        effect="solid"
        delayShow={300}
        className="!text-xs !py-1 !px-2 z-[999] bg-gray-800 dark:bg-gray-600"
      />
    </div>
  );
};

export default SideBar;
