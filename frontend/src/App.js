import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./authentication/login";
import Registration from "./authentication/registration";
import Message from "./authentication/registration/message";
import Verification from "./authentication/registration/verification";
import Home from "./home";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home}></Route>
      <Route path="/login" exact component={Login}></Route>
      <Route path="/signup" exact component={Registration}></Route>
      <Route path="/message" exact component={Message}></Route>
      <Route path="/verification" exact component={Verification}></Route>
    </Router>
  );
}

export default App;
