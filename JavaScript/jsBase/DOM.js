// DOM (Document Object Model)

const header1 = document.querySelector('.h1-class')
const header2 = document.querySelector('.h2-class')
const header3 = document.querySelector('.h3-class')
const header_body = document.querySelector('.body')

setTimeout(() => {
    headStyle(header1, 'blue', 'white')
}, 1500)
setTimeout(() => {
    headStyle(header2, 'red', 'blue')
}, 2500)
setTimeout(() => {
    headStyle(header3, 'white', 'red')
}, 3500)


function headStyle(item, color, bg_color) {
    item.style.color = color
    item.style.backgroundColor = bg_color
    item.style.textAlign = 'center'
    item.style.padding = '1em'
    item.style.maxWidth = '1000px'
    item.style.margin = '0 auto'
    item.style.border = '1px solid black'
}

header_body.onclick = () => {
    console.log('click')
}