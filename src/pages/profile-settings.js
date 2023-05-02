import React, { lazy, Suspense } from "react";
import Settings from "../components/Profile/Settings";
import OnlyMobile from "../components/OnlyMobile";

const Footer = lazy(() => import("../components/Footer"));

const ProfileSettings = () => {
  return (
    <>
      <Settings />
      <Suspense>
        <Footer current="profile" />
      </Suspense>
      <OnlyMobile />
    </>
  );
};

export default ProfileSettings;
