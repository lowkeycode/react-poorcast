import realtime from "../firebase/realtime";
import { ref, onValue } from "firebase/database";

export const allAcctsBalance = (arr) => {
  return arr.map(acct => {
    return ((+acct.acctLimit) - (+acct.acctSpent)) + (+acct.acctBalance);
  }).reduce((acc, cur) => {
    return acc + cur
  }, 0);
}


export const retrieveUserAccts = (e, setStateFunc) => {
  const dbRef = ref(realtime, 'users');

    onValue(dbRef, snapshot => {
      const users = snapshot.val();

      const lowerCasedUser = e.target.value;

      const capitalizeUser = lowerCasedUser.slice(0, 1).toUpperCase() + lowerCasedUser.slice(1);
      
      // console.log(capitalizeUser);

      let foundUserAccts;
      let formattedAccts = [];


      for (let user in users) {
        // console.log('users: ', users);
        // console.log('user: ', users[user].name);

        if(users[user].name === capitalizeUser) {
          foundUserAccts = users[user].accts;
        }
      }

      foundUserAccts.forEach(acct => {
        const optionObj = {
          label: acct.acctName,
          value: acct.acctName.toLowerCase()
        }
        formattedAccts.push(optionObj);
      })

      setStateFunc(formattedAccts);

      // console.log('foundUserAccts', foundUserAccts);
    })
}

export const capitalize = (string) => {
  
  return string.split(' ').map(word => {
    return word.slice(0, 1).toUpperCase() + word.slice(1);
  }).join(' ')
}

export const formatOrdinals = (n) => {

  const pr = new Intl.PluralRules('en-US', {
    type: 'ordinal'
  });

  const suffixes = new Map([
    ['one',   'st'],
    ['two',   'nd'],
    ['few',   'rd'],
    ['other', 'th'],
  ]);

  const rule = pr.select(n);
  const suffix = suffixes.get(rule);
  return `${n}${suffix}`;
};