import { useContext } from 'react';

import OverlaysContext from '../../../../store/overlays-context';

import Sidebar from '../../../Sidebar/Sidebar';
import Main from '../../../Main/Main';
import AllUsersBalance from '../AllUsersBalance/AllUsersBalance';
import ListCard from '../ListCard/ListCard';
import Modal from '../../../UI/Modal/Modal';

import styles from './Overview.module.css';

const Overview = () => {

  const overlaysCtx = useContext(OverlaysContext);

  const billsHeadings = ['Bill', 'Due', 'Amount', 'Owing'];

  const budgetHeadings = ['Person', 'Bill', 'Amount', 'Pay On'];

  return (
    <div className={styles.overview}>
      <Sidebar/>
      <Main>
        <AllUsersBalance/>
        <ListCard title='Bills' headings={billsHeadings}/>
        <ListCard title='Budget' headings={budgetHeadings}/>

        {
          overlaysCtx.payBillModalOpen && <Modal type='pay' />
        }
      </Main>
    </div>
  )
}

export default Overview
