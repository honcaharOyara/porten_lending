import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import refs from './_references.js'
import newCollectionslider from './_sliders/_new-collection-swiper.js'
import ourBrandsSlider from './_sliders/_our-brands.js'
import {logInFormHandler, registrationFormHandler, mailingFormHandler} from "./_forms-handlers.js";

newCollectionslider();
ourBrandsSlider();

window.addEventListener('resize', newCollectionslider);
refs.formLogIn.addEventListener('submit', logInFormHandler);
refs.formRegistration.addEventListener('submit', registrationFormHandler);
refs.formMailing.addEventListener('submit', mailingFormHandler);