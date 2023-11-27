import React from "react";
import { Input } from "../components/Input";
import { AppInput } from "../components/AppInput";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm, useWatch } from "react-hook-form";

const acceptFormSchema = yup.object({
  username: yup.string().required(),
  publicOffer: yup.boolean().required(),
});

export const TestPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(acceptFormSchema),
    defaultValues: {
      username: "",
      publicOffer: false,
      selectOption: "",
    },
  });

  const acceptSubmit = (data) => {
    console.table(data);
  };

  const userName = useWatch({ control, name: "username" });
  const publicOffer = useWatch({ control, name: "publicOffer" });
  const selectOption = useWatch({ control, name: "selectOption" });

  const isButtonDisabled =
    userName === "" || publicOffer === false || selectOption === "";

  return (
    <div className="container">
      <div className="wrapper">
        <div className="AcceptPage">
          <h1>АКЦЕПТ на предложение о заключении договора</h1>
          <form onSubmit={handleSubmit(acceptSubmit)}>
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <Input
                  type="text"
                  inputLabel="Ознакомился с публичной офертой "
                  {...field}
                />
              )}
            />
            <Controller
              name="publicOffer"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  type="checkbox"
                  inputLabel="Ознакомился с публичной офертой "
                  {...field}
                />
              )}
            />
            <label>
              Select Option:
              <Controller
                name="selectOption"
                control={control}
                render={({ field }) => (
                  <select {...field}>
                    <option disabled value="">
                      Select...
                    </option>
                    <option value="optionA">Option A</option>
                    <option value="optionB">Option B</option>
                    <option value="optionC">Option C</option>
                  </select>
                )}
              />
            </label>
            <button disabled={isButtonDisabled} type="submit">
              Далее
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
