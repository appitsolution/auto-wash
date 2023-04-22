import React from "react";
import Footer from "../components/Footer";
import Page from "../components/HistoryOrder/Page";
import OnlyMobile from "../components/OnlyMobile";

const HistoryOrder = () => {
  return (
    <>
      <Page />
      <Footer current="history" />
      <OnlyMobile />
    </>
  );
};

export default HistoryOrder;
