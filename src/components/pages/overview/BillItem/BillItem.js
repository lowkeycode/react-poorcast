import { formatOrdinals } from '../../../../utils/utils';

import styles from '../ListCard/ListCard.module.css';
import deleteSvg from '../../../../img/close-circle-outline.svg';

const BillItem = ({billInfo}) => {

  const formatDateArr = (date) => {
    const dateArr = date.split('-');
    dateArr[0] = parseInt(dateArr[0]);
    dateArr[1] = dateArr[1] - 1;
    dateArr[2] = parseInt(dateArr[2]);
    return dateArr;
  }

  const jsDue = formatDateArr(billInfo.billDue);

  const dueDate = new Date(...jsDue);


  const dueMonth = new Intl.DateTimeFormat('en-us', {
    month: 'short'
  }).format(dueDate);

  const dueDay = new Intl.DateTimeFormat('en-us', {
    day: 'numeric'
  }).format(dueDate);



  
  return (
    <li className={styles['list__item']}>
      <p>{billInfo.bill}</p>
      <p>{`${dueMonth} ${formatOrdinals(dueDay)}`}</p>
      <p>${billInfo.billAmount}</p>
      <button className={styles.delete}>
        <img src={deleteSvg} alt="Delete item"/>
      </button>
    </li>
  )
}

export default BillItem
