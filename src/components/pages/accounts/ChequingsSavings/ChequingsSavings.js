import styles from '../Account/Account.module.css';

const ChequingsSavings = ({acctInfo}) => {
  return (
    <div className={styles.account}>
      <h3 className={styles['account__heading']}>{acctInfo.acctName}</h3>

      <div className={styles['account__avail']}>
        <p>Available</p>
        <p className={styles['account__balance']}>
        <span>$</span>{acctInfo.acctBalance}
        </p>
      </div>
    </div>
  )
}

export default ChequingsSavings
