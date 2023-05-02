import React, { useEffect, useState, lazy, Suspense } from "react";
import OnlyMobile from "../components/OnlyMobile";
import Page from "../components/Promotions/Page";
import axios from "axios";

const Footer = lazy(() => import("../components/Footer"));

const Promotions = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios(`${process.env.REACT_APP_SERVER}/api/discount`).then((res) => {
      setData(res.data.docs);
    });
  }, []);
  return (
    <>
      <Page data={data} />

      <Suspense>
        <Footer current="promotions" />
      </Suspense>
      <OnlyMobile />
    </>
  );
};

export default Promotions;
