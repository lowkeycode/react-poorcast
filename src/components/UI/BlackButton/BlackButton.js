import styles from './BlackButton.module.css';

const BlackButton = ({text}) => {
  return (
    <button className={styles.submit} type='submit'>
      {text}
    </button>
  )
}

export default BlackButton
