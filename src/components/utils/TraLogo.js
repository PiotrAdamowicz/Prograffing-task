import React from "react";
import LogoIcon from "../../svg/LOGO.svg";

export default function TraLogo(props) {
  const { block } = props;
  return (
    <button onClick={props.toggleMenu} className={`${block}__logoBtn`}>
      <img src={LogoIcon} alt="" className={`${block}__logoIcon`} />
    </button>
  );
}
