"use strict"
class RootElement {
    constructor(tagName = 'div') {
        this.$el = document.createElement(tagName);
    }
    append() {
        document.querySelector('body').insertAdjacentElement('afterbegin', this.$el);
    }
}

class Circle extends RootElement {
    constructor(x, y, color = '#D2691E', size = 150) {
        super();
        this.color = color;
        this.size = size;
        this.x = x;
        this.y = y;
    }
    create() {
        this.$el.style.width = this.$el.style.height = this.size + 'px';
        this.$el.style.backgroundColor = this.color;
        this.$el.style.borderRadius = this.size / 2 + 'px';
        this.$el.style.position = 'absolute';
        this.$el.style.top = this.y - this.size / 2 + 'px';
        this.$el.style.left = this.x - this.size / 2 + 'px';
        console.log('this.x: ', this.x);
        console.log('this.y: ', this.y);
        this.append();
        return this;
    }
}

/*
document.addEventListener('click', (event) => {
    placeCircle(event.clientX, event.clientY);
    console.log('event.clientX: ', event.clientX);
    console.log('event.clientY: ', event.clientY);
});

function placeCircle(x, y) {
    let color = colors[getRandom(1, 7)];
    let size = getRandom(30, 150);
    new Circle(x, y, color, size).create();
}
function getRandom(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
}

let colors = ['#dcd36a', '#9ed130', '#FA8072', '#20B2AA', '#FFDAB9', '#FF00FF', '#2F4F4F'];
*/
/////////////////////////////ПРАКТИКА////////////////////////////////
class Dropdown {
    constructor(selector, options) {
        this.$el = document.querySelector(selector);
        this.items = options.items;
        this.$el.querySelector('.dropdown__label').textContent = this.items[0].label;

        this.$el.addEventListener('click', (event) => {
            if (event.target.classList.contains('dropdown__label')) {
                if (this.$el.classList.contains('open')) {
                    this.close();
                } else {
                    this.open();
                }
            } else if (event.target.tagName.toLowerCase() === 'li') {
                this.select(event.target.dataset.id);
            }
        });
        const itemsHTML = this.items.map(i => {
            return `<li data-id="${i.id}">${i.label}</li>`;
        }).join('');
        this.$el.querySelector('.dropdown__menu').innerHTML = itemsHTML;
    }

    select(id) {
        const item = this.items.find(i => i.id === id);
        this.$el.querySelector('.dropdown__label').textContent = item.label;
        this.close();
    }

    open() {
        this.$el.classList.add('open');
    }
    close() {
        this.$el.classList.remove('open');
    }
}


const dropdown = new Dropdown('.dropdown', {
    items: [
        { label: 'Москва', id: 'msk' },
        { label: 'Санкт-Петербург', id: 'spb' },
        { label: 'Новосибирск', id: 'nsk' },
        { label: 'Краснодар', id: 'krdr' }
    ]
});

//PROMISE/////////////////////////////////////////////////////////////

// const ul = document.querySelector('.list')
// const button = document.querySelector('.json').addEventListener('click', load)

// async function load() {
//     let url = 'https://jsonplaceholder.typicode.com/users'

//     // fetch(url)
//     // .then((response) => {
//     //     return response.json()
//     // })
//     // .then((data) => {
//     //     let html = data.map((item) => {
//     //         return '<li>'+ item.id + ' ' + item.name + ' (' + item.email +')</li>'
//     //     })
//     //     ul.insertAdjacentHTML('afterbegin', html.join(' '))
//     // })
//     let response = await fetch(url)
//     let data = await response.json()
//     let html = data.map((item) => {
//         return '<li>'+ item.id + ' ' + item.name + ' (' + item.email +')</li>'
//     })
//     ul.insertAdjacentHTML('afterbegin', html.join(' '))
// }

// function promise() {
//     return new Promise(resolve => {
//         let data = fetch('https://jsonplaceholder.typicode.com/users')
//         resolve(data)
//     })
// }
// promise().then(response => {
//     return new Promise(resolve => {
//         let data = response.json()
//         resolve(data)
//     })
// })
// .then(data => {
//     console.log(data)
//     return data
// })
// .then(date => {
//     console.log(date)
// })

// async function tretch() {
//     let response = await fetch('https://jsonplaceholder.typicode.com/users')
//     let data = await response.json()
//     console.log(data)
// }
// tretch()

///////////////////////////////////////////////////////////////////////////////

function validate(password) {
    let sixWord = false,
        lowerCase = false,
        upperCase = false,
        haveNumber = false,
        check = true;
    if (password.length >= 6) {
        sixWord = true
    }
    password.split('').forEach(word => {
        if (isNaN(+word)) {
            if (word.toLowerCase().charCodeAt(0) >= 97 && word.toLowerCase().charCodeAt(0) <= 122) {
                if (word.toUpperCase() === word) {
                    upperCase = true
                }
                if (word.toLowerCase() === word) {
                    lowerCase = true
                }
            } else {
                check = false
            }
        }
        if (!isNaN(+word)) {
            haveNumber = true
        }
    })
    console.log(sixWord, lowerCase, upperCase, haveNumber, check)
    if (sixWord && lowerCase && upperCase && haveNumber && check) {
        return true;
    }
    return false;
}
let a = 'ddddddddD^'
let reg = /[^a-zA-Z0-9]/g
function validate2(password) {
    let reg = /[^a-zA-Z0-9]/g
    let sixWord = false,
    lowerCase = false,
    upperCase = false,
    haveNumber = false,
    check = false;
    if (password.length >= 6) {
        sixWord = true
    }
    if(password.match(reg) === null) {
        check = true
    } 
    password.split('').forEach(word => {
        if (isNaN(+word)) {
            if (word.toLowerCase().charCodeAt(0) >= 97 && word.toLowerCase().charCodeAt(0) <= 122) {
                if (word.toUpperCase() === word) {
                    upperCase = true
                }
                if (word.toLowerCase() === word) {
                    lowerCase = true
                }
            } else {
                check = false
            }
        }
        if (!isNaN(+word)) {
            haveNumber = true
        }
    })
    console.log(sixWord, lowerCase, upperCase, haveNumber, check)
    if (sixWord && lowerCase && upperCase && haveNumber && check) {
        return true;
    }
    return false;
}