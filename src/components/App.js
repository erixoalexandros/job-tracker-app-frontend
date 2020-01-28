import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import history from "../history";

import "./App.css";

import Navigation from "./Navigation";
import Login from "./Login";
import Registration from "./Registration";
import JobList from "./JobList";
import JobDetail from "./JobDetail";
import CreateJob from "./CreateJob";

const App = ({ isUserLoggedIn }) => {
  return (
    <div>
      <Router history={history}>
        <Navigation />
        <Switch>
          <Route
            path={"/"}
            exact
            render={() => {
              return !isUserLoggedIn ? <Redirect to="/login" /> : <JobList />;
            }}
          />
          <Route path={"/login"} component={Login} />
          <Route path={"/register"} component={Registration} />
          <Route path={"/:id"} exact component={JobDetail} />
          <Route path={"/create"} component={CreateJob} />
        </Switch>
      </Router>
    </div>
  );
};

const mapStateToProps = ({ user }) => {
  return {
    isUserLoggedIn: user.isLoggedIn
  };
};

export default connect(mapStateToProps)(App);
