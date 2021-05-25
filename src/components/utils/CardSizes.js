import React from "react";
import ParcelIcon from "../../svg/parcel.svg";
import DarkParcelIcon from "../../svg/parcel-dark.svg";
import RedParcelIcon from "../../svg/parcel-red.svg";
import ZigZagIcon from "../../svg/szlaczek 5.svg";

export default function CardSizes() {
  console.log(DarkParcelIcon.render);
  return (
    <aside className="pricing__card">
      <button className="pricing__cardLeft">Left</button>
      <button className="pricing__cardRight">Right</button>
      <h4 className="pricing__cartTitle">Choose your size</h4>
      <section className="pricing__parcels">
        <img
          style={{ height: "2.625rem" }}
          className="pricing__blueParcel"
          src={ParcelIcon}
          alt="small blue parcel icon"
        />
        <h5 className="pricing__parcelType">Small</h5>
        <img
          style={{ height: "4rem" }}
          className="pricing__darkParcel"
          src={DarkParcelIcon}
          alt="medium dark parcel icon"
        />
        <h5 className="pricing__parcelType">Medium</h5>
        <img
          style={{ height: "4.8125rem" }}
          className="pricing__redParcel"
          src={RedParcelIcon}
          alt="big red parcel icon"
        />
        <h5 className="pricing__parcelType">Big</h5>
      </section>
      <button className="pricing__getStarted">Get Started</button>
      <img
        src={ZigZagIcon}
        alt="abstrat zig zag"
        className="pricing__cardZigZag"
      />
    </aside>
  );
}
