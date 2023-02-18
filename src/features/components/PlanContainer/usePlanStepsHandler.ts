import { useContext, useState } from "react";
import { AppContext } from "../../../context/AppContext";

const validEmailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const validPhoneRegex = /^\d{10}$/;

export const usePlanStepsHandler = () => {
  const { userInfo, planSelected, inputIncorrectText, setinputIncorrectText } =
    useContext(AppContext);

  const [currentPlanStep, setCurrentPlanStep] = useState(1);

  const isNameCorrect = userInfo.name != "";
  const isEmailCorrect = userInfo.email.match(validEmailRegex);
  const isPhoneCorrect = userInfo.phone.match(validPhoneRegex);
  const isUserInfoCorrect = isNameCorrect && isEmailCorrect && isPhoneCorrect;
  const incorrectText = "Fill this field!";

  const handleInputLabel = () => {
    if (!isNameCorrect) {
      const update = (inputIncorrectText.incorrectName = incorrectText);
      setinputIncorrectText({ ...inputIncorrectText, incorrectName: update });
    }

    if (!isEmailCorrect) {
      const update = (inputIncorrectText.incorrectEmail = incorrectText);
      setinputIncorrectText({ ...inputIncorrectText, incorrectEmail: update });
    }

    if (!isPhoneCorrect) {
      const update = (inputIncorrectText.incorrectPhone = incorrectText);
      setinputIncorrectText({ ...inputIncorrectText, incorrectPhone: update });
    }

    if (isNameCorrect) {
      const update = (inputIncorrectText.incorrectName = "");
      setinputIncorrectText({ ...inputIncorrectText, incorrectName: update });
    }

    if (isEmailCorrect) {
      const update = (inputIncorrectText.incorrectEmail = "");
      setinputIncorrectText({ ...inputIncorrectText, incorrectEmail: update });
    }

    if (isPhoneCorrect) {
      const update = (inputIncorrectText.incorrectPhone = "");
      setinputIncorrectText({ ...inputIncorrectText, incorrectPhone: update });
    }
  };

  const handleCurrentStep = (action: "add" | "substract") => {
    if (action == "add") {
      if (currentPlanStep == 1) {
        if (isUserInfoCorrect) {
          setCurrentPlanStep((cur) => cur + 1);
          const resetInputErrors = {
            incorrectName: "",
            incorrectEmail: "",
            incorrectPhone: "",
          };
          setinputIncorrectText(resetInputErrors);
        } else handleInputLabel();
      } else if (currentPlanStep == 2) {
        if (planSelected != "") {
          setCurrentPlanStep((cur) => cur + 1);
        }
      } else setCurrentPlanStep((cur) => cur + 1);
    }

    if (action == "substract") setCurrentPlanStep((cur) => cur - 1);
  };

  return { currentPlanStep, handleCurrentStep };
};
