import { usePersonalInfo } from "../../../features/components/PersonalInfo";
import CSS from "./PersonalInfo.module.scss";

const PersonalInfo = () => {
  const { displayInputs } = usePersonalInfo();

  return (
    <section>
      <form className={CSS.container}>
        <h2>Personal info</h2>
        <h4>Please provide your name, email address, and phone number.</h4>

        {displayInputs}
      </form>
    </section>
  );
};

export default PersonalInfo;
