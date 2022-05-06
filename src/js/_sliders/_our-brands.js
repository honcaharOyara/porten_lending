import refs from '../_references.js'
import Swiper from 'swiper';

export default function slider() {
    const ourBrandsSwiperOption = {
        speed: 400,
        spaceBetween: 30,


        breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            960: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            1024: {
              slidesPerView: 4,
            }

        }
    };
    
    new Swiper(refs.ourBrandsSwiperContainer, ourBrandsSwiperOption);
  }