import styles from '../TransferForm/TransferForm.module.css';

const ToSet = ({ toUserSelected, handleToUserSelection, userOptions, toUserAcctSelected, handleToUserAcctSelection, toUserAccts }) => {
  return (
    <fieldset className={styles['acct-set']}>
      <legend>To</legend>

      <div>
        <label htmlFor="user">User</label>
        <select value={toUserSelected} onChange={handleToUserSelection} name="user" id="user">
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
        <select value={toUserAcctSelected} onChange={handleToUserAcctSelection} name="user" id="user">
          <option value="placeholder" disabled>Select Account</option>
          {
            toUserAccts.map((option, i) => {
              return <option key={i} value={option.value}>{option.label}</option>
            })
          }
        </select>
      </div>

    </fieldset>
  )
}

export default ToSet
