import React from "react";
import TirIcon from "../../svg/tir.svg";
import ParcleDotsIcon from "../../svg/paczka-kropki.svg";
import LttersIcon from "../../svg/literki.svg";
import ZigZagIcon from "../../svg/szlaczek 1.svg";
import TruckPic from "../../images/tir 1.png";

export default function CompositionA() {
  return (
    <div className="imagesContainer">
      <img src={TruckPic} alt="truck" />
      <img src={TirIcon} alt="truck icon" />
      <img src={ParcleDotsIcon} alt="parcle with dotsmenu" />
      <img src={LttersIcon} alt="A dot arrow pointing to B dot" />
      <img src={ZigZagIcon} alt="apstrac zig zag" />
    </div>
  );
}
