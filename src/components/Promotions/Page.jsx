import React from "react";
import promotions from "../../assets/icons/promotions.svg";
import { Link } from "react-router-dom";

const Page = ({ data }) => {
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
        <ul
          className="promotions__list"
          style={{ opacity: Object.keys(data).length === 0 ? 0 : 1 }}
        >
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
                  <p className="promotions__item-content-date">
                    Діє з {item.dateStart.slice(5, 10)} до{" "}
                    {item.dateEnd.slice(5, 10)}
                  </p>
                </div>
                <div className="promotions__item-image">
                  <img
                    className="promotions__item-image-img"
                    src={item.image.url}
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
