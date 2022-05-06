import refs from '../_references.js'
import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);

export default function slider() {
  let slideValues = {
    slideWidth: refs.newCollectionSwierSlide.offsetWidth,
    sliderContinerWidth: refs.newCollectionSwiperContainer.offsetWidth,
  };
  
  const slidesOffsetValue = (slideValues.sliderContinerWidth - slideValues.slideWidth) / 2;
  
  const newCollectionSwiperOption = {
      speed: 400,
      spaceBetween: 50,
      width: slideValues.slideWidth,
      slidesOffsetBefore: slidesOffsetValue,
  
      navigation: {
        nextEl: refs.newCollectionSwiperNextEl,
        prevEl: refs.newCollectionSwiperPrevEl,
      },
  };
  
  new Swiper(refs.newCollectionSwiperContainer, newCollectionSwiperOption);
}
