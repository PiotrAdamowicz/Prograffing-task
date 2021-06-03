import React, { useState, useEffect } from "react";
import Logo1Pic from "../../images/logo 1.png";
import Logo2Pic from "../../images/logo 2.png";
import Logo3Pic from "../../images/logo 3.png";
import Logo4Pic from "../../images/logo 4.png";

export default function SlideItem(props) {
  const { block, id } = props;
  const [logo, setLogo] = useState("../../images/logo 1.png");
  console.log(id);
  useEffect(() => {
    switch (id) {
      case "1":
        return setLogo(Logo1Pic);
      case "2":
        return setLogo(Logo2Pic);
      case "3":
        return setLogo(Logo3Pic);
      case "4":
        return setLogo(Logo4Pic);
      default:
        break;
    }
  }, [id]);

  return <img className={`${block}__slide`} src={logo} alt="company logo" />;
}
