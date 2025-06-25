import React from "react";
import { Button } from "../components";

const ApplyButton = ({ apply_options }) => {
  const directLink = apply_options?.find((opt) => opt.is_direct);

  if (directLink) {
    return (
      <a href={directLink.apply_link} target="_blank" rel="noopener noreferrer">
        <Button
          text="Apply now"
          color="white"
          bgColor="#1F2937 "
          borderRadius="4px"
          size="2"
        />
      </a>
    );
  } else {
    return (
      <Button
        text="Apply now"
        color="white"
        bgColor="#1F2937 "
        borderRadius="4px"
        size="2"
      />
    );
  }
};

export default ApplyButton;
