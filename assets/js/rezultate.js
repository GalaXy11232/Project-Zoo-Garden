//Back to top button
let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);

  if(pos > 100){
    scrollProgress.style.display = "grid";
  }
  else{
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#7b28ae ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

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
    if(startValue == endValue){
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
    if(startValue == endValue){
      clearInterval(counter)
    }
  }, duration);
});