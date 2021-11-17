import GreyCard from '../GreyCard/GreyCard';
import Overlay from '../Overlay/Overlay';
import TransferForm from '../../pages/accounts/TransferForm/TransferForm';

import styles from './Modal.module.css';

const Modal = () => {
  return (
    <>
      <Overlay/>
      <GreyCard className={styles.card}>
        <TransferForm/>
      </GreyCard>
    </>
    
  )
}

export default Modal
