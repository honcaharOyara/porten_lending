import refs from '../_references.js'
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

export default function slider() {
  const productCardImgSwiperOption = {
      speed: 400,
      spaceBetween: 50,
  
      navigation: {
        nextEl: refs.productCardImgSwiperNextEl,
        prevEl: refs.productCardImgSwiperPrevEl,
      },

      pagination: {
        el: refs.productCardImgSwiperPagination,
        type: 'bullets',
        clickable: true,
      },
  };
  
  new Swiper(refs.productCardImgSwiperContainer, productCardImgSwiperOption);
}
