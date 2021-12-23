import { Link } from 'react-router-dom';

import styles from './Nav.module.css';
import overviewSvg from '../../../img/calendar-outline.svg';
import accountsSvg from '../../../img/people-circle-outline.svg';

const SettingsNav = () => {
  return (
    <>
      <li className={styles['nav__links--link']}>
        <Link to='/'>
          <img src={overviewSvg} alt="Link to budget overview page"/>
        </Link>
        <p className={styles['icon-description']}>Overview</p>
      </li> 

      <li className={styles['nav__links--link']}>
        <Link to="/accounts">
          <img src={accountsSvg} alt="Link to accounts page"/>
        </Link>
        <p className={styles['icon-description']}>Accounts</p>
      </li> 
    </>
  )
}

export default SettingsNav;
