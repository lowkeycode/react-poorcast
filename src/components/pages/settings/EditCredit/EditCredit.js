import SmallBtns from '../SmallBtns/SmallBtns';

import styles from '../EditAccount/EditAccount.module.css';

const EditCredit = ({ acctInfo }) => {
  return (
    <div className={styles.account}>

      <SmallBtns/>

      <h3 className={styles["account__heading"]}>{acctInfo.acctName}</h3>
      <div className={styles["account__total"]}>
        <p>Spent</p>
        <p className={styles["account__balance"]}>
          <span>$</span>
          {acctInfo.acctSpent}/<span>$</span>
          {acctInfo.acctLimit}
        </p>
      </div>
      <div className={styles["account__avail"]}>
        <p>Available</p>
        <p className={styles["account__balance"]}>
          <span>$</span>
          {acctInfo.acctLimit - acctInfo.acctSpent}
        </p>
      </div>
    </div>
  )
}

export default EditCredit
