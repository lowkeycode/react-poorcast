import Sidebar from '../../../Sidebar/Sidebar';
import Main from '../../../Main/Main';

import styles from './Overview.module.css';

const Overview = () => {
  return (
    <div className={styles.overview}>
      <Sidebar/>
      <Main>
      </Main>
    </div>
  )
}

export default Overview
