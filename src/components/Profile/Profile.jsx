import React, { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import profileLogo from "../../assets/logo-profile.png";
import dataIcon from "../../assets/profile/profile-data.svg";
import settings from "../../assets/profile/settings.svg";
import question from "../../assets/profile/question.svg";
import support from "../../assets/profile/support.svg";
import { useSelector } from "react-redux";
import axios from "axios";

const Profile = memo(() => {
  const [data, setData] = useState({});
  const [lazyData, setLazyData] = useState(false);

  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    if (token !== "") {
      axios
        .post(`${process.env.REACT_APP_SERVER}/user/verify`, { token })
        .then((res) => {
          setData(res.data.data);
          setLazyData(true);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);
  return (
    <section className="profile">
      <div className="profile__header">
        <h1
          className="profile__header-title"
          style={{ opacity: lazyData ? 1 : 0 }}
        >
          {data.firstName !== "" ? data.firstName : "Тут буде ваше Ім’я"}
        </h1>
        <div className="profile__header-flex">
          <p className="profile__header-flex-id">#{data.idUser}</p>
          <img
            className="profile__header-flex-logo"
            alt="profile-logo"
            src={profileLogo}
          />
        </div>
      </div>
      <div className="container">
        <ul className="profile__menu">
          <li className="profile__menu-item">
            <Link className="profile__menu-link" to="/profile/data">
              <img
                className="profile__menu-link-img"
                alt="profile-menu"
                src={dataIcon}
              />
              Особисті дані
            </Link>
          </li>
          <li className="profile__menu-item">
            <Link className="profile__menu-link" to="/profile/settings">
              <img
                className="profile__menu-link-img"
                alt="profile-menu"
                src={settings}
              />
              Налаштування
            </Link>
          </li>
          <li className="profile__menu-item">
            <Link className="profile__menu-link" to="/profile/questions">
              <img
                className="profile__menu-link-img"
                alt="profile-menu"
                src={question}
              />
              Відповіді на запитання
            </Link>
          </li>
          <li className="profile__menu-item">
            <Link className="profile__menu-link" to="/profile/support">
              <img
                className="profile__menu-link-img"
                alt="profile-menu"
                src={support}
              />
              Служба підтримки
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
});

export default Profile;
