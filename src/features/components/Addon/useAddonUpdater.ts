import { useContext, useEffect } from "react";
import { AppContext } from "../../../context/AppContext";
import { AddonProps } from "../../../types";

interface Props {
  addon: AddonProps;
  setAddon: React.Dispatch<React.SetStateAction<AddonProps>>;
}

export const useAddonUpdater = ({ addon, setAddon }: Props) => {
  const { billingMethod } = useContext(AppContext);
  const monthlyPrice = addon.initialPrice;
  const yearlyPrice = addon.initialPrice * 10;

  useEffect(() => {
    const updateAddon =
      billingMethod == "monthly"
        ? { ...addon, price: monthlyPrice }
        : { ...addon, price: yearlyPrice };
    setAddon(updateAddon);
  }, [billingMethod]);

  return { monthlyPrice, yearlyPrice };
};
