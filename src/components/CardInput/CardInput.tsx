import { FC, useState } from "react";
import styles from "./CardInput.module.css";

interface CardInputProps {
  value: string | undefined;
  setValue: React.Dispatch<React.SetStateAction<string>> | undefined;
  cb: (arg0: string) => string;
  limit: number;
  leftBlank: boolean;
  setLeftBlank: React.Dispatch<React.SetStateAction<boolean>>;
  lettersAllowed: boolean;
  placeholder: string;
  title: string;
  slash: boolean;
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
}) => {
  const [letterEntered, setLetterEntered] = useState(false);
  return (
    <div className={styles.cardInput}>
      <p className={styles.title}>{title}</p>

      <input
        type="text"
        placeholder={placeholder}
        value={cb(value ? value : "")}
        onChange={(e) => {
          let value = e.target.value;
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
    </div>
  );
};

export default CardInput;
