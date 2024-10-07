document.addEventListener('DOMContentLoaded', () => {
  const about = document.getElementById('aboutSection')
  about.style.opacity = 0

  const observer = new IntersectionObserver(
    (observedItems) => {
      observedItems.forEach((item) => {
        if (item.isIntersecting) {
          item.target.style.animation =
            'fadeInLeft 2s ease 0s 1 normal forwards'
          observer.unobserve(item.target) // Stop observing so the animation isn't retriggered
        }
      })
    },
    {
      threshold: 0.1 // % element visibility before the observer callback triggers
    }
  )

  observer.observe(about)
})
