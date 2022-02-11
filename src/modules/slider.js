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
                    duration: 500,
                    timing(timeFraction) {
                        return timeFraction;
                    },
                    draw(progress) {
                        slidesContent[index].style.opacity = progress;
                        elems[index].style.opacity = progress;
                    }
                });

        let timeoutSlide = setTimeout(()=> {
            let slideOpacityInterval = setInterval(() => { 
                if (elems[index].style.opacity) {
                    let opacitySlide = elems[index].style.opacity - 0.05;
                    elems[index].style.opacity = opacitySlide;
                }
                if (elems[index].style.opacity == 0 || elems[index].style.opacity < 0) {
                    console.log('Я удалил ИНТЕРВАЛ slideOpacityInterval');
                    clearInterval(slideOpacityInterval);
                }
                
            }, 30); 
            console.log('Я удалил ТАЙМЕР timeoutSlide');
            clearTimeout(timeoutSlide);   
        }, timeInterval - 1000);

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