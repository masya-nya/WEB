//Выведите с помощью цикла столбец чисел от 1 до 100.
/*
for (i = 1; i <= 100; i++) {
    console.log(i)
}
*/
//Выведите с помощью цикла столбец чисел от 100 до 1.
/*
for (i = 100; i > 0; i--) {
    console.log(i)
}
*/
//Выведите с помощью цикла столбец четных чисел от 1 до 100.
/*
for (i = 1; i < 100; i++) {
    if (i % 2 === 0) {
        console.log(i)
    } else {
        continue
    }
}
*/
//Заполните массив 10-ю иксами с помощью цикла.
/*
const array = []
const array1 = []
for (i = 0; i < 10; i++) {
    array[array.length] = 'x'
}
for (i = 0; i < 10; i++) {
    array1.push('x')
}
console.log(array)
console.log(array1)
*/
//Заполните массив числами от 1 до 10 с помощью цикла.
/*
const array = []
const array2 = []
for (i = 1; i <= 10; i++) {
    array.push(i)
}
for (i = 1; i <= 10; i++) {
    array2.push(i)
}
console.log(array)
console.log(array2)
*/
//Заполните массив 10-ю случайными числами (дробями) от 0 до 1 с помощью цикла. 
//Дроби округляйте до двух знаков в дробной части.
/*
const array = new Array
for (i = 0; i < 10; i++) {
    const num = Math.random()
    array.push(Number(num.toFixed(2)))
    //array.push(+num.toFixed(2))
}
console.log(array)
*/
//Заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла. 
/*
const array = new Array

const getRandom = (min, max) => {
    return Math.trunc(Math.random() * (max - min + 1) + min)
}
for (i = 0; i < 10; i++) {
    const num = getRandom(0, 10)
    array.push(num)
}
console.log(array)
*/
//Дан массив с числами. С помощью цикла выведите только те элементы массива, 
//которые больше нуля и меньше 10-ти.
/*
const array = [1, 4, 456, 456, 2314, -43, 345, 1, 2, 9, 5]

for (i = 0; i < array.length; i++) {
    if (array[i] > 0 && array[i] < 10) {
        console.log(array[i])
    } else {
        continue
    }
}
*/
//Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со 
//значением 5. Как только будет найден первый такой элемент - выведите 'Есть' 
//и оборвите цикл. Если такого элемента нет - ничего не выводите. 
/*
const array = [1, 4, 456, 456, 2314, 3, -43, 345, 1, 2, 9, 5]

for (i = 0; i < array.length; i++) {
    if (array[i] === 5) {
        console.log(`Есть! [${i}]`)
        break
    }
    else {
        continue
    }
}
*/
//Дан массив с числами. С помощью цикла найдите сумму элементов этого массива. 
/*
const array = [1, 4, 456, 456, 2314, 3, -43, 345, 1, 2, 9, 5, -3552]
let sum = 0
for (i = 0; i < array.length; i++) {
    sum += array[i]
}
console.log(sum)
*/
//Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.
/*
const array = [1, 4, 456, 456, 2314, 3, -43, 345, 1, 2, 9, 5, -3552]

const pow = (num) => {
    return Math.pow(num, 2)
}
let sumPow = 0
for (i = 0; i < array.length; i++) {
    sumPow += pow(array[i])
}
console.log(sumPow)
*/
//Дан массив с числами. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество). 
/*
const array = [1, 4, 456, 2314, 3, -43, 345, 1, 2, 9, 5,]

let sum = 0
for (i = 0; i < array.length; i++) {
    sum += array[i]
}
sum = sum / array.length
console.log(sum)
*/
//Задача 1 Алерт по нажатию на кнопку
/*
const button = document.createElement('button')
const body = document.querySelector('#body')
button.textContent = 'Нажми на меня!'

body.appendChild(button)

button.addEventListener('click', () => {
    alert('Привет!')
})
*/
/*
button.onclick = () => {
    alert('Привет!')
}
*/
//Задача 2 Изменение текста в инпуте
/*
const body = document.querySelector('#body')
const button = document.createElement('input')
button.type = 'button'
button.value = 'Нажми на меня!'
const text = document.createElement('input')
text.type = 'text'
text.value = '???'

body.appendChild(button)
body.appendChild(text)

button.addEventListener('click', () => {
    text.value = '!!!'
})
*/
//Задача 3 Вывод содержимого инпута
/*
const body = document.querySelector('#body')
const button = document.createElement('input')
button.type = 'button'
button.value = 'Нажми на меня!'
const text = document.createElement('input')
text.type = 'text'
text.value = '???'
body.appendChild(button)
body.appendChild(text)

button.addEventListener('click', () => {
    alert(text.value)
})
*/
//Задача 4 Квадрат содержимого инпута
/*
const body = document.querySelector('#body')
const button = document.createElement('input')
button.type = 'button'
button.value = 'Нажми на меня!'
const text = document.createElement('input')
text.type = 'text'
text.placeholder = 'Введите число!'
body.appendChild(button)
body.appendChild(text)

const pow2 = (num) => {
    return Math.pow(num, 2)
}

button.addEventListener('click', () => {
    if (isNaN(Number(text.value))) {
        alert('Вы ввели не число, повторите попытку!')
    } else if (typeof Number(text.value) === 'number') {
        alert(pow2(text.value))
    } else {
        alert('Повторите попытку!')
    }
})
*/
//Задача 5 Обмен содержимым между инпутами
/*
const body = document.querySelector('#body')
const button = document.createElement('input')
button.type = 'button'
button.value = 'Нажми на меня!'
const text = document.createElement('input')
text.type = 'text'
text.value = '!!!'
const text1 = document.createElement('input')
text1.type = 'text'
text1.value = '???'
body.appendChild(button)
body.appendChild(text)
body.appendChild(text1)

button.addEventListener('click', () => {
    a = text.value
    text.value = text1.value
    text1.value = a
})
*/
//Задача 6 По нажатию на кнопку меняется ее текст
/*
const body = document.querySelector('#body')
const button = document.createElement('input')
button.type = 'button'
button.value = 'Нажми на меня!'
const text = document.createElement('input')
text.type = 'text'
text.value = '!!!'
body.appendChild(button)
body.appendChild(text)
let num = 0
button.addEventListener('click', () => {
    num = Math.trunc(Math.random() * 100000)
    button.value = num
})
*/
//Задача 7 Работа с CSS
/*
const body = document.querySelector('#body')
const button = document.createElement('input')
button.type = 'button'
button.value = 'Нажми на меня!'
const text = document.createElement('input')
text.type = 'text'
text.value = 'Какой-то текст!'
body.appendChild(button)
body.appendChild(text)

button.addEventListener('click', () => {
    text.style.color = 'red'
})
*/
//Задача 8 Блокирование полей ввода
/*
const body = document.querySelector('#body')
const button = document.createElement('input')
button.type = 'button'
button.value = 'Заблокировать!'
const button1 = document.createElement('input')
button1.type = 'button'
button1.value = 'Разблокировать!'
const text = document.createElement('input')
text.type = 'text'
text.value = 'Lorem Lorem Lorem'
body.appendChild(button)
body.appendChild(button1)
body.appendChild(text)

button.addEventListener('click', () => {
    text.setAttribute('disabled', 'disabled')
})
button1.addEventListener('click', () => {
    text.removeAttribute('disabled')
})
*/
/*
const body = document.querySelector('#body')
const button = document.createElement('input')
button.type = 'button'
button.value = 'Навести!'
body.appendChild(button)
button.addEventListener('mouseover', () => {
    alert('Пока!')
})
*/
/*
button.addEventListener('dblclick', () => {
    alert('Пока!')
})
window.addEventListener('resize', () => {
    alert('Привет!')
})
button.addEventListener('mouseout', () => {
    alert('Пока!')
})
*/
/*
const body = document.querySelector('#body')
const text = document.createElement('input')
text.type = 'text'
text.value = 'Какой-то текст!'
body.appendChild(text)

text.addEventListener('focus', () => {
    text.value = 'Фокус!'
})
text.addEventListener('blur', () => {
    text.value = 'Блюр!'
})
*/
/*
text.addEventListener('click', () => {
    alert(text.value)
})
*/
/*
const body = document.querySelector('#body')
const image = document.createElement('img')
const button = document.createElement('button')
button.textContent = 'Кнопка!'
image.src = 'jsbase/images/cat_1.png'
body.appendChild(button)
body.appendChild(image)

button.style.position = 'absolute'
button.style.left = '-70px'
button.style.top = '60px'

button.addEventListener('click', () => {
    image.classList.toggle('block')
})

image.addEventListener('mouseover', () => {
    image.src = 'jsbase/images/cat_2.jpg'
})
image.addEventListener('mouseout', () => {
    image.src = 'jsbase/images/cat_1.png'
})
*/
/*
const body = document.querySelector('#body')
const button = document.createElement('input')
button.type = 'submit'
let num = 0
button.value = num
body.appendChild(button)
button.style.padding = '2px 40px 2px 40px'

button.addEventListener('click', () => {
    num += 1
    button.value = num
})
*/
/*
const body = document.querySelector('#body')
const input = document.createElement('input')
input.type = 'text'
input.placeholder = 'Введи текст!'
const span = document.createElement('span')
span.textContent = ''

body.appendChild(input)
body.appendChild(span)

input.addEventListener('keyup', () => {
    span.textContent = input.value
})
*/
// Работа с new Date
/*
const date = new Date()
console.log(date.getMinutes())
*/
// Создайте отсчет от 0 до бесконечности
/*
const body = document.querySelector('#body')
const p = document.createElement('p')
const button = document.createElement('input')
button.type = 'submit'
button.value = 'Нажми на меня!'
p.textContent = 0
body.appendChild(p)
body.appendChild(button)

const go = () => {
    setInterval(timer, 1000);
}
const timer = () => {
    p.innerHTML = +p.innerHTML + 1;
}
button.onclick = go

//2 вариант
const timer = () => {
    p.innerHTML = parseInt(p.innerHTML) + 1;
    setTimeout(timer, 1000)
}
button.onclick = timer
*/
// Создайте отсчет с кнопкой остановки
/*
const body = document.querySelector('#body')
const p = document.createElement('p')
p.textContent = 0
const button = document.createElement('input')
button.type = 'submit'
button.value = 'Запустить таймер!'
const button2 = document.createElement('input')
button2.type = 'submit'
button2.value = 'Остановить таймер!'
const button3 = document.createElement('input')
button3.type = 'submit'
button3.value = 'Обновить таймер!'

body.appendChild(p)
body.appendChild(button)
body.appendChild(button2)
body.appendChild(button3)
let intervalId

const timer = () => {
    p.innerHTML = Number(p.innerHTML) + 1
}
button.addEventListener('click', () => {
    button.disabled = true
    button2.disabled = false
    button3.disabled = true
    intervalId = setInterval(timer, 1000)
})
button2.addEventListener('click', () => {
    button.disabled = false
    button2.disabled = true
    button3.disabled = false
    clearInterval(intervalId)
})
button3.addEventListener('click', () => {
    p.innerHTML = 0
})
*/
//Создайте тикающие часики
/*
const body = document.querySelector('#body')
const time = document.createElement('p')
body.appendChild(time)
time.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif'
time.style.textAlign = 'center'
time.style.fontWeight = '700'
time.style.fontSize = '70px'

window.onload = () => {
    setInterval(() => {
        const date = new Date()
        time.innerHTML = date.toLocaleTimeString()
    }, 1000)
}
*/
// Отсчет от 10 до 0
/*
const body = document.querySelector('#body')
const time = document.createElement('p')
time.textContent = 10
const button = document.createElement('button')
button.textContent = 'Начать отсчет!'
const afterTimer = document.createElement('p')
afterTimer.textContent = 'Отсчет окончен!'

body.appendChild(time)
body.appendChild(button)
let intervalID
button.addEventListener('click', () => {
    intervalID = setInterval(timer, 300)
})
const stop = () => {
    clearInterval(intervalID)
}
const timer = () => {
    time.innerHTML = +time.innerHTML - 1
    button.disabled = true
    if (time.innerHTML === '0') {
        stop()
        button.classList.add('block')
        body.appendChild(afterTimer)
    }
}
*/
//Слайдер
/*
const body = document.querySelector('#body')
const img = document.createElement('img')
img.src = 'jsBase/images/1.png'

body.appendChild(img)
let intervalID
let index = 2
const go = () => {
    intervalID = setInterval(slider, 1000)
}
const slider = () => {
    if (index === 7) {
        index = 1
    }
    img.src = `jsBase/images/${index}.png`
    index++
}
window.onload = go
*/
/*
const object = {
    '1': 'jsBase/images/1.png',
    '2': 'jsBase/images/2.png',
    '3': 'jsBase/images/3.png',
    '4': 'jsBase/images/4.png',
    '5': 'jsBase/images/5.png',
    '6': 'jsBase/images/6.png'
}
const body = document.querySelector('#body')
const img1 = document.createElement('img')
img1.src = object[1]
const img2 = document.createElement('img')
img2.src = object[2]
const img3 = document.createElement('img')
img3.src = object[3]
img3.alt = '3'
const button = document.createElement('button')
button.textContent = 'Запустить карусель!'

body.appendChild(img1)
body.appendChild(img2)
body.appendChild(img3)
body.appendChild(button)

let intervalID

const go = () => {
    intervalID = setInterval(carusel, 1000)
}
const func = (src) => {
    for (i = 0; i < 6; i++) {
        if (+src === i) {
            img3.alt = +src + 1
            return object[i + 1]
        } else if (+src === 6) {
            img3.alt = 1
            return object[1]
        }
    }
}
const carusel = () => {
    img1.src = img2.src
    img2.src = img3.src
    img3.src = func(img3.alt)
}
button.addEventListener('click', go)
*/
/*
const object = {
    '1': 'jsBase/images/1.png',
    '2': 'jsBase/images/2.png',
    '3': 'jsBase/images/3.png',
    '4': 'jsBase/images/4.png',
    '5': 'jsBase/images/5.png',
    '6': 'jsBase/images/6.png'
}
const body = document.querySelector('#body')
const img1 = document.createElement('img')
img1.src = object[1]
const img2 = document.createElement('img')
img2.src = object[2]
const img3 = document.createElement('img')
img3.src = object[3]
const img4 = document.createElement('img')
img4.src = object[4]
const img5 = document.createElement('img')
img5.src = object[5]
const img6 = document.createElement('img')
img6.src = object[6]
img6.alt = '6'
const button = document.createElement('button')
button.textContent = 'Запустить карусель!'
const button2 = document.createElement('button')
button2.textContent = 'Остановить карусель!'
button2.disabled = true

body.appendChild(img1)
body.appendChild(img2)
body.appendChild(img3)
body.appendChild(img4)
body.appendChild(img5)
body.appendChild(img6)
body.appendChild(button)
body.appendChild(button2)

let intervalID

const go = () => {
    button.disabled = true
    button2.disabled = false
    intervalID = setInterval(karusel, 1000)
}
const karusel = () => {
    src = img1.src
    img1.src = img2.src
    img2.src = img3.src
    img3.src = img4.src
    img4.src = img5.src
    img5.src = img6.src
    img6.src = src
}
button.onclick = go
button2.addEventListener('click', () => {
    button2.disabled = true
    button.disabled = false
    clearInterval(intervalID)
})
*/
/*
const hour = document.querySelector('.hour')
const minute = document.querySelector('.minute')
const second = document.querySelector('.second')


window.onload = () => {
    setInterval(() => {
        const date = new Date()
        hour.textContent = 23 - +date.getHours()
        minute.textContent = 59 - +date.getMinutes()
        second.textContent = 60 - +date.getSeconds()
    }, 1000)
}
*/
//Даны картинки. Привяжите к каждой картинке событие, 
//чтобы по клику на картинку алертом выводился ее src
/*
const body = document.querySelector('#body')
const img = document.querySelector('img')
const div = document.createElement('div')
const button = document.createElement('button')
button.textContent = 'Button'
div.style.cssText = 'height: 50px; width: 40px; background-color: red; padding: 20px; border: 20px solid #000'
const a = document.querySelector('a')
const p = document.querySelector('p')

body.append(button)
body.append(div)

img.addEventListener('click', () => {
    alert(img.src + ', ' + img.scrollLeft + ', ' + img.scrollWidth)
})

console.log(div.clientTop)
console.log(div.clientLeft)
console.log(div.clientHeight)
console.log(div.clientWidth)
console.log(div.offsetHeight)
console.log(div.offsetWidth)
console.log(getComputedStyle(div).height + ' ' + getComputedStyle(div).width)
console.log(getComputedStyle(div))


button.addEventListener('click', () => {
    scrollBy(0, 400)
})
p.addEventListener('click', () => {
    p.scrollTop = p.scrollHeight - 500
})
*/
/*
const body = document.querySelector('#body')
const test = document.querySelector('.test')
test.style.color = 'red'
test.style.position = 'fixed'
body.append(test)

window.addEventListener('mousemove', (item) => {
    test.innerHTML = `X: ${item.pageX}, Y: ${item.pageY}`
})
*/
/*
const body = document.querySelector('#body')
const test = document.querySelector('.test')
test.style.cssText = 'width: 100px; height: 100px; border: 1px solid red; position: absolute; left: 0px; top: 0px'

window.addEventListener('click', (event) => {
    test.style.left = `${event.pageX}px`
    test.style.top = `${event.pageY}px`
})
window.addEventListener('mousedown', (event) => {
    test.style.left = `${event.clientX - test.clientWidth / 2}px`
    test.style.top = `${event.clientY - test.clientHeight / 2}px`
})
*/
/*
const body = document.querySelector('#body')
const text = document.createElement('input')
text.type = 'text'
text.placeholder = 'Введите текст'
const p1 = document.createElement('p')
p1.textContent = 'Код нажатой клавиши: '
const span = document.createElement('span')
span.textContent = '?'
body.append(text)
body.append(p1)
body.append(span)

text.addEventListener('keypress', (event) => {
    span.innerHTML = event.which
})
text.addEventListener('keyup', (event) => {
    span.innerHTML = text.value.slice(-1)
})
text.addEventListener('keypress', (event) => {
    span.innerHTML = String.fromCharCode(event.which)
})
*/
/*
const body = document.querySelector('#body')
const text = document.createElement('input')
const input = document.createElement('input')
input.type = 'text'
input.placeholder = 'Введите текст и нажмите Enter!'
input.style.cssText = 'width: 400px; margin: 20px; height: 40px'
const span = document.createElement('span')
span.textContent = '???'
text.type = 'submit'
text.value = 'Кнопка'
text.style.fontSize = '40px'
body.append(text)
body.append(input)
body.append(span)

const randomColor = () => {
    let r = Math.floor(Math.random() * (256))
    let g = Math.floor(Math.random() * (256))
    let b = Math.floor(Math.random() * (256))
    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`
}
text.addEventListener('click', (event) => {
    if (event.ctrlKey) {
        text.style.color = randomColor()
    }
})

text.addEventListener('click', (event) => {
    if (event.ctrlKey) {
        text.value = 'CTRL'
    } else if (event.altKey) {
        text.value = 'ALT'
    } else if (event.shiftKey) {
        text.value = 'SHIFT'
    }
})
input.addEventListener('keypress', (event) => {
    if (event.which == 13) {
        span.textContent = input.value
        input.value = ''
    }
})
*/
//Дан ul, в нем несколько li. Под ul сделайте кнопку, по нажатию на 
//которую в конец ul будет добавляться новый li с текстом 'пункт'. 
//Сделайте так, чтобы при клике на каждый li, ему в конец добавлялся 
//'!'. Это должно работать и для вновь добавленных li. Задачу решите 
//с помощью делегирования (то есть событие должно быть навешано на ul).
/*
const main = document.querySelector('ul')
const btn = document.querySelector('button')
let selectedLI
main.addEventListener('click', (event) => {
    let target = event.target
    if (target.tagName != 'LI') return
    highlight(target)
})
const highlight = (li) => {
    if (selectedLI) {
        selectedLI.classList.remove('highlight')
    }
    selectedLI = li
    selectedLI.classList.add('highlight')
    selectedLI.textContent += '!'
}
btn.addEventListener('click', () => {
    let li = document.createElement('li')
    li.textContent = 'Пункт'
    main.append(li)
})
*/
/*
const layer1 = document.querySelector('.layer_1')
const layer2 = document.querySelector('.layer_2')
const layer3 = document.querySelector('.layer_3')

layer2.addEventListener('click', () => alert(`Желтый ${event.eventPhase}`), true)
layer3.addEventListener('click', () => alert(`Красный ${event.eventPhase}`))
*/
const ball = document.querySelector('.football_ball')
const field = document.querySelector('.football_field')

