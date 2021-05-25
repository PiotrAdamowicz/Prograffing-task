import React from "react";
import Link from "../utils/Link";

export default function Footer() {
  return (
    <footer>
      <span className="copyRight">
        <p>Copyright © 2021 Laaqiq. All Rights Reserved.</p>
      </span>
      <Link>Terms of Use</Link>
      <Link>Privacy Policy</Link>
    </footer>
  );
}
