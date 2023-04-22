import React, { useState } from "react";
import deleteProfile from "../../assets/profile/delete-profile.svg";
import outProfile from "../../assets/profile/out-profile.svg";
import back from "../../assets/profile/back.svg";
import { Link } from "react-router-dom";

const Settings = () => {
  const [outActive, setOutActive] = useState(false);
  const [deleteActive, setDeleteActive] = useState(false);

  const outProfileFunc = () => {
    setOutActive(true);
  };

  const deleteProfileFunc = () => {
    setDeleteActive(true);
  };

  return (
    <section className="profile__settings">
      <div className="container">
        <h2 className="profile__settings-title">Налаштування</h2>
        <button className="profile__settings-out" onClick={outProfileFunc}>
          <img
            className="profile__settings-out-icon"
            alt="out-icon"
            src={outProfile}
          />
          Вийти з аккаунту
        </button>
        <button
          className="profile__settings-delete"
          onClick={deleteProfileFunc}
        >
          <img
            className="profile__settings-out-icon"
            alt="out-icon"
            src={deleteProfile}
          />
          Видалити аккаунт
        </button>
      </div>
      <Link to="/profile" className="profile__settings-back">
        <img className="profile__settings-back-icon" src={back} alt="back" />
      </Link>

      <div
        className={`profile__settings-accept-out ${outActive ? "active" : ""}`}
      >
        <h3 className="profile__settings-accept-out-title">
          Ви дійсно бажаєте вийти з аккаунту ?
        </h3>
        <div className="profile__settings-accept-out-block">
          <button className="profile__settings-accept-out-block-yes">
            Так
          </button>
          <button
            className="profile__settings-accept-out-block-no"
            onClick={() => setOutActive(false)}
          >
            Ні
          </button>
        </div>
      </div>

      <div
        className={`profile__settings-accept-delete ${
          deleteActive ? "active" : ""
        }`}
      >
        <h3 className="profile__settings-accept-delete-title">
          Ви дійсно бажаєте видалити аккаунт ?
        </h3>
        <div className="profile__settings-accept-delete-block">
          <button className="profile__settings-accept-delete-block-yes">
            Так
          </button>
          <button
            className="profile__settings-accept-delete-block-no"
            onClick={() => setDeleteActive(false)}
          >
            Ні
          </button>
        </div>
      </div>
    </section>
  );
};

export default Settings;
