import React, { Suspense, useEffect, useState, lazy } from "react";
import OnlyMobile from "../components/OnlyMobile";
import Page from "../components/Wash/Page";
import axios from "axios";

const Footer = lazy(() => import("../components/Footer"));

const Wash = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios(`${process.env.REACT_APP_SERVER}/api/wash`).then((res) => {
      setData(res.data.docs);
    });
  }, []);
  return (
    <>
      <Page data={data} />
      <Suspense>
        <Footer current="wash" />
      </Suspense>
      <OnlyMobile />
    </>
  );
};

export default Wash;
