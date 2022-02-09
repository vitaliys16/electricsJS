const modal = () => {
    const callbackBtn = document.querySelectorAll('.callback-btn');

    const modalCallback = document.querySelector('.modal-callback');
    const modalOverlay = document.querySelector('.modal-overlay');
    const modalCLoseBtn = document.querySelector('.modal-close');
    const modalServiesBtn = document.querySelector('.button-services');

    //Модульное окно при нажатии на кнопку карточек из раздела "НАШИ УСЛУГИ"
    const elementService = document.querySelectorAll('.services-carousel > div > .element');

    callbackBtn.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            modalCallback.style.display = "block";
            modalOverlay.style.display = "block";

            document.querySelector('.mobile-menu').style.right = "";
        });
    });

    modalServiesBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modalCallback.style.display = "block";
        modalOverlay.style.display = "block";

        document.querySelector('.mobile-menu').style.right = "";
    });

    elementService.forEach((item) => {

        item.addEventListener('click', (e) => {
            e.preventDefault();

            if (e.target.classList.contains('img-wrapper')) {  
                modalCallback.style.display = "block";
                modalOverlay.style.display = "block";  
            }  
        });
    });

    


    modalCLoseBtn.addEventListener('click', (e) => {
        modalCallback.style.display = "none";
        modalOverlay.style.display = "none";
    });

    modalOverlay.addEventListener('click', () => {
        modalCallback.style.display = "none";
        modalOverlay.style.display = "none";
    });
};

export default modal;