'use strict';

import scrollUp from './modules/scrollUp';
import modal from './modules/modal';
import menu from './modules/menu';
import validation from './modules/validation';
import sendForm from './modules/sendForm';
import faq from './modules/faq';
import slider from './modules/slider';
import sliderCarousel from './modules/sliderCarousel';
import smoothScroll from './modules/smoothScroll';

scrollUp();
modal();
menu();
validation();
sendForm({ 
    formName: '[name="form-callback"]',
    someElem: [
        {
            type: "block",
        }
    ] });
faq();
slider();
sliderCarousel();
smoothScroll();