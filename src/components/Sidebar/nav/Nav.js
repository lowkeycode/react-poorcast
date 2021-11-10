import AcctsNav from'./AcctsNav';
import OverviewNav from './OverviewNav'
import AddPersonNav from './AddPersonNav';

import styles from './Nav.module.css';


const Nav = () => {

  

  return (
    <nav className={styles.nav}>
      <ul className={styles['nav__links']}>
        {
          window.location.pathname === '/' && <OverviewNav/>
        }
        {
          window.location.pathname === '/accounts' && <AcctsNav />
        }
        {
          window.location.pathname === '/addPerson' && <AddPersonNav />
        }
      </ul>
    </nav>
  )
}

export default Nav
