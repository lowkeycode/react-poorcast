import styles from './Overlay.module.css';

const Overlay = ({setModalOpen}) => {
  return (
    <div className={styles.overlay} onClick={()=> setModalOpen(false)}/>
  )
}

export default Overlay
