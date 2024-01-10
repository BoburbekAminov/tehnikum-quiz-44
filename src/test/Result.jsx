import React, { useContext } from "react";
import { MainContext } from "./MyContext";

export const Result = () => {
  const resultValue = useContext(MainContext);
  console.log(useContext(MainContext));
  console.log("value: ", resultValue);
  return (
    <>
      <p>your result:</p>
      <span>{resultValue}</span>
    </>
  );
};
