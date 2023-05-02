import React, { useState, useEffect, lazy, Suspense } from "react";
import OnlyMobile from "../components/OnlyMobile";
import Questions from "../components/Profile/Questions";
import axios from "axios";

const Footer = lazy(() => import("../components/Footer"));

const ProfileQuestions = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios(`${process.env.REACT_APP_SERVER}/api/question`).then((res) => {
      setData(res.data.docs);
    });
  }, []);
  return (
    <>
      <Questions data={data} />
      <Suspense>
        <Footer current="profile" />
      </Suspense>
      <OnlyMobile />
    </>
  );
};

export default ProfileQuestions;
