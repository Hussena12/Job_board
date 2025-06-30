import React from "react";
import Select from "react-select";

const PostSelect = ({ options, label1, label2 }) => {
  return (
    <div>
      <div className="flex gap-4 mt-6 ">
        <div>
          <label className="text-gray-600 dark:text-gray-300 text-sm">
            {label1}
          </label>
          <Select
            options={options}
            className="w-[10.5rem]"
            menuPosition="fixed"
          />
        </div>
        <div>
          <label className="text-gray-600 dark:text-gray-300 text-sm">
            {label2}
          </label>
          <Select
            options={options}
            className="w-[10.5rem]"
            menuPosition="fixed"
          />
        </div>
      </div>{" "}
    </div>
  );
};

export default PostSelect;
