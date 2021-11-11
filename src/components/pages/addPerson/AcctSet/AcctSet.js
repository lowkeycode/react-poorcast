import { useState } from 'react';

import CreditBalance from '../CreditBalance/CreditBalance';
import CheqSavBalance from '../CheqSavBalance/CheqSavBalance';

import styles from './AcctSet.module.css';
import saveSvg from '../../../../img/checkmark-circle-outline.svg';


const AcctSet = ({getAcctInfo}) => {

  const [acctName, setAcctName]= useState('');
  const [acctType, setAcctType] = useState('placeholder');
  const [acctSpent, setAcctSpent] = useState(0);
  const [acctLimit, setAcctLimit] = useState(0);
  const [acctBalance, setAcctBalance] = useState(0);


  const selectAccount = (e) => {
    setAcctType(e.target.value);
  }

  const nameAccount = (e) => {
    setAcctName(e.target.value);
  }

  const onAcctSpend = (e) => {
    setAcctSpent(e.target.value)
  }

  const onAcctLimit = (e) => {
    setAcctLimit(e.target.value)
  }

  const onAcctBalance = (e) => {
    setAcctBalance(e.target.value);
  }

  const saveAcct = (e) => {
    getAcctInfo(acctName, acctType, acctSpent, acctLimit, acctBalance);
    
  }

  
  return (
    <fieldset className={styles['acct-set']}>
      <legend>Account Info</legend>
      <button type='button' className={styles.save} onClick={saveAcct}>
        <img src={saveSvg} alt="Save account"/>
      </button>
      <div>
      <label htmlFor="acct-name">Account Name</label>
      <input id='acct-name' type="text" required onChange={nameAccount}/>
      </div>
      
      <div>
      <label htmlFor="acct-type">Account Type</label>
      <select onChange={selectAccount} value={acctType} id='acct-type' name="acct-type" required>
      <option value="placeholder" disabled>Select Type</option>
      <option value="chequings/savings">Chequings/Savings</option>
      <option value="credit">Credit</option>
      </select>
      </div>
      
      {
        acctType === 'credit' && <CreditBalance onAcctLimit={onAcctLimit} onAcctSpend={onAcctSpend}/>
      }
      {
        acctType === 'chequings/savings' && <CheqSavBalance onAcctBalance={onAcctBalance}/>
      }
      
      
      
        
      </fieldset>
      )
    }
    
export default AcctSet
