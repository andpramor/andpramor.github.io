const togglableProjects = document.querySelectorAll('#projectsList > *:nth-child(n+3)')
const projectsListTogglers = document.querySelectorAll('.toggleProjects')
projectsListTogglers.forEach(toggler => toggler.addEventListener('click', toggleProjectsList))

function toggleProjectsList() {
    togglableProjects.forEach(element => element.classList.toggle('hidden'))
}
