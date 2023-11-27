import React from "react";
import { Heading } from "../components/Heading";

const Thanks = () => {
  return (
    <div class="container">
      <div class="wrapper">
        <div class="thanks">
          <img src="./img/bell.png" alt="bell" />
          {/* <h1>Спасибо за прохождение опроса!</h1> */}
          <Heading text="Спасибо за прохождение опроса!" headingType="h1" />
          <p>Получи свою скидку по ссылке ниже или другое блаблабла</p>
          <button id="get-link">Получить ссылку</button>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
