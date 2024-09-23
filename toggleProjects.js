// const togglableProjects = document.querySelectorAll('#projectsList > *:nth-child(n+3)')
// const projectsListTogglers = document.querySelectorAll('.toggleProjects')
// projectsListTogglers.forEach(toggler => toggler.addEventListener('click', toggleProjectsList))

// function toggleProjectsList() {
//     togglableProjects.forEach(element => element.classList.toggle('hidden'))
// }

const projectsList = document.getElementById('projectsList')
let isExpanded = false
const projectsExpander = document.getElementById('expandProjects')
projectsExpander.addEventListener('click', expandProjects)
const projectsCollapser = document.getElementById('collapseProjects')
projectsCollapser.addEventListener('click', collapseProjects)

function calculateInitialHeight() {
  const firstItem = projectsList.children[0].offsetHeight
  const secondItem = projectsList.children[1].offsetHeight
  const gap = parseFloat(getComputedStyle(document.documentElement).fontSize)
  return firstItem + secondItem + 3*gap // Min gap is 2 rem, in large screens it's 3rem
}

function collapseProjects() {
  const newHeight = calculateInitialHeight();
  projectsList.style.height = `${newHeight}px`;
  isExpanded = false;
  projectsCollapser.classList.add('hidden')
  projectsExpander.classList.remove('hidden')
}

function expandProjects() {
  const currentHeight = projectsList.offsetHeight
  projectsList.style.height = `${currentHeight}px` // To avoid jump

  // Force reflow to ensure the browser registers the current height before transitioning
  projectsList.offsetHeight // This reads the layout and forces the browser to paint

  projectsList.style.height = `${projectsList.scrollHeight}px` // Instead of auto, calcs the number and sets it, so it triggers the transition

  isExpanded = true;
  projectsExpander.classList.add('hidden')
  projectsCollapser.classList.remove('hidden')
}

collapseProjects()

window.addEventListener('resize', () => {
  if (!isExpanded) {
    collapseProjects()
  }
})
