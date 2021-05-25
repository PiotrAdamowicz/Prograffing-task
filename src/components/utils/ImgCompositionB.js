import React from "react";
import ShipPic from "../../images/statek 2.png";
import ShpIcon from "../../svg/statek.svg";
import RatingIcon from "../../svg/oceny.svg";
import WorkerIcon from "../../svg/pracownik.svg";
import LoopsIcon from "../../svg/szlaczek 2.svg";

export default function CompositionB() {
  return (
    <div className="imagesContainer">
      <img src={ShipPic} alt="ship" />
      <img src={ShpIcon} alt="ship icon" />
      <img src={RatingIcon} alt="5 star rating" />
      <img src={WorkerIcon} alt="worker in helmet head icon" />
      <img src={LoopsIcon} alt="abstract loops" />
    </div>
  );
}
