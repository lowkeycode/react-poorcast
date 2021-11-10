import Heading from '../Heading/Heading';

import styles from './Main.module.css';

const Main = ({children}) => {
  return (
    <div className={styles.main}>
      <Heading/>
      {children}
    </div>
  )
}

export default Main
