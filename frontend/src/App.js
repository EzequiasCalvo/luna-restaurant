import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./authentication/login";

function App() {
  return (
    <Router>
      <Route path="/" exact>
        LUNA HOME
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Router>
  );
}

export default App;
