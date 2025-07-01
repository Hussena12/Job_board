import React from "react";

const PostHeader = ({ title, subtitle }) => {
  return (
    <div className="   my-4  min-h-full gap-4    pt-4 pl-2 dark:text-gray-300 md:w-1/3">
      <div className="">
        <p className=" font-semibold">{title}</p>
        <p className="text-xs leading-tight pl-4">{subtitle} </p>
      </div>
    </div>
  );
};

export default PostHeader;
