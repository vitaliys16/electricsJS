const menu = () => {
    const body = document.querySelector('body');
    const menu = document.querySelector('.mobile-menu');

    body.addEventListener('click', (e) => {
        if (e.target.closest('.mob-menu-btn')) {
            menu.style.right = 0;  
        } else if (e.target.closest('.mobile-menu-close') || e.target.closest('ul > li')) {
            menu.style = "";  
        }   else if (!e.target.closest('.mobile-menu')) {
            if (menu.style.right == '0px') {
                menu.style = ""; 
            }
        }
    });
};
export default menu;