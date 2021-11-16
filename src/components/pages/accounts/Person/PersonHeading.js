import { allAcctsBalance } from "../../../../utils/utils";

import styles from "./PersonHeading.module.css";

const PersonHeading = ({ name, accts }) => {
  const currentBalance = allAcctsBalance(accts);

  return (
    <div className={styles["person-heading"]}>
      <h2 className={styles["person-heading__heading--name"]}>{name}</h2>

      <div className={styles["person-heading__heading--balance"]}>
        <p className={styles["balance-copy"]}>Current Balance</p>

        <p className={styles["balance-balance"]}>
          <span>$</span>
          {currentBalance}
        </p>
      </div>
    </div>
  );
};

export default PersonHeading;
