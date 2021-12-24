import AcctsNav from'./AcctsNav';
import OverviewNav from './OverviewNav'
import AddPersonNav from './AddPersonNav';
import SettingsNav from './SettingsNav';

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
        {
          window.location.pathname === '/settings' && <SettingsNav />
        }
      </ul>
    </nav>
  )
}

export default Nav