/*
const info = document.querySelector('.info')
const rectInfo = ball.getBoundingClientRect()

field.addEventListener('click', (event) => {
    let fieldCoords = field.getBoundingClientRect()
    let ballCoords = {
        top: event.clientY - fieldCoords.top - field.clientTop - ball.offsetHeight / 2,
        left: event.clientX - fieldCoords.left - field.clientLeft - ball.offsetWidth / 2
    }
    if (ballCoords.top < 0) ballCoords.top = 0
    if (ballCoords.left < 0) ballCoords.left = 0
    if (ballCoords.left + ball.offsetWidth > field.clientWidth) {
        ballCoords.left = field.clientWidth - ball.offsetWidth
    }
    if (ballCoords.top + ball.offsetHeight > field.clientHeight) {
        ballCoords.top = field.clientHeight - ball.offsetHeight
    }
    ball.style.left = ballCoords.left + 'px'
    ball.style.top = ballCoords.top + 'px'

    console.log(event.clientY, fieldCoords.top, field.clientTop, ball.offsetHeight / 2)
    console.log(event.clientX, fieldCoords.left, field.clientLeft, ball.offsetWidth / 2)
    info.innerHTML = `Top: ${rectInfo.top}<br>
                  Left: ${rectInfo.left}<br>
                  Right: ${rectInfo.right}<br>
                  Bottom: ${rectInfo.bottom}<br>
                  Width: ${rectInfo.width}<br>
                  Height: ${rectInfo.height}<br>`
})
*/
const fieldCords = field.getBoundingClientRect()
const info = document.querySelector('.info')
const metka = document.querySelector('.metka')
ball.addEventListener('mousedown', (event) => {
    let shiftX = event.clientX - ball.getBoundingClientRect().left
    let shiftY = event.clientY - ball.getBoundingClientRect().top
    let currentDroppable = null
    ball.ondragstart = function () {
        return false
    }
    const moveAt = (x, y) => {
        let left = x - fieldCords.left - field.clientLeft - shiftX
        let top = y - fieldCords.top - field.clientTop - shiftY
        ball.style.zIndex = '1000'
        info.innerHTML = `x:${x}<br>
                          y:${y}<br>
                          fieldCords.left:${fieldCords.left}<br>
                          fieldCords.top:${fieldCords.top}<br>
                          left:${left}<br>
                          top:${top}<br>
                          field.clientWidth:${field.clientWidth}<br>
                          field.clientHeight:${field.clientHeight}<br>
                          event.pageX:${event.pageX}<br>
                          event.pageY:${event.pageY}<br>`
        if (left < 0) left = 0
        if (top < 0) top = 0
        if (left + ball.clientWidth > field.clientWidth) {
            left = field.clientWidth - ball.clientWidth
        }
        if (top + ball.clientHeight > field.clientHeight) {
            top = field.clientHeight - ball.clientHeight
        }
        ball.style.left = left + 'px'
        ball.style.top = top + 'px'
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY)
        ball.hidden = true
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY)
        ball.hidden = false
        const leaveDroppable = (currentItem) => {
            if (currentItem.tagName === 'DIV') {
                currentItem.style.background = '#fff'
            } else {
                currentItem.src = 'jsBase/images/3.png'
            }

        }
        const enterDroppable = (currentItem) => {
            if (currentItem.tagName === 'DIV') {
                currentItem.style.background = '#000'
            } else {
                currentItem.src = 'jsBase/images/4.png'
            }
        }
        if (!elemBelow) return
        let droppableBelow = elemBelow.closest('.droppable')
        if (currentDroppable != droppableBelow) {
            if (currentDroppable) {
                leaveDroppable(currentDroppable)
            }
            currentDroppable = droppableBelow
            if (currentDroppable) {
                enterDroppable(currentDroppable)
            }
        }
    }

    document.addEventListener('mousemove', onMouseMove)

    document.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove)
        document.onmouseup = null
    }
})


