import React from "react";

const dataTest = [
  {
    title: "Мийка на Ватутіна",
    address: " вул.Ватутіна, 84",
    date: "16.03.2023",
    price: "60",
  },
  {
    title: "Мийка на Ватутіна",
    address: " вул.Ватутіна, 84",
    date: "16.03.2023",
    price: "60",
  },
  {
    title: "Мийка на Ватутіна",
    address: " вул.Ватутіна, 84",
    date: "16.03.2023",
    price: "60",
  },
  {
    title: "Мийка на Ватутіна",
    address: " вул.Ватутіна, 84",
    date: "16.03.2023",
    price: "120",
  },
  {
    title: "Мийка на Ватутіна",
    address: " вул.Ватутіна, 84",
    date: "16.03.2023",
    price: "60",
  },
  {
    title: "Мийка на Ватутіна",
    address: " вул.Ватутіна, 84",
    date: "16.03.2023",
    price: "60",
  },
];
const Page = () => {
  return (
    <section className="history-order">
      <div className="container">
        <h1 className="history-order__title">Історія мийок</h1>
        <ul className="history-order__list">
          {dataTest.map((item) => (
            <li className="history-order__item">
              <h2 className="history-order__item-title">{item.title}</h2>
              <div className="history-order__item-block">
                <div className="history-order__item-text">
                  <p className="history-order__item-text-address">
                    {item.address}
                  </p>
                  <p className="history-order__item-text-date">{item.date}</p>
                </div>
                <p className="history-order__item-price">{item.price} ₴</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Page;
