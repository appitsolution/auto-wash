import React, { useState } from "react";
import { Link } from "react-router-dom";
import back from "../../assets/profile/back.svg";
import correct from "../../assets/profile/correct.png";
import car from "../../assets/profile/car.png";
import flag from "../../assets/profile/flag.png";

const Data = () => {
  const [chagePhone, setChangePhone] = useState(false);

  return (
    <section className="profile__data">
      <div className="container">
        <h1 className="profile__data-title">Особисті дані</h1>

        <div className="profile__data-content">
          <div className="profile__data-content-flex">
            <div className="profile__data-content-data">
              <div className="profile__data-content-data-block">
                <p className="profile__data-content-data-title">
                  Номер телефону
                </p>
                <p className="profile__data-content-data-text">
                  +380 01 002 03 04{" "}
                </p>
              </div>
            </div>
            <button
              className="profile__data-content-correct"
              onClick={() => setChangePhone(true)}
            >
              <img
                className="profile__data-content-corrent-img"
                src={correct}
                alt="correct"
              />
              Змінити номер
            </button>
          </div>

          <div className="profile__data-content-flex">
            <div className="profile__data-content-data">
              <div className="profile__data-content-data-block">
                <p className="profile__data-content-data-title">Ім’я</p>
                <p className="profile__data-content-data-text">Олександр</p>
              </div>
              <div className="profile__data-content-data-block">
                <p className="profile__data-content-data-title">Прізвище</p>
                <p className="profile__data-content-data-text">Тульчинський</p>
              </div>
            </div>
            <button className="profile__data-content-correct">
              <img
                className="profile__data-content-corrent-img"
                src={correct}
                alt="correct"
              />
              Змінити дані
            </button>
          </div>

          <div className="profile__data-content-flex">
            <div className="profile__data-content-data">
              <div className="profile__data-content-data-block">
                <p className="profile__data-content-data-title">
                  Електронна пошта
                </p>
                <p className="profile__data-content-data-text">
                  sashatylch@gmail.com
                </p>
              </div>
            </div>
            <button className="profile__data-content-correct">
              <img
                className="profile__data-content-corrent-img"
                src={correct}
                alt="correct"
              />
              Змінити пошту
            </button>
          </div>
          <button className="profile__data-content-correct">
            <img
              className="profile__data-content-corrent-img"
              src={car}
              alt="correct"
            />
            Додати машину
          </button>
        </div>
      </div>

      <Link to="/profile" className="profile__questions-back">
        <img className="profile__questions-back-icon" src={back} alt="back" />
      </Link>

      <div
        className={`profile__data-change-phone ${chagePhone ? "active" : ""}`}
      >
        <div className="container">
          <div className="profile__data-change-block">
            <h3 className="profile__data-change-title">Ваш телефон</h3>

            <p className="profile__data-change-text">
              Введіть новий номер телефону, щоб далі користуватися мийками
            </p>

            <label className="profile__data-change-edit">
              <img
                className="profile__data-change-edit-icon"
                src={flag}
                alt="change-icon"
              />
              <input
                type="text"
                placeholder="Введіть новий номер"
                className="profile__data-change-edit-input"
              />
            </label>
            <p className="profile__data-change-text">
              Використовуючи наш сайт оплати мийки, ви визнаєте та погоджуєтесь
              з нашою Політикою конфеденційності.
            </p>
          </div>
        </div>

        <button
          onClick={() => setChangePhone(false)}
          className="profile__data-change-accept"
        >
          Підтвердити
        </button>

        <button
          className="profile__data-change-close"
          onClick={() => setChangePhone(false)}
        >
          <img className="profile__questions-back-icon" src={back} alt="back" />
        </button>
      </div>
    </section>
  );
};

export default Data;
