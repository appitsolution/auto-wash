import React from "react";
import { Link } from "react-router-dom";
import back from "../../assets/profile/back.svg";
import cardsItem from "../../assets/cards-item.png";

const Cards = () => {
  return (
    <section className="info__cards">
      <div className="info__cards-header">
        <p className="info__cards-header-title">Мої карти клієнта</p>

        <Link
          to="/info"
          className="profile__questions-back"
          style={{
            position: "absolute",
            top: "50%",
            left: "17px",
            transform: "translateY(-50%)",
          }}
        >
          <img className="profile__questions-back-icon" src={back} alt="back" />
        </Link>
      </div>

      <div className="container">
        <ul className="info__cards-list">
          <li className="info__cards-list-item">
            <div className="info__cards-list-item-content">
              <p className="info__cards-list-item-content-id">#1234567</p>
              <h3 className="info__cards-list-item-content-title">
                Автомийка на Ватутіна
              </h3>
              <p className="info__cards-list-item-content-balance">231 UAH</p>
            </div>
            <img
              className="info__cards-list-item-img"
              src={cardsItem}
              alt="card-item"
            />
          </li>
          <li className="info__cards-list-item">
            <div className="info__cards-list-item-content">
              <p className="info__cards-list-item-content-id">#1234567</p>
              <h3 className="info__cards-list-item-content-title">
                Автомийка на Ватутіна
              </h3>
              <p className="info__cards-list-item-content-balance">231 UAH</p>
            </div>
            <img
              className="info__cards-list-item-img"
              src={cardsItem}
              alt="card-item"
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Cards;
