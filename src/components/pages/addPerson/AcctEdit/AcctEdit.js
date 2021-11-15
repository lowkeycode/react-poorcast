import CreditBalance from "../CreditBalance/CreditBalance";
import CheqSavBalance from "../CheqSavBalance/CheqSavBalance";

import styles from './AcctEdit.module.css';
import saveSvg from "../../../../img/checkmark-circle-outline.svg";

const AcctEdit = ({ selectAccount, nameAccount, onAcctSpend, onAcctLimit, onAcctBalance, saveAcct, acctType }) => {
  return (
    <>
    <legend>Account Info</legend>

    <div className={styles["save-container"]}>
      <p>Save</p>
      <button type="button" className={styles.save} onClick={saveAcct}>
        <img src={saveSvg} alt="Save account" />
      </button>
    </div>

    <div className>
      <label htmlFor="acct-name">Account Name</label>
      <input id="acct-name" type="text" required onChange={nameAccount} />
    </div>

    <div>
      <label htmlFor="acct-type">Account Type</label>
      <select
        onChange={selectAccount}
        value={acctType}
        id="acct-type"
        name="acct-type"
        required
      >
        <option value="placeholder" disabled>
          Select Type
        </option>
        <option value="chequings/savings">Chequings/Savings</option>
        <option value="credit">Credit</option>
      </select>
    </div>

    {acctType === "credit" && (
      <CreditBalance onAcctLimit={onAcctLimit} onAcctSpend={onAcctSpend} />
    )}
    {acctType === "chequings/savings" && (
      <CheqSavBalance onAcctBalance={onAcctBalance} />
    )}
    </>
  )
}

export default AcctEdit
