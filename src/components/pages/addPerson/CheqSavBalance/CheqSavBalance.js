
const CheqSavBalance = ({onAcctBalance}) => {
  const balanceChange = (e) => {
    onAcctBalance(e)
  }

  return (
    <div>
      <label htmlFor="acct-balance">Account Balance</label>
      <input id='acct-balance' type="number" required onChange={balanceChange}/>
    </div>
  )
}

export default CheqSavBalance
