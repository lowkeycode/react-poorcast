import { Link } from 'react-router-dom';

import styles from './Settings.module.css';
import settingsSvg from '../../img/settings-outline.svg';

const Settings = () => {
  return (
    <div className={styles.settings}>
      <Link to="/settings">
        <img src={settingsSvg} alt="Link to settings page"/>
      </Link>
    </div>
  )
}

export default Settings
