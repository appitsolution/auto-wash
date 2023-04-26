import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import back from "../../assets/profile/back.svg";
import paymentUser from "../../assets/profile/profile-data.svg";
import axios from "axios";

const Payment = () => {
  const liqpayData = {
    action: "pay",
    amount: "10",
    currency: "USD",
    description: "Payment for order #123",
    order_id: "123",
    result_url: "https://example.com/result",
    server_url: "https://example.com/server",
  };

  axios
    .post("https://www.liqpay.ua/api/3/checkout", liqpayData)
    .then((response) => {
      const formHtml = response.data;
      console.log(formHtml);
    })
    .catch((error) => {
      console.error(error);
    });

  const [numberValue, setNumberValue] = useState("");
  const [sumValue, setSumValue] = useState("50");

  useEffect(() => {
    document.body.style.backgroundColor = "white";

    return () => {
      document.body.style.backgroundColor = "#0F84F0";
    };
  }, []);
  return (
    <section className="payment">
      <div className="payment__header">
        <div className="header">
          <h1 className="payment__header-title">Поповнення</h1>
        </div>
      </div>
      <div className="payment__content">
        <div className="payment__content-block">
          <div className="container">
            <div className="payment__content-number">
              <input
                className="payment__content-number-input"
                placeholder="+380 01 002 03 04"
                value={numberValue}
                onInput={({ target }) => setNumberValue(target.value)}
              />

              <img
                className="payment__content-number-img"
                src={paymentUser}
                alt="payment-icon"
              />
            </div>

            <div className="payment__content-sum">
              <h2 className="payment__content-sum-title">Сума поповнення</h2>

              <div className="payment__content-sum-block">
                <label className="payment__content-sum-input-label">
                  <input
                    className="payment__content-sum-input"
                    value={sumValue}
                    onInput={({ target }) => setSumValue(target.value)}
                  />
                  <p className="payment__content-sum-input-text">грн</p>
                </label>

                <div className="payment__content-sum-variant">
                  <button
                    className="payment__content-sum-variant-button"
                    onClick={() => setSumValue("100")}
                  >
                    100
                  </button>
                  <button
                    onClick={() => setSumValue("200")}
                    className="payment__content-sum-variant-button"
                  >
                    200
                  </button>
                </div>
              </div>
            </div>

            <button className="payment__content-pay">Поповнити</button>
          </div>
        </div>
      </div>

      <Link to="/info" className="profile__questions-back">
        <img className="profile__questions-back-icon" src={back} alt="back" />
      </Link>

      {/* <div dangerouslySetInnerHTML={{ __html: formHtml }}></div> */}
    </section>
  );
};

export default Payment;
