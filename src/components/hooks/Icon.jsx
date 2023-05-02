import React, { memo } from "react";
import footerMenu from "../../assets/icons/footer-menu-sprite.svg";

const Icon = memo(({ id }) => {
  return (
    <svg className="footer__menu-link-icon">
      <use href={`${footerMenu}#${id}`}></use>
    </svg>
  );
});

export default Icon;
