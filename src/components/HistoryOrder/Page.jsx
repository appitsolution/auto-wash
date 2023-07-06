import axios from "axios";
import React, { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import smile from "../../assets/smile.png";
import { Link } from "react-router-dom";

// const dataTest = [
//   {
//     title: "Мийка на Ватутіна",
//     address: " вул.Ватутіна, 84",
//     date: "16.03.2023",
//     price: "60",
//   },
//   {
//     title: "Мийка на Ватутіна",
//     address: " вул.Ватутіна, 84",
//     date: "16.03.2023",
//     price: "60",
//   },
//   {
//     title: "Мийка на Ватутіна",
//     address: " вул.Ватутіна, 84",
//     date: "16.03.2023",
//     price: "60",
//   },
//   {
//     title: "Мийка на Ватутіна",
//     address: " вул.Ватутіна, 84",
//     date: "16.03.2023",
//     price: "120",
//   },
//   {
//     title: "Мийка на Ватутіна",
//     address: " вул.Ватутіна, 84",
//     date: "16.03.2023",
//     price: "60",
//   },
//   {
//     title: "Мийка на Ватутіна",
//     address: " вул.Ватутіна, 84",
//     date: "16.03.2023",
//     price: "60",
//   },
// ];

const Page = () => {
  const [lazyData, setLazyData] = useState(false);
  const token = useSelector((state) => state.user.token);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_SERVER}/user/verify`, { token })
      .then((res) => {
        setData(res.data.data.historyPayment);
      })
      .finally(() => {
        setLazyData(true);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <section className="history-order">
      <div className="container">
        <h1 className="history-order__title">Історія мийок</h1>
        <div
          style={{
            transition: "opacity 250ms linear",
            opacity: lazyData ? 1 : 0,
          }}
        >
          {data.length === 0 ? (
            <div className="history-order__null">
              <div className="history-order__null-content">
                <p className="history-order__null-content-text">
                  На жаль, у Вас ще немає історії мийок
                </p>
                <img
                  className="history-order__null-content-icon"
                  src={smile}
                  alt="smile"
                />
              </div>
              <Link className="history-order__null-button" to="/wash">
                Виправити це
              </Link>
            </div>
          ) : (
            <ul className="history-order__list">
              {data.reverse().map((item) => (
                <li className="history-order__item">
                  <h2 className="history-order__item-title">{item.title}</h2>
                  <div className="history-order__item-block">
                    <div className="history-order__item-text">
                      <p className="history-order__item-text-address">
                        {item.address}
                      </p>
                      <p className="history-order__item-text-date">
                        {item.date}
                      </p>
                    </div>
                    <p className="history-order__item-price">
                      {item.balance} ₴
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default Page;
