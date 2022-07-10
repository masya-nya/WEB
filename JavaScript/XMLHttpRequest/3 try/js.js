const inputText = document.querySelector('input')
const hints = document.querySelector('.search__hints')

inputText.onchange = () => {
    const value = inputText.value
    hints.innerHTML = `<p>${value}</p>`
}