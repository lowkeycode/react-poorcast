import BlackButton from '../../../UI/BlackButton/BlackButton';

import styles from './TransferForm.module.css';
import rightArrow from '../../../../img/arrow-forward-outline.svg';

const TransferForm = () => {
  return (
    <form className={styles['transfer-form']}>
      <h3 className={styles['form-heading']}>Transfer</h3>
      <fieldset className={styles['acct-set']}>
        <legend>From</legend>

        <div>
          <label for="user">User</label>
          <select name="user" id="user">
            
          </select>
        </div>

        <div>
          <label for="user">Account</label>
          <select name="user" id="user">
            
          </select>
        </div>

        <div>
          <label for="amount">Amount</label>
          <input type="number"/>
        </div>

      </fieldset>
      <div className={styles.arrow}>
        <img src={rightArrow} alt="Right arrow"/>
      </div>
      <fieldset className={styles['acct-set']}>
        <legend>To</legend>

        <div>
          <label for="user">User</label>
          <select name="user" id="user">
            
          </select>
        </div>

        <div>
          <label for="user">Account</label>
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
