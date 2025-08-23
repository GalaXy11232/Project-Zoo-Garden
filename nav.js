let menu;
let menuInitHeight;

window.addEventListener('DOMContentLoaded', () => {
    menu = document.querySelector('.navbar-dropdown');
    
    menuInitHeight = getComputedStyle(menu).height;
    menu.style.height = 0;
})

function dropdown_nav() {
    height = getComputedStyle(menu).height;
    
    if (height != '0px') menu.style.height = '0px';
    else menu.style.height = menuInitHeight;
}