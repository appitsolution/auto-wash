import React from "react";
import OnlyMobile from "../components/OnlyMobile";
import CheckCode from "../components/SingIn/CheckCode";

const SignIn = () => {
  return (
    <>
      {/* <NumberPhone /> */}
      <CheckCode />
      <OnlyMobile />
    </>
  );
};

export default SignIn;
