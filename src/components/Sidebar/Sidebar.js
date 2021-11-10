import Logo from './Logo';
import Nav from './nav/Nav';
import Settings from './Settings';

import styles from './Sidebar.module.css';

const Sidebar = () => {

  // ${styles['form-control']}
  return (
    <aside className={styles.sidebar}>
      <Logo/>
      <Nav/>
      <Settings/>
    </aside>
  )
}

export default Sidebar
