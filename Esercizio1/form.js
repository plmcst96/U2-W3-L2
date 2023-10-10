// prima di tutto creiamo la Key per il LocalStorage
const localStorageKay = 'form-memory'


// prendiamo i riferimenti dal DOM
const formName = document.getElementById('name-input')
const listP = document.getElementById('nameSaved')

const saveBtn = document.getElementById('save-btn')
const removeBtn = document.getElementById('remove-btn')

// qui creo funzione per salvare contenuto in localStorage e in P (cioè la lista dei nomi già salvati)
const save = () => {
    const content = formName.value
    localStorage.setItem(localStorageKay, content)
    listP.textContent = content
    nameOld()
}
// qui creo funzione per eliminare contenuto in localStorage e in P (cioè la lista dei nomi già salvati)
const remove = () => {
    localStorage.removeItem(localStorageKay)
    formName.value = ""
    listP.innerHTML = ""
    alert('Nome Cancellato')
}

const nameOld = () => {
    const content = formName.value
    const savedName = localStorage.getItem(content)
    if (savedName) {
        listP.innerHTML = `Nome gia salvato: ${savedName}`
        formName.value = savedName
    }
}

saveBtn.addEventListener('click', save)
removeBtn.addEventListener('click', remove)