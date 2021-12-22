import { useState, useEffect, useContext } from "react";
import { ref, onValue, update } from "firebase/database";

import realtime from "../../../../firebase/realtime";
import { retrieveUserAccts, capitalize } from "../../../../utils/utils";

import UsersContext from "../../../../store/users-context";
import OverlaysContext from "../../../../store/overlays-context";

import PayFromSet from "../PayFromSet/PayFromSet";
import PayBillSet from "../PayBillSet/PayBillSet";
import BlackButton from "../../../UI/BlackButton/BlackButton";

import styles from "./PayBillForm.module.css";
import rightArrow from "../../../../img/arrow-forward-outline.svg";

const PayBillForm = () => {
  const usersCtx = useContext(UsersContext);
  const overlaysCtx = useContext(OverlaysContext);

  const { users } = usersCtx;

  const [userOptions, setUserOptions] = useState([]);

  const [fromUserSelected, setFromUserSelected] = useState("placeholder");
  const [fromUserAccts, setFromUserAccts] = useState([]);
  const [fromUserAcctSelected, setFromUserAcctSelected] =
    useState("placeholder");

  const [fromAmount, setFromAmount] = useState(0);
  const [fromUserKey, setFromUserKey] = useState("");

  const [bills, setBills] = useState([]);
  const [billOptions, setBillOptions] = useState([]);
  const [billSelected, setBillSelected] = useState('placeholder')
  const [payAmount, setPayAmount] = useState(0);

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
    const dbRef = ref(realtime, "users");

    onValue(dbRef, (snapshot) => {
      const users = snapshot.val();
      for (let user in users) {
        if (users[user].name === capitalize(fromUserSelected)) {
          setFromUserKey(user);
        }
      }
    });
  }, [fromUserSelected]);

  const subtractFromAcct = () => {
    if (!fromAmount) return;

    const acctRef = ref(realtime, `users/${fromUserKey}`);

    console.log(acctRef);

    let acctPath = "";

    onValue(acctRef, (snapshot) => {
      const acct = snapshot.val();

      console.log(acct);

      const acctIndex = acct.accts.findIndex((acctObj) => {
        return acctObj.acctName === capitalize(fromUserAcctSelected);
      });

      acctPath = `users/${fromUserKey}/accts/${acctIndex}/`;

      console.log(acctPath);
    });

    const subtractRef = ref(realtime, acctPath);

    onValue(
      subtractRef,
      (snapshot) => {
        const targetAcct = snapshot.val();

        if (targetAcct.acctType === "chequings/savings") {
          const balance = targetAcct.acctBalance;
          update(ref(realtime, acctPath), {
            acctBalance: balance - fromAmount,
          });
        } else if (targetAcct.acctType === "credit") {
          const balance = targetAcct.acctSpent;
          update(ref(realtime, acctPath), {
            acctSpent: +balance + +fromAmount,
          });
        }
      },
      {
        onlyOnce: true,
      }
    );
  };

  useEffect(() => {
    const billsRef = ref(realtime, "bills");

    onValue(billsRef, (snapshot) => {
      const billsSnapshot = snapshot.val();

      setBills(billsSnapshot);
    });
  }, []);

  useEffect(() => {
    let billArr = [];
    for (let bill in bills) {
      const billOption = {
        label: bills[bill].bill,
        value: bills[bill].bill.toLowerCase(),
      };

      billArr = [...billArr, billOption];
    }
    setBillOptions(billArr);
  }, [bills]);

  const payBill = () => {
    if(!fromAmount || !payAmount) return;
  }

  console.log(billSelected);


  const handleFromUserSelection = (e) => {
    setFromUserSelected(e.target.value);

    retrieveUserAccts(e, setFromUserAccts);
  };

  const handleFromUserAcctSelection = (e) => {
    setFromUserAcctSelected(e.target.value);
  };

  const handleFromAmountChange = (e) => {
    setFromAmount(e.target.value);
  };

  const handleBillSelection = (e) => {
    setBillSelected(e.target.value);
  }

  const handlePayAmountChange = (e) => {
    setPayAmount(e.target.value);
  };

  const handlePayBill = (e) => {
    e.preventDefault();
    subtractFromAcct();
    // ! Call pay bill function here
    overlaysCtx.setPayBillModalOpen(false);
  };

  return (
    <form onSubmit={handlePayBill} className={styles["pay-form"]}>
      <h3 className={styles["form-heading"]}>Pay Bill</h3>

      <PayFromSet
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

      <PayBillSet
        billOptions={billOptions}
        billSelected={billSelected}
        handleBillSelection={handleBillSelection}
        handlePayAmountChange={handlePayAmountChange}
      />

      <div className={styles["btn-container"]}>
        <BlackButton text="Confirm" type="submit" />
      </div>
    </form>
  );
};

export default PayBillForm;
