import { useContext, useEffect } from "react";
import { AppContext } from "../../../../context/AppContext";
import { useUpdateBillingText } from "../../../helpers/useUpdateBillingText";

interface Props {
  type: string;
  price: number;
}

export const usePlanSelection = ({ type, price }: Props) => {
  const { billingMethod, setPlanPrice, planSelected, setPlanSelected } =
    useContext(AppContext);
  const { billingText } = useUpdateBillingText({ billingMethod });

  const yearlyPrice = price * 10;

  const handleAddToPay = (selectedPlan: string) => {
    const getAllPlans = Array.from(
      document.getElementsByClassName("plan") as HTMLCollectionOf<HTMLElement>
    );

    getAllPlans.map((plan) => (plan.style.borderColor = "#d6d9e6"));

    const updateSelectedPlan = document.getElementById(selectedPlan);

    if (updateSelectedPlan) {
      updateSelectedPlan.classList.add("checked");
      updateSelectedPlan.style.borderColor = "#473dff";
    }

    const amountPayed = billingMethod == "monthly" ? price : yearlyPrice;

    setPlanPrice(amountPayed);
    setPlanSelected(type);
  };

  useEffect(() => {
    if (planSelected == type) {
      const updatePlanBorder = document.getElementById(type);
      if (updatePlanBorder) updatePlanBorder.style.borderColor = "#473dff";
    }
  }, []);

  return {
    billingText,
    billingMethod,
    yearlyPrice,
    handleAddToPay,
  };
};
