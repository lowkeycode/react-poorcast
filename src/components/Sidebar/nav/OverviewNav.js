import { Link } from 'react-router-dom';

import styles from './Nav.module.css';
import accountsSvg from '../../../img/people-circle-outline.svg';
import payBillSvg from '../../../img/cash-outline.svg';



const OverviewNav = () => {
  return (
    <>
      <li className={styles['nav__links--link']}>
        <Link to="/accounts">
          <img src={accountsSvg} alt="Link to accounts page"/>
        </Link>
        <p className={styles['icon-description']}>Accounts</p>
      </li> 
      
      <li className={styles['nav__links--link']}>
        <Link to='/'>
          <img src={payBillSvg} alt="Link to pay a bill"/>
        </Link>
        <p className={styles['icon-description']}>Pay Bill</p>
      </li>  
    </>
  )
}

export default OverviewNav
