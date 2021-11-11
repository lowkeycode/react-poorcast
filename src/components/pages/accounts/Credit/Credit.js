import styles from '../Account/Account.module.css';

const Credit = ({acctInfo}) => {
  console.log(acctInfo);
  return (
    <div className={styles.account}>
      <h3 className={styles['account__heading']}>{acctInfo.acctName}</h3>
      <div className={styles['account__total']}>
        <p>Total</p>
        <p className={styles['account__balance']}>
        <span>$</span>{acctInfo.acctSpent}/<span>$</span>{acctInfo.acctLimit}
        </p>
      </div>
      <div className={styles['account__avail']}>
        <p>Available</p>
        <p className={styles['account__balance']}>
        <span>$</span>{acctInfo.acctLimit - acctInfo.acctSpent}
        </p>
      </div>
    </div>
  )
}

export default Credit
