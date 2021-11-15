import { useState } from 'react';
import { ref, push} from "firebase/database";

import realtime from '../../../../firebase/realtime';
import GreyCard from '../../../UI/GreyCard/GreyCard';
import AcctSet from '../AcctSet/AcctSet';

import styles from './AddPersonForm.module.css';
import addAccountSvg from '../../../../img/add-circle-outline.svg';



const AddPersonForm = () => {

  const [userAccts, setUserAccts] =  useState([]);
  const [userName, setUserName] = useState('');
  const [accts, setAccts] = useState([]);

  const addAcct = () => {
    const newAccts = [...userAccts, {}]
    setUserAccts(newAccts);
  }

  const addPersonSave = (e) => {
    const dbRef = ref(realtime);

    push(dbRef, {
      name: userName,
      accts: accts
    });
  }

  const onNameChange = (e) => {
    setUserName(e.target.value)
  }

  const getAcctInfo = (acctName, acctType, acctSpent, acctLimit, acctBalance) => {
    
    const acctObj = {
      acctName,
      acctType,
      acctSpent,
      acctLimit,
      acctBalance
    }
    const newAcctsArr = [...accts, acctObj]
  
    setAccts(newAcctsArr);
  }

  console.log(accts);
 

  return (
    <GreyCard>
      <form className={styles['add-person']} onSubmit={addPersonSave}>

        <div className={styles['name']}>
          <label htmlFor="name" className={styles['name__label']}>User Name</label>
          <input className={styles['name__input']} type="text" id='name' required onChange={onNameChange}/>
        </div>

        <div className={styles.accts}>
          <div className={styles['accts__heading']}>
            <h3 className={styles['accts__heading--heading']}>Add Accounts</h3>

            <button onClick={addAcct} className={styles['accts__heading--btn']}>
              <img src={addAccountSvg} alt="Add new account for user"/>
            </button>
          </div>

          <div className={styles['acct-sets']}>
            {
              userAccts.map((acct, i) => <AcctSet key={i} getAcctInfo={getAcctInfo}/>)
            }
          </div>

        </div>

        <button className={styles['submit']} type="submit">Save User</button>
      </form>
    </GreyCard>
  )
}

export default AddPersonForm
