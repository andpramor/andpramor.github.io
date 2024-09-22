let lastScrollTop = 0;
const optionsMenu = document.getElementById('optionsMenu')

window.addEventListener('scroll', function () {
    let scrollTop = document.documentElement.scrollTop

    if (scrollTop > 0) {
        optionsMenu.classList.add('bg-blur')
    } else {
        optionsMenu.classList.remove('bg-blur')
    }

    if (scrollTop > lastScrollTop) {
        // Downwards scroll: hides menu
        optionsMenu.style.top = '-3rem'
    } else {
        // Upwards scroll: shows menu
        optionsMenu.style.top = '1rem'
    }
    lastScrollTop = scrollTop;
})
