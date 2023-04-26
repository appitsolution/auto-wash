import React from "react";
import OnlyMobile from "../components/OnlyMobile";
import Footer from "../components/Footer";
import Info from "../components/Info/Info";

const InfoPage = () => {
  return (
    <>
      <Info />
      <Footer current="home" />
      <OnlyMobile />
    </>
  );
};

export default InfoPage;
