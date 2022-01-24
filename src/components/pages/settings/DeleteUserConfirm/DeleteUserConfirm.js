import { useContext } from "react";
import {ref, remove } from 'firebase/database';
import { useNavigate } from 'react-router-dom'

import realtime from '../../../../firebase/realtime';
import { capitalize } from "../../../../utils/utils";

import UsersContext from "../../../../store/users-context";
import OverlaysContext from "../../../../store/overlays-context";

import BlackButton from "../../../UI/BlackButton/BlackButton";

import styles from './DeleteUserConfirm.module.css';

const DeleteUserConfirm = () => {

  const usersCtx = useContext(UsersContext);
  const overlaysCtx = useContext(OverlaysContext);

  const navigate = useNavigate();

  const deleteUser = (e) => {
    e.preventDefault();

    const targetUser = ref(realtime, `users/${usersCtx.selectedDeleteUserKey}`)

    remove(targetUser);
    overlaysCtx.setDeleteUserModalOpen(false);
    navigate('/accounts');
  }

  // console.log(usersCtx.selectedDeleteUserKey);


  return (
    <form className={styles['delete-confirm']}>
      <h2 className={styles.prompt}>Delete User: <span>{capitalize(usersCtx.selectedDeleteUser)}?</span></h2>
      <BlackButton text="Delete User" type="submit" onClick={deleteUser}/>
      <BlackButton text="Go Back" type="button" onClick={() => overlaysCtx.setDeleteUserModalOpen(false)}/>
    </form>
  )
}

export default DeleteUserConfirm
