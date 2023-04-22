import React from "react";
import Footer from "../components/Footer";
import OnlyMobile from "../components/OnlyMobile";
import Page from "../components/Wash/Page";

const Wash = () => {
  return (
    <>
      <Page />
      <Footer current="wash" />
      <OnlyMobile />
    </>
  );
};

export default Wash;
