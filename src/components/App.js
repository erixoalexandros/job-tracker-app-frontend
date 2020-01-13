import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import Navigation from "./Navigation";
import Login from "./Login";
import Registration from "./Registration";
import JobList from "./JobList";
import JobDetail from "./JobDetail";
import CreateJob from "./CreateJob";

const App = () => {
  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route path={"/"} exact component={JobList} />
          <Route path={"/login"} component={Login} />
          <Route path={"/register"} component={Registration} />
          <Route path={"/:id"} exact component={JobDetail} />
          <Route path={"/create"} component={CreateJob} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
