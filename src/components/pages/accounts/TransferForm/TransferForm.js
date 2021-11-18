import realtime from "../../../../firebase/realtime";
import { onValue, ref, set } from "firebase/database";
import { useState, useEffect } from "react";

import { retrieveUserAccts } from "../../../../utils/utils";

import BlackButton from "../../../UI/BlackButton/BlackButton";
import FromSet from "../FromSet/FromSet";
import ToSet from "../ToSet/ToSet";

import styles from "./TransferForm.module.css";
import rightArrow from "../../../../img/arrow-forward-outline.svg";

const TransferForm = () => {
  const [users, setUsers] = useState([]);
  const [userOptions, setUserOptions] = useState([]);

  const [fromUserSelected, setFromUserSelected] = useState("placeholder");
  const [fromUserAccts, setFromUserAccts] = useState([]);
  const [fromUserAcctSelected, setFromUserAcctSelected] =
    useState("placeholder");

  const [fromAmount, setFromAmount] = useState(0);

  const [toUserSelected, setToUserSelected] = useState("placeholder");
  const [toUserAccts, setToUserAccts] = useState([]);
  const [toUserAcctSelected, setToUserAcctSelected] = useState("placeholder");

  // On render set get accts from db and save to state to decouple from other useEffects
  useEffect(() => {
    const dbRef = ref(realtime);

    onValue(dbRef, (snapshot) => {
      const accts = snapshot.val();

      setUsers(accts);
    });
  }, []);

  // Set user options from acct names in state
  useEffect(() => {
    let userArr = [];
    for (let acct in users) {
      const user = {
        label: users[acct].name,
        value: users[acct].name.toLowerCase(),
      };

      userArr = [...userArr, user];
    }
    setUserOptions(userArr);
  }, [users]);


  useEffect(() => {
    const dbRef = ref(realtime);

    onValue(dbRef, snapshot => {
      const users = snapshot.val();


      for (let user in users) {
        console.log('fromUserSelected', fromUserSelected);
        console.log('looped name', users[user].name);
        if(users[user].name === fromUserSelected) {
          console.log(user);
        }
      }


      console.log(users)
    })
  }, [fromUserSelected]) 


  
  // Set user to transfer FROM and retrieve that users accts
  const handleFromUserSelection = (e) => {
    setFromUserSelected(e.target.value);

    retrieveUserAccts(e, setFromUserAccts);
  };

  // Set user to transfer TO and retrieve that users accts
  const handleToUserSelection = (e) => {
    setToUserSelected(e.target.value);

    retrieveUserAccts(e, setToUserAccts);
  };

  const handleFromUserAcctSelection = (e) => {
    setFromUserAcctSelected(e.target.value);
  };

  const handleToUserAcctSelection = (e) => {
    setToUserAcctSelected(e.target.value);
  };

  const handleFromAmountChange = (e) => {
    setFromAmount(e.target.value);
  };

  

  return (
    <form className={styles["transfer-form"]}>
      <h3 className={styles["form-heading"]}>Transfer</h3>

      <FromSet
        fromUserSelected={fromUserSelected}
        handleFromUserSelection={handleFromUserSelection}
        userOptions={userOptions}
        fromUserAccts={fromUserAccts}
        handleFromUserAcctSelection={handleFromUserAcctSelection}
        fromUserAcctSelected={fromUserAcctSelected}
        handleFromAmountChange={handleFromAmountChange}
      />

      <div className={styles.arrow}>
        <img src={rightArrow} alt="Right arrow" />
      </div>

      <ToSet
        toUserSelected={toUserSelected}
        handleToUserSelection={handleToUserSelection}
        userOptions={userOptions}
        toUserAccts={toUserAccts}
        handleToUserAcctSelection={handleToUserAcctSelection}
        toUserAcctSelected={toUserAcctSelected}
      />

      <div className={styles["btn-container"]}>
        <BlackButton text="Confirm" />
      </div>
    </form>
  );
};

export default TransferForm;
