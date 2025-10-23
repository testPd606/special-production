import Swiper from "swiper";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

export function initSwipers() {
  const swiper = new Swiper(".swiper", {
    modules: [Pagination, Autoplay, EffectFade],
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    autoplay: {
      delay: 4000,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
  });

  const swiper2 = new Swiper(".swiper2", {
    modules: [Navigation],
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next-custom",
      prevEl: ".swiper-button-prev-custom",
    },
    slidesPerView: 1.5,
    spaceBetween: 24,
    breakpoints: {
      960: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });
}
