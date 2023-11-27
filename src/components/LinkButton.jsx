import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";

export const LinkButton = ({
  buttonType,
  buttonText = "Далее",
  isDisabled,
  onClick,
  path,
  ...props
}) => {
  return (
    <Link to={path}>
      <Button
        type={buttonType === "submit" ? "submit" : "button"}
        disabled={isDisabled}
        onClick={onClick}
        {...props}
      />
    </Link>
  );
};
