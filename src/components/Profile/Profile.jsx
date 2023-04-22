import React from "react";
import { Link } from "react-router-dom";
import profileLogo from "../../assets/logo-profile.png";
import data from "../../assets/profile/profile-data.svg";
import settings from "../../assets/profile/settings.svg";
import question from "../../assets/profile/question.svg";
import support from "../../assets/profile/support.svg";

const Profile = () => {
  return (
    <section className="profile">
      <div className="profile__header">
        <h1 className="profile__header-title">Тут буде ваше Ім’я</h1>
        <div className="profile__header-flex">
          <p className="profile__header-flex-id">#1234567</p>
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
                className="rofile__menu-link-img"
                alt="profile-menu"
                src={data}
              />
              Особисті дані
            </Link>
          </li>
          <li className="profile__menu-item">
            <Link className="profile__menu-link" to="/profile/settings">
              <img
                className="rofile__menu-link-img"
                alt="profile-menu"
                src={settings}
              />
              Налаштування
            </Link>
          </li>
          <li className="profile__menu-item">
            <Link className="profile__menu-link" to="/profile/questions">
              <img
                className="rofile__menu-link-img"
                alt="profile-menu"
                src={question}
              />
              Відповіді на запитання
            </Link>
          </li>
          <li className="profile__menu-item">
            <Link className="profile__menu-link" to="/profile/support">
              <img
                className="rofile__menu-link-img"
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
};

export default Profile;
