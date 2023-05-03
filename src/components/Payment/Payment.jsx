// import LiqPay from "../../libs/sdk-nodejs/lib/liqpay";

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import back from "../../assets/profile/back.svg";
import paymentUser from "../../assets/profile/profile-data.svg";
import axios from "axios";
import { useSelector } from "react-redux";
const CryptoJS = require("crypto-js");

const publicKey = "sandbox_i98441757663";
const privateKey = "sandbox_JaBwypsn5eGVcDIIgWDcElXJy6NwEoRXFmh7UuGR";

const Payment = () => {
  const { id } = useParams();
  const [dataWash, setDataWash] = useState({});

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER}/api/wash/${id}`).then((res) => {
      setDataWash(res.data);
    });
  }, [id]);
  const [acceptNumber, setAcceptNumber] = useState(false);
  const [errorNumber, setErrorNumber] = useState(false);
  const [numberValue, setNumberValue] = useState("");
  const [sumValue, setSumValue] = useState("50");
  const [currentNumber, setCurrentNumber] = useState("");

  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_SERVER}/user/verify`, { token })
      .then((res) => {
        setCurrentNumber(res.data.phone);
        setNumberValue(res.data.phone);
      });
  }, [token]);

  useEffect(() => {
    const phoneNumber = numberValue;

    const regex = /^(\+?3?8)?(0\d{9})$/;

    if (regex.test(phoneNumber)) {
      const formattedPhoneNumber = phoneNumber.replace(regex, "+38$2");
      console.log(`Номер телефона: ${formattedPhoneNumber}`);
      setCurrentNumber(formattedPhoneNumber);
      setAcceptNumber(true);
    } else {
      console.log("Неверный формат номера телефона");
      setAcceptNumber(false);
    }
  }, [numberValue]);

  useEffect(() => {
    document.body.style.backgroundColor = "white";

    return () => {
      document.body.style.backgroundColor = "#0F84F0";
    };
  }, []);

  const orderIdGenerate = String(Math.floor(Math.random() * 900000) + 100000);

  const json_string = {
    version: "3",
    public_key: publicKey,
    action: "pay",
    amount: sumValue,
    currency: "UAH",
    description: "Поповнення",
    // server_url: `https://auto-wash-back.onrender.com/user/payment`,
    result_url: `https://auto-wash-back.onrender.com/user/payment?order=${orderIdGenerate}`,
    order_id: orderIdGenerate,
  };
  const data = JSON.stringify(json_string).toString(CryptoJS.enc.Base64);

  const signature = CryptoJS.SHA1(privateKey + data + privateKey).toString(
    CryptoJS.enc.Base64
  );

  const createOrderMiddle = async () => {
    await axios.post(`${process.env.REACT_APP_SERVER}/user/payment-create`, {
      number: currentNumber,
      orderId: orderIdGenerate,
      washId: id,
      titleWash: dataWash.title,
      addressWash: dataWash.address,
    });
  };

  const createOrder = async (e) => {
    e.preventDefault();
    if (numberValue === "") return;
    if (!acceptNumber) {
      e.preventDefault();
      setErrorNumber(true);

      setTimeout(() => {
        setErrorNumber(false);
      }, 3000);
      return;
    }

    await createOrderMiddle();

    document.getElementById("payment-form").submit();
  };

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
            <p
              className={`number-phone__form-error ${
                errorNumber ? "active" : ""
              }`}
            >
              некоректні дані
            </p>

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
              onSubmit={createOrder}
              method="POST"
              action="https://www.liqpay.ua/api/3/checkout"
              accept-charset="utf-8"
              id="payment-form"
            >
              <input type="hidden" name="data" value={data} />
              <input type="hidden" name="signature" value={signature} />
              <button className="payment__content-pay">Поповнити</button>
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
