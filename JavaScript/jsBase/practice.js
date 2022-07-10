//--------------------------------------База------------------------------------------

// Задача №1 -------------------------------------------------------------------------

/*
const firtsName = prompt('Введите a:')
const lastName = prompt('Введите b:')
const age = prompt('Введите свой возраст':)

const multi = (a, b) => a * b

alert(multi(a, b))
*/

// Задача №2 -------------------------------------------------------------------------

/*
const firtsName = prompt('Введите своё имя:').trim()
const lastName = prompt('Введите свою фамилию:').trim()
const age = prompt('Введите свой возраст:').trim()

if (firtsName === null || lastName === null || age === null || firtsName === '' || lastName === '' || age === '') {
    alert('Данные введены некоректно. Повторите снова')
    window.location.reload()
} else {
    alert('Привет, ' + firtsName + ' ' + lastName + ' с возрастом ' + age)
}
*/

// Задача №3 -------------------------------------------------------------------------

/*
const pol = prompt('Введите ваш пол (F/M)')

if (pol === 'F' || pol === 'f' || pol === 'm' || pol === 'M') {
    if (pol === 'F' || pol === 'f') {
        alert('Ваш пол женский!')
    } else {
        alert('Ваш пол мужской!')
    }
} else {
    alert('Данные введены неверно. Попробуйте снова!')
    document.location.reload()
}
*/

// Задача №4 -------------------------------------------------------------------------

/*
const num = prompt('Введите номер текущего дня')

const weekday = {
    1: 'Понедельник',
    2: 'Вторник',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота',
    7: 'Воскресенье'
}

if (num > 0 && num < 8) {
    if (Number.isInteger(+num)) {
        alert('Сегодня ' + weekday[`${num}`])
    } else {
        alert('Данные введены неверно. Попробуйте снова!')
        document.location.reload()
    }
} else {
    alert('Данные введены неверно. Попробуйте снова!')
    document.location.reload()
}
*/

// Задача №5 -------------------------------------------------------------------------

/*
const str = prompt('Введите преложения: ')

const arrayMaker = (str) => {
    str = str.split('.')
    str.pop()
    for (let index in str) {
        str[index] = str[index].trim().replace(' ', ', ')
    }
    str = str.join('. ') + '.'
    console.log(str)
}

arrayMaker(str)
*/

// Задача №6 -------------------------------------------------------------------------

/*
const name = prompt('Введите имя: ')
const data = new Date()
const hours = data.getHours()

if (hours >= 0 && hours <= 5) {
    alert(`Доброй ночи, ${name}`)
} else if (hours >= 6 && hours <= 11) {
    alert(`Доброе утра, ${name}`)
} else if (hours >= 12 && hours <= 17) {
    alert(`Доброго дня, ${name}`)
} else {
    alert(`Доброго вечера, ${name}`)
}
*/

// Задача №7-------------------------------------------------------------------------

/*
const num = 100

for (let i = 1; i <= num; ++i) {
    if (i >= 1 && i <= 17) {
        console.log(`${i} - ребёнок`)
    } else if (i >= 18 && i <= 30) {
        console.log(`${i} - молодой`)
    } else if (i >= 30 && i <= 55) {
        console.log(`${i} - зрелый`)
    } else if (i >= 55) {
        console.log(`${i} - старый`)
    }
}
*/

// Задача №8-------------------------------------------------------------------------

/*
const name = prompt('Введите своё имя: ')
const age = prompt('Введите свой возраст: ')
const pol = prompt('Введите свой пол(М/Ж): ')

const func2 = (i, pol) => {
    if (i >= 1 && i <= 17) {
        return 'ребёнок'
    } else if (i >= 18 && i <= 30) {
        if (pol == 'М' || pol == 'м') {
            return 'молодой'
        } else if (pol == 'Ж' || pol == 'ж') {
            return 'молодая'
        }
    } else if (i >= 30 && i <= 55) {
        if (pol == 'М' || pol == 'м') {
            return 'зрелый'
        } else if (pol == 'Ж' || pol == 'ж') {
            return 'зрелая'
        }
    } else if (i >= 55) {
        if (pol == 'М' || pol == 'м') {
            return 'старый'
        } else if (pol == 'Ж' || pol == 'ж') {
            return 'старая'
        }
    }
}

const func = (name, age, pol) => {
    const svejest = func2(age, pol)
    if (pol == 'М' || pol == 'м') {
        alert(`${name} имеет возраст ${age} и он ${svejest}.`)
    } else if (pol == 'Ж' || pol == 'ж') {
        alert(`${name} имеет возраст ${age} и она ${svejest}.`)
    }
}

func(name, age, pol)
*/

