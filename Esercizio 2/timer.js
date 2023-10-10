// creiamo la key
const localStorageKay = 'time'

// creiamo la funzione per aggiornare il timer

const timer = () => {
    if (sessionStorage.getItem(localStorageKay)) {
        const startTimer = parseInt(sessionStorage.getItem(localStorageKay))
        const currentTime = Math.floor((Date.now() - startTimer) / 1001)
        const timerPosition = document.getElementById('timer')
        timerPosition.textContent = currentTime
    } else {
        sessionStorage.setItem(localStorageKay, Date.now())
    }

}

setInterval(timer, 0)

