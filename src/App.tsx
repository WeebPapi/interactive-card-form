import { createContext, useState } from "react";
import styles from "./App.module.css";
import { CardBack, CardForm, CardFront } from "./components";

interface ContextInterface {
  name: string;
  cardNumber: string;
  expiry: string;
  cvc: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setCardNumber: React.Dispatch<React.SetStateAction<string>>;
  setExpiry: React.Dispatch<React.SetStateAction<string>>;
  setCvc: React.Dispatch<React.SetStateAction<string>>;
}

export const DataContext = createContext<null | ContextInterface>(null);
function App() {
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvc, setCvc] = useState("");

  return (
    <DataContext.Provider
      value={{
        name,
        setName,
        expiry,
        setExpiry,
        cardNumber,
        setCardNumber,
        cvc,
        setCvc,
      }}
    >
      <div className={styles.app}>
        <div className={styles.dispCards}>
          <CardFront />
          <CardBack />
        </div>
        <CardForm />
      </div>
    </DataContext.Provider>
  );
}

export default App;
