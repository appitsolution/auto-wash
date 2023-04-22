import React from "react";
import Footer from "../components/Footer";
import OnlyMobile from "../components/OnlyMobile";
import Page from "../components/Promotions/Page";

const Promotions = () => {
  return (
    <>
      <Page />
      <Footer current="promotions" />
      <OnlyMobile />
    </>
  );
};

export default Promotions;