const slider = document.querySelector('.slider')
const thumb = document.querySelector('.thumb')
const info2 = document.querySelector('.info_2')
const sliderCoords = slider.getBoundingClientRect()
thumb.addEventListener('pointerdown', (event) => {
    let shiftX = event.clientX - thumb.getBoundingClientRect().left
    thumb.ondragstart = function () {
        return false
    }
    const moveAt = (x) => {
        let left = x - sliderCoords.left - slider.clientLeft - shiftX
        if (left < 5) left = 5
        if (left > 185) left = 185
        thumb.style.left = left + 'px'
    }
    const onMouseMove = (event) => {
        moveAt(event.pageX)
    }
    document.addEventListener('pointermove', onMouseMove)
    document.onpointerup = function () {
        document.removeEventListener('pointermove', onMouseMove)
        document.onmouseup = null
    }
})

const heroes = document.querySelector('.football-hero__hero')
const hero1 = document.querySelector('.hero1')
const gateLeft = document.querySelector('.gate_1')
const gateRight = document.querySelector('.gate_2')

heroes.addEventListener('mousedown', (event) => {
    let target = event.target.closest('.draggable')
    let currentDroppable = null
    let shiftX = event.clientX - target.getBoundingClientRect().left
    let shiftY = event.clientY - target.getBoundingClientRect().top
    target.ondragstart = function () {
        return false
    }
    const moveAt = (x, y) => {
        target.style.position = 'absolute'
        target.style.zIndex = '1000'
        let left = x - shiftX
        let top = y - shiftY
        info2.innerHTML = `fieldCords.left:${sliderCoords.left}<br>
                          fieldCords.top:${sliderCoords.top}<br>
                          left:${left}<br>
                          top:${top}<br>
                          field.clientWidth:${slider.clientWidth}<br>
                          field.clientHeight:${slider.clientHeight}<br>
                          pageX:${x}<br>
                          pageY:${y}<br>
                          document.documentElement.clientWidth:${document.documentElement.clientWidth}<br>
                          document.documentElement.clientHeight:${document.documentElement.clientHeight}<br>
                          window.pageYOffset:${window.pageYOffset}<br>
                          ${document.documentElement.scrollHeight}<br>
                          ${document.documentElement.scrollHeight - (document.documentElement.scrollHeight - document.documentElement.clientHeight - window.pageYOffset) - document.documentElement.clientHeight}<br>
                          ${document.documentElement.scrollHeight - (document.documentElement.scrollHeight - document.documentElement.clientHeight - window.pageYOffset)}`
        if (left < 0) left = 0
        if (top < document.documentElement.scrollHeight - (document.documentElement.scrollHeight - document.documentElement.clientHeight - window.pageYOffset) - document.documentElement.clientHeight) top = document.documentElement.scrollHeight - (document.documentElement.scrollHeight - document.documentElement.clientHeight - window.pageYOffset) - document.documentElement.clientHeight
        if (top > document.documentElement.scrollHeight - (document.documentElement.scrollHeight - document.documentElement.clientHeight - window.pageYOffset) - target.offsetHeight) top = document.documentElement.scrollHeight - (document.documentElement.scrollHeight - document.documentElement.clientHeight - window.pageYOffset) - target.offsetHeight
        if (left > document.documentElement.clientWidth - target.offsetWidth) left = document.documentElement.clientWidth - target.offsetWidth
        target.style.left = left + 'px'
        target.style.top = top + 'px'
    }
    const onMouseMove = (event) => {
        moveAt(event.pageX, event.pageY)
        if (target.classList.contains('ball')) {
            target.hidden = true
            let elemBelow = document.elementFromPoint(event.clientX, event.clientY)
            target.hidden = false

            if (!elemBelow) return

            let droppableBelow = elemBelow.closest('.droppable')
            const leaveDroppable = (droppable) => {
                droppable.style.background = '#fff'
            }
            const enterDroppable = (droppable) => {
                droppable.style.background = '#000'
            }

            if (currentDroppable != droppableBelow) {
                if (currentDroppable) {
                    leaveDroppable(currentDroppable)
                }
                currentDroppable = droppableBelow
                if (currentDroppable) {
                    enterDroppable(currentDroppable)
                }
            }
        }
    }
    document.addEventListener('mousemove', onMouseMove)
    document.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove)
        document.onmouseup = null
        target.style.zIndex = '500'
    }
})
//  МОДАЛЬНОЕ ОКНО
const modal = document.querySelector("#modal"),
    modalOverlay = document.querySelector("#modal-overlay"),
    closeButton = document.querySelector("#closeButton"),
    openButton = document.querySelector("#open-button")

