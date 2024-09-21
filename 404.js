let countdown = 5

const timer = document.getElementById('countdownTimer')

const interval = setInterval(() => {
    countdown--
    timer.textContent = countdown

    if (countdown === 0) {
        clearInterval(interval)
        window.location.href = 'https://andrespradomorgaz.com'
    }
}, 1000)