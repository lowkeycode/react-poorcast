import { useState } from "react";

import AcctEdit from '../AcctEdit/AcctEdit';

import styles from "./AcctSet.module.css";


const AcctSet = ({ getAcctInfo }) => {
  const [acctName, setAcctName] = useState("");
  const [acctType, setAcctType] = useState("placeholder");
  const [acctSpent, setAcctSpent] = useState(0);
  const [acctLimit, setAcctLimit] = useState(0);
  const [acctBalance, setAcctBalance] = useState(0);
  const [savedAcct, setSavedAcct] = useState(false);

  const selectAccount = (e) => {
    setAcctType(e.target.value);
  };

  const nameAccount = (e) => {
    setAcctName(e.target.value);
  };

  const onAcctSpend = (e) => {
    setAcctSpent(e.target.value);
  };

  const onAcctLimit = (e) => {
    setAcctLimit(e.target.value);
  };

  const onAcctBalance = (e) => {
    setAcctBalance(e.target.value);
  };

  const saveAcct = () => {
    getAcctInfo(acctName, acctType, acctSpent, acctLimit, acctBalance);
    setSavedAcct(true);
  };

  console.log(savedAcct);

  return (
    <fieldset className={styles["acct-set"]}>
      {
        savedAcct === false ? (
          <AcctEdit selectAccount={selectAccount} nameAccount={nameAccount} onAcctSpend={onAcctSpend} onAcctLimit={onAcctLimit} onAcctBalance={onAcctBalance} saveAcct={saveAcct} acctType={acctType}/>
        ) : (
          <p className={styles.saved}>Saved!</p>
        )
      }
    </fieldset>
  );
};

export default AcctSet;
