import React from "react";
import TirIcon from "../../svg/tir.svg";
import ParcelDotsIcon from "../../svg/paczka-kropki.svg";
import LettersIcon from "../../svg/literki.svg";
import ZigZagIcon from "../../svg/szlaczek 1.svg";
import TruckPic from "../../images/tir 2.png";

export default function CompositionA(props) {
  const { block } = props;
  return (
    <div className={`${block}__imagesContainer`}>
      <div className={`${block}__imagesBg`}>
        <img className={`${block}__truckImg`} src={TruckPic} alt="truck" />
        <img className={`${block}__truckIcon`} src={TirIcon} alt="truck icon" />
        <img
          className={`${block}__parcelDotIcon`}
          src={ParcelDotsIcon}
          alt="parcel with dots menu"
        />
        <img
          className={`${block}__lettersIcon`}
          src={LettersIcon}
          alt="A dot arrow pointing to B dot"
        />
        <img
          className={`${block}__zigZagIcon`}
          src={ZigZagIcon}
          alt="abstract zig zag"
        />
      </div>
    </div>
  );
}
