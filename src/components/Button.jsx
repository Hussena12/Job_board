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
  onClick,
  icon,
  ...props
}) => {
  return (
    <div>
      <button
        onClick={onClick}
        type="button"
        style={{ backgroundColor: bgColor, color, borderRadius, padding }}
        className={` text-${size} px-2 py-1 hover:drop-shadow-sm ${className} flex gap-2 items-center `}
        {...props}
      >
        <span>{icon}</span>
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
