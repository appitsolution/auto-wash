import React from "react";
import { Link } from "react-router-dom";
import Icon from "./hooks/Icon";

const Footer = ({ current = "" }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__block">
          <ul className="footer__menu">
            <li className="footer__menu-item">
              <Link
                to="/"
                className={`footer__menu-link ${
                  current === "home" ? "active" : ""
                }`}
              >
                <Icon id="house" />
                <p className="footer__menu-link-title">Головна</p>
              </Link>
            </li>
            <li className="footer__menu-item">
              <Link
                to="/promotions"
                className={`footer__menu-link ${
                  current === "promotions" ? "active" : ""
                }`}
              >
                <Icon id="dis" />
                <p className="footer__menu-link-title">Акції</p>
              </Link>
            </li>
            <li className="footer__menu-item">
              <Link
                to="/wash"
                className={`footer__menu-link ${
                  current === "wash" ? "active" : ""
                }`}
              >
                <Icon id="car" />
                <p className="footer__menu-link-title">Мийки</p>
              </Link>
            </li>
            <li className="footer__menu-item">
              <Link
                to="/history-order"
                className={`footer__menu-link ${
                  current === "history" ? "active" : ""
                }`}
              >
                <Icon id="history" />
                <p className="footer__menu-link-title">Історія</p>
              </Link>
            </li>
            <li className="footer__menu-item">
              <Link
                to="/profile"
                className={`footer__menu-link ${
                  current === "profile" ? "active" : ""
                }`}
              >
                <Icon id="human" />
                <p className="footer__menu-link-title">Профіль</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
