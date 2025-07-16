import React, { useState } from "react";
import MyPostedJob from "./MyPostedJob";
import { Home } from "../pages";
import { Jobs, PostJob } from "@/pages";
import { MobileBar, Profile, SideBar } from ".";

// import { SignOut } from "@/components";

const pages = {
  home: <Home />,
  jobs: <Jobs />,
  post: <PostJob />,
  myPost: <MyPostedJob />,
};

const Dashboard = () => {
  const [activePage, setActivePage] = useState("home");
  const [isProfile, setIsProfile] = useState(false);

  return (
    <div className="  flex flex-col h-min-screen">
      <div className=" h-12 flex items-center fixed w-full bg-white z-50 dark:bg-black  px-4 md:px-12 text-2xl justify-between shadow">
        <div className="flex items-center gap-1">
          <img src="/logo.svg" alt="logo" className="w-8 h-8" />
          <p className="text-[1.25rem]">GetJob</p>
        </div>

        <Profile isProfile={isProfile} setIsProfile={setIsProfile} />
      </div>

      <div className="flex">
        <SideBar activePage={activePage} setActivePage={setActivePage} />
        <main className=" relative flex-1 dark:bg-[#121212] overflow-y-auto pb-16 pt-12 bg-[#f8f9fa] md:pl-12">
          {pages[activePage]}
          {isProfile && (
            <div className="absolute top-0 right-0 flex-1 pt-12 w-36 min-h-screen bg-white "></div>
          )}
        </main>
      </div>

      <MobileBar activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
};

export default Dashboard;
