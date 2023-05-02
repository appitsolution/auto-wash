import React, { useEffect, useState, lazy, Suspense } from "react";
import OnlyMobile from "../components/OnlyMobile";
import QuestionsItem from "../components/Profile/QuestionsItem";
import { useParams } from "react-router-dom";
import axios from "axios";

const Footer = lazy(() => import("../components/Footer"));

const ProfileQuestionsItem = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios(`${process.env.REACT_APP_SERVER}/api/question/${id}`).then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <>
      <QuestionsItem data={data} />
      <Suspense>
        <Footer current="profile" />
      </Suspense>
      <OnlyMobile />
    </>
  );
};

export default ProfileQuestionsItem;
