const texts = document.querySelectorAll('.text')

const toggleTextsShown = () => texts.forEach(element => element.classList.toggle('hiddenLanguage'))

const handleLanguageToggle = () => {
    console.log('Hi')
    // Check the current language, set the new language to be the other option and store it in localStorage:
    const currentLanguage = document.documentElement.getAttribute('lang')
    const newLanguage = currentLanguage === 'es' ? 'en' : 'es'
    document.documentElement.setAttribute('lang', newLanguage)
    localStorage.setItem('lang', newLanguage)

    // Toggle the texts shown from one language to the other:
    toggleTextsShown()
}

function loadLanguage() {
    const savedLanguage = localStorage.getItem('lang')
    const userDefaultLanguage = navigator.language || navigator.userLanguage
    console.log(userDefaultLanguage)
    let language

    if (savedLanguage) {
        language = savedLanguage
    } else if (userDefaultLanguage === 'es-ES') {
        language = 'es'
    } else {
        language = 'en'
    }
    document.documentElement.setAttribute('lang', language)

    // Default is ES, so in case language is EN, toggle texts:
    if (language === 'en') toggleTextsShown()
}

loadLanguage()

const languageToggler = document.getElementById('languageToggler')
languageToggler.addEventListener('click', handleLanguageToggle)
