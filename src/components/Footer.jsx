import React from "react";
import { Link } from "react-router-dom";
import footerMenu from "../assets/icons/footer-menu-sprite.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__block">
          <ul className="footer__menu">
            <li className="footer__menu-item">
              <Link to="/" className="footer__menu-link active">
                <svg className="footer__menu-link-icon">
                  <use href={`${footerMenu}#house`}></use>
                </svg>
                <p className="footer__menu-link-title">Головна</p>
              </Link>
            </li>
            <li className="footer__menu-item">
              <a className="footer__menu-link " href="hoem">
                <svg className="footer__menu-link-icon">
                  <use href={`${footerMenu}#dis`}></use>
                </svg>
                <p className="footer__menu-link-title">Акції</p>
              </a>
            </li>
            <li className="footer__menu-item">
              <a className="footer__menu-link" href="hoem">
                <svg className="footer__menu-link-icon">
                  <use href={`${footerMenu}#car`}></use>
                </svg>
                <p className="footer__menu-link-title">Мийки</p>
              </a>
            </li>
            <li className="footer__menu-item">
              <a className="footer__menu-link" href="hoem">
                <svg className="footer__menu-link-icon">
                  <use href={`${footerMenu}#history`}></use>
                </svg>
                <p className="footer__menu-link-title">Історія</p>
              </a>
            </li>
            <li className="footer__menu-item">
              <a className="footer__menu-link" href="hoem">
                <svg className="footer__menu-link-icon">
                  <use href={`${footerMenu}#human`}></use>
                </svg>
                <p className="footer__menu-link-title">Профіль</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
