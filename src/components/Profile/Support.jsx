import React from "react";
import { Link } from "react-router-dom";
import back from "../../assets/profile/back.svg";
import phone from "../../assets/profile/phone.png";
import telegram from "../../assets/profile/telegram.png";
import instagram from "../../assets/profile/instagram.png";
import youtube from "../../assets/profile/youtube.png";

const Support = ({ data }) => {
  return (
    <section className="profile__support">
      <div className="container">
        <h1 className="profile__support-title">Служба підтримки</h1>

        {Object.keys(data).length === 0 ? (
          <></>
        ) : (
          <div className="profile__support-content">
            <div className="profile__support-content-numbers">
              <h2 className="profile__support-content-numbers-title">
                Центр підтримки клієнтів
              </h2>

              <div className="profile__support-content-numbers-block">
                {data.phones.map((item) => (
                  <div
                    className="profile__support-content-numbers-block-item"
                    key={item.id}
                  >
                    <p className="profile__support-content-numbers-block-item-number">
                      {item.number}
                    </p>
                    <a
                      className="profile__support-content-numbers-block-item-link"
                      href="tel:380674415136"
                    >
                      <img
                        className="profile__support-content-numbers-block-item-link-icon"
                        src={phone}
                        alt="phone"
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {data.social.map((item) => (
              <div className="profile__support-content-social" key={item.id}>
                <p className="profile__support-content-social-text">
                  {item.title}
                </p>
                <img
                  src={item.icon.url}
                  className="profile__support-content-social-icon"
                  alt="telegram"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <Link to="/profile" className="profile__support-back">
        <img className="profile__support-back-icon" src={back} alt="back" />
      </Link>
    </section>
  );
};

export default Support;
