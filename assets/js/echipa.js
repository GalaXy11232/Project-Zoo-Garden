let filterItems = document.querySelectorAll('.item-membru');
let filterImages = document.querySelectorAll('.box-membru');

// filip aici faci inca 2 queryselectionuri pentru itemele voluntarilor si faci exact acelasi lucru ca mai jos

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