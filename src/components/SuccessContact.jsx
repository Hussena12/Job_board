import React from "react";
import Lottie from "lottie-react";
import successAnimation from "../assets/success-animation.json";

const SuccessContact = () => {
  return (
    <div style={{ width: 150, margin: "auto" }}>
      <Lottie animationData={successAnimation} loop={false} />
    </div>
  );
};

export default SuccessContact;
