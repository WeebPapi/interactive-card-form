import { FC } from "react";
import styles from "./ThankYou.module.css";
import { completeIcon } from "../../assets";

const ThankYou: FC = () => {
  return (
    <div className={styles.thankyou}>
      <img src={completeIcon} alt="complete" />
      <div className={styles.container}>
        <h1>Thank You!</h1>
        <p>We've added your card details</p>
      </div>
      <a href="index.html">
        <button type="submit" className={styles.button}>
          Continue
        </button>
      </a>
    </div>
  );
};

export default ThankYou;
