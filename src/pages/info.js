import React from "react";
import OnlyMobile from "../components/OnlyMobile";
import Footer from "../components/Footer";
import Info from "../components/Info/Info";

const ProfileData = () => {
  return (
    <>
      <Info />
      <Footer current="home" />
      <OnlyMobile />
    </>
  );
};

export default ProfileData;
