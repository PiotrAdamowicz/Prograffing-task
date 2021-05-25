import React from "react";
import Link from "../utils/Link";

const links = [
  "header",
  "about",
  "service",
  "team",
  "pricing",
  "faq",
  "contact",
];

export default function Nav() {
  return (
    <nav className="nav">
      {links.map((link) => (
        <Link key={link} className={`nav__${link}`} href={`#${link}`}>
          {link}
        </Link>
      ))}
    </nav>
  );
}
