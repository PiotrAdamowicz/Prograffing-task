import React from "react";
import LogoIcon from "../../svg/LOGO.svg";

export default function TraLogo(props) {
  const { block } = props;
  return (
    <div className={`${block}__logo`}>
      <img src={LogoIcon} alt="" className={`${block}__logoIcon`} />
    </div>
  );
}
