import realtime from "../../../../firebase/realtime";
import { onValue, ref, update, get } from "firebase/database";
import { useState, useEffect } from "react";

import { retrieveUserAccts, capitalize } from "../../../../utils/utils";

import BlackButton from "../../../UI/BlackButton/BlackButton";
import FromSet from "../FromSet/FromSet";
import ToSet from "../ToSet/ToSet";

import styles from "./TransferForm.module.css";
import rightArrow from "../../../../img/arrow-forward-outline.svg";

const TransferForm = ({ setModalOpen }) => {
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

  const [fromUserKey, setFromUserKey] = useState('');
  const [toUserKey, setToUserKey] = useState('');

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

        if(users[user].name === capitalize(fromUserSelected)) {
          setFromUserKey(user);
        }
      }
    })
  }, [fromUserSelected]) 

  useEffect(() => {
    const dbRef = ref(realtime);

    onValue(dbRef, snapshot => {
      const users = snapshot.val();


      for (let user in users) {

        if(users[user].name === capitalize(toUserSelected)) {
          setToUserKey(user);
        }
      }
    })
  }, [toUserSelected]) 

  
  const subtractFromAcct = () => {
    if(!fromAmount) return;

    const acctRef = ref(realtime, fromUserKey);

    let acctPath = '';

    onValue(acctRef, snapshot => {
      const acct = snapshot.val();
      
      const acctIndex = acct.accts.findIndex((acctObj) => {
        return acctObj.acctName === capitalize(fromUserAcctSelected);
      })

      acctPath = `${fromUserKey}/accts/${acctIndex}/`;
      console.log(acctPath);
    })


    const subtractRef = ref(realtime, acctPath);

    onValue(subtractRef, snapshot => {
      const targetAcct = snapshot.val();
      console.log(targetAcct);
      if (targetAcct.acctType === 'chequings/savings') {
        const balance = targetAcct.acctBalance;
        update(ref(realtime, acctPath), {
          acctBalance: balance - fromAmount
        })
        console.log('cheq')
      } else if (targetAcct.acctType === 'credit') {
        const balance = targetAcct.acctSpent;
        update(ref(realtime, acctPath), {
          acctSpent: (+balance) + (+fromAmount)
        })
        console.log('credit')
      }
    }, {
      onlyOnce: true
    })
  }

  const addToAcct = () => {
    if(!fromAmount) return;
    
    const acctRef = ref(realtime, toUserKey);

    let acctPath = '';

    onValue(acctRef, snapshot => {
      const acct = snapshot.val();
      
      const acctIndex = acct.accts.findIndex((acctObj) => {
        return acctObj.acctName === capitalize(toUserAcctSelected);
      })

      acctPath = `${toUserKey}/accts/${acctIndex}/`;
      console.log(acctPath);
    })


    const subtractRef = ref(realtime, acctPath);

    onValue(subtractRef, snapshot => {
      const targetAcct = snapshot.val();
      console.log(targetAcct);
      if (targetAcct.acctType === 'chequings/savings') {
        const balance = targetAcct.acctBalance;
        update(ref(realtime, acctPath), {
          acctBalance: (+balance) + (+fromAmount)
        })
        console.log('cheq')
      } else if (targetAcct.acctType === 'credit') {
        const balance = targetAcct.acctSpent;
        update(ref(realtime, acctPath), {
          acctSpent: balance - fromAmount
        })
        console.log('credit')
      }
    }, {
      onlyOnce: true
    })
  }

  useEffect(() => {
    const exitModal = (e) => {
      if(e.key === "Escape") {
        setModalOpen(false);
      }
    }

    window.addEventListener('keydown', exitModal)
    return () => window.removeEventListener('keydown', exitModal);
  })


  const handleTransfer = (e) => {
    e.preventDefault();
    subtractFromAcct();
    addToAcct();
    setModalOpen(false);
  }
  
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
    <form  onSubmit={handleTransfer} className={styles["transfer-form"]}>
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
        <BlackButton text="Confirm" type='submit'/>
      </div>
    </form>
  );
};

export default TransferForm;
