import { FC, useContext } from "react";
import styles from "./CardBack.module.css";
import { DataContext } from "../../App";

const CardBack: FC = () => {
  const currentContext = useContext(DataContext);
  return (
    <div className={styles.cardBack}>
      <p>{currentContext?.cvc ? currentContext.cvc : "000"}</p>
    </div>
  );
};

export default CardBack;
