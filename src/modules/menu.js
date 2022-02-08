const menu = () => {
    const menu = document.querySelector('.mobile-menu');
    const menuBtn = document.querySelector('.mob-menu-btn');
    const menuCloseBtn = document.querySelector('.mobile-menu-close');

    menuBtn.addEventListener('click', () => {
        menu.style.right = 0;
    });

    menuCloseBtn.addEventListener('click', () => {
        menu.style = "";
    });

};

export default menu;