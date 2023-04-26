import React from "react";
import { Link } from "react-router-dom";
import promotions from "../../assets/icons/promotions.svg";
import wash2 from "../../assets/wash/wash-2.png";
import washAdd from "../../assets/wash/wash-add.svg";
import slide1 from "../../assets/wash/sliders/1.png";
import slide2 from "../../assets/wash/sliders/2.png";
import slide3 from "../../assets/wash/sliders/3.png";

const dataTest = [
  {
    id: "1",
    images: [slide1, slide2, slide3],
    title: "Мийка на Ватутіна",
    date: "вул. Ватутіна, 84",
    desc: "Як тільки годинник показав 16:01 - відразу їдь до нас. Дуже зручно після роботи, помити машину не за 100 гривень, а за 50.    ",
    price: "26",
  },
  {
    id: "2",
    images: [wash2, slide2, slide3],
    title: "Мийка на Ватутіна",
    date: "вул. Ватутіна, 84",
    desc: "Як тільки годинник показав 16:01 - відразу їдь до нас. Дуже зручно після роботи, помити машину не за 100 гривень, а за 50.    ",
    price: "26",
  },
  {
    id: "3",
    images: [slide1, slide2, slide3],
    title: "Мийка на Ватутіна",
    date: "вул. Ватутіна, 84",
    desc: "Як тільки годинник показав 16:01 - відразу їдь до нас. Дуже зручно після роботи, помити машину не за 100 гривень, а за 50.    ",
    price: "26",
  },
  {
    id: "4",
    images: [slide1, slide2, slide3],
    title: "Мийка на Ватутіна",
    date: "вул. Ватутіна, 84",
    desc: "Як тільки годинник показав 16:01 - відразу їдь до нас. Дуже зручно після роботи, помити машину не за 100 гривень, а за 50.    ",
    price: "26",
  },
];

const Page = ({ data }) => {
  return (
    <section className="wash">
      <div className="promotions__notification">
        <p className="promotions__notification-text">
          Обери собі найкращу мийку або детейлінг
        </p>

        <img
          className="promotions__notification-icon"
          src={promotions}
          alt="promotions"
        />
      </div>
      <div className="container">
        <ul className="wash__list">
          {data.map((item) => (
            <li className="wash__item" key={item.id}>
              <Link to={`/wash/${item.id}`} className="wash__item-link">
                <div className="wash__item-image">
                  <img
                    className="wash__item-image-img"
                    alt="content"
                    src={item.images[0].image.url}
                  />
                </div>
                <div className="wash__item-content">
                  <div className="wash__item-content-info">
                    <h2 className="wash__item-content-info-title">
                      {item.title}
                    </h2>
                    <p className="wash__item-content-info-address">
                      {item.address}
                    </p>
                  </div>
                  <div className="wash__item-content-addition">
                    <img
                      className="wash__item-content-addition-icon"
                      alt="addition"
                      src={washAdd}
                    />
                    <p className="wash__item-content-addition-text">Пилосос</p>
                  </div>
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
