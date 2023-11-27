import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heading } from "../components/Heading";
// import { LinkButton } from "../components/LinkButton";
// import { Input } from "../components/Input";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AppInput } from "../components/UI/AppInput";
import { Button } from "../components/Button";

const regexUzbNumber = /^(?:\+998)?(?:\d{2})?(?:\d{7})$/;

const welcomeFormSchema = yup.object({
  username: yup.string().required("Обязательное поле!"),
  userphone: yup
    .string()
    .matches(regexUzbNumber, "Введите узбекский номер телефона!")
    .required("Обязательное поле!"),
});
const Welcome = () => {
  const navigate = useNavigate();

  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");

  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(welcomeFormSchema),
    defaultValues: {
      username: "",
      userphone: "",
    },
  });

  const onWelcomeSubmit = (data) => {
    console.table(data);
  };

  const goToNextPage = () => {
    if (nameError && phoneError) {
      navigate("/step-one");
    }
  };

  const validateName = () => {
    if (!nameValue) {
      setNameError(true);
    } else {
      setNameError(false);
    }
  };
  const validatePhone = () => {
    if (!phoneValue) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
  };

  const handleNameInput = (value) => {
    setNameValue(value);
    validateName();
  };
  const handlePhoneInput = (value) => {
    setPhoneValue(value);
    validatePhone();
  };

  const clickHandler = () => {
    validateName();
    validatePhone();

    goToNextPage();
  };
  // console.log(errors, "errors");

  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Heading
            text="Добро пожаловать в квиз от лучшего учебного центра"
            headingType="h1"
          />
          <form onSubmit={handleSubmit(onWelcomeSubmit)}>
           
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <AppInput
                  value={nameValue}
                  onChange={(value) => handleNameInput(value)}
                  id="username"
                  isRequired
                  inputLabel="Ваше имя"
                  inputPlaceholder="Ваш ответ"
                  errorMessage={errors.username?.message}
                  hasError={errors.username ? true : false}
                  {...field}
                />
              )}
            />
            <Controller
              name="userphone"
              control={control}
              render={({ field }) => (
                <AppInput
                  value={phoneValue}
                  onChange={(value) => handlePhoneInput(value)}
                  id="userphone"
                  type="tel"
                  isRequired
                  inputLabel="Ваш номер"
                  inputPlaceholder="+998 9- --- -- --"
                  errorMessage={errors.userphone?.message}
                  hasError={errors.userphone ? true : false}
                  {...field}
                />
              )}
            />

            {/* <LinkButton
              buttonType="submit"
              onClick={clickHandler}
            /> */}
            <Button
              isDisabled={!!Object.keys(errors).length}
              onClick={clickHandler}
              buttonType="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
