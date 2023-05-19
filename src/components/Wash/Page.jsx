import React, { useState } from "react";
import { Link } from "react-router-dom";
import promotions from "../../assets/icons/promotions.svg";
import wash2 from "../../assets/wash/wash-2.png";
import washAdd from "../../assets/wash/wash-add.svg";
import slide1 from "../../assets/wash/sliders/1.png";
import slide2 from "../../assets/wash/sliders/2.png";
import slide3 from "../../assets/wash/sliders/3.png";
import filterWash from "../../assets/icons/filter-wash.svg";
import filterWashItem from "../../assets/icons/filter-wash-item.png";

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
  const [showFilter, setShowFilter] = useState(false);
  const [currectFilterName, setCurrentFilterName] = useState("А - Я");
  const [filterList, setFilterList] = useState([]);

  const filterIs = (current) => {
    if (current === "А - Я") {
      setCurrentFilterName(current);
      const newList = data.sort((a, b) => a.title.localeCompare(b.title));
      setShowFilter(false);
      setFilterList(newList);
    }
    if (current === "Я - А") {
      setCurrentFilterName(current);
      const newList = data.sort((a, b) => b.title.localeCompare(a.title));
      setShowFilter(false);
      setFilterList(newList);
    }
  };
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
        <div className="wash__filter">
          <button
            className="wash__filter-open"
            onClick={() => setShowFilter(!showFilter)}
          >
            <p className="wash__filter-text">{currectFilterName}</p>
            <img className="wash__filter-icon" src={filterWash} />
          </button>

          <div className={`wash__filter-buttons ${showFilter ? "active" : ""}`}>
            <button
              className="wash__filter-button"
              onClick={() => filterIs("А - Я")}
            >
              <img className="wash__filter-icon" src={filterWashItem} />
              <p className="wash__filter-text">Від А</p>
            </button>
            <button
              className="wash__filter-button"
              onClick={() => filterIs("Я - А")}
            >
              <img className="wash__filter-icon" src={filterWashItem} />
              <p className="wash__filter-text">Від Я</p>
            </button>
          </div>
        </div>
        <ul
          className="wash__list"
          style={{ opacity: Object.keys(data).length === 0 ? 0 : 1 }}
        >
          {filterList.length === 0 ? (
            <>
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
                        <p className="wash__item-content-addition-text">
                          Пилосос
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </>
          ) : (
            <>
              {filterList.map((item) => (
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
                        <p className="wash__item-content-addition-text">
                          Пилосос
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </>
          )}
        </ul>
      </div>
    </section>
  );
};
export default Page;
