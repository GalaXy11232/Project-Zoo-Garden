let filterItems = document.querySelectorAll('.item-membru');
let filterImages = document.querySelectorAll('.box-membru');

window.addEventListener('load', ()=>{
    // pentru membrii echipei
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