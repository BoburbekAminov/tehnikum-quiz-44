import React, { useState } from "react";
import { Heading } from "../components/Heading";
// import { Input } from "../components/Input";
import { ProgressBar } from "../components/ProgressBar";
// import { LinkButton } from "../components/LinkButton";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AppInput } from "../components/UI/AppInput";
import { Button } from "../components/Button";

const stepOneFormSchema = yup.object({
  useranswer: yup.string().required("Введите ответ в правильном формате"),
});

const StepOne = () => {
  const navigate = useNavigate();

  const [answerValue, setAnswerValue] = useState("");
  const [answerError, setAnswerError] = useState(false);

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

  const goToNextPage = () => {
    if (answerError) {
      navigate("/step-two");
    }
  };

  const validateAnswer = () => {
    if (!answerValue) {
      setAnswerError(true);
    } else {
      setAnswerError(false);
    }
  };

  const handleAnswerInput = (value) => {
    setAnswerValue(value);
    validateAnswer();
  };

  const clickHandler = () => {
    validateAnswer();
    goToNextPage();
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <ProgressBar currentStep={1} />
          <div className="question">
            <Heading text="1. Занимательный вопрос" headingType="h2" />
            <form onSubmit={handleSubmit(onStepOneSubmit)}>
              {/* <Input
                hasError={answerError}
                value={answerValue}
                onChange={(value) => handlePhoneInput(value)}
                isRequired
                type="text"
                id="answer"
                inputPlaceholder="Ваш ответ"
                errorMessage="Введите ответ в правильном формате"
              /> */}
              <Controller
                name="useranswer"
                control={control}
                render={({ field }) => (
                  <AppInput
                    value={answerValue}
                    onChange={(value) => handleAnswerInput(value)}
                    id="useranswer"
                    isRequired
                    inputLabel="Ваше имя"
                    inputPlaceholder="Ваш ответ"
                    errorMessage={errors.useranswer?.message}
                    hasError={errors.useranswer ? true : false}
                    {...field}
                  />
                )}
              />
              {/* <LinkButton
                type="submit"
                // id="next-btn"
                buttonText="Далее"
                onClick={clickHandler}
                isDisabled={!!Object.keys(errors).length}
              /> */}
              <Button
                onClick={clickHandler}
                isDisabled={!!Object.keys(errors).length}
                buttonType="submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
