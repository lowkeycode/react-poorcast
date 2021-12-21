import { useContext } from 'react';
import { Link } from 'react-router-dom';

import UsersContext from '../../../store/users-context';
import styles from './Nav.module.css';
import overviewSvg from '../../../img/calendar-outline.svg';
import transferSvg from '../../../img/swap-horizontal-outline.svg';


const AcctsNav = () => {
  const usersCtx = useContext(UsersContext);

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
          <img onClick={() => usersCtx.setTransferModalOpen(true)} src={transferSvg} alt="Link to transfer between accounts"/>
        </button>
        <p className={styles['icon-description']}>Transfer</p>
      </li>
    </>
  )
}

export default AcctsNav
