import React from "react";
import { Link } from "react-router-dom";

const UserForm = ({ title, linkTarget, linkText }) => {
  return (
    <div className="container">
      <form className="user-form">
        <h1>{title}</h1>
        <input type="text" name="username" required placeholder="Username" />
        <input
          type="password"
          name="password"
          required
          placeholder="Password"
        />
        <input type="submit" value={title} />
        <Link to={linkTarget}>{linkText}</Link>
      </form>
    </div>
  );
};

export default UserForm;
