import { allAcctsBalance } from '../../../../utils/utils';


import styles from './UserBalance.module.css';

const UserBalance = ({name, accts}) => {

  let acctsArr = [];

  for(let acct in accts) {
    acctsArr = [...acctsArr, accts[acct]]
  }


  const currentBalance = allAcctsBalance(acctsArr);
  
  return (
    <li className={styles['user-balance']}>
      <p className={styles.name}>{name}</p>
      <div className={styles['cur-bal']}>
        <p className={styles['cur-bal__copy']}>Current Balance</p>
        <p className={styles['cur-bal__balance']}><span>$</span>{currentBalance}</p>
      </div>
    </li>
  )
}

export default UserBalance
