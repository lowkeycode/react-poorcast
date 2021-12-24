import styles from '../EditAccount/EditAccount.module.css'
import editSvg from '../../../../img/ellipsis-horizontal-circle-outline.svg';
import deleteSvg from '../../../../img/close-circle-outline.svg';

const SmallBtns = () => {
  return (
    <div className={styles.buttons}>
      <button className={styles.button}>
        <img src={editSvg} alt="Edit account"/>
      </button>
      <button className={styles.button}>
        <img src={deleteSvg} alt="Delete account"/>
      </button>
    </div>
  )
}

export default SmallBtns
