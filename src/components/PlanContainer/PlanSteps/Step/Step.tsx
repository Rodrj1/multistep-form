import { useEffect, useState } from "react";
import { useHandleStepVisibility } from "../../../../features/components/PlanContainer/PlanSteps";

interface Props {
  number: number;
  currentPlanStep: number;
  currentStepText: string;
  CSS: CSSModuleClasses;
}

const Step = ({ number, currentPlanStep, currentStepText, CSS }: Props) => {
  const { windowSize } = useHandleStepVisibility();

  return (
    <div className={CSS.step}>
      {currentPlanStep == number ? (
        <div className={`${CSS.item} ${CSS.highlighted}`}>
          <span>{number}</span>
        </div>
      ) : (
        <div className={CSS.item}>
          <span>{number}</span>
        </div>
      )}

      {windowSize > 805 && (
        <div className={CSS.item}>
          <p>STEP {number}</p>
          <span>{currentStepText}</span>
        </div>
      )}
    </div>
  );
};

export default Step;
