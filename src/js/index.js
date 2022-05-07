import 'bootstrap';
import refs from './_references.js'
import newCollectionslider from './_sliders/_new-collection-swiper.js'
import ourBrandsSlider from './_sliders/_our-brands.js'
import productCardImgSlider from './_sliders/_product-card-img-swiper.js'
import formHandler from "./_forms-handlers.js";

newCollectionslider();
ourBrandsSlider();
productCardImgSlider();

window.addEventListener('resize', newCollectionslider);
refs.formLogIn.addEventListener('submit', formHandler);
refs.formRegistration.addEventListener('submit', formHandler);
refs.formMailing.addEventListener('submit', formHandler);