//--------------------------------------Массивы------------------------------------------

// Задача №1-----------------------------------------------------------------------------
/*
Сделай функцию, которая принимает массив любых целых чисел, которая возращает истинну,
если все элементы четные, если бы хотя бы один элемент не четный, то false.
*/

/*
const massiv = [2, 4, 66, 8888]

const metka = false

const func = (array, metka) => {
    for (item in array) {
        if (array[item] % 2 === 0) {
            metka = true
        } else {
            metka = false
            break
        }
    }
    return metka
}

console.log(func(massiv, metka))

*/

// Задача №2-----------------------------------------------------------------------------
/*
Сделай функцию, которая принимает массив любых целых чисел, которая возращает новый массив,
где все элементы кратны пяти. ([1,2,5,12,15,21] вернет [5,15])
*/

/*
const massiv = [2, 5, 55, 8888, 123, 125, 42353, 435, 345236]

const func = (array) => {
    const array2 = []
    for (item in array) {
        if (array[item] % 5 === 0) {
            array2[array2.length] = array[item]
        } else {
            continue
        }
    }
    return array2
}

console.log(func(massiv))
*/

// Задача №3-----------------------------------------------------------------------------
/*
Написать функцию, которая принимает массив чисел, например [1,2,3,4,5] и функция возращает
среднее арифметическое, (округлить результат до десятых)
*/

/*
const massiv = [1.43, 2.345, 3.345, 4, 5, 6, 7, 8]

const func = (array) => {
    let sum = 0
    for (index in array) {
        sum += array[index]
    }
    sum = sum / array.length
    return sum.toFixed(1)
}

console.log(func(massiv))
*/

// Задача №4-----------------------------------------------------------------------------
/*
Написать функцию, которая принимает массив чисел, например [1,2,3,4,5], и переносит первый элемент
массива в конец (например можно засунуть первый элемент в конец, затем удалить первый элемент),
попробуй несколькими способами сделать, если догадаешься
*/

/*
const massiv = [1, 2, 3, 4, 5, 6, 7, 8]

const func = (array) => {
    const firstItem = array[0]
    array.push(firstItem)
    array.shift()
    console.log(array)
}

const func2 = (array) => {
    const firstItem = array[0]
    array[array.length] = firstItem
    array.shift()
    console.log(array)
}

func(massiv)
func2(massiv)
*/

// Задача №5-----------------------------------------------------------------------------
/*
Написать функцию, которая принимает массив сотрудников, каждый сотрудник имеет
имя и возраст ([{name: 'Иван', age: 23},...]) и возвращает массив, где каждый
элемент представляет из себя строку "Имя: Иван, возраст: 23".
*/

/*
const staff = [
    { name: 'Максим', age: 21 },
    { name: 'Евгений', age: 34 },
    { name: 'Алла', age: 18 },
    { name: 'Елена', age: 45 },
    { name: 'Аркадий', age: 31 },
]

const information = (array) => {
    const info = []
    for (index in array) {
        info[info.length] = `Имя: ${array[index].name}, возраст: ${array[index].age}`
    }
    return info
}

console.log(information(staff))
*/

//--------------------------------------Объекты------------------------------------------

// Задача №1-----------------------------------------------------------------------------
/*
У нас есть объект, в котором хранятся зарплаты нашей команды:
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
Если объект salaries пуст, то результат должен быть 0.
*/

/*
let selaries = {
    Maxim: 100,
    Evgeniy: 160,
    Andrey: 130,
    Artem: 110
}

let sum = 0

for (index in selaries) {
    console.log(selaries[index])
    sum += selaries[index]
}
console.log(sum)
*/

