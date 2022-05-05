import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);

const slideWidth = document.querySelector('.swiper-slide').offsetWidth;

const swiperOption = {
    speed: 400,
    spaceBetween: 50,
    width: slideWidth,
    slidesPerView: 1,
    centeredSlides: true,
    slidesPerView: 1,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
}

const slider = new Swiper('.swiper', swiperOption);
