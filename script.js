const handleLightToggler = () => {
    // Check the current theme, set the new theme to be the other option, update it in :root (document.documentElement) and store it in localStorage:
    const currentTheme = document.documentElement.getAttribute('color-mode')
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('color-mode', newTheme)
    localStorage.setItem('theme', newTheme)

    // Change the icon:
    if (newTheme === 'dark') {
        lightToggler.classList.add('fa-regular')
        lightToggler.classList.remove('fa-solid')
    } else {
        lightToggler.classList.add('fa-solid')
        lightToggler.classList.remove('fa-regular')
    }
}

// Check the user's color mode preference on page load:
function loadTheme() {
    const savedTheme = localStorage.getItem("theme");
    let theme;

    if (savedTheme) {
        theme = savedTheme;
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        theme = "dark";
    } else {
        theme = "light";
    }
    document.documentElement.setAttribute("color-mode", theme);

    if (theme === "dark") {
        lightToggler.classList.remove('fa-solid');
        lightToggler.classList.add('fa-regular');
    } else {
        lightToggler.classList.remove('fa-regular');
        lightToggler.classList.add('fa-solid');
    }
}

const lightToggler = document.getElementById('lightModeToggler')
lightToggler.addEventListener('click', handleLightToggler)

loadTheme()