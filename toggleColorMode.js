// Color mode handling:
const colorModeTogglerIcon = document.getElementById('lightModeTogglerIcon')
const goDarkTexts = document.querySelectorAll('.showInLightMode')
const goLightTexts = document.querySelectorAll('.showInDarkMode')

const setColorMode = (theme) => {
    document.documentElement.setAttribute('color-mode', theme)

    // Change the icon:
    if (theme === 'dark') {
        colorModeTogglerIcon.classList.add('bi-brightness-high-fill')
        colorModeTogglerIcon.classList.remove('bi-moon-fill')
        goDarkTexts.forEach(element => element.classList.add('hidden'))
        goLightTexts.forEach(element => element.classList.remove('hidden'))
    } else {
        colorModeTogglerIcon.classList.add('bi-moon-fill')
        colorModeTogglerIcon.classList.remove('bi-brightness-high-fill')
        goLightTexts.forEach(element => element.classList.add('hidden'))
        goDarkTexts.forEach(element => element.classList.remove('hidden'))
    }
}

// Change current color theme, update it in :root (document.documentElement) and store it in localStorage:
const handleLightToggle = () => {
    const currentTheme = document.documentElement.getAttribute('color-mode')
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
    localStorage.setItem('theme', newTheme)

    setColorMode(newTheme)
}

// Check the user's color mode preference on page load:
function loadTheme() {
    const savedTheme = localStorage.getItem('theme')
    const isDarkPrefered = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    let theme

    if (savedTheme) {
        theme = savedTheme
    } else if (isDarkPrefered) {
        theme = 'dark'
    } else {
        theme = 'light'
    }

    setColorMode(theme)
}

const lightToggler = document.getElementById('lightModeToggler')
lightToggler.addEventListener('click', handleLightToggle)

loadTheme()