// Задача №2-----------------------------------------------------------------------------
/*
Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

Например:
// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
*/
/*
let menu = {
    width: 200,
    height: 300,
    title: "My menu",
    isProgrammer: true,
    fontSize: 14
}

const func = (menu) => {
    for (key in menu) {
        if (typeof menu[key] === 'number') {
            menu[key] = menu[key] * 2
            console.log(menu[key])
        } else {
            continue
        }
    }
    console.log(menu)
}

func(menu)
*/

// Задача №3-----------------------------------------------------------------------------
/*
Написать объект ladder - объект, который позволяет подниматься и спускаться. Пример работы должен быть таким:
*/
/*
let ladder = {
    step: 0,
    up: function () {
        ladder.step++
    },
    down: function () {
        ladder.step--
    },
    showSteps: function () {
        alert(ladder.step)
    }
}

const up = document.querySelector('#up')
const down = document.querySelector('#down')
const show = document.querySelector('#show')
up.onclick = ladder.up
down.onclick = ladder.down
show.onclick = ladder.showSteps
*/
// КОНСТРУКТОР
/*
const num = 5

const myApp = {}

myApp.events = {
    isProgrammer: true,
    func: function (number) {
        return number *= 2
    }
}

const person = function (name) {
    console.log(`Меня зовут ${name}`)
}
const person1 = new person('Максим')
const person2 = new person('Женя')
*/

//--------------------------------------Работа с DOM------------------------------------------

// Задача №1----------------------------------------------------------------------------------
/*
Вывести кнопку с текстом "Привет", при нажатии на неё выводим alert c текстом "Привет Мир!"
*/
/*
const classBody = document.querySelector('#body')
const buttonTag = document.createElement('button')
const alertHello = () => {
    alert('Привет Мир !')
}
buttonTag.textContent = 'Привет'

classBody.appendChild(buttonTag)

buttonTag.onclick = alertHello
*/

// Задача №2----------------------------------------------------------------------------------
/*
Выводим кнопку с текстом "Заполнить" и незаполненный инпут, при клике на кнопку, заполняем
инпут текстом "test@email.ru"
*/
/*
const classBody = document.querySelector('#body')
const inputButton = document.createElement('input')
const textInput = () => {
    inputButton.value = "test@email.ru"
}

inputButton.type = "button"
inputButton.value = "Заполнить"
classBody.appendChild(inputButton)

inputButton.onclick = textInput

console.log(inputButton)
*/
// Задача №3----------------------------------------------------------------------------------
/*
Выводим кнопку и инпут, в инпуте можно ввести любой и текст и при нажатии на кнопку,
выводится алерт с текстом "Вы ввели 'текст инпута'" или "Вы ничего не ввели в поле".
*/
/*
const func = () => {
    const item = inputTag.value
    if (item === '') {
        alert(`Вы ничего не ввели`)
    } else {
        alert(`Вы ввели: ${item}`)
    }
}

const classBody = document.querySelector('#body')
const buttonTag = document.createElement('input')
buttonTag.type = 'button'
buttonTag.value = 'КНОПКА'
const inputTag = document.createElement('input')
inputTag.type = 'text'
classBody.appendChild(inputTag)
classBody.appendChild(buttonTag)

buttonTag.onclick = func
*/

// Задача №4----------------------------------------------------------------------------------
/*
Выводим кнопку с текстом "Поменять" и два инпута, при клике на кнопку инпуты меняются
своим введеным текстом
*/
/*
const func = () => {
    let or = 0
    or = inputTag1.value
    inputTag1.value = inputTag2.value
    inputTag2.value = or
}

const classBody = document.querySelector('#body')
const buttonTag = document.createElement('input')
buttonTag.type = 'button'
buttonTag.value = 'Кнопка'
const inputTag1 = document.createElement('input')
inputTag1.type = 'text'
const inputTag2 = document.createElement('input')
inputTag2.type = 'text'

classBody.appendChild(inputTag1)
classBody.appendChild(inputTag2)
classBody.appendChild(buttonTag)

buttonTag.onclick = func
*/

