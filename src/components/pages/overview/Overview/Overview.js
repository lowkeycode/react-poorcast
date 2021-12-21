import Sidebar from '../../../Sidebar/Sidebar';
import Main from '../../../Main/Main';
import AllUsersBalance from '../AllUsersBalance/AllUsersBalance';
import ListCard from '../ListCard/ListCard';

import styles from './Overview.module.css';

const Overview = () => {
  const billsHeadings = ['Bill', 'Due', 'Amount'];

  const budgetHeadings = ['Person', 'Bill', 'Amount', 'Pay On'];

  return (
    <div className={styles.overview}>
      <Sidebar/>
      <Main>
        <AllUsersBalance/>
        <ListCard title='Bills' headings={billsHeadings}/>
        <ListCard title='Budget' headings={budgetHeadings}/>
      </Main>
    </div>
  )
}

export default Overview
