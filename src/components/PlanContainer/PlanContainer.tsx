import { PersonalInfo } from "./1-PersonalInfo";
import { PlanSteps } from "./PlanSteps";
import { SelectPlan } from "./2-SelectPlan";
import { PickAddons } from "./3-Pick-Addons";
import { Summary } from "./4-Summary";
import { Confirmed } from "./5-Confirmed";
import {
  usePaymentUpdater,
  usePlanStepsHandler,
} from "../../features/components/PlanContainer";
import CSS from "./PlanContainer.module.scss";

const PlanContainer = () => {
  const { currentPlanStep, handleCurrentStep } = usePlanStepsHandler();
  const {} = usePaymentUpdater();

  return (
    <section className={CSS.container}>
      <section className={CSS.item}>
        <PlanSteps currentPlanStep={currentPlanStep} />
      </section>

      <section className={CSS.item}>
        <div className={CSS.currentStep}>
          {currentPlanStep == 1 && <PersonalInfo />}

          {currentPlanStep == 2 && <SelectPlan />}

          {currentPlanStep == 3 && <PickAddons />}

          {currentPlanStep == 4 && <Summary />}

          {currentPlanStep == 5 && <Confirmed />}
        </div>

        <div className={CSS.buttonContainer}>
          {currentPlanStep > 1 && currentPlanStep != 5 ? (
            <button
              className={CSS.goBackButton}
              onClick={() => handleCurrentStep("substract")}
            >
              Go Back
            </button>
          ) : (
            <button className={CSS.hiddenButton}>
              Go back button is hidden during first step.
            </button>
          )}

          {currentPlanStep <= 4 && currentPlanStep != 5 ? (
            <>
              {currentPlanStep < 4 ? (
                <button onClick={() => handleCurrentStep("add")}>
                  Next Step
                </button>
              ) : (
                <button onClick={() => handleCurrentStep("add")}>
                  Confirm
                </button>
              )}
            </>
          ) : (
            <button className={CSS.hiddenButton}>
              All buttons are hidden after confirming subscription.
            </button>
          )}
        </div>
      </section>
    </section>
  );
};

export default PlanContainer;
