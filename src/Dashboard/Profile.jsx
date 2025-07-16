import React from "react";

const Profile = () => {
  return (
    <div className=" fixed top-0 right-0 flex-1 pt-12 w-48 min-h-screen bg-white transition-transform">
      <div className="flex items-center">
        <div className="   py-4 px-2">
          <img src="/dummy.jpg" alt="user" className="w-6 h-6 rounded-full" />
        </div>

        <div className="flex flex-col text-black ">
          <p>Hussen Ali</p>
          <p className="text-xs">ha0959943@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
