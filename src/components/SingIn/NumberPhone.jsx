import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import logo from "../../assets/logo-cmb.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NumberPhone = () => {
  const [acceptNumber, setAcceptNumber] = useState(false);
  const [errorNumber, setErrorNumber] = useState(false);
  const [numberInput, setNumberInput] = useState("");
  const [currentNumber, setCurrentNumber] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const phoneNumber = numberInput;

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
  }, [numberInput]);

  const submitNumber = async (value) => {
    if (!acceptNumber) {
      setErrorNumber(true);

      setTimeout(() => {
        setErrorNumber(false);
      }, 3000);
      return;
    }
    axios
      .post(`${process.env.REACT_APP_SERVER}/user/check-code`, {
        number: currentNumber,
      })
      .then(() => {
        navigate(`/signin/${currentNumber}`);
      });
  };

  return (
    <section className="number-phone">
      <div className="container">
        <div className="number-phone__block">
          <h1 className="number-phone__title">Вхід в кабінет</h1>
          <Formik initialValues={{ phone: "" }} onSubmit={submitNumber}>
            {() => (
              <Form className="number-phone__form">
                <Field
                  className="number-phone__form-phone"
                  type="text"
                  name="phone"
                  placeholder="Введіть свій номер телефону"
                  onInput={({ target }) =>
                    setNumberInput(target.value.replace(/[^\d]/g, ""))
                  }
                  value={numberInput}
                />
                <p
                  className={`number-phone__form-error ${
                    errorNumber ? "active" : ""
                  }`}
                >
                  некоректні дані
                </p>
                <button className="number-phone__form-button" type="submit">
                  Далі
                </button>
              </Form>
            )}
          </Formik>

          <a className="number-phone__logo" href="/">
            <img
              className="number-phone__logo-icon"
              src={logo}
              alt="logo-cmb"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default NumberPhone;
