import React, { useEffect } from "react";
import OnlyMobile from "../components/OnlyMobile";
import Item from "../components/Wash/Item";

const WashItem = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "white";
    return () => {
      document.body.style.backgroundColor = "#0f84f0";
    };
  });
  return (
    <>
      <Item />
      <OnlyMobile />
    </>
  );
};

export default WashItem;
