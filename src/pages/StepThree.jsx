import React from "react";
import { ProgressBar } from "../components/ProgressBar";
import { Heading } from "../components/Heading";
import { AnswerItemImg } from "../components/AnswerItemImg";
import { useState } from "react";
import { LinkButton } from "../components/LinkButton";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

const stepOneFormSchema = yup.object({
  useranswer: yup.string().required("Введите ответ в правильном формате"),
});

const StepThree = () => {
  const navigate = useNavigate();
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

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(stepOneFormSchema),
    defaultValues: {
      useranswer: "",
    },
  });

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
          <ProgressBar currentStep={3} />
          <div className="question">
            <Heading text="3. Занимательный вопрос" headingType="h2" />
            <ul className="emoji-variants">
              {variants.map((elem) => (
                <Controller
                  name="useranswer"
                  control={control}
                  render={({ field }) => (
                    <AnswerItemImg
                      key={elem.id}
                      id={elem.id}
                      AnswerLabel={elem.AnswerLabel}
                      onChange={() => setCheckedAnswer(elem.id)}
                      isChecked={elem.id === checkedAnswer}
                      imgSrc={elem.imgSrc}
                      imgAlt={elem.imgAlt}
                      errorMessage={errors.useranswer?.message}
                      hasError={errors.useranswer ? true : false}
                    />
                  )}
                />
              ))}
            </ul>
            <LinkButton
              id="next-btn"
              buttonText="Далее"
              onClick={clickHandler}
              path="/step-four"
              type="button"
              isDisabled={!checkedAnswer}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
