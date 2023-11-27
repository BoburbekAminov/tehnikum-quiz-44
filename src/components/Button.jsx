import React from "react";
// import { Link } from "react-router-dom";

export const Button = ({
  buttonType,
  buttonText = "Далее",
  isDisabled,
  onClick,
  path,
  ...props
}) => {
  return (

    <button
      type={buttonType === "submit" ? "submit" : "button"}
      disabled={isDisabled}
      onClick={onClick}
      {...props}
    >
      {buttonText}
    </button>
  );
};
