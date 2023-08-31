import React from "react";
import OnlyMobile from "../components/OnlyMobile";
import SelectLang from "../components/SelectLang";

const Lang = () => {
  if (window.innerWidth > 768) {
    document.body.style.background = "white";
  } else {
    document.body.style.background = "#0f84f0";
  }
  return (
    <>
      <SelectLang />
      {/* <OnlyMobile /> */}
    </>
  );
};

export default Lang;
