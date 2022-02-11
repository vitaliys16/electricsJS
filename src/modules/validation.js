import  {maskPhone} from './helpers';

const validation = () => {
    const statusBlock = document.createElement('div');

    const userName = document.querySelectorAll('.form-control')[0];
    const userPhone = document.querySelectorAll('.form-control.tel.required')[0];

    maskPhone('.form-control.tel.required', '+7 (___) ___-__-__');

    let validCyrillic = function (e) {
        e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ\s\-]/,"");
        if (e.target.value.length < 2) {
                const form = e.target;
                statusBlock.textContent = 'Введите более 2 символов';
                statusBlock.style.color = '#e21717';
                statusBlock.style.fontSize = '14px';
                statusBlock.style.position = 'absolute';
                statusBlock.style.bottom = '55px';
                form.before(statusBlock);
        } else {
            statusBlock.remove();    
        }
    };

    let validPhone = function(e) {
        e.target.value = e.target.value.replace(/[^0-9+]/, "");   
    };
    

    userName.addEventListener('input', validCyrillic);
    userPhone.addEventListener('input', validPhone);
};

export default validation;