// Задача №5----------------------------------------------------------------------------------
/*
Выводим две кнопки "заблокировать" и "разблокировать" и инпут. Одна из них блокирует
инпут с помощью атрибута disabled, а другая разблокирует
*/
/*
const func1 = () => {
    inputTag.setAttribute('disabled', 'disabled')
}
const func2 = () => {
    inputTag.removeAttribute('disabled')
}

const classBody = document.querySelector('#body')
const buttonTag1 = document.createElement('input')
buttonTag1.type = 'button'
buttonTag1.value = 'Заблокировать'
const buttonTag2 = document.createElement('input')
buttonTag2.type = 'button'
buttonTag2.value = 'Разблокировать'
const inputTag = document.createElement('input')
inputTag.type = 'text'

classBody.appendChild(buttonTag1)
classBody.appendChild(inputTag)
classBody.appendChild(buttonTag2)

buttonTag1.onclick = func1
buttonTag2.onclick = func2
*/

// Задача №6----------------------------------------------------------------------------------
/*
Вывести любой квадрат и кнопку "скрыть квадрат". Когда мы нажимаем на скрыть,
квадрат исчезает и текст кнопки меняется на "показать квадрат" и так можно кликать
сколько угодно раз.
*/
/*
const body = document.querySelector('#body')
const cube = document.createElement('div')
const button = document.createElement('button')
button.textContent = 'скрыть квадрат'
cube.style.width = '50px'
cube.style.height = '50px'
cube.style.backgroundColor = 'blue'
body.style.display = 'flex'
body.style.justifyContent = 'center'

body.appendChild(button)
body.appendChild(cube)

const func = () => {
    cube.classList.toggle('block')
    if (button.textContent === 'скрыть квадрат') {
        button.textContent = 'показать квадрат'
    } else {
        button.textContent = 'скрыть квадрат'
    }
}

button.onclick = func
*/

// Задача №6----------------------------------------------------------------------------------
/*
Выводим красный квадрат, при наведении на него он становиться зеленым, а когда
уводим курсор от него, обратно красным.
*/
/*
const body = document.querySelector('#body')
const cube = document.createElement('div')
cube.classList.add('hover')
cube.style.width = '50px'
cube.style.height = '50px'
cube.style.border = '1px solid #000'
cube.style.backgroundColor = 'red'
cube.style.marginRight = '5px'
const cube2 = document.createElement('div')
cube2.classList.add('hover2')
cube2.style.width = '50px'
cube2.style.height = '50px'
cube2.style.border = '1px solid #000'
cube2.style.backgroundColor = 'black'
body.style.display = 'flex'
body.style.justifyContent = 'center'
body.appendChild(cube)
body.appendChild(cube2)

cube.setAttribute("onmouseover", "this.style.backgroundColor = 'green'")
cube.setAttribute("onmouseout", "this.style.backgroundColor = 'red'")
//cube.setAttribute("onmouseover", "document.querySelector('.hover2').style.backgroundColor = 'green'")
//cube.setAttribute("onmouseout", "document.querySelector('.hover2').style.backgroundColor = 'red'")
*/

// Задача №7----------------------------------------------------------------------------------
/*
Вывести 4 красных квадрата, при клике на любой, он становиться зеленым, при этом если есть уже зеленый
квадрат, то он становиться обратно красным и так можно кликать на любой квадрат, он становиться
зеленым, а старый зеленый квадрат обратно крассным и тд. (Сделать задачу так, чтобы можно было
добавить ещё хоть 100 квадратов при этом скрипт не надо менять).
*/
/*
const body = document.querySelector('#body')
const cube1 = document.createElement('div')
const cube2 = document.createElement('div')
const cube3 = document.createElement('div')
const cube4 = document.createElement('div')
const cube5 = document.createElement('div')
const cube6 = document.createElement('div')
const cube7 = document.createElement('div')
const cube8 = document.createElement('div')
body.appendChild(cube1)
body.appendChild(cube2)
body.appendChild(cube3)
body.appendChild(cube4)
body.appendChild(cube5)
body.appendChild(cube6)
body.appendChild(cube7)
body.appendChild(cube8)
body.style.display = 'flex'
body.style.justifyContent = 'center'
const allDivs = document.querySelectorAll('div#body > div')
for (i = 0; i < allDivs.length; i++) {
    allDivs[i].style.width = '50px'
    allDivs[i].style.height = '50px'
    allDivs[i].style.border = '1px solid #000'
    allDivs[i].style.backgroundColor = 'red'
    allDivs[i].style.marginRight = '5px'
}
const func = () => {
    for (i = 0; i < allDivs.length; i++) {
        if (allDivs[i].style.backgroundColor === 'green') {
            return allDivs[i]
        } else {
            continue
        }
    }
    return false
}
for (i = 0; i < allDivs.length; i++) {
    allDivs[i].onclick = function () {
        if (func() === false) {

        } else {
            func().style.backgroundColor = 'red'
        }
        this.style.backgroundColor = 'green'
    }
}
*/


