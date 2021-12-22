import PayFromSet from '../PayFromSet/PayFromSet';
import PayBillSet from '../PayBillSet/PayBillSet';
import BlackButton from '../../../UI/BlackButton/BlackButton'; 

import styles from './PayBillForm.module.css';
import rightArrow from '../../../../img/arrow-forward-outline.svg';

const PayBillForm = () => {
  return (
    <form  className={styles["pay-form"]}>
      <h3 className={styles["form-heading"]}>Pay Bill</h3>

      <PayFromSet/>
      

      <div className={styles.arrow}>
        <img src={rightArrow} alt="Right arrow" />
      </div>

      <PayBillSet/>

      <div className={styles["btn-container"]}>
        <BlackButton text="Confirm" type="submit" />
      </div>
    </form>
  )
}

export default PayBillForm
