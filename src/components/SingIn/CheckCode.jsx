import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import logo from "../../assets/logo-cmb.png";

const CheckCode = () => {
  const [sendActive, setSendActive] = useState(false);

  const openSend = () => {
    setSendActive(!sendActive);
  };
  return (
    <>
      <section className="number-phone">
        <div className="container">
          <div className="number-phone__block">
            <h1 className="number-phone__second">Введіть код з СМС</h1>
            <Formik
              initialValues={{
                number1: "",
                number2: "",
                number3: "",
                number4: "",
              }}
            >
              {() => (
                <Form className="number-phone__form">
                  <ul className="number-phone__form-numbers">
                    <li className="number-phone__form-numbers-item">
                      <Field
                        className="number-phone__form-number"
                        type="text"
                        name="number1"
                        maxLength={1}
                      />
                    </li>
                    <li className="number-phone__form-numbers-item">
                      <Field
                        className="number-phone__form-number"
                        type="text"
                        name="number2"
                        maxLength={1}
                      />
                    </li>
                    <li className="number-phone__form-numbers-item">
                      <Field
                        className="number-phone__form-number"
                        type="text"
                        name="number3"
                        maxLength={1}
                      />
                    </li>
                    <li className="number-phone__form-numbers-item">
                      <Field
                        className="number-phone__form-number"
                        type="text"
                        name="number4"
                        maxLength={1}
                      />
                    </li>
                  </ul>
                  <button className="number-phone__form-button">Далі</button>
                </Form>
              )}
            </Formik>

            <div className="number-phone__code">
              <button className="number-phone__code-open" onClick={openSend}>
                Мені не прийшов код
              </button>

              <div
                className={`number-phone__code-send ${
                  sendActive ? "active" : ""
                }`}
              >
                <h2 className="number-phone__code-send-title">
                  Не прийшов код в СМС?
                </h2>
                <p className="number-phone__code-send-text">
                  Не хвилюйся, тицяй
                </p>

                <button className="number-phone__code-send-button">
                  Відправити ще раз
                </button>
              </div>
            </div>

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
    </>
  );
};

export default CheckCode;
