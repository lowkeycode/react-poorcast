import { useContext } from 'react';

import UsersContext from '../../../store/users-context';

import styles from './Overlay.module.css';

const Overlay = () => {

const usersCtx = useContext(UsersContext);

  return (
    <div className={styles.overlay} onClick={()=> usersCtx.setTransferModalOpen(false)}/>
  )
}

export default Overlay
