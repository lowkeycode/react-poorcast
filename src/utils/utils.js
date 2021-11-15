export const allAcctsBalance = (arr) => {
  return arr.map(acct => {
    return ((+acct.acctLimit) - (+acct.acctSpent)) + (+acct.acctBalance);
  }).reduce((acc, cur) => {
    return acc + cur
  }, 0);
}