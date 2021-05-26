import React, { useState } from "react";
import Link from "../utils/Link";
import TraLogo from "../utils/TraLogo";

const links = ["about", "service", "team", "pricing", "faq", "contact"];

export default function Nav() {
  const [isActive, setIsActive] = useState(false);

  const onClick = () => {
    setIsActive(!isActive);
    console.log(isActive);
  };

  return (
    <nav className="nav">
      <TraLogo toggleMenu={onClick} block="nav" />
      {isActive
        ? links.map((link) => (
            <Link
              style={{ display: "none" }}
              key={link}
              className={`nav__item`}
              href={`#${link}`}
            >
              {link}
            </Link>
          ))
        : null}
    </nav>
  );
}
