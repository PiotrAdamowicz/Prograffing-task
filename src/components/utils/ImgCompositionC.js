import React from "react";
import DeliveryManPic from "../../images/dostawca.png";
import TruckPic from "../../images/tir 2.png";
import HarborPic from "../../images/statek 1.png";
import PlanePic from "../../images/samolot.png";
import ParcelIcon from "../../svg/dostawa.svg";
import ZigZagIcon from "../../svg/szlaczek 3.svg";

export default function CompositionB() {
  return (
    <div className="imagesContainer">
      <img src={DeliveryManPic} alt="delivery man with parcel on shoulder" />
      <img src={TruckPic} alt="truck" />
      <img src={HarborPic} alt="containers in harbor" />
      <img src={PlanePic} alt="flying plane" />
      <img src={ParcelIcon} alt="parcel on hand icon" />
      <img src={ZigZagIcon} alt="abstract zig zag" />
    </div>
  );
}
