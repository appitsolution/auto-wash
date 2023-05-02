import React, { lazy, Suspense } from "react";
import OnlyMobile from "../components/OnlyMobile";
import Info from "../components/Info/Info";

const Footer = lazy(() => import("../components/Footer"));

const InfoPage = () => {
  return (
    <>
      <Info />
      <Suspense>
        <Footer current="home" />
      </Suspense>
      <OnlyMobile />
    </>
  );
};

export default InfoPage;
