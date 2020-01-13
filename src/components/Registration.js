import React from "react";
import UserForm from "./UserForm";

const Registration = () => {
  return (
    <UserForm title={"Register"} linkTarget={"/login"} linkText={"Login"} />
  );
};

export default Registration;
