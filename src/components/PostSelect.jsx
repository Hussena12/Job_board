import React from "react";
import Select from "react-select";

const PostSelect = ({ options, label, className = "" }) => {
  return (
    <div>
      <div className="flex  ">
        <div>
          <label className="text-gray-600 dark:text-gray-300 text-sm">
            {label}
          </label>
          <Select
            options={options}
            className={` ${className} dark:bg-[#171717]`}
            menuPosition="fixed"
          />
        </div>
      </div>
    </div>
  );
};

export default PostSelect;
