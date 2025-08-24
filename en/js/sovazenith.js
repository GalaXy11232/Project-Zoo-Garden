const localStorageEntry = 'seenAnimation';
const sovapath = '../assets/images/Branding Zenith/Sigla_SovaTech.png';
const zenithpath = '../assets/images/Branding Zenith/Sigla_mov.png';
const lightzenithpath = '../assets/images/Branding Zenith/Sigla_alb.png';
const ANIMDELAY = 3;

function seeanimationagain() {
    let soy = document.querySelector('.soy');
    soy.style.display = 'block';
    soy.setAttribute('src', sovapath);
    soy.classList = ['soy'];

    document.querySelector('.transitionwhitescreen').style.display = 'block';

    let sq = document.getElementById('rpp').children;
        for (let i = 0; i < sq.length; i++) {
            sq[i].classList = [];
            sq[i].style = '';
        }

    let normal = document.querySelector('.actual').children;
    normal[0].style.transform = 'translateX(-50vw)';
    normal[2].style.transform = 'translateX(50vw)';
    
    let arrow = normal[1].children[0];
    arrow.style.opacity = '0';
    setTimeout(() => { 
        arrow.style.transform = 'scale(0)'; 
        arrow.addEventListener('transitionend', () => { arrow.style.opacity = '1'; }, {once: true});
    }, 250); // buffer

    
    setTimeout(beginanim, 350);
}


function handleLocalStorage() {
    if (!localStorage.getItem(localStorageEntry)) {
        localStorage.setItem(localStorageEntry, 'false');
        console.log('created new local storage');
    }
}

window.addEventListener('load', () => {
    handleLocalStorage();
    if (localStorage.getItem(localStorageEntry) != 'false') {
        let normal = document.querySelector('.actual').children;
        for (let child of normal) {
            child.style = '';
            if (child.children[0].getAttribute('id') == 'arrow') child.children[0].style = '';
        }

        document.querySelector('.soy').style.display = 'none';
    }
})


function showcasefinal() {
    
    let frontzenith = document.querySelector('.soy');
    let findiv = document.querySelector('.actual');
    let zenith = findiv.children[0];
    let arrow = findiv.children[1];
    let sova = findiv.children[2];
    
    frontzenith.classList.add('soy2');
    frontzenith.classList.add('up');
    frontzenith.addEventListener('animationend', () => {
        // bring in sides

        sova.style.transform = 'translateX(0)';
        zenith.style.transform = 'translateX(0)';

        sova.addEventListener('transitionend', () => {
            arrow.children[0].style.transform = 'scale(.6, .5)';
            document.querySelector('.transitionwhitescreen').style.display = 'none';
        }, {once: true})
    }, {once: true})
}


function beginanim() {    
    let soy = document.querySelector('.soy');

    let sq = document.getElementById('rpp').children;
    for (let i = 0; i < sq.length; i++) {
        sq[i].classList.add('square-one');
        sq[i].style.animationDelay = `${(ANIMDELAY + 3*i) / 8}s`;
    }

    setTimeout(() => { 
        soy.classList.add('enableanim'); 
        soy.style.opacity = '0';
        soy.style.transform = 'scale(.2)';

        soy.addEventListener('transitionend', () => {
            // check if dark mode is enabled
            if (localStorage.getItem(storageThemeEntry) == 'dark')
                soy.setAttribute('src', lightzenithpath);
            else soy.setAttribute('src', zenithpath);

            soy.style.opacity = '1';
            soy.style.transform = 'scale(1)';
            
            setTimeout(() => {
                showcasefinal();
            }, 1250)

        }, {once: true}); 
    }, 1000);
}

let observer = new IntersectionObserver(function (entries, observer) {
    if (entries[0].isIntersecting) {
        console.log("entry intersection on ", entries);
        if (localStorage.getItem(localStorageEntry) == 'false') {
            beginanim();
            localStorage.setItem(localStorageEntry, 'true'); // see only once
        }
    }
    
})

let obj = document.querySelector('.soy');
observer.observe(obj);
