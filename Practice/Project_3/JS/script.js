new Swiper('.testimonials__slider', {
    //Буллеты
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnIteraction: true,
    },
    speed: 800,
});

const gallery = document.querySelector('.gallery')
gallery.addEventListener('mouseover', (e) => {
    let target = e.target
})

const galleryNav = document.querySelector('.portfolio__nav')
const galleryLi = document.querySelectorAll('.portfolio__nav > li')
const galleryItem = document.querySelectorAll('.gallery__item')
galleryNav.addEventListener('click', (e) => {
    let target = e.target
    if (target.tagName === 'LI') {
        console.log(target)
        if (!target.classList.contains('active-category')) {
            for (item of galleryLi) {
                if (item.classList.contains('active-category')) {
                    item.classList.remove('active-category')
                }
            }
            target.classList.add('active-category')
            if (target.innerHTML === 'All') {
                for (item of galleryItem) {
                    if (item.classList.contains('gallery__item')) {
                        item.style.display = 'block'
                    } else {
                        item.style.display = 'none'
                    }
                }
            }
            if (target.innerHTML === 'Logo') {
                for (item of galleryItem) {
                    if (item.classList.contains('category-logo')) {
                        item.style.display = 'block'
                    } else {
                        item.style.display = 'none'
                    }
                }
            }
            if (target.innerHTML === 'Branding') {
                for (item of galleryItem) {
                    if (item.classList.contains('category-branding')) {
                        item.style.display = 'block'
                    } else {
                        item.style.display = 'none'
                    }
                }
            }
            if (target.innerHTML === 'Web') {
                for (item of galleryItem) {
                    if (item.classList.contains('category-web')) {
                        item.style.display = 'block'
                    } else {
                        item.style.display = 'none'
                    }
                }
            }
            if (target.innerHTML === 'Photography') {
                for (item of galleryItem) {
                    if (item.classList.contains('category-photography')) {
                        item.style.display = 'block'
                    } else {
                        item.style.display = 'none'
                    }
                }
            }
            if (target.innerHTML === 'Poster') {
                for (item of galleryItem) {
                    if (item.classList.contains('category-poster')) {
                        item.style.display = 'block'
                    } else {
                        item.style.display = 'none'
                    }
                }
            }
        }
    }
})

const galleryItemActive = document.querySelectorAll('.gallery__item-icon')
const modal = document.querySelector('.modal-gallery__shadow')
const modalImg = document.querySelector('.modal-gallery__img')
const modalBtnClose = document.querySelector('.modal-gallery__btn-close')
for (item of galleryItemActive) {
    let parent = item.parentElement.parentElement.parentElement
    let child = parent.querySelector('img')
    let src = child.getAttribute('src')
    item.addEventListener('click', () => {
        modalImg.src = src
        modal.style.display = 'block'
    })
}
modalBtnClose.addEventListener('click', () => {
    modal.style.display = 'none'
})