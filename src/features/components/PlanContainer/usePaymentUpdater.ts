import { useContext, useEffect } from "react";
import { AppContext } from "../../../context/AppContext";

export const usePaymentUpdater = () => {
  const {
    planPrice,
    setPlanPrice,
    addonsPrice,
    setAddonsPrice,
    billingMethod,
    setTotal,
  } = useContext(AppContext);

  useEffect(() => {
    const monthlyOrYearlyPlan =
      billingMethod == "monthly" ? planPrice / 10 : planPrice * 10;

    const monthlyOrYearlyAddon =
      billingMethod == "monthly" ? addonsPrice / 10 : addonsPrice * 10;

    setPlanPrice(monthlyOrYearlyPlan);
    setAddonsPrice(monthlyOrYearlyAddon);
  }, [billingMethod]);

  useEffect(() => {
    const totalPay = addonsPrice + planPrice;
    setTotal(totalPay);
  }, [addonsPrice, planPrice]);

  return {};
};
