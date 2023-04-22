import React from "react";
import OnlyMobile from "../components/OnlyMobile";
import Footer from "../components/Footer";
import Questions from "../components/Profile/Questions";

const ProfileQuestions = () => {
  return (
    <>
      <Questions />
      <Footer current="profile" />
      <OnlyMobile />
    </>
  );
};

export default ProfileQuestions;
