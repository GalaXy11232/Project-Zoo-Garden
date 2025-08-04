//Increase number
let valueDisplays = document.querySelectorAll(".number");
let interval = 1000;

valueDisplays.forEach(valueDisplay => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function(){
    startValue += 1;
    valueDisplay.textContent = startValue;
    if(startValue === endValue){
      clearInterval(counter)
    }
  }, duration);
});

let valueDisplays2 = document.querySelectorAll(".number-special");
let interval2 = 1000;

valueDisplays2.forEach(valueDisplay => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval2 / endValue);
  let counter = setInterval(function(){
    startValue += 5;
    valueDisplay.textContent = startValue;
    if(startValue === endValue){
      clearInterval(counter)
    }
  }, duration);
});