import React from "react";
import ShipPic from "../../images/statek 2.png";
import ShpIcon from "../../svg/statek.svg";
import RatingIcon from "../../svg/oceny.svg";
import WorkerIcon from "../../svg/pracownik.svg";
import LoopsIcon from "../../svg/szlaczek 2.svg";

export default function CompositionB(props) {
  const { block } = props;
  return (
    <div className={`${block}__imagesContainer`}>
      <div className={`${block}__imagesBg`}>
        <img className={`${block}__shipImg`} src={ShipPic} alt="ship" />
        <img className={`${block}__shipIcon`} src={ShpIcon} alt="ship icon" />
        <img
          className={`${block}__starsIcon`}
          src={RatingIcon}
          alt="5 star rating"
        />
        <img
          className={`${block}__workerIcon`}
          src={WorkerIcon}
          alt="worker in helmet head icon"
        />
        <img
          className={`${block}__abstractIcon`}
          src={LoopsIcon}
          alt="abstract loops"
        />
      </div>
    </div>
  );
}
