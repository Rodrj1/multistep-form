import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { handleBillingMethod } from "../../../features/helpers";
import { useUpdateBillingText } from "../../../features/helpers/useUpdateBillingText";
import { DisplayAddon } from "./DisplayAddon";
import CSS from "./Summary.module.scss";

const Summary = () => {
  const {
    billingMethod,
    setBillingMethod,
    planSelected,
    planPrice,
    total,
    onlineService,
    setOnlineService,
    localStorage,
    setLocalStorage,
    customProfile,
    setCustomProfile,
  } = useContext(AppContext);

  const header = billingMethod == "monthly" ? "(Monthly)" : "(Yearly)";
  const { billingText } = useUpdateBillingText({ billingMethod });

  return (
    <section className={CSS.container}>
      <div className={CSS.header}>
        <h2>Finishing up</h2>
        <h4>Double-check everything looks OK before confirming.</h4>
      </div>

      <div className={CSS.summary}>
        <div className={CSS.item}>
          <div className={CSS.column}>
            <h3>
              {planSelected} {header}
            </h3>
            <h4
              onClick={() =>
                handleBillingMethod(billingMethod, setBillingMethod)
              }
            >
              Change
            </h4>
          </div>
          <div className={CSS.column}>
            <h3>
              ${planPrice}/{billingText}
            </h3>
          </div>
        </div>

        {onlineService.checked && (
          <DisplayAddon
            addon={onlineService}
            setAddon={setOnlineService}
            billing={billingText}
            CSS={CSS}
          />
        )}

        {localStorage.checked && (
          <DisplayAddon
            addon={localStorage}
            setAddon={setLocalStorage}
            billing={billingText}
            CSS={CSS}
          />
        )}

        {customProfile.checked && (
          <DisplayAddon
            addon={customProfile}
            setAddon={setCustomProfile}
            billing={billingText}
            CSS={CSS}
          />
        )}
      </div>

      <div className={CSS.total}>
        <h4>Total ({billingMethod == "monthly" ? "per month" : "per year"})</h4>
        <span>
          +${total}/{billingText}
        </span>
      </div>
    </section>
  );
};

export default Summary;
