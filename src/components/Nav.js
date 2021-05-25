import React from "react";
import Link from "./utils/Link";

export default function Nav() {
  return (
    <nav className="nav">
      <Link className="nav__header" href="#header">
        TRA
      </Link>
      <Link className="nav__#about" href="#about">
        About
      </Link>
      <Link className="nav__#service" href="#service">
        Services
      </Link>
      <Link className="nav__#team" href="#team">
        Team
      </Link>
      <Link className="nav__#pricing" href="#pricing">
        Pricing
      </Link>
      <Link className="nav__#faq" href="#faq">
        Blog
      </Link>
      <Link className="nav__#contact" href="#contact">
        Contact
      </Link>
    </nav>
  );
}
