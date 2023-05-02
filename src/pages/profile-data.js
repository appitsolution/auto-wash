import React, { lazy, Suspense } from "react";
import OnlyMobile from "../components/OnlyMobile";
import Data from "../components/Profile/Data";

const Footer = lazy(() => import("../components/Footer"));

const ProfileData = () => {
  return (
    <>
      <Data />
      <Suspense>
        <Footer current="profile" />
      </Suspense>
      <OnlyMobile />
    </>
  );
};

export default ProfileData;
