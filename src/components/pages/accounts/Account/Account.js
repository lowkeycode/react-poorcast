import ChequingsSavings from "../ChequingsSavings/ChequingsSavings";
import Credit from "../Credit/Credit";

const Account = ({ acctInfo }) => {
  return (
    <>
      {acctInfo.acctType === "chequings/savings" ? (
        <ChequingsSavings acctInfo={acctInfo} />
      ) : (
        <Credit acctInfo={acctInfo} />
      )}
    </>
  );
};

export default Account;
