import { useContext } from 'react';

import OverlaysContext from '../../../store/overlays-context';

import styles from './Overlay.module.css';

const Overlay = () => {

const overlaysCtx = useContext(OverlaysContext);

  return (
    <div className={styles.overlay} onClick={()=>{
      overlaysCtx.setTransferModalOpen(false);
      overlaysCtx.setPayBillModalOpen(false);
      overlaysCtx.setDeleteUserModalOpen(false);
    }}/>
  )
}

export default Overlay
