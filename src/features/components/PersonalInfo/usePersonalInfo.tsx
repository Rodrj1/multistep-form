import { useContext, useState } from "react";
import { AppContext } from "../../../context/AppContext";

const inputs = [
  {
    id: "Name",
    type: "text",
    placeholder: "e.g. Stephen King",
  },
  {
    id: "Email",
    type: "email",
    placeholder: "e.g. stephen@lorem.com",
  },
  {
    id: "Phone",
    type: "text",
    placeholder: "e.g. +1 234 567 890",
  },
];

export const usePersonalInfo = () => {
  const { userInfo, setUserInfo, inputIncorrectText } = useContext(AppContext);

  const incorrectName = inputIncorrectText.incorrectName;
  const incorrectEmail = inputIncorrectText.incorrectEmail;
  const incorrectPhone = inputIncorrectText.incorrectPhone;

  const incorrectTexts = [incorrectName, incorrectEmail, incorrectPhone];

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    const updateUserInfo = { ...userInfo, [key]: e.target.value };
    setUserInfo(updateUserInfo);
  };

  const displayInputs = inputs.map((input, index) => (
    <fieldset key={index}>
      <div>
        <label htmlFor={input.id}>{input.id}</label>
        <label htmlFor={input.id}>{incorrectTexts[index]}</label>
      </div>
      <input
        onChange={(e) => handleOnChange(e, input.id.toLowerCase())}
        id={input.id}
        name={input.id}
        type={input.type}
        value={userInfo[input.id.toLowerCase()]}
        placeholder={input.placeholder}
        required
      />
    </fieldset>
  ));
  return {
    displayInputs,
  };
};
