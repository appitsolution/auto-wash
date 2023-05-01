import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import back from "../../assets/profile/back.svg";
import cardsItem from "../../assets/cards-item.png";
import { useSelector } from "react-redux";
import axios from "axios";

const Cards = () => {
  const [data, setData] = useState([]);
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    if (token !== "") {
      axios
        .post(`${process.env.REACT_APP_SERVER}/user/verify`, { token })
        .then((res) => {
          setData(res.data.balanceWash);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);
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
          {data.map((item) => (
            <li className="info__cards-list-item">
              <div className="info__cards-list-item-content">
                <p className="info__cards-list-item-content-id">#{item.id}</p>
                <h3 className="info__cards-list-item-content-title">
                  {item.address}
                </h3>
                <p className="info__cards-list-item-content-balance">
                  {item.balance} UAH
                </p>
              </div>
              <img
                className="info__cards-list-item-img"
                src={cardsItem}
                alt="card-item"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Cards;
