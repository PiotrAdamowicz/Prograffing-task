import React from "react";
import ParcelIcon from "../../svg/parcel.svg";
import DarkParcelIcon from "../../svg/parcel-dark.svg";
import RedParcelIcon from "../../svg/parcel-red.svg";

export default function CardSizes() {
  console.log(DarkParcelIcon.render);
  return (
    <div className="pricing__card">
      <h4 className="pricing__cardTitle">Choose your size</h4>
      <section className="pricing__parcels">
        <div className="pricing__imageContainer">
          <img
            style={{ height: "2.625rem" }}
            className="pricing__blueParcel"
            src={ParcelIcon}
            alt="small blue parcel icon"
          />
          <h5 className="pricing__parcelType">Small</h5>
        </div>
        <div className="pricing__imageContainer">
          <img
            style={{ height: "4rem" }}
            className="pricing__darkParcel"
            src={DarkParcelIcon}
            alt="medium dark parcel icon"
          />
          <h5 className="pricing__parcelType">Medium</h5>
        </div>
        <div className="pricing__imageContainer">
          <img
            style={{ height: "4.8125rem" }}
            className="pricing__redParcel"
            src={RedParcelIcon}
            alt="big red parcel icon"
          />
          <h5 className="pricing__parcelType">Big</h5>
        </div>
      </section>
      <button className="pricing__getStartedBtn">Get Started</button>
    </div>
  );
}
