import styles from './Logo.module.css';
import logo from '../../img/forecast-wht.svg';


const Logo = () => {
  return (
    <div className={styles.logo}>
      <div className={styles['logo-container']}>
        <div className={styles['logo-container__logo']}>
          <img src={logo} alt="Poorcast logo of cloud raining dollar signs"/>
        </div>
      </div>
      
    </div>
  )
}

export default Logo
