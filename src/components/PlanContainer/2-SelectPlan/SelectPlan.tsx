import { plans } from "../../../data/plans";
import { Plan } from "./Plan";
import { AppContext } from "../../../context/AppContext";
import { useContext } from "react";
import { handleBillingMethod } from "../../../features/helpers";
import CSS from "./SelectPlan.module.scss";
import ReactSwitch from "react-switch";

const SelectPlan = () => {
  const { billingMethod, setBillingMethod } = useContext(AppContext);

  return (
    <section className={CSS.container}>
      <h2>Select Your Plan</h2>
      <h4>You have the option of monthly or yearly billing.</h4>

      <div className={CSS.planSelection}>
        {plans.map((plan, index) => (
          <Plan
            key={index}
            icon={plan.icon}
            type={plan.type}
            price={plan.price}
          />
        ))}
      </div>

      <div className={CSS.switchContainer}>
        <span
          className={`${
            billingMethod == "monthly" ? `${CSS.active}` : `${CSS.inactive}`
          }`}
        >
          Monthly
        </span>

        <ReactSwitch
          onChange={() => handleBillingMethod(billingMethod, setBillingMethod)}
          checked={billingMethod == "monthly" ? false : true}
          offColor={"#02295a"}
          offHandleColor={"#fff"}
          onColor={"#02295a"}
          onHandleColor={"#fff"}
          checkedHandleIcon={undefined}
          uncheckedHandleIcon={undefined}
          uncheckedIcon={false}
          checkedIcon={false}
          height={20}
          width={70}
          className={"switch"}
          handleDiameter={10}
        />

        <span
          className={`${
            billingMethod == "yearly" ? `${CSS.active}` : `${CSS.inactive}`
          }`}
        >
          Yearly
        </span>
      </div>
    </section>
  );
};

export default SelectPlan;
