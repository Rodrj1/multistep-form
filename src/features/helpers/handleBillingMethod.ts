export const handleBillingMethod = (
  billingMethod: string,
  setBillingMethod: React.Dispatch<React.SetStateAction<string>>
) => {
  const changeBillingMethod = billingMethod == "monthly" ? "yearly" : "monthly";
  setBillingMethod(changeBillingMethod);
};
