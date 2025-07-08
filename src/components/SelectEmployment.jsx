import { useSelectStyle } from "@/hooks/useSelectStyle";
import React, { useEffect, useState } from "react";
import PostSelect from "./PostSelect";

const options1 = [
  { value: "Full-time", label: "Full-time" },
  { value: "Part-time", label: "Part-time" },
  { value: "Weekend", label: "Weekend" },
];

const options2 = [
  { value: "On-site", label: "On-site" },
  { value: "Remote", label: "Remote" },
  { value: "Hybrid", label: "Hybrid" },
];

const SelectEmployment = ({ onTypeChange }) => {
  const [jobShift, setJobShift] = useState("");
  const [jobType, setJobType] = useState("");

  const customSelectStyles = useSelectStyle();

  useEffect(() => {
    if (onTypeChange) {
      onTypeChange({
        jobShift: jobShift ? jobShift?.value : "",
        jobType: jobType ? jobType?.value : "",
      });
    }
  }, [jobShift, jobType, onTypeChange]);

  const handleJobShift = (option) => {
    setJobShift(option);
  };

  const handleJobType = (option) => {
    setJobType(option);
  };
  return (
    <div className="flex gap-4 mt-5   pb-5">
      <PostSelect
        value={jobShift.value}
        onChange={handleJobShift}
        name="shift"
        options={options1}
        styles={customSelectStyles}
        className="w-40 sm:w-48 lg:w-[10rem]"
        label=" Shift"
      />
      <PostSelect
        value={jobType.value}
        onChange={handleJobType}
        name="type"
        options={options2}
        styles={customSelectStyles}
        className="w-40 sm:w-48 lg:w-[10rem]"
        label=" Type"
      />
    </div>
  );
};

export default SelectEmployment;
