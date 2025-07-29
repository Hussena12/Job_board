import React, { useState, useEffect } from "react";
import { DashNavbar, MyPostedJob } from "..";
import { Home } from "../../pages";
import { Jobs, PostJob } from "@/pages";
import { MobileBar, Profile, SideBar } from "..";
import SavedPage from "../userId/SavedPage";
import { userAuth } from "@/contexts/AuthContextProvider";
import { supabase } from "@/supabaseClient";

// import { SignOut } from "@/components";

const pages = {
  home: <Home />,
  jobs: <Jobs />,
  post: <PostJob />,
  myPost: <MyPostedJob />,
  saved: <SavedPage />,
};

const Dashboard = () => {
  const { session, signUpNewUser } = userAuth();

  const [activePage, setActivePage] = useState("home");
  const [isProfile, setIsProfile] = useState(false);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (!session?.user?.id) return;

    const fetchProfile = async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", session.user.id)
        .single();

      if (error) console.error("Error fetching profile:", error);
      else setProfile(data);
    };

    fetchProfile();
  }, [session]);

  return (
    <>
      {profile ? (
        <div className="  flex flex-col h-min-screen">
          <DashNavbar isProfile={isProfile} setIsProfile={setIsProfile} />
          <div className="flex">
            <SideBar activePage={activePage} setActivePage={setActivePage} />
            <main className=" relative flex-1 dark:bg-[#121212] overflow-y-auto pb-16 pt-12 bg-[#fafafa] md:pl-12">
              {pages[activePage]}
              {isProfile && <Profile />}
            </main>
          </div>
          <MobileBar activePage={activePage} setActivePage={setActivePage} />{" "}
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </>
  );
};

export default Dashboard;
