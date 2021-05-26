/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";
import TraLogo from "../utils/TraLogo";
import Link from "../utils/Link";
import FbIcon from "../../svg/facebook.svg";
import TwIcon from "../../svg/twitter.svg";
import InIcon from "../../svg/instagram.svg";

const links = ["About", "Pricing", "Blog", "Contact"];
const service = ["Land Express", "Air Freight", "Ocean Freight", "See All"];

export default function BottomNav() {
  return (
    <section id="bottomNav" className="bottomNav">
      <TraLogo block="bottomNav" />
      <ul role="list" className="bottomNav__menu">
        {links.map((link, id) => (
          <li key={id}>
            <Link href={`#${link}`}>{link}</Link>
          </li>
        ))}
      </ul>
      <ul role="list" className="bottomNav__serviceList">
        {service.map((item, id) => (
          <li key={id}>
            <p className="bottomNav__serviceItem">{item}</p>
          </li>
        ))}
      </ul>
      <ul className="bottomNav__socialmedia" role="list">
        <li>
          <img src={FbIcon} alt="facebook icon" />
        </li>
        <li>
          <img src={TwIcon} alt="facebook icon" />
        </li>
        <li>
          <img src={InIcon} alt="facebook icon" />
        </li>
      </ul>
    </section>
  );
}
