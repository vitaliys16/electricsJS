const sliderCarousel = () => {
    const box = document.querySelector('.services-elements');
    const sliderCarousel = document.querySelector('.services-carousel');
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');

    let widthSlider = 200;
    let sizeSlide = 33.33333333;
    let sizeConteiner = -100;
    let left = 0;

    box.style.overflow = 'hidden';
    sliderCarousel.style.display = 'inline-flex';
    sliderCarousel.style.position = 'relative';
    sliderCarousel.style.width = widthSlider + '%';
    sliderCarousel.style.marginLeft = 0;
    sliderCarousel.style.left = 0;
    sliderCarousel.style.transition = 'all ease .6s';

    const windowDevice = () => {
        if (window.innerWidth > 850) {
            widthSlider = 200;
            sizeConteiner = -100;
            sliderCarousel.style.width = widthSlider + '%';
        } else if (window.innerWidth < 850 && window.innerWidth > 570) {
            widthSlider = 300;
            sizeSlide = 50;
            sizeConteiner = -250;
            sliderCarousel.style.width = widthSlider + '%';
        } else if (window.innerWidth < 570) {
            widthSlider = 600; 
            sizeSlide = 100;
            sizeConteiner = -500;
            sliderCarousel.style.width = widthSlider + '%';
        }
    };

    const clickLeft = () => {
        if (left == 0) {
            return;
        }
        left = left + sizeSlide; 
        sliderCarousel.style.left = left + '%';
    };

    const clickRight = () => {
        if (left < sizeConteiner + 1) {
            return;
        }
        left = left - sizeSlide; 
        sliderCarousel.style.left = left + '%';
    };

    arrowLeft.addEventListener('click', clickLeft);
    arrowRight.addEventListener('click', clickRight);

    window.addEventListener('resize', windowDevice);
    windowDevice();

};

export default sliderCarousel;