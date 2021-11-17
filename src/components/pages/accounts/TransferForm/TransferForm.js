import styles from './TransferForm.module.css';
import rightArrow from '../../../../img/arrow-forward-outline.svg';

const TransferForm = () => {
  return (
    <form className={styles['transfer-form']}>
      <h3 className={styles['form-heading']}>Transfer</h3>
      <fieldset className={styles['acct-set']}>
        <legend>From</legend>
      </fieldset>
      <div className={styles.arrow}>
        <img src={rightArrow} alt="Right arrow"/>
      </div>
      <fieldset className={styles['acct-set']}>
        <legend>To</legend>
      </fieldset>
    </form>
  )
}

export default TransferForm
