import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import refs from './_references.js'
import {logInFormHandler, registrationFormHandler} from "./_forms-handlers.js";
import Swiper from 'swiper';

 const swiper = new Swiper('.swiper');

refs.formLogIn.addEventListener('submit', logInFormHandler)
refs.formRegistration.addEventListener('submit', registrationFormHandler)