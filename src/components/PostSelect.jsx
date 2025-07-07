import React from "react";
import Select from "react-select";
import { useSelectStyle } from "@/hooks/useSelectStyle";

const PostSelect = ({
  options,
  label,
  className = "",
  value,
  onChange,
  placeholder,
}) => {
  const customSelectStyles = useSelectStyle();

  return (
    <div>
      <div className="flex  ">
        <div>
          <label className="text-gray-600 dark:text-gray-300 text-sm">
            {label}
          </label>
          <Select
            value={value}
            onChange={onChange}
            options={options}
            placeholder={placeholder}
            isClearable
            isSearchable
            styles={customSelectStyles}
            className={` ${className} `}
            menuPosition="fixed"
          />
        </div>
      </div>
    </div>
  );
};

export default PostSelect;
