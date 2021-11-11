import styles from './PersonHeading.module.css';

const PersonHeading = ({name, accts}) => {

  console.log('p heading: ', accts);

  const currentBalance = accts.map(acct => {
    return ((+acct.acctLimit) - (+acct.acctSpent)) + (+acct.acctBalance);
  }).reduce((acc, cur) => {
    return acc + cur
  }, 0);

  console.log(currentBalance);

  return (
    <div className ={styles['person-heading']}>

      <h2 className={styles['person-heading__heading--name']}>{name}</h2>

      <div className={styles['person-heading__heading--balance']}>
        <p className={styles['balance-copy']}>Current Balance</p>
        
        <p className={styles['balance-balance']}><span>$</span>{currentBalance}</p>
      </div>

    </div>
  )
}

export default PersonHeading
