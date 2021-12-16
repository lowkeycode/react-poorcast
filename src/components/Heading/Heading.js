import styles from './Heading.module.css';

const Heading = () => {

  const now = new Date(Date.now());

  const formattedMonth = new Intl.DateTimeFormat('en-us',{
    month: 'long'
  }).format(now);


  return (
    <div className={styles.heading}>
      <h1 className={styles['heading__heading']}>Poorcast</h1>
      <p className={styles['heading__month']}>{formattedMonth}</p>
    </div>
  )
}

export default Heading
