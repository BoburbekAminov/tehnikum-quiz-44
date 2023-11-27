import React from "react";
import { ProgressBar } from "../components/ProgressBar";
import { Heading } from "../components/Heading";
import { AnswerItemImg } from "../components/AnswerItemImg";
import { useState } from "react";
import { LinkButton } from "../components/LinkButton";

const StepThree = () => {
  const [checkedAnswer, setCheckedAnswer] = useState(null);

  const [phoneValue, setPhoneValue] = useState("");
  const [phoneError, setPhoneError] = useState(false);

  const clickHandler = () => {
    if (!phoneValue) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
  };

  const variants = [
    {
      id: "variant-1",
      AnswerParagraph: "Ваш ответ 1",
      imgSrc: "./img/laugh.png",
      imgAlt: "laugh",
    },
    {
      id: "variant-2",
      AnswerParagraph: "Ваш ответ 2",
      imgSrc: "./img/hearts.png",
      imgAlt: "hearts",
    },
    {
      id: "variant-3",
      AnswerParagraph: "Ваш ответ 3",
      imgSrc: "./img/smirk.png",
      imgAlt: "smirk",
    },
    {
      id: "variant-4",
      AnswerParagraph: "Ваш ответ 4",
      imgSrc: "./img/fright.png",
      imgAlt: "fright",
    },
  ];

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          {/* <div className="indicator"> */}
          {/* <div className="indicator__text"> */}
          {/* <span className="indicator__description" */}
          {/* // >Скидка за прохождение опроса: */}
          {/* </span> */}
          {/* <span className="indicator__value">15%</span> */}
          {/* </div> */}
          {/* <div className="indicator__progressbar"> */}
          {/* <div className="indicator__unit indicator__unit-1 _active"></div> */}
          {/* <div className="indicator__unit indicator__unit-2 _active"></div> */}
          {/* <div className="indicator__unit indicator__unit-3"></div> */}
          {/* <div className="indicator__unit indicator__unit-4"></div> */}
          {/* </div> */}
          {/* </div> */}
          <ProgressBar currentStep={3} />
          <div className="question">
            {/* <h2>3. Занимательный вопрос</h2> */}
            <Heading text="3. Занимательный вопрос" headingType="h2" />
            <ul className="emoji-variants">
              {/* <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-1" />
                <label htmlFor="variant-1">
                  <img src="./img/laugh.png" alt="laugh" />
                  <p>Ваш ответ 1</p>
                </label>
              </li> */}
              {variants.map((elem) => (
                <AnswerItemImg
                  key={elem.id}
                  id={elem.id}
                  AnswerLabel={elem.AnswerLabel}
                  onChange={() => setCheckedAnswer(elem.id)}
                  isChecked={elem.id === checkedAnswer}
                  imgSrc={elem.imgSrc}
                  imgAlt={elem.imgAlt}
                />
              ))}
              {/* <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-2" />
                <label htmlFor="variant-2">
                  <img src="./img/hearts.png" alt="hearts" />
                  <p>Ваш ответ 2</p>
                </label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-3" />
                <label htmlFor="variant-3">
                  <img src="./img/smirk.png" alt="smirk" />
                  <p>Ваш ответ 3</p>
                </label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-4" />
                <label htmlFor="variant-4">
                  <img src="./img/fright.png" alt="fright" />
                  <p>Ваш ответ 4</p>
                </label>
              </li> */}
            </ul>
            <LinkButton
              id="next-btn"
              buttonText="Далее"
              onClick={clickHandler}
              path="/step-four"
              type="button"
              isDisabled={!checkedAnswer}
            />
            {/* <button disabled id="next-btn">
              Далее
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
