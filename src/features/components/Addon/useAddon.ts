import { useContext, useEffect } from "react";
import { AppContext } from "../../../context/AppContext";
import { AddonProps } from "../../../types";
import { useUpdateBillingText } from "../../helpers/useUpdateBillingText";

interface Props {
  addon: AddonProps;
  setAddon: React.Dispatch<React.SetStateAction<AddonProps>>;
  monthlyPrice: number;
  yearlyPrice: number;
}

export const useAddon = ({
  addon,
  setAddon,
  monthlyPrice,
  yearlyPrice,
}: Props) => {
  const { billingMethod, setAddonsPrice } = useContext(AppContext);
  const { billingText } = useUpdateBillingText({ billingMethod });

  const handleCheckAddon = (checked: boolean) => {
    const amountPayed = billingMethod == "monthly" ? monthlyPrice : yearlyPrice;
    const updateAmountPayed = checked == false ? amountPayed : -amountPayed;

    setAddonsPrice((current) => current + updateAmountPayed);

    const updateAddon = { ...addon, checked: !checked };

    setAddon(updateAddon);
  };

  useEffect(() => {
    const updateAddon = document.getElementById(addon.id);
    if (updateAddon) {
      if (addon.checked) {
        updateAddon.style.borderColor = "#473dff";
      } else if (addon.checked == false) {
        updateAddon.style.borderColor = "#d6d9e6";
      }
    }
  }, [addon.checked]);

  return { billingText, handleCheckAddon };
};
