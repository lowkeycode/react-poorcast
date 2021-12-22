import styles from "../PayBillForm/PayBillForm.module.css";

const PayFromSet = ({ billOptions, handlePayAmountChange }) => {
  return (
    <fieldset className={styles["acct-set"]}>
      <legend>Bills</legend>

      <div>
        <label htmlFor="bill">Bill</label>
        <select name="bill" id="bill">
          <option value="placeholder" disabled>
            Select bill
          </option>
          {billOptions.map((option, i) => {
            return (
              <option key={i} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
      </div>

      <div>
        <label htmlFor="amount">Amount</label>
        <input onChange={handlePayAmountChange} type="number" />
      </div>
    </fieldset>
  );
};

export default PayFromSet;
