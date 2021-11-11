import styles from './CreditBalance.module.css';

const CreditBalance = ({onAcctLimit, onAcctSpend}) => {

  const spendChange = (e) => {
    onAcctSpend(e);
  }

  const limitChange= (e) => {
    onAcctLimit(e);
  }

  return (
    <div>
      <label htmlFor="acct-spent">Account Balance</label>
      <div className={styles.inputs}>
        <input id='acct-spent' type="number" required onChange={spendChange}/>
        <p>/</p>
        <label htmlFor="acct-limit"></label>
        <input id='acct-limit' type="number" required onChange={limitChange}/>
      </div>
    </div>
  )
}

export default CreditBalance
