import styles from './AddPersonBtn.module.css';
import addPersonSvg from '../../../../img/person-add-outline.svg';
import { Link } from 'react-router-dom';

const AddPersonBtn = () => {
  return (
    <div className={styles['add-person']}>
      <Link to='/addPerson' className={styles['add-person-img']}>
        <img src={addPersonSvg} alt="Add a new user"/>
      </Link>
    </div>
  )
}

export default AddPersonBtn
