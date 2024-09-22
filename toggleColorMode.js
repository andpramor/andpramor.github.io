// Color mode handling:
const lightModeTogglerIcon = document.getElementById('lightModeTogglerIcon')
const goDarkTexts = document.querySelectorAll('.showInLightMode')
const goLightTexts = document.querySelectorAll('.showInDarkMode')

const handleLightToggle = () => {
    // Check the current theme, set the new theme to be the other option, update it in :root (document.documentElement) and store it in localStorage:
    const currentTheme = document.documentElement.getAttribute('color-mode')
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('color-mode', newTheme)
    localStorage.setItem('theme', newTheme)

    // Change the icon:
    if (newTheme === 'dark') {
        lightModeTogglerIcon.classList.add('bi-brightness-high-fill')
        lightModeTogglerIcon.classList.remove('bi-moon-fill')
        goDarkTexts.forEach(element => element.classList.add('hidden'))
        goLightTexts.forEach(element => element.classList.remove('hidden'))
    } else {
        lightModeTogglerIcon.classList.add('bi-moon-fill')
        lightModeTogglerIcon.classList.remove('bi-brightness-high-fill')
        goLightTexts.forEach(element => element.classList.add('hidden'))
        goDarkTexts.forEach(element => element.classList.remove('hidden'))
    }
}

// Check the user's color mode preference on page load:
function loadTheme() {
    const savedTheme = localStorage.getItem('theme')
    let theme

    if (savedTheme) {
        theme = savedTheme
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        theme = 'dark'
    } else {
        theme = 'light'
    }
    document.documentElement.setAttribute('color-mode', theme)

    if (theme === 'dark') {
        lightModeTogglerIcon.classList.remove('bi-moon-fill')
        lightModeTogglerIcon.classList.add('bi-brightness-high-fill')
        goDarkTexts.forEach(element => element.classList.add('hidden'))
        goLightTexts.forEach(element => element.classList.remove('hidden'))
    } else {
        lightModeTogglerIcon.classList.remove('bi-brightness-high-fill')
        lightModeTogglerIcon.classList.add('bi-moon-fill')
        goLightTexts.forEach(element => element.classList.add('hidden'))
        goDarkTexts.forEach(element => element.classList.remove('hidden'))
    }
}

const lightToggler = document.getElementById('lightModeToggler')
lightToggler.addEventListener('click', handleLightToggle)

loadTheme()
