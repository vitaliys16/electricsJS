'use strict';

import scrollUp from './modules/scrollUp';
import modal from './modules/modal';
import menu from './modules/menu';
import validation from './modules/validation';
import sendForm from './modules/sendForm';
import faq from './modules/faq';


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