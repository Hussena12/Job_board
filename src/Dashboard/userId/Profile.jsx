import React from "react";
import { SignOut } from "@/components";
import { useJobs } from "@/contexts/JobContext";
import { userAuth } from "@/contexts/AuthContextProvider";

const Profile = () => {
  const { firstName, lastName } = useJobs();
  const { session, signUpNewUser } = userAuth();
  const userEmail = session.user.user_metadata.email;

  return (
    <div className=" fixed top-0 right-0 flex-1 pt-12 w-64 min-h-screen bg-white transition-transform">
      <div className="flex gap-3 items-center">
        <div className="   py-4 pl-4 ">
          <img src="/dummy.jpg" alt="user" className="w-8 h-8 rounded-full" />
        </div>

        <div className="flex flex-col text-black ">
          <p className="text-lg leading-tight  ">
            {firstName} {lastName}
          </p>
          <p className="text-[0.6rem]">{userEmail}</p>
        </div>
      </div>

      <div>
        <SignOut />
      </div>
    </div>
  );
};

export default Profile;
