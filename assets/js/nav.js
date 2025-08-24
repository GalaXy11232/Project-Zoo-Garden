const ADDITIONAL_PADDING = 30; //px

let menu, menuInitHeight;
let navbar, navbarHeight;

window.addEventListener('DOMContentLoaded', () => {
    menu = document.querySelector('.navbar-links');
    navbar = document.querySelector('.nav-wrapper');

    menuInitHeight = getComputedStyle(menu).height;
    navbarHeight = getComputedStyle(navbar).height;
    if (window.innerWidth < 1001)
        menu.style.height = 0;

    menu.style.border = 'none';
})

window.addEventListener('resize', () => {
    if(window.innerWidth > 1000) {
        menu.style.height = navbarHeight;
    } else {
        menu.style.height = 0//add_to_height(menuInitHeight, ADDITIONAL_PADDING);
    }
}); 

function dropdown_nav() {
    height = getComputedStyle(menu).height;

    if(window.innerWidth <= 1000) {
        menu.style.height = menu.style.height == '0px' ? add_to_height(menuInitHeight, ADDITIONAL_PADDING) : '0px';
        menu.style.border = menu.style.border == 'none' ? '1px solid rgba(255, 255, 255, 0.5)' : 'none';
    }
}

function add_to_height(height, add_num) { 
    return ((Number(height.split('px')[0]) + add_num) + 'px');
}