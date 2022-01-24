import { useState } from 'react';
import { ref, push} from "firebase/database";
import { Navigate } from 'react-router-dom';

import realtime from '../../../../firebase/realtime';
import { capitalize } from '../../../../utils/utils';

import GreyCard from '../../../UI/GreyCard/GreyCard';
import AcctSet from '../AcctSet/AcctSet';
import BlackButton from '../../../UI/BlackButton/BlackButton';

import styles from './AddPersonForm.module.css';
import addAccountSvg from '../../../../img/add-circle-outline.svg';



const AddPersonForm = () => {

  const [userAccts, setUserAccts] =  useState([]);
  const [userName, setUserName] = useState('');
  const [accts, setAccts] = useState([]);
  const [userSaved, setUserSaved] = useState(false);

  const addAcct = (e) => {
    // console.log(e);
    const newAccts = [...userAccts, {}]
    setUserAccts(newAccts);
  }

  const addPersonSave = () => {

    const dbRef = ref(realtime, 'users');

    push(dbRef, {
      name: capitalize(userName),
      accts: accts
    });

    setUserSaved(true);
  }

  const onNameChange = (e) => {
    setUserName(e.target.value)
  }

  const getAcctInfo = (acctName, acctType, acctSpent, acctLimit, acctBalance) => {
    
    const acctObj = {
      acctName: capitalize(acctName),
      acctType,
      acctSpent,
      acctLimit,
      acctBalance
    }
    const newAcctsArr = [...accts, acctObj]
  
    setAccts(newAcctsArr);
  }

  // console.log(accts);
 

  return (
    <GreyCard>
      {
        userSaved === false ? (
          <form className={styles['add-person']} onSubmit={addPersonSave}>

            <div className={styles['name']}>
              <label htmlFor="name" className={styles['name__label']}>User Name</label>
              <input className={styles['name__input']} type="text" id='name' required onChange={onNameChange}/>
            </div>

            <div className={styles.accts}>
              <div className={styles['accts__heading']}>
                <h3 className={styles['accts__heading--heading']}>Add Accounts</h3>

                <button type="button" onClick={addAcct} className={styles['accts__heading--btn']}>
                  <img src={addAccountSvg} alt="Add new account for user"/>
                </button>
              </div>

              <div className={styles['acct-sets']}>
                {
                  userAccts.map((acct, i) => <AcctSet key={i} getAcctInfo={getAcctInfo}/>)
                }
              </div>

            </div>

            <BlackButton text='Save User' type='submit'/>
          </form>
        ) : (
          <Navigate to="/"/>
        )
      }
    </GreyCard>
  )
}

export default AddPersonForm
