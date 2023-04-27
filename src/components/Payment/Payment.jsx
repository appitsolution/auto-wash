import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import back from "../../assets/profile/back.svg";
import paymentUser from "../../assets/profile/profile-data.svg";
const CryptoJS = require("crypto-js");

const publicKey = "sandbox_i98441757663";
const privateKey = "sandbox_JaBwypsn5eGVcDIIgWDcElXJy6NwEoRXFmh7UuGR";

const Payment = () => {
  const [numberValue, setNumberValue] = useState("");
  const [sumValue, setSumValue] = useState("50");

  useEffect(() => {
    document.body.style.backgroundColor = "white";

    return () => {
      document.body.style.backgroundColor = "#0F84F0";
    };
  }, []);

  const json_string = {
    version: "3",
    public_key: publicKey,
    action: "pay",
    amount: sumValue,
    currency: "UAH",
    description: "Поповнення",
    order_id: "00000100",
  };
  const data = JSON.stringify(json_string).toString(CryptoJS.enc.Base64);

  const signature = CryptoJS.SHA1(privateKey + data + privateKey).toString(
    CryptoJS.enc.Base64
  );

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

            <form
              method="POST"
              action="https://www.liqpay.ua/api/3/checkout"
              accept-charset="utf-8"
            >
              <input type="hidden" name="data" value={data} />
              <input type="hidden" name="signature" value={signature} />
              <input
                type="hidden"
                name="server_url"
                value={`https://auto-wash-back.onrender.com/user/payment?test=1991`}
              />
              <button type="submit" className="payment__content-pay">
                Поповнити
              </button>
            </form>
          </div>
        </div>
      </div>

      <Link to="/info" className="profile__questions-back">
        <img className="profile__questions-back-icon" src={back} alt="back" />
      </Link>
    </section>
  );
};

export default Payment;
