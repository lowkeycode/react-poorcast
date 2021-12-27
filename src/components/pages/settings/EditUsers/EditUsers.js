import { useState, useEffect, useContext } from "react";

import UsersContext from "../../../../store/users-context";
import OverlaysContext from "../../../../store/overlays-context";

import { capitalize } from "../../../../utils/utils";

import EditUsersSelect from "../EditUserSelect/EditUsersSelect";
import GreyCard from "../../../UI/GreyCard/GreyCard";
import EditAccount from "../EditAccount/EditAccount";
import Modal from '../../../UI/Modal/Modal';

import styles from "./EditUsers.module.css";
import deleteUser from "../../../../img/person-remove-outline.svg";

const EditUsers = () => {
  const usersCtx = useContext(UsersContext);
  const overlaysCtx = useContext(OverlaysContext);

  const { users, formattedAccts, setSelectedDeleteUser, setSelectedDeleteUserKey } = usersCtx;

  const [userOptions, setUserOptions] = useState([]);
  const [userSelected, setUserSelected] = useState("placeholder");
  const [userIndex, setUserIndex] = useState(-1);

  useEffect(() => {
    let userArr = [];
    for (let acct in users) {
      const user = {
        label: users[acct].name,
        value: users[acct].name.toLowerCase(),
      };

      userArr = [...userArr, user];
    }
    setUserOptions(userArr);
  }, [users]);

  useEffect(() => {
    const acctIndex = formattedAccts.findIndex((acctObj) => {
      return acctObj.name === capitalize(userSelected);
    });

    setUserIndex(acctIndex);
    setSelectedDeleteUserKey(formattedAccts[acctIndex]?.key)
  }, [userSelected, formattedAccts, setSelectedDeleteUserKey]);

  const handleUserSelected = (e) => {
    setUserSelected(e.target.value);
    setSelectedDeleteUser(e.target.value);
  };

  return (
    <section className={styles["edit-users"]}>

      {
        overlaysCtx.deleteUserModalOpen && <Modal type='delete-user'/>
      }

      <h2 className={styles.heading}>Edit Users</h2>

      <div className={styles["select-delete"]}>
        <EditUsersSelect
          userOptions={userOptions}
          userSelected={userSelected}
          handleUserSelected={handleUserSelected}
        />

        {userSelected !== 'placeholder' && <button onClick={() => overlaysCtx.setDeleteUserModalOpen(true)} className={styles["delete-user"]}>
        <img src={deleteUser} alt="Delete user" />
      </button>}
      </div>

      {userSelected !== "placeholder" && (
        <GreyCard className={styles.card}>
          {userIndex > -1
            ? formattedAccts[userIndex]?.accts.map((acct, i) => {
                return <EditAccount key={i} acctInfo={acct} />;
              })
            : null}
        </GreyCard>
      )}
    </section>
  );
};

export default EditUsers;
