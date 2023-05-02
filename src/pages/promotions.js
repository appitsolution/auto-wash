import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import OnlyMobile from "../components/OnlyMobile";
import Page from "../components/Promotions/Page";
import axios from "axios";

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
      <Footer current="promotions" />
      <OnlyMobile />
    </>
  );
};

export default Promotions;
