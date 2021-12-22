import { useContext } from "react";

import UsersContext from "../../../../store/users-context";
import OverlaysContext from "../../../../store/overlays-context";

import Sidebar from "../../../Sidebar/Sidebar";
import Main from "../../../Main/Main";
import AddPersonBtn from "../AddPersonBtn/AddPersonBtn";
import Person from "../Person/Person";
import Modal from "../../../UI/Modal/Modal";

import styles from "./Accounts.module.css";

const Accounts = () => {

  const usersCtx = useContext(UsersContext);
  const overlaysCtx = useContext(OverlaysContext);


  return (
    <div className={styles.accounts}>
      <Sidebar />
      <Main>
        <AddPersonBtn />
        {
          usersCtx.formattedAccts.map((acct) => {
          return <Person key={acct.key} name={acct.name} accts={acct.accts} />;
          })
        }

        {overlaysCtx.transferModalOpen && <Modal />}
      </Main>
    </div>
  );
};

export default Accounts;
