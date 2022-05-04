import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import {logInFormHandler, registrationFormHandler} from "./_forms-handlers.js";
import refs from './_references.js'

refs.formLogIn.addEventListener('submit', logInFormHandler)
refs.formRegistration.addEventListener('submit', registrationFormHandler)