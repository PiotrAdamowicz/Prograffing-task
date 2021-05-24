import React from "react";
import Link from "./utils/Link";

export default function Nav() {
  return (
    <nav className="nav">
      <Link>TRA</Link>
      <Link>About</Link>
      <Link>Services</Link>
      <Link>Pricing</Link>
      <Link>Blog</Link>
      <Link>Contact</Link>
    </nav>
  );
}
