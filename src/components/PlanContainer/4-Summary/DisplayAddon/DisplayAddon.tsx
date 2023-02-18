import { useAddonUpdater } from "../../../../features/components/Addon";
import { AddonProps } from "../../../../types";

interface Props {
  addon: AddonProps;
  billing: string;
  CSS: CSSModuleClasses;
  setAddon: React.Dispatch<React.SetStateAction<AddonProps>>;
}

const DisplayAddon = ({ addon, setAddon, billing, CSS }: Props) => {
  const {} = useAddonUpdater({ addon, setAddon });

  return (
    <article className={CSS.item}>
      <div className={CSS.column}>
        <h4>{addon.name}</h4>
      </div>
      <div className={CSS.column}>
        <h5>
          +${addon.price}/{billing}
        </h5>
      </div>
    </article>
  );
};

export default DisplayAddon;
