import React, { lazy, Suspense } from "react";
import OnlyMobile from "../components/OnlyMobile";
import ProfilePage from "../components/Profile/Profile";

const Footer = lazy(() => import("../components/Footer"));

const Profile = () => {
  return (
    <>
      <ProfilePage />
      <Suspense>
        <Footer current="profile" />
      </Suspense>
      <OnlyMobile />
    </>
  );
};

export default Profile;
