const DELAY_STEP = 1.5;

window.addEventListener('load', () => {
    let hex_arr = document.querySelectorAll('.hexagon');

    for (let i = 0; i < hex_arr.length; i++) {
        randomizeHexagon(hex_arr[i]);
        hex_arr[i].addEventListener('animationiteration', randomizeHexagon(hex_arr[i]));
        hex_arr[i].style.animationDelay = `${i * DELAY_STEP}s`;
    }
})


function randomizeHexagon(hex) {
    hex.style.left = `${Math.round(Math.random() * window.innerWidth)}px`;
    hex.style.height = `${50 + Math.round(Math.random() * 25)}px !important`;



}