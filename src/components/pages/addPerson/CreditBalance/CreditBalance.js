import styles from './CreditBalance.module.css';

const CreditBalance = () => {
  return (
    <div>
      <label htmlFor="acct-spent">Account Balance</label>
      <div className={styles.inputs}>
        <input id='acct-spent' type="number" required/>
        <p>/</p>
        <label htmlFor="acct-limit"></label>
        <input id='acct-limit' type="number" required/>
      </div>
    </div>
  )
}

export default CreditBalance
