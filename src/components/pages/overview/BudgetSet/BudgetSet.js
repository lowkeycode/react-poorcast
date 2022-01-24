import { useState } from 'react';
import { ref, push } from 'firebase/database';

import realtime from '../../../../firebase/realtime';
import { capitalize } from '../../../../utils/utils';

import styles from './BudgetSet.module.css';
import saveSvg from '../../../../img/checkmark-circle-outline.svg';

const BudgetSet = ({hideBudgetAdd}) => {

  const [budgetPerson, setBudgetPerson] = useState({});
  const [budgetBill, setBudgetBill] = useState('');
  const [budgetAmount, setBudgetAmount] = useState(0);
  const [budgetPayOn, setPayBudgetOn] = useState({});

  const handleBudgetPerson = (e) => {
    setBudgetPerson(e.target.value);
  }
  
  const handleBudgetBillChange = (e) => {
    setBudgetBill(e.target.value);
  }

  const handleBudgetAmount = (e) => {
    setBudgetAmount(e.target.value);
  }

  const handleBudgetPayOn = (e) => {
    setPayBudgetOn(e.target.value);
  }

  const saveBudget = () => {
    
    const budgetObj = {
      budgetPerson: capitalize(budgetPerson),
      budgetBill: capitalize(budgetBill),
      budgetAmount,
      budgetPayOn
    }

    const billsRef = ref(realtime, 'budget');

    push(billsRef, budgetObj)

    hideBudgetAdd();
  }

  return (
    <form className={styles.form} onSubmit={saveBudget}>
      <fieldset className={styles.set}>
        <legend>Add Bill</legend>

        <div className={styles["save-container"]}>
          <p>Save</p>
          <button type="submit" className={styles.save}>
            <img src={saveSvg} alt="Save account" />
          </button>
        </div>

        <div>
          <label htmlFor="person">Person</label>
          <input onChange={handleBudgetPerson} type="text" required/>
        </div>

        <div>
          <label htmlFor="bill">Bill</label>
          <input onChange={handleBudgetBillChange} type="text" required/>
        </div>

        <div>
          <label htmlFor="amount">Amount</label>
          <input onChange={handleBudgetAmount} type="number" required/>
        </div>

        <div>
          <label htmlFor="pay-on">Pay On</label>
          <input onChange={handleBudgetPayOn} type="date" required/>
        </div>
      </fieldset>
    </form>
  )
}

export default BudgetSet
