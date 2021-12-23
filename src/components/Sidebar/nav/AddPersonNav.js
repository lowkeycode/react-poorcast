import { Link } from 'react-router-dom';

import styles from './Nav.module.css';
import backSvg from '../../../img/arrow-back-outline.svg';


const AddPersonNav = () => {
  return (
    <>
      <li className={styles['nav__links--link']}>
        <Link to='/accounts'>
          <img src={backSvg} alt="Back to account"/>
        </Link>
        <p className={styles['icon-description']}>Accounts</p>
      </li> 
    </>
  )
}

export default AddPersonNav
