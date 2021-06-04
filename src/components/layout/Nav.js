/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState } from "react";
import Link from "../utils/Link";
import TraLogo from "../utils/TraLogo";

const links = ["About", "Service", "Pricing", "Blog"];

export default function Nav() {
  const [isActive, setIsActive] = useState(false);
  const menuContent = (
    <ul
      className={`nav__items ${isActive ? "nav__items--active" : ""}`}
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
    <nav className={`nav ${isActive ? "nav--active" : ""}`}>
      <TraLogo toggleMenu={onClick} block="nav" />
      {menuContent}
      <Link href="#contact">
        <button className="nav__contactBtn">Contact</button>
      </Link>
    </nav>
  );
}
