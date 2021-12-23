import { ref, remove } from 'firebase/database';

import realtime from '../../../../firebase/realtime';
import { formatOrdinals } from '../../../../utils/utils';

import styles from '../ListCard/ListCard.module.css';
import deleteSvg from '../../../../img/close-circle-outline.svg';

const BudgetItem = ({budgetInfo}) => {

  const formatDateArr = (date) => {
    const dateArr = date.split('-');
    dateArr[0] = parseInt(dateArr[0]);
    dateArr[1] = dateArr[1] - 1;
    dateArr[2] = parseInt(dateArr[2]);
    return dateArr;
  }

  const jsPayOn = formatDateArr(budgetInfo.budgetPayOn)

  const payOnDate = new Date(...jsPayOn);

  const payOnMonth = new Intl.DateTimeFormat('en-us', {
    month: 'short'
  }).format(payOnDate);

  const payOnDay = new Intl.DateTimeFormat('en-us', {
    day: 'numeric'
  }).format(payOnDate);

  const deleteBudgetItem = () => {
    const budgetItemTarget = ref(realtime, `budget/${budgetInfo.key}`)

    remove(budgetItemTarget);
  }


  return (
    <li className={styles['list__item']}>
      <p>{budgetInfo.budgetPerson}</p>
      <p>{budgetInfo.budgetBill}</p>
      <p>${budgetInfo.budgetAmount}</p>
      <p>{`${payOnMonth} ${formatOrdinals(payOnDay)}`}</p>
      
      <button className={styles.delete} onClick={deleteBudgetItem}>
        <img src={deleteSvg} alt="Delete item"/>
      </button>
    </li>
  )
}

export default BudgetItem
