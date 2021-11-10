import CreditBalance from '../CreditBalance/CreditBalance';
import CheqSavBalance from '../CheqSavBalance/CheqSavBalance';

import styles from './AcctSet.module.css';


const AcctSet = () => {
  return (
    <fieldset className={styles['acct-set']}>
      <legend>Account Info</legend>
      <div>
        <label htmlFor="acct-name">Account Name</label>
        <input id='acct-name' type="text" required/>
      </div>

      <div>
        <label htmlFor="acct-type">Account Type</label>
        <select id='acct-type' name="acct-type" required>
          <option value="chequings/savings">Chequings/Savings</option>
          <option value="credit">Credit</option>
        </select>
      </div>

      <CreditBalance/>

      <CheqSavBalance/>

    </fieldset>
  )
}

export default AcctSet
