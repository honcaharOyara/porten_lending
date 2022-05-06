import refs from './_references.js'
import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);

export default function slider(params) {
  let slideValues = {
    slideWidth: refs.swierSlide.offsetWidth,
    sliderContinerWidth: refs.swiperContainer.offsetWidth,
  };
  
  const slidesOffsetValue = (slideValues.sliderContinerWidth - slideValues.slideWidth) / 2;
  
  const swiperOption = {
      loop: true,
      speed: 400,
      spaceBetween: 50,
      width: slideValues.slideWidth,
      slidesOffsetBefore: slidesOffsetValue,
  
      navigation: {
        nextEl: refs.swiperNextEl,
        prevEl: refs.swiperPrevEl,
      },
  };
  
  new Swiper(refs.swiperContainer, swiperOption);
}
