import { formatOrdinals } from '../../../../utils/utils';

import styles from '../ListCard/ListCard.module.css';

const BillItem = ({billInfo}) => {

  const formatDateArr = (date) => {
    const dateArr = date.split('-');
    dateArr[0] = parseInt(dateArr[0]);
    dateArr[1] = dateArr[1] - 1;
    dateArr[2] = parseInt(dateArr[2]);
    return dateArr;
  }

  const jsDue = formatDateArr(billInfo.billDue);
  const jsPayOn = formatDateArr(billInfo.billPayOn);

  const dueDate = new Date(...jsDue);
  const payOnDate = new Date(...jsPayOn);


  const dueMonth = new Intl.DateTimeFormat('en-us', {
    month: 'short'
  }).format(dueDate);

  const dueDay = new Intl.DateTimeFormat('en-us', {
    day: 'numeric'
  }).format(dueDate);

  const payOnMonth = new Intl.DateTimeFormat('en-us', {
    month: 'short'
  }).format(payOnDate);

  const payOnDay = new Intl.DateTimeFormat('en-us', {
    day: 'numeric'
  }).format(payOnDate);

  
  return (
    <li className={styles['list__item']}>
      <p>{billInfo.bill}</p>
      <p>{`${dueMonth} ${formatOrdinals(dueDay)}`}</p>
      <p>${billInfo.billAmount}</p>
      <p>{`${payOnMonth} ${formatOrdinals(payOnDay)}`}</p>
    </li>
  )
}

export default BillItem
