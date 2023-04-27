import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import logo from "../../assets/logo-cmb.png";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/slice/sliceUser";

const CheckCode = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [sendActive, setSendActive] = useState(false);

  const [numberOneValue, setNumberOneValue] = useState("");
  const [numberTwoValue, setNumberTwoValue] = useState("");
  const [numberThreeValue, setNumberThreeValue] = useState("");
  const [numberFourValue, setNumberFourValue] = useState("");

  const numberOne = document.getElementById("numberOne");
  const numberTwo = document.getElementById("numberTwo");
  const numberThree = document.getElementById("numberThree");
  const numberFour = document.getElementById("numberFour");

  const openSend = () => {
    setSendActive(!sendActive);
  };

  // One Number
  useEffect(() => {
    if (numberOneValue !== "") {
      numberTwo?.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numberOneValue]);

  // Two Number
  useEffect(() => {
    if (numberTwoValue !== "") {
      numberThree?.focus();
    } else {
      numberOne?.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numberTwoValue]);

  // Three Number
  useEffect(() => {
    if (numberThreeValue !== "") {
      numberFour?.focus();
    } else {
      numberTwo?.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numberThreeValue]);

  // Four Number

  useEffect(() => {
    if (numberFourValue === "") {
      numberThree?.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numberFourValue]);

  const { number } = useParams();

  const requestCode = async () => {
    if (
      !numberOneValue ||
      !numberTwoValue ||
      !numberThreeValue ||
      !numberFourValue
    ) {
      return;
    }

    console.log(
      numberOneValue + numberTwoValue + numberThreeValue + numberFourValue
    );

    const result = await axios.post(
      `${process.env.REACT_APP_SERVER}/user/login`,
      {
        number,
        code: `${
          numberOneValue + numberTwoValue + numberThreeValue + numberFourValue
        }`,
      }
    );

    localStorage.setItem("token", result.data);
    dispatch(setToken(result.data));
    navigate("/profile");
  };

  const againSendCode = async () => {
    await axios.post(`${process.env.REACT_APP_SERVER}/user/check-code`, {
      number,
    });

    setSendActive(false);
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
              onSubmit={requestCode}
            >
              {() => (
                <Form className="number-phone__form">
                  <ul className="number-phone__form-numbers">
                    <li className="number-phone__form-numbers-item">
                      <Field
                        onInput={({ target }) => {
                          const value = target.value.replace(/[^\d]/g, "");
                          setNumberOneValue(value);
                        }}
                        value={numberOneValue}
                        id="numberOne"
                        className="number-phone__form-number"
                        type="text"
                        name="number1"
                        maxLength={1}
                      />
                    </li>
                    <li className="number-phone__form-numbers-item">
                      <Field
                        onInput={({ target }) => {
                          if (target.value.length > 1) return;
                          const value = target.value.replace(/[^\d]/g, "");
                          setNumberTwoValue(value);
                        }}
                        value={numberTwoValue}
                        id="numberTwo"
                        className="number-phone__form-number"
                        type="number"
                        name="number2"
                        maxLength={1}
                      />
                    </li>
                    <li className="number-phone__form-numbers-item">
                      <Field
                        onInput={({ target }) => {
                          const value = target.value.replace(/[^\d]/g, "");
                          setNumberThreeValue(value);
                        }}
                        value={numberThreeValue}
                        id="numberThree"
                        className="number-phone__form-number"
                        type="number"
                        name="number3"
                        maxLength={1}
                      />
                    </li>
                    <li className="number-phone__form-numbers-item">
                      <Field
                        onInput={({ target }) => {
                          const value = target.value.replace(/[^\d]/g, "");
                          setNumberFourValue(value);
                        }}
                        value={numberFourValue}
                        id="numberFour"
                        className="number-phone__form-number"
                        type="number"
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

                <button
                  className="number-phone__code-send-button"
                  onClick={againSendCode}
                >
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
