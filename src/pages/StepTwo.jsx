import React, { useState } from "react";
import { ProgressBar } from "../components/ProgressBar";
import { AnswerItem } from "../components/AnswerItem";
import { Heading } from "../components/Heading";
import { LinkButton } from "../components/LinkButton";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

const stepOneFormSchema = yup.object({
  useranswer: yup.string().required("Введите ответ в правильном формате"),
});

const StepTwo = () => {
  const navigate = useNavigate();

  const [checkedAnswer, setCheckedAnswer] = useState(null);

  const [phoneValue, setPhoneValue] = useState("");
  const [phoneError, setPhoneError] = useState(false);

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
  ];

  // useEffect(() => {
  // console.log("Ваш ответ:", checkedAnswer);
  // }, [checkedAnswer]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
          <ProgressBar currentStep={2} />
          <div className="question">
            {/* <h2>1. Занимательный вопрос</h2> */}
            <Heading text="1. Занимательный вопрос" headingType="h2" />
            <ul className="variants">
              {variants.map((elem) => (
                <Controller
                  name="useranswer"
                  control={control}
                  render={({ field }) => (
                    <AnswerItem
                      key={elem.id}
                      id={elem.id}
                      AnswerLabel={elem.AnswerLabel}
                      onChange={() => setCheckedAnswer(elem.id)}
                      isChecked={elem.id === checkedAnswer}
                    />
                  )}
                />
              ))}
            </ul>
            <LinkButton
              id="next-btn"
              buttonText="Далее"
              onClick={clickHandler}
              path="/step-three"
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

export default StepTwo;
