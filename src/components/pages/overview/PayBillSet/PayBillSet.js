import styles from '../PayBillForm/PayBillForm.module.css';

const PayFromSet = () => {
  return (
    <fieldset className={styles['acct-set']}>
      <legend>Bills</legend>

      <div>
        <label htmlFor="bill">Bill</label>
        <select  name="bill" id="bill">
          <option value="placeholder" disabled>Select bill</option>
          
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
