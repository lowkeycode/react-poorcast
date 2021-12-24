import { useContext } from "react";

import { capitalize } from "../../../../utils/utils";

import UsersContext from "../../../../store/users-context";
import OverlaysContext from "../../../../store/overlays-context";

import BlackButton from "../../../UI/BlackButton/BlackButton";

import styles from './DeleteUserConfirm.module.css';

const DeleteUserConfirm = () => {

  const usersCtx = useContext(UsersContext);
  const overlaysCtx = useContext(OverlaysContext);

  console.log(overlaysCtx.deleteUserModalOpen);

  return (
    <form className={styles['delete-confirm']}>
      <h2 className={styles.prompt}>Delete User: <span>{capitalize(usersCtx.selectedDeleteUser)}?</span></h2>
      <BlackButton text="Delete User" type="submit"/>
      <BlackButton text="Go Back" type="button" onClick={() => overlaysCtx.setDeleteUserModalOpen(false)}/>
    </form>
  )
}

export default DeleteUserConfirm
