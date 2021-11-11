import Sidebar from '../../../Sidebar/Sidebar';
import Main from '../../../Main/Main';
import AddPersonBtn from '../AddPersonBtn/AddPersonBtn';
import Person from '../Person/Person';

import styles from './Accounts.module.css';

const Accounts = ({accts}) => {

  return (
    <div className={styles.accounts}>
      <Sidebar />
      <Main>
        <AddPersonBtn />
        {
          accts.map(acct => {
            return <Person key={acct.key} name={acct.name} accts={acct.accts}/>
          })
        }
      </Main>
    </div>
  )
}


export default Accounts
