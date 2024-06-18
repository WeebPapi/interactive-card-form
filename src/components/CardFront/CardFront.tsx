import { FC, useContext } from "react";
import styles from "./CardFront.module.css";
import { cardLogo } from "../../assets";

import { DataContext } from "../../App";

const CardFront: FC = () => {
  const currentContext = useContext(DataContext);
  return (
    <div className={styles.cardFront}>
      <img className={styles.logo} src={cardLogo} alt="logo" />
      <p className={styles.number}>
        {currentContext?.cardNumber
          ? currentContext.cardNumber
          : "0000 0000 0000 0000"}
      </p>
      <div className={styles.bottomText}>
        <p className={styles.holderName}>
          {currentContext?.name
            ? currentContext.name.toUpperCase()
            : "JANE APPLESEED"}
        </p>
        <p className={styles.expiryDate}>
          {currentContext?.expiry ? currentContext.expiry : "00/00"}
        </p>
      </div>
    </div>
  );
};

export default CardFront;
