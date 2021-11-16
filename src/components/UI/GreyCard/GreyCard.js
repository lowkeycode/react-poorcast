import styles from './GreyCard.module.css';

const GreyCard = ({children, className}) => {
  return (
    <div className={`${styles.card} ${className}`}>
      {children}
    </div>
  )
}

export default GreyCard
