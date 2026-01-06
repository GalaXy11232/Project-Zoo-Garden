window.addEventListener('DOMContentLoaded', () => {
    let currentYear = Date().split(' ')[3];
    document.getElementsByClassName('copyright-text')[0].innerHTML = '<p>Copyright &copy;' + currentYear + '</p>';
});
