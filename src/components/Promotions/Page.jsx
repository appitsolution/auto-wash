import React from "react";
import promotions from "../../assets/icons/promotions.svg";
import promotions1 from "../../assets/promotions/promotions-1.png";
import promotions2 from "../../assets/promotions/promotions-2.png";
import promotions3 from "../../assets/promotions/promotions-3.png";
import promotions4 from "../../assets/promotions/promotions-4.png";
import { Link } from "react-router-dom";

const data = [
  {
    id: "1",
    image: promotions1,
    title: "-50% на мийку після 16:00",
    date: "Діє з 10.04 до 10.05",
  },
  {
    id: "2",
    image: promotions2,
    title: "Автокосметика в подарунок",
    date: "Діє з 20.04 до 25.04",
  },
  {
    id: "3",
    image: promotions3,
    title: "Знижка 20% до дня Закоханих",
    date: "Діє з 14.02 до 21.02",
  },
  {
    id: "4",
    image: promotions4,
    title: "Знижка 80% на честь відкриття",
    date: "Діє з 25.06 до 02.07",
  },
  {
    id: "5",
    image: promotions4,
    title: "Знижка 80% на честь відкриття",
    date: "Діє з 25.06 до 02.07",
  },
  {
    id: "6",
    image: promotions4,
    title: "Знижка 80% на честь відкриття",
    date: "Діє з 25.06 до 02.07",
  },
];

const Page = () => {
  return (
    <section className="promotions">
      <div className="promotions__notification">
        <p className="promotions__notification-text">
          Магазин автокосметики та обладнання для автомийок
        </p>

        <img
          className="promotions__notification-icon"
          src={promotions}
          alt="promotions"
        />
      </div>
      <div className="container">
        <ul className="promotions__list">
          {data.map((item) => (
            <li className="promotions__item" key={item.id}>
              <Link
                to={`/promotions/${item.id}`}
                className="promotions__item-link"
              >
                <div className="promotions__item-content">
                  <h2 className="promotions__item-content-title">
                    {item.title}
                  </h2>
                  <p className="promotions__item-content-date">{item.date}</p>
                </div>
                <div className="promotions__item-image">
                  <img
                    className="promotions__item-image-img"
                    src={item.image}
                    alt="promotions1"
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Page;
