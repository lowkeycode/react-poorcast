import styles from '../PayBillForm/PayBillForm.module.css';

const PayFromSet = () => {
  return (
    <fieldset className={styles['acct-set']}>
      <legend>From</legend>

      <div>
        <label htmlFor="user">User</label>
        <select  name="user" id="user">
          <option value="placeholder" disabled>Select User</option>
          
        </select>
      </div>

      <div>
        <label htmlFor="account">Account</label>
        <select  name="account" id="account">
          <option value="placeholder" disabled>Select Account</option>
          
        </select>
      </div>

      <div>
        <label htmlFor="amount">Amount</label>
        <input type="number"/>
      </div>

    </fieldset>
  )
}

export default PayFromSet
