import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../../assets/wash/sliders/1.png";
import washIconRoad from "../../assets/wash/wash-item-icon.png";
import backIcon from "../../assets/wash/back.svg";

// Import Swiper styles
import "swiper/css";
import { Link } from "react-router-dom";

const Item = ({ data }) => {
  console.log(data);

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
              <p className="wash__item-page-info-balance-price">26 ₴</p>
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
      )}
    </section>
  );
};

export default Item;
