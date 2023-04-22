import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import OnlyMobile from "../components/OnlyMobile";
import Item from "../components/Promotions/Item";

import promotions1 from "./../assets/promotions/promotions-1.png";
import promotions2 from "./../assets/promotions/promotions-2.png";
import promotions3 from "./../assets/promotions/promotions-3.png";
import promotions4 from "./../assets/promotions/promotions-4.png";
import { useParams } from "react-router-dom";

const dataTest = [
  {
    id: "1",
    image: promotions1,
    title: "-50% на мийку після 16:00",
    date: "Діє з 10.04 до 10.05",
  },
  {
    id: "2",
    image: promotions2,
    title: "Автокосметика в подарунок",
    date: "Діє з 20.04 до 25.04",
  },
  {
    id: "3",
    image: promotions3,
    title: "Знижка 20% до дня Закоханих",
    date: "Діє з 14.02 до 21.02",
  },
  {
    id: "4",
    image: promotions4,
    title: "Знижка 80% на честь відкриття",
    date: "Діє з 25.06 до 02.07",
  },
  {
    id: "5",
    image: promotions4,
    title: "Знижка 80% на честь відкриття",
    date: "Діє з 25.06 до 02.07",
  },
  {
    id: "6",
    image: promotions4,
    title: "Знижка 80% на честь відкриття",
    date: "Діє з 25.06 до 02.07",
  },
];

const PromotionsItem = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    dataTest.forEach((item) => {
      if (item.id === id) setData(item);
    });
  }, []);

  return (
    <>
      <Item data={data} />
      <Footer current="promotions" />
      <OnlyMobile />
    </>
  );
};

export default PromotionsItem;
