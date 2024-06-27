import { FC, useState } from "react";
import styles from "./CardInput.module.css";

interface CardInputProps {
  value: string | undefined;
  setValue: React.Dispatch<React.SetStateAction<string>> | undefined;
  cb: (arg0: string) => string;
  limit: number;

  lettersAllowed: boolean;
  placeholder: string;
  title: string;
  slash: boolean;
  submitClicked: boolean;
}

const CardInput: FC<CardInputProps> = ({
  value,
  setValue,
  cb,
  limit,
  lettersAllowed,
  title,
  placeholder,
  slash,
  submitClicked,
}) => {
  const [letterEntered, setLetterEntered] = useState(false);
  const [leftBlank, setLeftBlank] = useState(true);
  return (
    <div className={styles.cardInput}>
      <p className={styles.title}>{title}</p>

      <input
        type="text"
        placeholder={placeholder}
        value={cb(value ? value : "")}
        onChange={(e) => {
          let value = e.target.value;
          if (!(value === "")) {
            setLeftBlank(false);
          } else {
            setLeftBlank(true);
          }
          const regex = slash ? /[^\d\/\s]/ : /[^\d\s]/;
          const containsInvalidChars = regex.test(value);
          setLetterEntered(!lettersAllowed && containsInvalidChars);
          if (value.length === limit + 1) return;
          setValue ? setValue(value) : null;
        }}
      />
      {letterEntered ? (
        <p className={styles.error}>Please Only Enter Numbers</p>
      ) : null}
      {submitClicked && leftBlank ? (
        <p className={styles.error}>Cannot Be Blank</p>
      ) : null}
    </div>
  );
};

export default CardInput;
