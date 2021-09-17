import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./authentication/login";
import Registration from "./authentication/registration";
import Message from "./authentication/registration/message";
import Verification from "./authentication/registration/verification";

function App() {
  return (
    <Router>
      <Route path="/" exact>
        LUNA HOME
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <Registration />
      </Route>
      <Route path="/message">
        <Message />
      </Route>
      <Route path="/verification">
        <Verification />
      </Route>
    </Router>
  );
}

export default App;
