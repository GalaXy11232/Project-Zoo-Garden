let filterItems = document.querySelectorAll('.item-link');
let filterImages = document.querySelectorAll('.box');

window.addEventListener('load', ()=>{
    filterItems.forEach(item => {
        item.addEventListener('click', (selectedItem)=>{
            if(selectedItem.target.classList.contains('item-link')){
                document.querySelector('.menu-active').classList.remove('menu-active');
                selectedItem.target.classList.add('menu-active');
                let filterName = selectedItem.target.getAttribute('data-name');
                filterImages.forEach((image)=>{
                    let imageFilterName = image.getAttribute('data-name');
                    if((imageFilterName == filterName) || (filterName == 'all')){
                        image.style.display = 'block';
                    } else {
                        image.style.display = 'none';
                    }
                });
            }
        });
    });
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