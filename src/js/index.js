import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import refs from './_references.js'
import slider from './_slider-wiper.js'
import {logInFormHandler, registrationFormHandler} from "./_forms-handlers.js";

slider();

window.addEventListener('resize', slider);
refs.formLogIn.addEventListener('submit', logInFormHandler);
refs.formRegistration.addEventListener('submit', registrationFormHandler);