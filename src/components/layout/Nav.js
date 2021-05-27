/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState } from "react";
import Link from "../utils/Link";
import TraLogo from "../utils/TraLogo";

const links = ["About", "Service", "Pricing", "Blog", "Contact"];

export default function Nav() {
  const [isActive, setIsActive] = useState(false);
  const menuContent = (
    <ul
      className={`nav__items nav__items${isActive ? "--active" : ""}`}
      role="list"
    >
      {links.map((link) => (
        <li className="nav__item" key={link}>
          <Link key={link} className={`nav__link`} href={`#${link}`}>
            {link}
          </Link>
        </li>
      ))}
    </ul>
  );

  const onClick = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className={`nav nav${isActive ? "--active" : null}`}>
      <TraLogo toggleMenu={onClick} block="nav" />
      {/* {isActive ? menuContent : null} */}
      {menuContent}
    </nav>
  );
}
