import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../../assets/wash/sliders/1.png";
import slide2 from "../../assets/wash/sliders/2.png";
import slide3 from "../../assets/wash/sliders/3.png";
import washIconRoad from "../../assets/wash/wash-item-icon.png";
import backIcon from "../../assets/wash/back.svg";

// Import Swiper styles
import "swiper/css";
import { Link } from "react-router-dom";

const Item = ({ data }) => {
  return (
    <section className="wash">
      <div className="wash__item-page">
        <div className="wash__item-page-slider">
          <Swiper
            spaceBetween={1}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <img
                className="wash__item-page-slider-img"
                alt="icon-slide"
                src={slide1}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="wash__item-page-slider-img"
                alt="icon-slide"
                src={slide1}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="wash__item-page-slider-img"
                alt="icon-slide"
                src={slide1}
              />
            </SwiperSlide>
          </Swiper>

          <p className="wash__item-page-slider-text">Гортай фото</p>
        </div>
        <div className="wash__item-page-info">
          <div className="wash__item-page-info-balance">
            <p className="wash__item-page-info-balance-text">Баланс на мийці</p>
            <p className="wash__item-page-info-balance-price">26 ₴</p>
          </div>

          <div className="wash__item-page-info-content">
            <div className="wash__item-page-info-content-block">
              <div className="wash__item-page-info-content-description">
                <h2 className="wash__item-page-info-content-description-title">
                  Мийка на Ватутіна
                </h2>
                <p className="wash__item-page-info-content-description-address">
                  вул. Ватутіна, 84
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

            <p className="wash__item-page-info-content-desc">
              Як тільки годинник показав 16:01 - відразу їдь до нас. <br />
              <br />
              Дуже зручно після роботи, помити машину не за 100 гривень, а за
              50.
            </p>

            <button className="wash__item-page-info-content-deposit">
              Поповнити баланс
            </button>

            <button className="wash__item-page-info-content-road">
              Прокласти маршрут
            </button>
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
    </section>
  );
};

export default Item;
