import { formatOrdinals } from '../../../../utils/utils';

import styles from '../ListCard/ListCard.module.css';

const BillItem = ({billInfo}) => {

  const dueDate = new Date(billInfo.billDue);
  const payOnDate = new Date(billInfo.billPayOn);

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
