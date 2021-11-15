import Sidebar from '../../../Sidebar/Sidebar';
import Main from '../../../Main/Main';
import AllUsersBalance from '../AllUsersBalance/AllUsersBalance';

import styles from './Overview.module.css';

const Overview = ({accts}) => {
  return (
    <div className={styles.overview}>
      <Sidebar/>
      <Main>
        <AllUsersBalance accts={accts}/>
      </Main>
    </div>
  )
}

export default Overview
