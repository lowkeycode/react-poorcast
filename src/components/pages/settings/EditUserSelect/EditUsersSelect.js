
import styles from './EditUsersSelect.module.css';

const EditUsersSelect = ({ userOptions, userSelected, handleUserSelected }) => {


  return (
    <div className={styles['select-container']}>
      <label htmlFor="user">User</label>
      <select value={userSelected} onChange={handleUserSelected} name="user" id="user">
        <option value="placeholder" disabled>Select User</option>
        {
          userOptions.map((option, i) => {
            return <option key={i} value={option.value}>{option.label}</option>
          })
        }
      </select>
    </div>
  )
}

export default EditUsersSelect