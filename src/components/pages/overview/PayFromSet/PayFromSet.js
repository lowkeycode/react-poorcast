import styles from '../PayBillForm/PayBillForm.module.css';

const PayFromSet = ({ fromUserSelected, handleFromUserSelection, userOptions, handleFromUserAcctSelection, fromUserAcctSelected, fromUserAccts, handleFromAmountChange }) => {
  return (
    <fieldset className={styles['acct-set']}>
      <legend>From</legend>

      <div>
        <label htmlFor="user">User</label>
        <select value={fromUserSelected} onChange={handleFromUserSelection} name="user" id="user">
          <option value="placeholder" disabled>Select User</option>
          {
            userOptions.map((option, i) => {
              return <option key={i} value={option.value}>{option.label}</option>
            })
          }
        </select>
      </div>

      <div>
        <label htmlFor="account">Account</label>
        <select value={fromUserAcctSelected} onChange={handleFromUserAcctSelection} name="account" id="account">
          <option value="placeholder" disabled>Select Account</option>
          {
            fromUserAccts.map((option, i) => {
              return <option key={i} value={option.value}>{option.label}</option>
            })
          }
        </select>
      </div>

      <div>
        <label htmlFor="amount">Amount</label>
        <input onChange={handleFromAmountChange} type="number"/>
      </div>

    </fieldset>
  )
}

export default PayFromSet
