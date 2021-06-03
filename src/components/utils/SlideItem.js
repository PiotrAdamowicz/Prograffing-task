import React from "react";
import Logo1Pic from "../../images/logo 1.png";
import Logo2Pic from "../../images/logo 2.png";
import Logo3Pic from "../../images/logo 3.png";
import Logo4Pic from "../../images/logo 4.png";

export default function SlideItem(props) {
  const logoHandler = (key) => {
    switch (key) {
      case "1":
        return <Logo1Pic />;
      case "2":
        return Logo2Pic;
      case "3":
        return Logo3Pic;
      case "4":
        return Logo4Pic;

      default:
        break;
    }
  };
  const { block, key } = props;
  return (
    <img
      className={`${block}__slide`}
      src={logoHandler(key)}
      alt="company logo"
    />
  );
}
