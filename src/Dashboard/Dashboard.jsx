import React, { useState } from "react";
import SideBar from "./SideBar";
import MyPostedJob from "./MyPostedJob";
import { Home } from "../pages";
import { Jobs, PostJob } from "@/pages";

// import { SignOut } from "@/components";

const pages = {
  home: <Home />,
  jobs: <Jobs />,
  post: <PostJob />,
  myPost: <MyPostedJob />,
};

const Dashboard = () => {
  const [activePage, setActivePage] = useState("home");
  return (
    <div className=" flex flex-col h-min-screen">
      <div className="h-12 flex items-center fixed w-full bg-white z-50 dark:bg-black  px-4 text-2xl justify-between shadow">
        <div className="flex items-center gap-1">
          <img src="/logo.svg" alt="logo" className="w-8 h-8" />
          <p className="text-[1.25rem]">GetJob</p>
        </div>

        <button
          onClick={() => setActivePage("myPost")}
          className={`flex flex-col justify-center items-center`}
        >
          <img src="/dummy.jpg" alt="user" className="w-8 h-8 rounded-full" />
        </button>
      </div>
      <main className="dark:bg-[#121212] overflow-y-auto pb-16 pt-12 bg-[#f8f9fa]">
        {pages[activePage]}
      </main>
      <SideBar activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
};

export default Dashboard;
