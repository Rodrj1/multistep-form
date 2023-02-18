import { usePlanSelection } from "../../../../features/components/SelectPlan/Plan";

interface Props {
  icon: string;
  type: string;
  price: number;
}

const Plan = ({ icon, type, price }: Props) => {
  const { billingText, billingMethod, yearlyPrice, handleAddToPay } =
    usePlanSelection({
      type,
      price,
    });

  return (
    <article className="plan" id={type} onClick={() => handleAddToPay(type)}>
      <img src={icon} alt={`${type} SVG Icon`} />
      <div>
        <h3>{type}</h3>
        <h4>
          ${billingMethod == "monthly" ? `${price}` : `${yearlyPrice}`}/
          {billingText}
        </h4>
        {billingMethod == "yearly" && <h3>2 months free</h3>}
      </div>
    </article>
  );
};

export default Plan;
