import React from "react";
import OnlyMobile from "../components/OnlyMobile";
import CheckCode from "../components/SingIn/CheckCode";

const SignIn = ({ setIsAuthenticated }) => {
  return (
    <>
      <CheckCode setIsAuthenticated={setIsAuthenticated} />
      {/* <OnlyMobile /> */}
    </>
  );
};

export default SignIn;
