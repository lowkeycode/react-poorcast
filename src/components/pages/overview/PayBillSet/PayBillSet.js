import styles from "../PayBillForm/PayBillForm.module.css";

const PayFromSet = ({
  billOptions,
  billSelected,
  handleBillSelection,
  handlePayAmountChange,
}) => {
  return (
    <fieldset className={styles["acct-set"]}>
      <legend>Bills</legend>

      <div>
        <label htmlFor="bill">Bill</label>
        <select value={billSelected} name="bill" id="bill" onChange={handleBillSelection}>
          <option value="placeholder" disabled>
            Select Bill
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
