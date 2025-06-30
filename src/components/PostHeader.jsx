import React from "react";

const PostHeader = ({ children, title, subtitle }) => {
  return (
    <div className="   my-4  min-h-full gap-4 border-b-1 border-color pb-8 pt-4 pl-2">
      <div className="">
        <p className=" font-semibold">{title}</p>
        <p className="text-xs leading-tight pl-4">{subtitle} </p>
      </div>
      {children}
    </div>
  );
};

export default PostHeader;
