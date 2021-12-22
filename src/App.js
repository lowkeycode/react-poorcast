import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { UsersContextProvider } from "./store/users-context";
import { OverlaysContextProvider } from "./store/overlays-context";

import Accounts from "./components/pages/accounts/Accounts/Accounts";
import Overview from "./components/pages/overview/Overview/Overview";
import AddPerson from "./components/pages/addPerson/AddPerson/AddPerson";
import Settings from "./components/pages/settings/Settings/Settings";


function App() {

  return (
    <OverlaysContextProvider>
      <UsersContextProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Overview />} />

            <Route exact path="/accounts" element={<Accounts />} />

            <Route exact path="/addPerson" element={<AddPerson />} />

            <Route exact path="/settings" element={<Settings />} />
          </Routes>
        </Router>
      </UsersContextProvider>
    </OverlaysContextProvider>
  );
}

export default App;
