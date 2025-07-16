import React from "react";

const Profile = ({ isProfile, setIsProfile }) => {
  return (
    <div className="  z-[99] flex flex-col  items-end">
      <button
        onClick={() => setIsProfile(!isProfile)}
        className={`flex flex-col justify-center  items-center z-[9999]`}
      >
        <img src="/dummy.jpg" alt="user" className="w-8 h-8 rounded-full" />
      </button>
    </div>
  );
};

export default Profile;
