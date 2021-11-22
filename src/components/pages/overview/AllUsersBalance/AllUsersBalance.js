import GreyCard from '../../../UI/GreyCard/GreyCard';
import UserBalance from '../UserBalance/UserBalance';

import styles from './AllUsersBalance.module.css';

const AllUsersBalance = ({accts}) => {


  return (
    <GreyCard className={styles['user-balance-card']}>
      <ul className={styles['user-balance-list']}>
        {
          accts.map((acct, i) => {
            return <UserBalance key={i} name={acct.name} accts={acct.accts}/>
          })
        }
      </ul>
    </GreyCard>
  )
}

export default AllUsersBalance
