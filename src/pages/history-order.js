import React, { lazy, Suspense } from "react";
import Page from "../components/HistoryOrder/Page";
import OnlyMobile from "../components/OnlyMobile";

const Footer = lazy(() => import("../components/Footer"));

const HistoryOrder = () => {
  return (
    <>
      <Page />
      <Suspense>
        <Footer current="history" />
      </Suspense>
      <OnlyMobile />
    </>
  );
};

export default HistoryOrder;
