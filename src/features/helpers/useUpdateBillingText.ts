interface Props {
    billingMethod: string;
}

export const useUpdateBillingText = ({billingMethod}: Props) => {
  const billingText = billingMethod == "monthly" ? "mo" : "yr";

  return {
    billingText,
  };
};
