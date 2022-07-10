const select = document.querySelector('select')
const title = document.querySelector('h2')
const image = document.querySelector('.image')

select.onchange = () => {
    refreshImage(select.value)
}

const refreshImage = (item) => {
    const xhr = new XMLHttpRequest
    xhr.open('GET', "data.json")
    xhr.responseType = 'text'
    xhr.send()
    xhr.onload = () => {
        const images = JSON.parse(xhr.response)
        const imageName = images[item.replace('№', '')]
        image.innerHTML = `<img src="images/${imageName}"></img>`
    }
}

refreshImage('image №1')