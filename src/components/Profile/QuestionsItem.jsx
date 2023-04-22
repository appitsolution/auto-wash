import React from "react";
import { Link } from "react-router-dom";
import back from "../../assets/profile/back.svg";

const QuestionsItem = ({ data }) => {
  return (
    <section className="profile__questions-item">
      <div className="container">
        <div className="profile__questions-item-block">
          <div className="profile__questions-list-link">
            <div className="profile__questions-list-link-content">
              <h2 className="profile__questions-list-link-content-title">
                {data.title}
              </h2>
              <p className="profile__questions-list-link-content-desc">
                {data.desc}
              </p>
            </div>
            <img
              className="profile__questions-list-link-img"
              alt="question-icon"
              src={data.image}
            />
          </div>
        </div>

        <p className="profile__questions-item-description">{data.content}</p>
      </div>

      <Link to="/profile/questions" className="profile__questions-back">
        <img className="profile__questions-back-icon" src={back} alt="back" />
      </Link>
    </section>
  );
};

export default QuestionsItem;
