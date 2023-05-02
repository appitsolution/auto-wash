import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import washIconRoad from "../../assets/wash/wash-item-icon.png";
import backIcon from "../../assets/wash/back.svg";

// Import Swiper styles
import "swiper/css";
import axios from "axios";
import { useSelector } from "react-redux";

const Item = ({ data }) => {
  console.log(data);
  const [balanceCurrent, setBalanceCurrent] = useState("0");

  const parseDescription = () => {
    if (Object.keys(data).length !== 0) {
      const htmlElements = [];

      data.description.forEach((item, index) => {
        htmlElements.push(item.children[0].text);
        if (index === data.description.length) return;
        htmlElements.push("<br/>");
      });
      return htmlElements.join(" ");
    }
  };

  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    if (token !== "") {
      axios
        .post(`${process.env.REACT_APP_SERVER}/user/verify`, { token })
        .then((res) => {
          const result = res.data.balanceWash.find(
            (item) => item.id === data.id
          );
          if (result === undefined) return;

          setBalanceCurrent(result.balance);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <section className="wash">
      {Object.keys(data).length === 0 ? (
        <></>
      ) : (
        <div className="wash__item-page">
          <div className="wash__item-page-slider">
            <Swiper
              spaceBetween={1}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
            >
              {data.images.map((item) => (
                <SwiperSlide>
                  <img
                    className="wash__item-page-slider-img"
                    alt="icon-slide"
                    src={item.image.url}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <p className="wash__item-page-slider-text">Гортай фото</p>
          </div>
          <div className="wash__item-page-info">
            <div className="wash__item-page-info-balance">
              <p className="wash__item-page-info-balance-text">
                Баланс на мийці
              </p>
              <p className="wash__item-page-info-balance-price">
                {balanceCurrent} ₴
              </p>
            </div>

            <div className="wash__item-page-info-content">
              <div className="wash__item-page-info-content-block">
                <div className="wash__item-page-info-content-description">
                  <h2 className="wash__item-page-info-content-description-title">
                    {data.title}
                  </h2>
                  <p className="wash__item-page-info-content-description-address">
                    {data.address}
                  </p>
                </div>
                <div className="wash__item-page-info-content-image">
                  <img
                    className="wash__item-page-info-content-image-img"
                    src={washIconRoad}
                    alt="washIconRoad"
                  />
                  <p className="wash__item-page-info-content-image-text">
                    8,4 КМ
                  </p>
                </div>
              </div>

              <p
                dangerouslySetInnerHTML={{ __html: parseDescription() }}
                className="wash__item-page-info-content-desc"
              ></p>

              <Link
                to={`/payment/${data.id}`}
                className="wash__item-page-info-content-deposit"
              >
                Поповнити баланс
              </Link>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${data.address}`}
                className="wash__item-page-info-content-road"
              >
                Прокласти маршрут
              </a>
            </div>
          </div>
          <Link to="/wash" className="wash__item-page-back">
            <img
              className="wash__item-page-back-icon"
              src={backIcon}
              alt="backIcon"
            />
          </Link>
        </div>
      )}
    </section>
  );
};

export default Item;
