import React from "react";
import Logo1Pic from "../../images/logo 1.png";
import Logo2Pic from "../../images/logo 2.png";
import Logo3Pic from "../../images/logo 3.png";
import Logo4Pic from "../../images/logo 4.png";

export default function Slideshow(props) {
  return (
    <aside className="faq__slideshow">
      <img src={Logo1Pic} alt="company logo" />
      <img src={Logo2Pic} alt="company logo" />
      <img src={Logo3Pic} alt="company logo" />
      <img src={Logo4Pic} alt="company logo" />
    </aside>
  );
}
