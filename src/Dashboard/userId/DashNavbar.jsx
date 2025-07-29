import React from "react";

const DashNavbar = ({ isProfile, setIsProfile }) => {
  return (
    <div className=" h-12 flex items-center fixed w-full bg-white z-50 dark:bg-black  px-4 md:px-12 text-2xl justify-between shadow">
      <div className="flex items-center gap-1">
        <img src="/logo.svg" alt="logo" className="w-8 h-8" />
        <p className="text-[1.25rem]">GetJob</p>
      </div>

      <button
        onClick={() => setIsProfile(!isProfile)}
        className={`flex flex-col justify-center  items-center z-[9999]`}
      >
        <img src="/dummy.jpg" alt="user" className="w-8 h-8 rounded-full" />
      </button>
    </div>
  );
};

export default DashNavbar;
