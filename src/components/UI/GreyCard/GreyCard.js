import styles from './GreyCard.module.css';

const GreyCard = ({children}) => {
  return (
    <div className={styles['grey-card']}>
      {children}
    </div>
  )
}

export default GreyCard
