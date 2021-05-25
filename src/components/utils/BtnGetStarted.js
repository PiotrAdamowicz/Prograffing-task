import React from "react";
import Link from "./Link";

export default function BtnGetStarted(props) {
  const { url = "#" } = props;
  return (
    <button className="btnGetStarted">
      <Link href={url}>Get Started</Link>
    </button>
  );
}
