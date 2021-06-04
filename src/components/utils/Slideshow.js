import React from "react";
import InfiniteCarousel from "react-leaf-carousel";
import NextArrow from "react-leaf-carousel";
import PrevArrow from "react-leaf-carousel";
import Logo1Pic from "../../images/logo 1.png";
import Logo2Pic from "../../images/logo 2.png";
import Logo3Pic from "../../images/logo 3.png";
import Logo4Pic from "../../images/logo 4.png";

import arrow from "../../svg/arrowSlideshow.svg";
import Item from "./SlideItem";

export default function Slideshow(props) {
  const { block } = props;

  const items = [1, 2, 3, 4];

  return (
    <aside className={`${block}__slideshowContainer`}>
      <div className={`${block}__slideshow`}>
        <PrevArrow className={`${block}__slideLeft`}>
          <img
            className={`${block}__slideLeftIcon`}
            src={arrow}
            alt="arrow left icon"
          />
        </PrevArrow>
        <InfiniteCarousel
          arrows={false}
          sideSize={0.1}
          slidesToScroll={4}
          slidesToShow={4}
          scrollOnDevice={true}
        >
          <div className={`${block}__slide`}>
            <img
              className={`${block}__slidePic`}
              src={Logo1Pic}
              alt="company logo"
            />
          </div>
          <div className={`${block}__slide`}>
            <img
              className={`${block}__slidePic`}
              src={Logo1Pic}
              alt="company logo"
            />
          </div>
          <div className={`${block}__slide`}>
            <img
              className={`${block}__slidePic`}
              src={Logo2Pic}
              alt="company logo"
            />
          </div>
          <div className={`${block}__slide`}>
            <img
              className={`${block}__slidePic`}
              src={Logo3Pic}
              alt="company logo"
            />
          </div>
          <div className={`${block}__slide`}>
            {/* <img
              className={`${block}__slidePic`}
              src={Logo4Pic}
              alt="company logo"
            /> */}
          </div>
        </InfiniteCarousel>

        <NextArrow onNextClick className={`${block}__slideRight`}>
          {/* <img
            className={`${block}__slideRightIcon`}
            src={arrow}
            alt="arrow right icon"
          /> */}
        </NextArrow>
      </div>
    </aside>
  );
}
