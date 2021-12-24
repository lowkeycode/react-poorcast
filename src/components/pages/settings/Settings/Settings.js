import Sidebar from '../../../Sidebar/Sidebar';
import Main from '../../../Main/Main';
import EditUsers from '../EditUsers/EditUsers';

import styles from './Settings.module.css';

const Settings = () => {
  return (
    <div className={styles.settings}>
      <Sidebar/>
      <Main>
        <EditUsers/>
      </Main>
    </div>
  )
}

export default Settings
