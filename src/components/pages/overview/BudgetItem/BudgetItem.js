import { formatOrdinals } from '../../../../utils/utils';

import styles from '../ListCard/ListCard.module.css';


const BudgetItem = ({budgetInfo}) => {

  const payOnDate = new Date(budgetInfo.budgetPayOn);

  const payOnMonth = new Intl.DateTimeFormat('en-us', {
    month: 'short'
  }).format(payOnDate);

  const payOnDay = new Intl.DateTimeFormat('en-us', {
    day: 'numeric'
  }).format(payOnDate);


  return (
    <li className={styles['list__item']}>
      <p>{budgetInfo.budgetPerson}</p>
      <p>{budgetInfo.budgetBill}</p>
      <p>${budgetInfo.budgetAmount}</p>
      <p>{`${payOnMonth} ${formatOrdinals(payOnDay)}`}</p>
      
    </li>
  )
}

export default BudgetItem
