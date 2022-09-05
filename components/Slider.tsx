/* eslint-disable prefer-const */
import Swiper, { Controller, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

export default function createTripleSlider(el: any): any {
  // main swiper el
  const swiperEl = el.querySelector(".swiper");

  // create prev duplicate swiper
  const swiperPrevEl = swiperEl.cloneNode(true);
  swiperPrevEl.classList.add("triple-slider-prev");
  el.insertBefore(swiperPrevEl, swiperEl);
  const swiperPrevSlides = swiperPrevEl.querySelectorAll(".swiper-slide");
  const swiperPrevLastSlideEl = swiperPrevSlides[swiperPrevSlides.length - 1];
  swiperPrevEl
    .querySelector(".swiper-wrapper")
    .insertBefore(swiperPrevLastSlideEl, swiperPrevSlides[0]);

  // create next duplicate swiper
  const swiperNextEl = swiperEl.cloneNode(true);
  swiperNextEl.classList.add("triple-slider-next");
  el.appendChild(swiperNextEl);
  const swiperNextSlides = swiperNextEl.querySelectorAll(".swiper-slide");
  const swiperNextFirstSlideEl = swiperNextSlides[0];
  swiperNextEl
    .querySelector(".swiper-wrapper")
    .appendChild(swiperNextFirstSlideEl);

  // Add "main" class
  swiperEl.classList.add("triple-slider-main");

  // common params for all swipers
  const commonParams = {
    modules: [Controller, Navigation],
    speed: 600,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  let tripleMainSwiper: Swiper;

  // init prev swiper
  const triplePrevSwiper = new Swiper(swiperPrevEl, {
    ...commonParams,
    allowTouchMove: false,
    on: {
      click() {
        tripleMainSwiper.slidePrev();
      },
    },
  });
  // init next swiper
  const tripleNextSwiper = new Swiper(swiperNextEl, {
    ...commonParams,
    allowTouchMove: false,
    on: {
      click() {
        tripleMainSwiper.slideNext();
      },
    },
  });
  // init main swiper
  tripleMainSwiper = new Swiper(swiperEl, {
    ...commonParams,
    grabCursor: true,
    controller: {
      control: [triplePrevSwiper, tripleNextSwiper],
    },
    on: {
      destroy() {
        // destroy side swipers on main swiper destroy
        triplePrevSwiper.destroy();
        tripleNextSwiper.destroy();
      },
    },
  });

  return tripleMainSwiper;
}
