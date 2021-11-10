import GreyCard from '../../../UI/GreyCard/GreyCard';
import AcctSet from '../AcctSet/AcctSet';

import styles from './AddPersonForm.module.css';
import addAccountSvg from '../../../../img/add-circle-outline.svg';



const AddPersonForm = () => {

  

  const addPersonSave = (e) => {
    e.preventDefault();

    console.log(e)
  }

  return (
    <GreyCard>
      <form className={styles['add-person']} onSubmit={addPersonSave}>
        <div className={styles['name']}>
          <label htmlFor="name" className={styles['name__label']}>User Name</label>
          <input className={styles['name__input']} type="text" id='name' required/>
        </div>

        <div className={styles.accts}>
          <div className={styles['accts__heading']}>
            <h3 className={styles['accts__heading--heading']}>Add Accounts</h3>

            <button className={styles['accts__heading--btn']}>
              <img src={addAccountSvg} alt="Add new account for user"/>
            </button>
          </div>

          <div className={styles['acct-sets']}>
            
          </div>

        </div>

        <button className={styles['submit']} type="submit">Save User</button>
      </form>
    </GreyCard>
  )
}

export default AddPersonForm
