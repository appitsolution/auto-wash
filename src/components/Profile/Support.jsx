import React from "react";
import { Link } from "react-router-dom";
import back from "../../assets/profile/back.svg";
import phone from "../../assets/profile/phone.png";
import telegram from "../../assets/profile/telegram.png";
import instagram from "../../assets/profile/instagram.png";
import youtube from "../../assets/profile/youtube.png";

const Support = () => {
  return (
    <section className="profile__support">
      <div className="container">
        <h1 className="profile__support-title">Служба підтримки</h1>

        <div className="profile__support-content">
          <div className="profile__support-content-numbers">
            <h2 className="profile__support-content-numbers-title">
              Центр підтримки клієнтів
            </h2>

            <div className="profile__support-content-numbers-block">
              <div className="profile__support-content-numbers-block-item">
                <p className="profile__support-content-numbers-block-item-number">
                  +380 (67) 441-51-36
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
              <div className="profile__support-content-numbers-block-item">
                <p className="profile__support-content-numbers-block-item-number">
                  +380 (67) 441-51-36
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
            </div>
          </div>

          <div className="profile__support-content-social">
            <p className="profile__support-content-social-text">
              Ми в Telegram
            </p>
            <img
              src={telegram}
              className="profile__support-content-social-icon"
              alt="telegram"
            />
          </div>

          <div className="profile__support-content-social">
            <p className="profile__support-content-social-text">
              Ми в Instagram
            </p>
            <img
              src={instagram}
              className="profile__support-content-social-icon"
              alt="instagram"
            />
          </div>

          <div className="profile__support-content-social">
            <p className="profile__support-content-social-text">Ми в YouTube</p>
            <img
              src={youtube}
              className="profile__support-content-social-icon"
              alt="youtube"
            />
          </div>
        </div>
      </div>

      <Link to="/profile" className="profile__support-back">
        <img className="profile__support-back-icon" src={back} alt="back" />
      </Link>
    </section>
  );
};

export default Support;
