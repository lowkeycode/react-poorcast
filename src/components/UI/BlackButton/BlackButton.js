import styles from './BlackButton.module.css';

const BlackButton = ({text, type, onClick}) => {
  return (
    <button className={styles.submit} type={type} onClick={onClick}>
      {text}
    </button>
  )
}

export default BlackButton
