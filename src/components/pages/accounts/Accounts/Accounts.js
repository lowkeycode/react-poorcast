import Sidebar from "../../../Sidebar/Sidebar";
import Main from "../../../Main/Main";
import AddPersonBtn from "../AddPersonBtn/AddPersonBtn";
import Person from "../Person/Person";
import Modal from '../../../UI/Modal/Modal';

import styles from "./Accounts.module.css";

const Accounts = ({ accts, modalOpen, openTransferModal }) => {

  return (
    <div className={styles.accounts}>
      <Sidebar openTransferModal={openTransferModal}/>
      <Main>
        <AddPersonBtn />
        {accts.map((acct) => {
          return <Person key={acct.key} name={acct.name} accts={acct.accts} />;
        })}

        {
          modalOpen && <Modal/>
        }
      </Main>
    </div>
  );
};

export default Accounts;
