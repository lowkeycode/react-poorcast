import { useState, useEffect, useContext } from "react";

import UsersContext from "../../../../store/users-context";

import { capitalize } from '../../../../utils/utils';

import EditUsersSelect from "../EditUserSelect/EditUsersSelect";
import GreyCard from "../../../UI/GreyCard/GreyCard";
import EditAccount from "../EditAccount/EditAccount";

import styles from "./EditUsers.module.css";
import deleteUser from "../../../../img/person-remove-outline.svg";

const EditUsers = () => {
  const usersCtx = useContext(UsersContext);

  const { users, formattedAccts } = usersCtx;

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
    console.log(formattedAccts);
    console.log(userSelected);

    const acctIndex = formattedAccts.findIndex((acctObj) => {
      return acctObj.name === capitalize(userSelected);
    })

    console.log(acctIndex);

    setUserIndex(acctIndex)
  }, [userSelected, formattedAccts])

  const handleUserSelected = (e) => {
    setUserSelected(e.target.value);
  };

  console.log(formattedAccts[userIndex]);

  return (
    <section className={styles["edit-users"]}>
      <h2 className={styles.heading}>Edit Users</h2>

      <div className={styles["select-delete"]}>
        <EditUsersSelect
          userOptions={userOptions}
          userSelected={userSelected}
          handleUserSelected={handleUserSelected}
        />

        <button className={styles["delete-user"]}>
          <img src={deleteUser} alt="Delete user" />
        </button>
      </div>

      <GreyCard className={styles.card}>
      {
        userIndex > -1 ? (
          formattedAccts[userIndex].accts.map((acct, i) => {
            return <EditAccount key={i} acctInfo={acct} />;
            })
        ) : (
          null
        )
      }
      </GreyCard>


    </section>
  );
};

export default EditUsers;
