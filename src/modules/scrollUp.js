const scrollUp = () => {
    const arrowUp = document.querySelector('.up');

    arrowUp.style.opacity = 0;

    const trackScroll = () => {
        let services = document.querySelector("#services").getBoundingClientRect().top - 100;
        //100 - это высота навигационной панели
        //getBoundingClientRect определяет координаты элемента

        if (services == 0 || services < 0) {
            arrowUp.style.opacity = 1;
        }
        if (services > 0) {
            arrowUp.style.opacity = 0;
        }
    };
    const backToTop = () => {
        if (window.scrollY > 0) {
            window.scrollBy(0, -30);
            setTimeout(backToTop, 0);
        }
    };
    window.addEventListener('scroll', trackScroll);
    arrowUp.addEventListener('click', backToTop);
};

export default scrollUp;