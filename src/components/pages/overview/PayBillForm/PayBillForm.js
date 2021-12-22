import { useState, useEffect, useContext } from 'react';
import { ref, onValue} from 'firebase/database';

import realtime from '../../../../firebase/realtime';
import { retrieveUserAccts, capitalize } from '../../../../utils/utils';

import UsersContext from '../../../../store/users-context';

import PayFromSet from '../PayFromSet/PayFromSet';
import PayBillSet from '../PayBillSet/PayBillSet';
import BlackButton from '../../../UI/BlackButton/BlackButton'; 

import styles from './PayBillForm.module.css';
import rightArrow from '../../../../img/arrow-forward-outline.svg';

const PayBillForm = () => {

  const usersCtx = useContext(UsersContext);

  const { users } = usersCtx;

  const [userOptions, setUserOptions] = useState([]);

  const [fromUserSelected, setFromUserSelected] = useState("placeholder");
  const [fromUserAccts, setFromUserAccts] = useState([]);
  const [fromUserAcctSelected, setFromUserAcctSelected] =
    useState("placeholder");

  const [fromAmount, setFromAmount] = useState(0);
  const [fromUserKey, setFromUserKey] = useState("");

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
    const dbRef = ref(realtime, 'users');

    onValue(dbRef, (snapshot) => {
      const users = snapshot.val();
      for (let user in users) {
        if (users[user].name === capitalize(fromUserSelected)) {
          setFromUserKey(user);
        }
      }

    });
  }, [fromUserSelected]);

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

  return (
    <form  className={styles["pay-form"]}>
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

      <PayBillSet/>

      <div className={styles["btn-container"]}>
        <BlackButton text="Confirm" type="submit" />
      </div>
    </form>
  )
}

export default PayBillForm
