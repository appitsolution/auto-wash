import React from "react";
import OnlyMobile from "../components/OnlyMobile";
import Footer from "../components/Footer";
import ProfilePage from "../components/Profile/Profile";

const Profile = () => {
  return (
    <>
      <ProfilePage />
      <Footer current="profile" />
      <OnlyMobile />
    </>
  );
};

export default Profile;
