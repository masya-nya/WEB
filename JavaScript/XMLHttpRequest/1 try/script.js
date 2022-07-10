let verseChoose = document.querySelector('select')
let poemDisplay = document.querySelector('pre')

verseChoose.onchange = function () {
    updateDisplay(verseChoose.value)
}

const updateDisplay = (verse) => {
    const verses = {
        "Стих №1": 'verse1.txt',
        "Стих №2": 'verse2.txt',
        "Стих №3": 'verse3.txt',
        "Стих №4": 'verse4.txt',
    }
    let url = verses[verse]
    let requestXML = new XMLHttpRequest()
    requestXML.open('GET', `data/${url}`)
    requestXML.responseType = 'text'
    requestXML.send()
    requestXML.onload = () => {
        poemDisplay.textContent = requestXML.response
    }
}

updateDisplay('Стих №1')