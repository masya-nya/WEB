const galleryItems = document.querySelector('.gallery__body')
const galleryIcon = document.querySelector('.g-item__icon')

galleryItems.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('g-item')) {
        let target = e.target
        target.childNodes[1].src = 'images/icons/phone_white.png'
    }
})
galleryItems.addEventListener('mouseout', (e) => {
    if (e.target.classList.contains('g-item')) {
        let target = e.target
        target.childNodes[1].src = 'images/icons/phone_dark.png'
    }
})