import { Link } from 'react-router-dom';

import styles from './Nav.module.css';
import overviewSvg from '../../../img/calendar-outline.svg';
import transferSvg from '../../../img/swap-horizontal-outline.svg';


const AcctsNav = ({openTransferModal}) => {
  return (
    <>
      <li className={styles['nav__links--link']}>
        <Link to='/'>
          <img src={overviewSvg} alt="Link to budget overview page"/>
        </Link>
        <p className={styles['icon-description']}>Budget</p>
      </li> 
      <li className={styles['nav__links--link']}>
          <button className={styles.transfer}>
            <img onClick={openTransferModal} src={transferSvg} alt="Link to transfer between accounts"/>
          </button>
        <p className={styles['icon-description']}>Transfer</p>
      </li>
    </>
  )
}

export default AcctsNav
