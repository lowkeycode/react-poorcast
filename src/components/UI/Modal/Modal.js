import GreyCard from '../GreyCard/GreyCard';
import Overlay from '../Overlay/Overlay';

import styles from './Modal.module.css';

const Modal = () => {
  return (
    <>
      <Overlay/>
      <GreyCard className={styles.card}>
        
      </GreyCard>
    </>
    
  )
}

export default Modal
