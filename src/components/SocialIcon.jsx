import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const SocialIcon = () => {
  return (
    <div>
      <div className="flex gap-4 mb-4 mt-12 justify-center">
        <span className=" flex justify-center items-center w-8 h-8 bg-[#1F2937] dark:bg-gray-300 rounded-2xl">
          <FaFacebook className="text-gray-200 dark:text-gray-800 hover:scale-110 duration-200" />
        </span>
        <span className=" flex justify-center items-center w-8 h-8 bg-[#1F2937] dark:bg-gray-300 rounded-2xl">
          <FaTwitter className="text-gray-200 dark:text-gray-800  hover:scale-110 duration-200" />
        </span>
        <span className=" flex justify-center items-center w-8 h-8 bg-[#1F2937]  dark:bg-gray-300 rounded-2xl">
          <FaInstagram className="text-gray-200 dark:text-gray-800 hover:scale-110 duration-200" />
        </span>
        <span className=" flex justify-center items-center w-8 h-8 bg-[#1F2937] dark:bg-gray-300 rounded-2xl">
          <FaLinkedin className="text-gray-200 dark:text-gray-800 hover:scale-110 duration-200" />
        </span>
        <span className=" flex justify-center items-center w-8 h-8 bg-[#1F2937] dark:bg-gray-300 rounded-2xl">
          <FaYoutube className="text-gray-200 dark:text-gray-800 hover:scale-110 duration-200" />
        </span>
      </div>
    </div>
  );
};

export default SocialIcon;
