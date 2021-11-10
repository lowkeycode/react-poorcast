import Main from '../../../Main/Main';
import Sidebar from '../../../Sidebar/Sidebar';
import AddPersonForm from '../AddPersonForm/AddPersonForm';

import styles from './AddPerson.module.css';

const AddPerson = () => {
  return (
    <div className={styles['add-person']}>
      <Sidebar/>
      <Main>
        <AddPersonForm/>
      </Main>
    </div>
  )
}

export default AddPerson
