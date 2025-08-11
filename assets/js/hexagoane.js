const DELAY_STEP = Math.PI / 2; // "random" number to avoid time matching

window.addEventListener('load', () => {
    let hex_arr = document.querySelectorAll('.hexagon');

    for (let i = 0; i < hex_arr.length; i++) {        
        randomizeHexagon(hex_arr[i]);
        hex_arr[i].addEventListener('animationiteration', (_ev) => { randomizeHexagon(hex_arr[i]); });
        hex_arr[i].style.animationDelay = `${i * DELAY_STEP}s`;
    }
})


function randomizeHexagon(hex) {
    hex.style.left = `${Math.round(Math.random() * window.innerWidth)}px`;
    hex.style.height = `${25 + Math.round(Math.random() * 50)}px`;
    
}