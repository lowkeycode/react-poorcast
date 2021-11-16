import realtime from './firebase/realtime';
import { ref, onValue } from "firebase/database";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Accounts from './components/pages/accounts/Accounts/Accounts';
import Overview from './components/pages/overview/Overview/Overview';
import AddPerson from './components/pages/addPerson/AddPerson/AddPerson';
import Settings from './components/pages/settings/Settings/Settings';

function App() {

  const [users, setUsers] = useState([]);
  const [formattedAccts, setFormattedAccts] = useState([]);
  const [transferModalOpen, setTransferModalOpen] = useState(true);

  // Get all user info on page load
  useEffect(() => {
    const dbRef = ref(realtime);

    onValue(dbRef, (snapshot) => {
      const usersSnapshot = snapshot.val();

      setUsers(usersSnapshot);

    });
  }, [])

  // After users have loaded, format each user with accounts for accounts page
  useEffect(() => {
    let userAccts = [];

    for(let user in users) {
      const formattedAcct = {
        key: user,
        name: users[user].name,
        accts: users[user].accts
      }

      userAccts = [...userAccts, formattedAcct];
    }

    setFormattedAccts(userAccts);

  }, [users])


  const user = {
    name: "Cameron",
    accts: [
      {
        acctName: "Chequings",
        acctBalance: 1000,
        acctType: 'chequings/savings'
      },
      {
        acctName: "Visa Green",
        acctBalance: 1000,
        acctLimit: 3000,
        acctType: 'credit'
      },
      {
        acctName: "Line Of Credit",
        acctBalance: 1000,
        acctLimit: 3000,
        acctType: 'credit'
      },
      {
        acctName: "Line Of Credit",
        acctBalance: 1000,
        acctLimit: 3000,
        acctType: 'credit'
      },
    ],
    expenses: [
      {
        label: "January",
      },
      {
        label: 'February'
      },
      {
        label: 'March'
      },
      {
        label: 'April'
      },
      {
        label: 'May'
      },
      {
        label: 'June'
      },
      {
        label: 'July'
      },
      {
        label: 'August'
      },
      {
        label: 'September'
      },
      {
        label: 'October'
      },
      {
        label: 'November'
      },
      {
        label: 'December'
      },
    ],
  };

  

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Overview accts={formattedAccts}/>}/>
          
        <Route exact path="/accounts" element={<Accounts  accts={formattedAccts} modalOpen={transferModalOpen}/>}/>

        <Route exact path="/addPerson" element={<AddPerson/>}/>

        <Route exact path="/settings" element={<Settings/>}/>

      </Routes>
    </Router>
  )
}

export default App;
