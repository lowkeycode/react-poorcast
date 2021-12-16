import { useState } from 'react';
import { ref, push } from 'firebase/database';
import realtime from '../../../../firebase/realtime';

import styles from './BillsSet.module.css';
import saveSvg from '../../../../img/checkmark-circle-outline.svg';

const BillsSet = ({hideBillAdd}) => {

  const [bill, setBill] = useState('');
  const [billDue, setBillDue] = useState({});
  const [billAmount, setBillAmount] = useState(0);
  const [billPayOn, setPayBillOn] = useState({});

  const handleBillChange = (e) => {
    setBill(e.target.value);
  }

  const handleBillDue = (e) => {
    setBillDue(e.target.value);
  }

  const handleBillAmount = (e) => {
    setBillAmount(e.target.value);
  }

  const handleBillPayOn = (e) => {
    setPayBillOn(e.target.value);
  }

  const saveBill = () => {
    const billObj = {
      bill,
      billDue,
      billAmount,
      billPayOn
    }

    const billsRef = ref(realtime, 'bills');

    push(billsRef, billObj)

    // getBillInfo(bill, billDue, billAmount, billPayOn);
    hideBillAdd();
  }

  

  return (
    <form className={styles.form}>
      <fieldset className={styles.set}>
        <legend>Add Bill</legend>

        <div className={styles["save-container"]}>
          <p>Save</p>
          <button onClick={saveBill} type="button" className={styles.save}>
            <img src={saveSvg} alt="Save account" />
          </button>
        </div>

        <div>
          <label htmlFor="bill">Bill</label>
          <input onChange={handleBillChange} type="text" required/>
        </div>

        <div>
          <label htmlFor="due">Due</label>
          <input onChange={handleBillDue} type="date" required/>
        </div>

        <div>
          <label htmlFor="amount">Amount</label>
          <input onChange={handleBillAmount} type="number" required/>
        </div>

        <div>
          <label htmlFor="pay-on">Pay On</label>
          <input onChange={handleBillPayOn} type="date" required/>
        </div>
      </fieldset>
    </form>
  )
}

export default BillsSet
