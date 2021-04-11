import React, { createContext, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Home from "./Components/Home/Home";
import ClubDetails from "./Components/ClubDetails/ClubDetails";
import NotFound from "./Components/NotFound/NotFound";
import ScrollUp from "./Components/ScrollUp/ScrollUp";
export const UserContext = createContext();
function App() {
  const [selectedClub, setSelectedClub] = useState({});
  const [clubs, setClubs] = useState([]);
  useEffect(()=>{
    const url = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League";
    fetch(url)
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      setClubs(data.teams);
    })
  },[])
  // console.log(clubs);
  return (
    <UserContext.Provider value={[selectedClub, setSelectedClub, clubs, setClubs]}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home flag={false}/>
          </Route>
          <Route exact path='/home'>
            <Home flag={false}/>
          </Route>
          <Route path={`/club-details/:name`}>
            <Home flag={true}/>
            <ClubDetails />
          </Route>
          <Route path="*/:page" component={NotFound}/>
        </Switch>
        {/* <ScrollUp/> */}
      </Router>
      <ScrollUp/>
    </UserContext.Provider>
  );
}

export default App;
