let dropdown_menu;
const storageLanguageEntry = {'language': 'ro'};

window.addEventListener('DOMContentLoaded', () => {
    dropdown_menu = document.querySelector('.language-dropdown');

    handleStorage(storageLanguageEntry); // create localstorage entry if missing

    // check for redirect
    let pathArr = window.location.pathname.split('/');
    let entryKey = Object.keys(storageLanguageEntry)[0];
    let storageLang = localStorage.getItem(entryKey);

    console.log(window.location.pathname, pathArr, storageLang, '/en/' + pathArr[pathArr.length - 1]);
    if (!pathArr.includes('en') && storageLang == 'en') 
        window.location.pathname = '/en/' + pathArr[pathArr.length - 1];
    
    if (pathArr.includes('en') && storageLang == 'ro') 
        window.location.pathname = pathArr[pathArr.length - 1];
    
})

function handleStorage(entryDict) {
    let key = Object.keys(entryDict)[0];
    let value = Object.values(entryDict)[0];

    if (localStorage.getItem(key) == null) {
        localStorage.setItem(key, value);
        console.log("Created new storage entry for language!");
    }
}

function changelang(lang, redir) {
    let entryKey = Object.keys(storageLanguageEntry)[0];
    localStorage.setItem(entryKey, lang);

    window.location.pathname = redir;
}
//
function toggle_dropdown() {
    let arr = document.querySelector('.arr_menu');

    if (!(dropdown_menu.classList).contains('lang-menu-active')) {
        dropdown_menu.classList.add('lang-menu-active');
        arr.classList.add('rotate180');
    }
    else {
        dropdown_menu.classList.remove('lang-menu-active');
        arr.classList.remove('rotate180');
    }
}