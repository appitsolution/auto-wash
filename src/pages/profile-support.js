import React from "react";
import OnlyMobile from "../components/OnlyMobile";
import Footer from "../components/Footer";
import Support from "../components/Profile/Support";

const ProfileSettings = () => {
  return (
    <>
      <Support />
      <Footer current="profile" />
      <OnlyMobile />
    </>
  );
};

export default ProfileSettings;
