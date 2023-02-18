import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { Addon } from "./Add-on";
import CSS from "./PickAddons.module.scss";

const PickAddons = () => {
  const {
    onlineService,
    setOnlineService,
    localStorage,
    setLocalStorage,
    customProfile,
    setCustomProfile,
  } = useContext(AppContext);

  return (
    <section className={CSS.container}>
      <h2>Pick add-ons</h2>
      <h4>Add-ons help enhance your gaming experience.</h4>

      <div className={CSS.addonSelection}>
        <Addon addon={onlineService} setAddon={setOnlineService} />
        <Addon addon={localStorage} setAddon={setLocalStorage} />
        <Addon addon={customProfile} setAddon={setCustomProfile} />
      </div>
    </section>
  );
};

export default PickAddons;
