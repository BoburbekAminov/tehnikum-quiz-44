import React from "react";
import { Heading } from "../components/Heading";
import { ProgressBar } from "../components/ProgressBar";
import { useState } from "react";
import { AnswerItem } from "../components/AnswerItem";
import { LinkButton } from "../components/LinkButton";

const StepFour = () => {
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
      AnswerLabel: "Ответ №1",
    },
    {
      id: "variant-2",
      AnswerLabel: "Ответ №2",
    },
    {
      id: "variant-3",
      AnswerLabel: "Ответ №3",
    },
    {
      id: "variant-4",
      AnswerLabel: "Ответ №4",
    },
    {
      id: "variant-5",
      AnswerLabel: "Ответ №5",
    },
  ];

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          {/* <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description">
                Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1 _active"></div>
              <div className="indicator__unit indicator__unit-2 _active"></div>
              <div className="indicator__unit indicator__unit-3 _active"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div> */}
          <ProgressBar currentStep={4} />
          <div className="question">
            {/* <h2>4. Занимательный вопрос</h2> */}
            <Heading text="4. Занимательный вопрос" headingType="h2" />
            <ul className="level-variants">
              {/* <li className="variant-wrapper"> */}
              {/* <input required type="radio" name="variant" id="variant-1" /> */}
              {/* <label htmlFor="variant-1">1</label> */}
              {/* </li> */}
              {/* <li className="variant-wrapper"> */}
              {/* <input required type="radio" name="variant" id="variant-2" /> */}
              {/* <label htmlFor="variant-2">2</label> */}
              {/* </li> */}
              {/* <li className="variant-wrapper"> */}
              {/* <input required type="radio" name="variant" id="variant-3" /> */}
              {/* <label htmlFor="variant-3">3</label> */}
              {/* </li> */}
              {/* <li className="variant-wrapper"> */}
              {/* <input required type="radio" name="variant" id="variant-4" /> */}
              {/* <label htmlFor="variant-4">4</label> */}
              {/* </li> */}
              {/* <li className="variant-wrapper"> */}
              {/* <input required type="radio" name="variant" id="variant-5" /> */}
              {/* <label htmlFor="variant-5">5</label> */}
              {/* </li> */}
              {variants.map((elem) => (
                <AnswerItem
                  key={elem.id}
                  id={elem.id}
                  AnswerLabel={elem.AnswerLabel}
                  onChange={() => setCheckedAnswer(elem.id)}
                  isChecked={elem.id === checkedAnswer}
                />
              ))}
            </ul>
            <LinkButton
              id="next-btn"
              buttonText="Далее"
              onClick={clickHandler}
              path="/thanks"
              type="button"
              isDisabled={!checkedAnswer}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
