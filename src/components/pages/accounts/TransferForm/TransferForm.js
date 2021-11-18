import realtime from '../../../../firebase/realtime';
import { onValue, ref } from 'firebase/database';
import { useState, useEffect } from 'react';

import BlackButton from '../../../UI/BlackButton/BlackButton';

import styles from './TransferForm.module.css';
import rightArrow from '../../../../img/arrow-forward-outline.svg';

const TransferForm = () => {
  const [users, setUsers] = useState([]);
  const [userOptions, setUserOptions] = useState([]);
  const [userSelected, setUserSelected] = useState('placeholder')

  // On render set get accts from db and save to state to decouple from other useEffects
  useEffect(() => {

    const dbRef = ref(realtime);

    onValue(dbRef, snapshot => {
      const accts = snapshot.val();
      
      setUsers(accts);
    })
    
  }, [])

  // Set user options from acct names in state
  useEffect(() => {
    let userArr = [];
    for (let acct in users) {

      console.log(userArr);

      const user = {
        label: users[acct].name,
        value: users[acct].name.toLowerCase()
      };

      console.log(user)

      userArr = [...userArr, user];

    }
    setUserOptions(userArr)
  }, [users])
  
  console.log(userOptions);

  const handleUserSelection = (e) => {
    setUserSelected(e.target.value);
  }


  //  todo create FromSet & ToSet components

  return (
    <form className={styles['transfer-form']}>
      <h3 className={styles['form-heading']}>Transfer</h3>
      <fieldset className={styles['acct-set']}>
        <legend>From</legend>

        <div>
          <label htmlFor="user">User</label>
          <select value={userSelected} onChange={handleUserSelection} name="user" id="user">
            <option value="placeholder" disabled>Select User</option>
            {
              userOptions.map((option, i) => {
                return <option key={i} value={option.value}>{option.label}</option>
              })
            }
          </select>
        </div>

        <div>
          <label htmlFor="user">Account</label>
          <select name="user" id="user">
            
          </select>
        </div>

        <div>
          <label htmlFor="amount">Amount</label>
          <input type="number"/>
        </div>

      </fieldset>
      <div className={styles.arrow}>
        <img src={rightArrow} alt="Right arrow"/>
      </div>
      <fieldset className={styles['acct-set']}>
        <legend>To</legend>

        <div>
          <label htmlFor="user">User</label>
          <select name="user" id="user">
            
          </select>
        </div>

        <div>
          <label htmlFor="user">Account</label>
          <select name="user" id="user">
            
          </select>
        </div>

      </fieldset>

      <div className={styles['btn-container']}>
        <BlackButton text='Confirm'/>
      </div>
    </form>
  )
}

export default TransferForm
