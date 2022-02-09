const faq = () => {
    const accordeon = document.querySelector('.accordeon');
    const element = document.querySelectorAll('.accordeon > .element');
    const elementContent = document.querySelectorAll('.accordeon > .element > .element-content');

    accordeon.addEventListener('click', (e) => {
        if (e.target.closest('.element')) { //для того чтобы не ломалось при клике на span
            const tabBtn = e.target.closest('.element'); 
            element.forEach((tab, index) => {
                if (tab === tabBtn) {
                    tab.classList.add('active');
                    elementContent[index].style.display = "block";
                } else {
                    tab.classList.remove('active');
                    elementContent[index].style.display = "none";
                }
            });
        }
    });
};

export default faq;