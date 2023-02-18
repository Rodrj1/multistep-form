import { useAddonUpdater } from "../../../../features/components/Addon";
import { useAddon } from "../../../../features/components/Addon/useAddon";
import { AddonProps } from "../../../../types";

interface Props {
  addon: AddonProps;
  setAddon: React.Dispatch<React.SetStateAction<AddonProps>>;
}

const Addon = ({ addon, setAddon }: Props) => {
  const { monthlyPrice, yearlyPrice } = useAddonUpdater({ addon, setAddon });
  const { billingText, handleCheckAddon } = useAddon({
    addon,
    setAddon,
    monthlyPrice,
    yearlyPrice,
  });

  return (
    <article id={addon.id}>
      <form>
        <input
          type="checkbox"
          readOnly
          onClick={() => handleCheckAddon(addon.checked)}
          checked={addon.checked}
        />
      </form>

      <div>
        <h3>{addon.name}</h3>
        <h4>{addon.info}</h4>
      </div>

      <div>
        ${addon.price}/{billingText}
      </div>
    </article>
  );
};

export default Addon;
