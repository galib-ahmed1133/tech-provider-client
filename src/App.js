import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Footer from "./Components/Home/Footer/Footer";
import Navbar from "./Components/Home/Header/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
  <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <PrivateRoute path="/dashboard">
          <Dashboard></Dashboard>
        </PrivateRoute>
      </Switch>
      <Footer></Footer>
    </Router>
  </UserContext.Provider>
  );
}

export default App;
