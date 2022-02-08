const modal = () => {
    const callbackBtn = document.querySelectorAll('.callback-btn');

    const modalCallback = document.querySelector('.modal-callback');
    const modalOverlay = document.querySelector('.modal-overlay');
    const modalCLoseBtn = document.querySelector('.modal-close');
    const modalServiesBtn = document.querySelector('.button-services');

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