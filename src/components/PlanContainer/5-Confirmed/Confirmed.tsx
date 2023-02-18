import confirmed from "../../../assets/icon-thank-you.svg";

const Confirmed = () => {
  return (
    <section className="confirmed">
      <img src={confirmed} alt="'Thank you' icon" />
      <h2>Thank you</h2>
      <h4>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@lorengaming.com
      </h4>
    </section>
  );
};

export default Confirmed;
