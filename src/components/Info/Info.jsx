import { memo, useEffect, useState } from "react";
import profileLogo from "../../assets/logo-profile.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import qrImg from "../../assets/profile/questions-1.png";
import carInfo from "../../assets/carInfo.svg";
import cardInfo from "../../assets/cardInfo.svg";
import requestVerify from "../hooks/requestVerify";

const Info = memo(() => {
  const [data, setData] = useState({});
  const [lazyData, setLazyData] = useState(false);

  const token = useSelector((state) => state.user.token);

  const getVerify = async () => {
    if (token !== "") {
      const result = await requestVerify(token);
      setData(result.data);
      setLazyData(true);
    }
  };

  useEffect(() => {
    getVerify();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);
  return (
    <section className="info">
      <div className="profile__header">
        <h1
          className="profile__header-title"
          style={{ opacity: lazyData ? 1 : 0 }}
        >
          {data.firstName !== "" ? data.firstName : "Тут буде ваше Ім’я"}
        </h1>
        <div className="profile__header-flex">
          <p className="profile__header-flex-id">#{data.idUser}</p>
          <img
            className="profile__header-flex-logo"
            alt="profile-logo"
            src={profileLogo}
          />
        </div>
      </div>

      <div className="container">
        <div className="info__block">
          <ul className="info__menu">
            <li className="info__menu-item">
              <Link className="info__menu-item-link" to="/qr-scan">
                <img
                  className="info__menu-item-link-img"
                  src={qrImg}
                  alt="menu-info"
                />
                <div className="info__menu-item-link-content">
                  <h2 className="info__menu-item-link-content-title">
                    Скануй QR-код
                  </h2>
                  <p className="info__menu-item-link-content-desc">
                    Натисність та наведить на QR-код біля апарату
                  </p>
                </div>
              </Link>
            </li>
            <li className="info__menu-item">
              <Link className="info__menu-item-link" to="/wash">
                <img
                  className="info__menu-item-link-img"
                  src={carInfo}
                  alt="menu-info"
                />
                <div className="info__menu-item-link-content">
                  <h2 className="info__menu-item-link-content-title">
                    Вибери мийку
                  </h2>
                  <p className="info__menu-item-link-content-desc">
                    Поповни рахунок чи проклади маршрут
                  </p>
                </div>
              </Link>
            </li>
            <li className="info__menu-item">
              <Link to="my-cards" className="info__menu-item-link">
                <img
                  className="info__menu-item-link-img"
                  src={cardInfo}
                  alt="menu-info"
                />
                <div className="info__menu-item-link-content">
                  <h2 className="info__menu-item-link-content-title">
                    Мої картки
                  </h2>
                  <p className="info__menu-item-link-content-desc">
                    Перевір баланс своїх карток клієнта
                  </p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
});

export default Info;
