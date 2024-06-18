import { FC, useContext, useState } from "react";
import styles from "./CardForm.module.css";
import { CardInput } from "../";
import { DataContext } from "../../App";

const CardForm: FC = () => {
  const currentContext = useContext(DataContext);
  const [leftBlank, setLeftBlank] = useState(false);
  return (
    <div className={styles.cardForm}>
      <div className={styles.bigInputs}>
        <CardInput
          title="Cardholder Name"
          placeholder="e.g. Jane Appleseed"
          value={currentContext?.name}
          setValue={currentContext?.setName}
          cb={(arg) => arg}
          limit={28}
          leftBlank={leftBlank}
          setLeftBlank={setLeftBlank}
          lettersAllowed={true}
          slash={false}
        />
        <CardInput
          title="Card Number"
          placeholder="e.g. 1234 5678 9123 0000"
          value={currentContext?.cardNumber}
          setValue={currentContext?.setCardNumber}
          cb={(value) => {
            value = value.replace(/\s+/g, "");
            return value.match(/.{1,4}/g)?.join(" ") || value;
          }}
          limit={19}
          leftBlank={leftBlank}
          setLeftBlank={setLeftBlank}
          lettersAllowed={false}
          slash={false}
        />
      </div>
      <div className={styles.smallInputs}>
        <CardInput
          title="Exp. Date (MM/YY)"
          placeholder="MM/YY"
          value={currentContext?.expiry}
          setValue={currentContext?.setExpiry}
          cb={(value) => {
            value = value.replace(/\s+/g, "");
            if (value.length === 2 && value.match(/^\d{2}$/)) {
              value = `${value}/`;
            }
            return value;
          }}
          limit={5}
          leftBlank={leftBlank}
          setLeftBlank={setLeftBlank}
          lettersAllowed={false}
          slash={true}
        />
        <CardInput
          title="CVC"
          placeholder="e.g. 123"
          value={currentContext?.cvc}
          setValue={currentContext?.setCvc}
          cb={(arg) => arg}
          limit={3}
          leftBlank={leftBlank}
          setLeftBlank={setLeftBlank}
          lettersAllowed={false}
          slash={false}
        />
      </div>
    </div>
  );
};

export default CardForm;
