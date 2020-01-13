import React from "react";
import UserForm from "./UserForm";

const Login = () => {
  return (
    <UserForm
      title={"Login"}
      linkTarget={"/register"}
      linkText={"Create an account"}
    />
  );
};

export default Login;
