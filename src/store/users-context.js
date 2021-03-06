import { createContext, useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";

import realtime from "../firebase/realtime";

const UsersContext = createContext({
  users: [],
  formattedAccts: [],
  selectedDeleteUser: '',
  selectedDeleteUserKey: ''
});

export const UsersContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [formattedAccts, setFormattedAccts] = useState([]);
  const [selectedDeleteUser, setSelectedDeleteUser] = useState('');
  const [selectedDeleteUserKey, setSelectedDeleteUserKey] = useState('');

  // Get all user info on page load
  useEffect(() => {
    const dbRef = ref(realtime, "users");

    onValue(dbRef, (snapshot) => {
      const usersSnapshot = snapshot.val();

      setUsers(usersSnapshot);
    });
  }, []);

  // After users have loaded, format each user with accounts for accounts page
  useEffect(() => {
    let userAccts = [];

    for (let user in users) {
      const formattedAcct = {
        key: user,
        name: users[user].name,
        accts: users[user].accts,
      };

      userAccts = [...userAccts, formattedAcct];
    }

    setFormattedAccts(userAccts);
  }, [users]);

  return (
    <UsersContext.Provider
      value={{
        users: users,
        formattedAccts: formattedAccts,
        selectedDeleteUser: selectedDeleteUser,
        setSelectedDeleteUser: setSelectedDeleteUser,
        selectedDeleteUserKey: selectedDeleteUserKey,
        setSelectedDeleteUserKey: setSelectedDeleteUserKey
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContext;