closeButton.addEventListener("click", function () {
    modal.classList.toggle("modal-closed");
    modalOverlay.classList.toggle("modal-closed");
})
openButton.addEventListener("click", function () {
    modal.classList.toggle("modal-closed");
    modalOverlay.classList.toggle("modal-closed");
})
//
document.addEventListener('keydown', (event) => {
    if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
        alert('Отменить!')
    }
})
////////////////////////////////////////////////////////////////////////////////////

const runOnKeys = (func, ...codes) => {
    const pressed = new Set()
    document.addEventListener('keydown', (event) => {
        pressed.add(event.code)

        for (code of codes) {
            if (!pressed.has(code)) return
        }

        pressed.clear()
        func()
    })
    document.addEventListener('keyup', function (event) {
        pressed.delete(event.code)
    })
}

runOnKeys(() => alert('Все получилось!'), 'KeyQ', 'KeyW')
///////////////////////////////////////////////////////////////////////////////////
const form = document.forms.form
const fieldset = form.elements.userFields
const input_1 = form.elements.info_1
const input_2 = form.elements.info_2
const input_3 = form.elements.info_3
const bilo = document.querySelector('.graffik-1__number')
const stalo = document.querySelector('.graffik-2__number')
const blue = document.querySelector('.graffik-2__img')
const red = document.querySelector('.graffik-1__img')
let doo
let posle

