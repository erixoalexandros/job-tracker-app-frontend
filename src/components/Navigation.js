import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <nav>
        <Link to={"/"}>
          Job<span>Tracker</span>
        </Link>
        <Link className="logout" to={"/login"}>
          Logout
        </Link>
      </nav>
    </div>
  );
};

export default Navigation;
