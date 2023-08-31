import React from "react";
import OnlyMobile from "../components/OnlyMobile";
import NumberPhone from "../components/SingIn/NumberPhone";

const Home = () => {
  if (window.innerWidth > 768) {
    document.body.style.background = "white";
  } else {
    document.body.style.background = "#0f84f0";
  }
  return (
    <>
      <NumberPhone />
      {/* <OnlyMobile /> */}
    </>
  );
};

export default Home;
