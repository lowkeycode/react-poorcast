import { useState, useEffect } from 'react';
import { ref, onValue, set } from 'firebase/database';
import realtime from '../../../../firebase/realtime';

import GreyCard from '../../../UI/GreyCard/GreyCard';
import BillsSet from '../BillsSet/BillsSet';
import BudgetSet from '../BudgetSet/BudgetSet';

import styles from './ListCard.module.css';
import add from '../../../../img/add-circle-outline.svg';
import BillItem from '../BillItem/BillItem';
import BudgetItem from '../BudgetItem/BudgetItem';

const ListCard = ({ title, headings }) => {
  const [addingBill, setAddingBill] = useState(false);
  const [addingBudget, setAddingBudget] = useState(false);

  const [billsArr, setBillsArr] = useState([]);
  const [budgetArr, setBudgetArr] = useState([]);

  useEffect(() => {
    const billsRef = ref(realtime, 'bills');

    onValue(billsRef, snapshot => {
      const bills = snapshot.val();

      const formattedArr = [];

      for(let bill in bills) {
        formattedArr.push(bills[bill]);
      }

      setBillsArr(formattedArr)
    })
  }, [])

  useEffect(() => {
    const budgetRef = ref(realtime, 'budget');

    onValue(budgetRef, snapshot => {
      const budget = snapshot.val();

      const formattedArr = [];

      for(let budgetItem in budget) {
        formattedArr.push(budget[budgetItem]);
      }

      setBudgetArr(formattedArr)
    })
  }, [])

  const showBillAdd = () => {
    setAddingBill(true)
  }

  const hideBillAdd = () => {
    setAddingBill(false);
  }

  const showBudgetAdd = () => {
    setAddingBudget(true);
  }

  const hideBudgetAdd = () => {
    setAddingBudget(false);
  }

  
  return (
    <GreyCard className={styles.card}>
      <div className={styles['card-heading']}>
        <p>{title}</p>
        {
          title === 'Bills' ? (
            <button onClick={showBillAdd} className={styles.add}>
              <img src={add} alt="Add  btn"/>
            </button>
          ) : (
            <button onClick={showBudgetAdd} className={styles.add}>
              <img src={add} alt="Add btn"/>
            </button>
          )
        }
      </div>
      {
        addingBill && <BillsSet billsArr={billsArr} hideBillAdd={hideBillAdd}/>
      }
      {
        addingBudget && <BudgetSet budgetArr={budgetArr} hideBudgetAdd={hideBudgetAdd}/>
      }
      <ul className={styles.list}>
        <li className={styles['list__headings']}>
          <p>{headings[0]}</p>
          <p>{headings[1]}</p>
          <p>{headings[2]}</p>
          <p>{headings[3]}</p>
        </li>
        {
          title === 'Bills' ? (
            billsArr.map((bill, i) => {
              return <BillItem key={i} billInfo={bill}/>
            })
          ) : (
            budgetArr.map((budgetItem, i) => {
              return <BudgetItem key={i} budgetInfo={budgetItem}/>
            })
          )
        }
        
        
      </ul>
    </GreyCard>
  )
}

export default ListCard
