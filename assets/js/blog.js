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