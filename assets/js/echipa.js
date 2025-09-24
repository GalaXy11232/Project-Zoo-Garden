let filterItems = document.querySelectorAll('.item-membru');
let filterImages = document.querySelectorAll('.box-membru');

let filterVoluntari = document.querySelectorAll('.item-voluntar');
let filterImagesVoluntari = document.querySelectorAll('.box-voluntar');

let tooltip_nodes_qsall = document.querySelectorAll('.facultate-tooltip');
let tooltip_nodes = []
let can_hide = [];

window.addEventListener('click', () => {
    tooltip_nodes.forEach(nd => { 
        if (nd.children[1].classList.contains('visible') && can_hide[tooltip_nodes.indexOf(nd)]) {
            nd.children[1].classList.remove('visible'); 
            can_hide[tooltip_nodes.indexOf(nd)] = false;
        }
    })
})

window.addEventListener('load', ()=>{
    tooltip_nodes_qsall.forEach(nd => tooltip_nodes.push(nd));

    tooltip_nodes.forEach(nd => {
        can_hide.push(false);

        nd.addEventListener('click', () => {
            var ndtext = nd.children[1];
            if (!ndtext.classList.contains('visible')) ndtext.classList.add('visible');
            
            if (!can_hide[tooltip_nodes.indexOf(nd)]) setTimeout(() => {
                can_hide[tooltip_nodes.indexOf(nd)] = true;
            }, 250);
        });
    })

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