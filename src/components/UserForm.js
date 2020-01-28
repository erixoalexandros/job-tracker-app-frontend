import React from "react";
import { Link } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { loginUser } from "../actions/user";

/*

Keep 'renderInputElement' helper function outside the UserForm component.

Explanation found on StackOverflow:

What is not working, you use arrow function to create the component (renderInputElement).
You can't do this. This is constructing a new component function on every render.
So it's normal behavior that your input loses focus.
Look at example in documentation and rewrite your code.

*/

const renderInputElement = ({ type, placeholder, required, input }) => {
  const { value, onChange } = input;
  return (
    <input
      type={type}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
      value={value}
    />
  );
};

const UserForm = ({ title, linkTarget, linkText, handleSubmit, loginUser }) => {
  const onSubmit = ({ username, password }) => {
    loginUser(username, password);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)} className="user-form">
        <h1>{title}</h1>
        <Field
          component={renderInputElement}
          name="username"
          type="text"
          required
          placeholder="Username"
        />
        <Field
          component={renderInputElement}
          name="password"
          type="password"
          required
          placeholder="Password"
        />
        <button type="submit">Login</button>
        <Link to={linkTarget}>{linkText}</Link>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    loginUser: (username, password) => dispatch(loginUser(username, password))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(
  reduxForm({
    form: "Login"
  })(UserForm)
);
