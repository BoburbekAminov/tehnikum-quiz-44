import React, { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Heading } from "../components/Heading";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { ThemeContext, themes } from "../contexts/themeContexts";

const Welcome = () => {
  const navigate = useNavigate();

  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");

  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const { theme, toggleTheme } = useContext(ThemeContext);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: "",
      phone: "",
    },
  });

  console.log("theme", theme);

  const goNextPage = () => {
    if (nameValue && phoneValue) {
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
    // const step1 = {
    //   name: nameValue,
    //   phoneNumber: phoneValue,
    // };
    goNextPage();
  };

  const onAcceptSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={`container ${theme === themes.dark && "_dark"}`}>
      <div className="wrapper">
        <div className="welcome">
          <button type="button" onClick={toggleTheme}>
            Switch Theme
          </button>
          <Heading
            text="Добро пожаловать в квиз от лучшего учебного центра"
            headingType="h1"
          />
          <form
            className="welcome__form"
            onSubmit={handleSubmit(onAcceptSubmit)}
          >
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <Input
                  hasError={nameError}
                  value={nameValue}
                  onChange={(value) => handleNameInput(value)}
                  id="usernam e"
                  isRequired
                  inputLabel="Ваше имя"
                  inputPlaceholder="Ваш ответ"
                  errorMessage="Введите ваше имя"
                  {...field}
                />
              )}
            />
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <Input
                  hasError={phoneError}
                  value={phoneValue}
                  onChange={(value) => handlePhoneInput(value)}
                  id="phone"
                  isRequired
                  inputLabel="Ваш номер"
                  inputPlaceholder="+998 9- --- -- -- "
                  errorMessage="Введите номер в правильном формате"
                  {...field}
                />
              )}
            />
            <Button
              buttonType="submit"
              buttonText="Далее"
              onClick={clickHandler}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
