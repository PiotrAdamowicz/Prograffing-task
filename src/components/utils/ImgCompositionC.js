import React from "react";
import DeliveryManPic from "../../images/dostawca.png";
import TruckPic from "../../images/tir 1.png";
import HarborPic from "../../images/statek 1.png";
import PlanePic from "../../images/samolot.png";
import ParcelIcon from "../../svg/dostawa.svg";
import ZigZagIcon from "../../svg/szlaczek 3.svg";

export default function CompositionB({ block }) {
  return (
    <div className={`${block}__imagesContainer`}>
      <div className={`${block}__imagesBg`}>
        <div className={`${block}__workerContainer`}>
          <img
            className={`${block}__workerImg`}
            src={DeliveryManPic}
            alt="delivery man with parcel on shoulder"
          />
        </div>
        <img className={`${block}__truckImg`} src={TruckPic} alt="truck" />
        <img
          className={`${block}__harborImg`}
          src={HarborPic}
          alt="containers in harbor"
        />
        <img
          className={`${block}__planeImg`}
          src={PlanePic}
          alt="flying plane"
        />
        <img
          className={`${block}__handParcelIcon`}
          src={ParcelIcon}
          alt="parcel on hand icon"
        />
        <img
          className={`${block}__abstractIcon`}
          src={ZigZagIcon}
          alt="abstract zig zag"
        />
      </div>
    </div>
  );
}
