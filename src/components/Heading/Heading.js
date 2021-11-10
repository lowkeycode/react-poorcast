import styles from './Heading.module.css';

const Heading = () => {
  return (
    <div className={styles.heading}>
      <h1 className={styles['heading__heading']}>Poorcast</h1>
      <p className={styles['heading__month']}>November</p>
    </div>
  )
}

export default Heading
