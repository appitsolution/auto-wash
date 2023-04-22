import React from "react";
import { Formik, Form, Field } from "formik";
import logo from "../../assets/logo-cmb.png";

const NumberPhone = () => {
  return (
    <section className="number-phone">
      <div className="container">
        <div className="number-phone__block">
          <h1 className="number-phone__title">Вхід в кабінет</h1>
          <Formik initialValues={{ phone: "" }}>
            {() => (
              <Form className="number-phone__form">
                <Field
                  className="number-phone__form-phone"
                  type="text"
                  name="phone"
                  placeholder="Введіть свій номер телефону"
                />
                <button className="number-phone__form-button">Далі</button>
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
