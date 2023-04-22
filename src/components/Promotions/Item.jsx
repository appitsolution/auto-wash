import React from "react";

const Item = ({ data }) => {
  // console.dir(data);
  return (
    <section className="promotions">
      <div className="container">
        <div className="promotions__item-page">
          <div className="promotions__item">
            <div className="promotions__item-link">
              <div className="promotions__item-content">
                <h2 className="promotions__item-content-title">{data.title}</h2>
                <p className="promotions__item-content-date">{data.date}</p>
              </div>
              <div className="promotions__item-image">
                <img
                  className="promotions__item-image-img"
                  src={data.image}
                  alt="promotions1"
                />
              </div>
            </div>
          </div>
          <div className="promotions__item-page-content">
            <h2 className="promotions__item-page-content-title">
              {data.title}
            </h2>
            <p className="promotions__item-page-content-desc">
              Як тільки годинник показав 16:01 - відразу їдь до нас.
              <br /> <br /> Дуже зручно після роботи, помити машину не за 100
              гривень, а за 50.
              <br /> <br />
              Замість горнятка кави - чисте та красиве авто.Вирішуй та роби
              правильний вибір.
              <br /> <br />
              Участь беруть, тільки власники картки клієнта. Якщо, в тебе її
              немає, тицяй на кнопку та оформляй.
            </p>
            <button className="promotions__item-page-content-button">
              Оформити картку
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Item;
