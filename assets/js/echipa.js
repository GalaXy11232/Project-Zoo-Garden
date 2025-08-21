let filterItems = document.querySelectorAll('.item-membru');
let filterImages = document.querySelectorAll('.box-membru');

let filterVoluntari = document.querySelectorAll('.item-voluntar');
let filterImagesVoluntari = document.querySelectorAll('.box-voluntar');

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

    // pentru voluntari
    filterVoluntari.forEach(item => {
        item.addEventListener('click', (selectedItem) => {
            if (selectedItem.target.classList.contains('item-link')) {
                document.querySelector('.menu-active-v').classList.remove('menu-active-v');
                selectedItem.target.classList.add('menu-active-v');

                let filterName = selectedItem.target.getAttribute('data-name');
                filterImagesVoluntari.forEach((image) => {
                    let imgName = image.getAttribute('data-name');
                    if (imgName == filterName || (filterName == 'all-v')) { 
                        image.style.display = 'block'; 
                    }
                    else { image.style.display = 'none'; }
                });
            };
        });
    });
});