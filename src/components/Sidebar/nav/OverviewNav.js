import { Link } from 'react-router-dom';
import { useContext } from 'react';

import OverlaysContext from '../../../store/overlays-context';

import styles from './Nav.module.css';
import accountsSvg from '../../../img/people-circle-outline.svg';
import payBillSvg from '../../../img/cash-outline.svg';



const OverviewNav = () => {

  const overlaysCtx = useContext(OverlaysContext);

  return (
    <>
      <li className={styles['nav__links--link']}>
        <Link to="/accounts">
          <img src={accountsSvg} alt="Link to accounts page"/>
        </Link>
        <p className={styles['icon-description']}>Accounts</p>
      </li> 
      
      <li className={styles['nav__links--link']}>
        <button onClick={() => overlaysCtx.setPayBillModalOpen(true)} className={styles['pay-bill']}>
          <img src={payBillSvg} alt="Link to pay a bill"/>
        </button>
        <p className={styles['icon-description']}>Pay Bill</p>
      </li>  
    </>
  )
}

export default OverviewNav
