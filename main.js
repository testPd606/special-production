import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";
import { initSwipers } from "./assets/js/swiper";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { initStickyHeader } from './assets/js/animations';

document.addEventListener('DOMContentLoaded', () => {
  initSwipers();

  AOS.init({
    duration: 1000,
    easing: 'ease',
    once: false,
  });

  initStickyHeader('#nav');
});