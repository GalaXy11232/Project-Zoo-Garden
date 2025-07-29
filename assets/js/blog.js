const parent_container = document.querySelector('.blog-container');

parent_container.addEventListener('click', event => {
    const current = event.target;
    const is_read_more_btn = current.classList.contains('read-more-btn');
    
    if (!is_read_more_btn) {
        return;
    }

    const current_text = current.parentNode.querySelector('.read-more-text');
    current_text.classList.toggle('read-more-text--show');
    
    current.textContent = current_text.classList.contains('read-more-text--show') ? "Read Less..." : "Read More...";
});

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