// Задача №8----------------------------------------------------------------------------------
/*
Реализовать калькулятор. Выводим 10 кнопок цифр от 0 до 10. Кнопки: умножить, поделить,
сложить, вычесть, вычислить. При нажатии на кнопки в любом порядке выводиться в
отдельном блоке строка (5-4+3*2...) и при нажатии на кнопку посчитать, заменяем
в блоке данную строку на результат её вычисления, при этом можно потом дальше
вычислять с уже этим вычеслением.
*/
/*
const body = document.querySelector('#body')
const number0 = document.createElement('button')
number0.classList.add('metka')
number0.textContent = '0'
const number1 = document.createElement('button')
number1.classList.add('metka')
number1.textContent = '1'
const number2 = document.createElement('button')
number2.classList.add('metka')
number2.textContent = '2'
const number3 = document.createElement('button')
number3.classList.add('metka')
number3.textContent = '3'
const number4 = document.createElement('button')
number4.classList.add('metka')
number4.textContent = '4'
const number5 = document.createElement('button')
number5.classList.add('metka')
number5.textContent = '5'
const number6 = document.createElement('button')
number6.classList.add('metka')
number6.textContent = '6'
const number7 = document.createElement('button')
number7.classList.add('metka')
number7.textContent = '7'
const number8 = document.createElement('button')
number8.classList.add('metka')
number8.textContent = '8'
const number9 = document.createElement('button')
number9.classList.add('metka')
number9.textContent = '9'
const plus = document.createElement('button')
plus.classList.add('metka')
plus.textContent = '+'
const minus = document.createElement('button')
minus.classList.add('metka')
minus.textContent = '-'
const multi = document.createElement('button')
multi.classList.add('metka')
multi.textContent = '*'
const division = document.createElement('button')
division.classList.add('metka')
division.textContent = '/'
const calcul = document.createElement('button')
calcul.textContent = 'Вычислить'
const textArea = document.createElement('input')
textArea.type = 'text'
const refresh = document.createElement('button')
refresh.textContent = 'Обновить'

body.appendChild(number0)
body.appendChild(number1)
body.appendChild(number2)
body.appendChild(number3)
body.appendChild(number4)
body.appendChild(number5)
body.appendChild(number6)
body.appendChild(number7)
body.appendChild(number8)
body.appendChild(number9)
body.appendChild(plus)
body.appendChild(minus)
body.appendChild(multi)
body.appendChild(division)
body.appendChild(calcul)
body.appendChild(textArea)
body.appendChild(refresh)

const metka = document.querySelectorAll('.metka')
const metka2 = document.querySelectorAll('#body')

for (i = 0; i < metka.length; i++) {
    metka[i].onclick = function () {
        textArea.value += this.textContent
    }

}
calcul.onclick = () => {
    textArea.value = eval(textArea.value)
}
refresh.onclick = function () {
    textArea.value = ''
}
*/
/*
const array = [1, 2, 3, 5, 6, 4325, 32, 345, 435]
Array.prototype.pow = function (n) {
    return this.map(function (i) {
        return Math.pow(i, n)
    })
}
console.log(array.pow(2))
*/
/*
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Все идет по плану!')
    }, 2000)
})
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Все идет по плану!')
    }, 3000)
})
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Все идет по плану!')
    }, 4000)
})

promise1
    .then((data) => {
        console.log(`Data: `, data)
        return promise2
    })
    .then((data) => {
        console.log(`Data: `, data)
        return promise3
    })
    .then((data) => {
        console.log(`Data: `, data)
    })
    .catch((error) => {
        console.log(`Error: `, error)
    })

Promise.all([promise1, promise2, promise3])
    .then((allData) => console.log(allData[0], allData[1], allData[2]))
    .catch((error) => console.log(error))

*/