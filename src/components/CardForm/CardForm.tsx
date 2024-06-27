import { FC, useContext, useEffect, useState } from "react";
import styles from "./CardForm.module.css";
import { CardInput, ThankYou } from "../";
import { DataContext } from "../../App";

const CardForm: FC = () => {
  const currentContext = useContext(DataContext);
  const [leftBlank, setLeftBlank] = useState(true);
  const [submitClicked, setSubmitClicked] = useState(false);
  const [fulfilled, setFulfilled] = useState(false);
  const [blankInputs, setBlankInputs] = useState<number[]>([1, 1, 1, 1]);

  useEffect(() => {
    console.log(blankInputs);
    if (blankInputs.length) {
      setLeftBlank(true);
    } else if (!blankInputs.length) {
      setLeftBlank(false);
      setSubmitClicked(false);
    }
    if (!leftBlank && submitClicked) setFulfilled(true);
  }, [blankInputs, submitClicked]);

  const handleClick = () => {
    setSubmitClicked(true);
  };
  return !fulfilled ? (
    <div className={styles.cardForm}>
      <div className={styles.bigInputs}>
        <CardInput
          title="Cardholder Name"
          placeholder="e.g. Jane Appleseed"
          value={currentContext?.name}
          setValue={currentContext?.setName}
          cb={(arg) => arg}
          limit={28}
          lettersAllowed={true}
          slash={false}
          submitClicked={submitClicked}
          blankInputs={blankInputs}
          setBlankInputs={setBlankInputs}
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
          lettersAllowed={false}
          slash={false}
          submitClicked={submitClicked}
          blankInputs={blankInputs}
          setBlankInputs={setBlankInputs}
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
          lettersAllowed={false}
          slash={true}
          blankInputs={blankInputs}
          submitClicked={submitClicked}
          setBlankInputs={setBlankInputs}
        />
        <CardInput
          title="CVC"
          placeholder="e.g. 123"
          value={currentContext?.cvc}
          setValue={currentContext?.setCvc}
          cb={(arg) => arg}
          limit={3}
          lettersAllowed={false}
          slash={false}
          submitClicked={submitClicked}
          blankInputs={blankInputs}
          setBlankInputs={setBlankInputs}
        />
      </div>
      <button onClick={handleClick} type="button" className={styles.button}>
        Confirm
      </button>
    </div>
  ) : (
    <ThankYou />
  );
};

export default CardForm;
