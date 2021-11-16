import Logo from './Logo';
import Nav from './nav/Nav';
import Settings from './Settings';

import styles from './Sidebar.module.css';

const Sidebar = ({openTransferModal}) => {

  return (
    <aside className={styles.sidebar}>
      <Logo/>
      <Nav openTransferModal={openTransferModal}/>
      <Settings/>
    </aside>
  )
}

export default Sidebar
