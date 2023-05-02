import React, { useEffect, useState, lazy, Suspense } from "react";
import OnlyMobile from "../components/OnlyMobile";
import Item from "../components/Promotions/Item";
import { useParams } from "react-router-dom";
import axios from "axios";

const Footer = lazy(() => import("../components/Footer"));

const PromotionsItem = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    axios(`${process.env.REACT_APP_SERVER}/api/discount/${id}`).then((res) => {
      setData(res.data);
      // console.log(res.data);
    });
  }, []);

  return (
    <>
      <Item data={data} />
      <Suspense>
        <Footer current="promotions" />
      </Suspense>
      <OnlyMobile />
    </>
  );
};

export default PromotionsItem;
