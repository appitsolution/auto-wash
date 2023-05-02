import React, { useState, useEffect, lazy, Suspense } from "react";
import OnlyMobile from "../components/OnlyMobile";
import Support from "../components/Profile/Support";
import axios from "axios";

const Footer = lazy(() => import("../components/Footer"));

const ProfileSettings = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios(`${process.env.REACT_APP_SERVER}/api/support`).then((res) => {
      setData(res.data.docs[0]);
    });
  }, []);
  return (
    <>
      <Support data={data} />
      <Suspense>
        <Footer current="profile" />
      </Suspense>
      <OnlyMobile />
    </>
  );
};

export default ProfileSettings;
