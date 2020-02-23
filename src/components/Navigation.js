import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../actions/user";

const Navigation = ({ isUserLoggedIn, logoutUser }) => {
  return (
    <div>
      <nav>
        <Link className='app-title-link' to={"/"}>
          Job<span>Tracker</span>
        </Link>
        <Link onClick={logoutUser} className="login-logout-button" to={"/login"}>
          {!isUserLoggedIn ? "Login" : "Logout"}
        </Link>
      </nav>
    </div>
  );
};

const mapStateToProps = ({ user }) => {
  return {
    isUserLoggedIn: user.isLoggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logoutUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