const kredit = (depozit, srok, procent) => {
    let sum
    sum = Math.trunc(+depozit + (depozit * srok * procent / 100))
    return sum
}
const otnosheniye = (a, b) => {
    return a / b
}
input_1.addEventListener('input', () => {
    doo = input_1.value
    posle = kredit(input_1.value, input_2.value / 12, input_3.value)
    bilo.innerHTML = doo
    stalo.innerHTML = posle
    blue.style.height = Math.trunc(+getComputedStyle(red).height.slice(0, -2) * otnosheniye(posle, doo)) + 'px'
})
input_2.addEventListener('input', () => {
    doo = input_1.value
    posle = kredit(input_1.value, input_2.value / 12, input_3.value)
    stalo.innerHTML = posle
    blue.style.height = Math.trunc(+getComputedStyle(red).height.slice(0, -2) * otnosheniye(posle, doo)) + 'px'
})
input_3.addEventListener('input', () => {
    doo = input_1.value
    posle = kredit(input_1.value, input_2.value / 12, input_3.value)
    stalo.innerHTML = posle
    blue.style.height = Math.trunc(+getComputedStyle(red).height.slice(0, -2) * otnosheniye(posle, doo)) + 'px'
})
/*
const imgDOM = document.querySelector('.image')
document.addEventListener('DOMContentLoaded', () => {
    alert('DOM загружен')
    alert(`${imgDOM.offsetHeight}, ${imgDOM.offsetWidth}`)
})
*/
