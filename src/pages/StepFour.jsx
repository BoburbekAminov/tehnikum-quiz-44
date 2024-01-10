import React from "react";
import { Heading } from "../components/Heading";
import { ProgressBar } from "../components/ProgressBar";
import { useState } from "react";
import { AnswerItem } from "../components/AnswerItem";
import { LinkButton } from "../components/LinkButton";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

const stepOneFormSchema = yup.object({
  useranswer: yup.string().required("Введите ответ в правильном формате"),
});

const StepFour = () => {
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

  const onStepOneSubmit = (data) => {
    console.table(data);
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
          <ProgressBar currentStep={4} />
          <div className="question">
            <Heading text="4. Занимательный вопрос" headingType="h2" />
            <from onSubmit={handleSubmit(onStepOneSubmit)}>
              <ul className="level-variants">
                {variants.map((elem) => (
                  <AnswerItem
                    key={elem.id}
                    id={elem.id}
                    AnswerLabel={elem.AnswerLabel}
                    onChange={() => setCheckedAnswer(elem.id)}
                    isChecked={elem.id === checkedAnswer}
                    errorMessage={errors.useranswer?.message}
                    hasError={errors.useranswer ? true : false}
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
            </from>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
