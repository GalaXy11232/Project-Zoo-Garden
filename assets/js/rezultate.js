/**
 * @param {NodeListOf<Element>} elements
 * @param {number} speed 
*/
function incrementText(elements, speed) {
  elements.forEach(element => {
    let startValue = 0;
    let interval = 1000;
    let endValue = parseInt(element.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function(){
      startValue += speed;
      element.textContent = startValue;
      if(startValue >= endValue){
        element.textContent = endValue;
        clearInterval(counter)
      }
    }, duration);
  });
}

let valueDisplays = document.querySelectorAll(".number");
let importantValueDisplays = document.querySelectorAll(".number-special");

const LOW_SPEED = 1
const HIGH_SPEED = 45

incrementText(valueDisplays, LOW_SPEED);
incrementText(importantValueDisplays, HIGH_SPEED);