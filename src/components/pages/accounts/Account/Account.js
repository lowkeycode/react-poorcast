import ChequingsSavings from '../ChequingsSavings/ChequingsSavings';
import Credit from '../Credit/Credit';

const Account = ({acctInfo}) => {

  console.log('acctInfo: ', acctInfo);

  return (
    <>
      {
        acctInfo.acctType === 'chequings/savings' ? (
          <ChequingsSavings acctInfo={acctInfo} />
        ) : (
          <Credit acctInfo={acctInfo}/>
        )
      }
    </>
  )
}

export default Account
