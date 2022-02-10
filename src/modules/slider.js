import  {animate} from './helpers';

const slider = () => {
    const sliderBlock = document.querySelector('.top-slider');
    const slides = document.querySelectorAll('.item');
    const slidesContent = document.querySelectorAll('.table');
    const timeInterval = 3000;

    let currentSlide = 0;
    let interval = null;

    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass);
        slidesContent[index].style.visibility = 'hidden';
        slidesContent[index].style.opacity = 0;
        elems[index].style.display = 'none';

    };
    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass);
        slidesContent[index].style.visibility = 'visible';
        elems[index].style.display = 'block';
        elems[index].style.opacity = 0;
        slidesContent[index].style.opacity = 0;
                animate({
                    duration: 1000,
                    timing(timeFraction) {
                        return timeFraction;
                    },
                    draw(progress) {
                        slidesContent[index].style.opacity = progress;
                        elems[index].style.opacity = progress;
                    }
                });
    };

    const autoSlide = () => {
        
        prevSlide(slides, currentSlide, 'active');
        currentSlide++;

        if (currentSlide >= slides.length) { //если слайды закончатся, то начнем их листать сначала
            currentSlide = 0;
        }
        nextSlide(slides, currentSlide, 'active');
    };

    const startSlide = (timer = 1500) => { //= - означает значение по умолчанию
        interval = setInterval(autoSlide, timer);
    };

    sliderBlock.style.backgroundColor = '#000'; //Задаю темный фон контейнера слайдеров

    slidesContent[0].style.visibility = 'visible';
    slidesContent[0].style.opacity = 1;

    startSlide(timeInterval);
};

export default slider;