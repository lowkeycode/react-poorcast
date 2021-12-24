import EditChequingsSavings from "../EditChequingsSavings/EditChequingsSavings";
import EditCredit from "../EditCredit/EditCredit";

const Account = ({ acctInfo }) => {
  return (
    <>
      {acctInfo.acctType === "chequings/savings" ? (
        <EditChequingsSavings acctInfo={acctInfo} />
      ) : (
        <EditCredit acctInfo={acctInfo} />
      )}
    </>
  );
};

export default Account;
