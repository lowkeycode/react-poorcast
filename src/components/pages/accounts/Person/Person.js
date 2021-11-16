import PersonHeading from "./PersonHeading";
import GreyCard from "../../../UI/GreyCard/GreyCard";
import Account from "../Account/Account";

import styles from "./Person.module.css";

const Person = ({ name, accts }) => {
  let acctsArr = [];

  for (let acct in accts) {
    acctsArr = [...acctsArr, accts[acct]];
  }

  return (
    <section className={styles.person}>
      <PersonHeading name={name} accts={acctsArr} />
      <GreyCard>
        {acctsArr.map((acct, i) => {
          return <Account key={i} acctInfo={acct} />;
        })}
      </GreyCard>
    </section>
  );
};

export default Person;
