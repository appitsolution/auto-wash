import React from "react";
import Footer from "../components/Footer";
import OnlyMobile from "../components/OnlyMobile";

const Home = () => {
  return (
    <>
      <Footer current="home" />
      <OnlyMobile />
    </>
  );
};

export default Home;
