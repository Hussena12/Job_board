import React from "react";
import PropTypes from "prop-types";

const Button = ({
  color,
  bgColor,
  padding,
  size,
  text,
  className = "",
  borderRadius,
  ...props
}) => {
  return (
    <div>
      <button
        type="button"
        style={{ backgroundColor: bgColor, color, borderRadius, padding }}
        className={` text-${size} p-2 hover:drop-shadow-sm ${className} `}
        {...props}
      >
        {text}
      </button>
    </div>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  bgColor: PropTypes.string,
  padding: PropTypes.string,
  size: PropTypes.string,
  text: PropTypes.string.isRequired,
  borderRadius: PropTypes.string,
};

export default Button;
