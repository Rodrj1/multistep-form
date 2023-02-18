import { Step } from "./Step";
import CSS from "./PlanSteps.module.scss";

interface Props {
  currentPlanStep: number;
}

const PlanSteps = ({ currentPlanStep }: Props) => {
  return (
    <div className={CSS.container}>
      <Step
        currentPlanStep={currentPlanStep}
        number={1}
        currentStepText={"YOUR INFO"}
        CSS={CSS}
      />
      <Step
        currentPlanStep={currentPlanStep}
        number={2}
        currentStepText={"SELECT PLAN"}
        CSS={CSS}
      />
      <Step
        currentPlanStep={currentPlanStep}
        number={3}
        currentStepText={"ADD-ONS"}
        CSS={CSS}
      />
      <Step
        currentPlanStep={currentPlanStep}
        number={4}
        currentStepText={"SUMMARY"}
        CSS={CSS}
      />
    </div>
  );
};

export default PlanSteps;
