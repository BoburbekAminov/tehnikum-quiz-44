import React from "react";

export const AnswerItem3 = ({ id, isSrc, isAlt, textP, onChange }) => {
  return (
    <li className="variant-wrapper">
      <input required type="radio" name="variant" id={id} onChange={onChange} />
      <label htmlFor={id}>
        <img src={isSrc} alt={isAlt} />
        <p>{textP}</p>
      </label>
    </li>
  );
};
