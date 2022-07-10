// 1) Переменные
/*
const firstName = 'Maxim'
const age = '21'
*/
// 2) Мутирование 

//const lastName = prompt('Введите фамилию ')
//console.log('Имя человека: ' + firstName + ', а возраст фамилия: ' + lastName)

// 3) Операторы
/*
let currentYear = 2020
const birthYear = 1999
const age = currentYear - birthYear
*/
//console.log(age)
/*
let a = 10
let b = 5
let c = 32

c += a
c -= a

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)
console.log(++currentYear)
console.log(c)
*/

// 4) Типы данных

/*
const isProgrammer = true
const name = 'Maxim'
const age = 21
let zero

console.log(typeof isProgrammer)
console.log(typeof name)
console.log(typeof age)
console.log(typeof null)
console.log(null)

*/

// 5) Приоритет операторов 

/*
const fullAge = 21
const currentYear = 2020
const birthYear = 1999

const isFullAge = currentYear - birthYear >= fullAge
console.log(isFullAge)
*/

// 6) Условные операторы 

/*
const courseStatus = 'pending' // ready, fail, pending
if (courseStatus === 'ready') {
    console.log('Курс уже готов')
} else if (courseStatus === 'pending') {
    console.log('Курс находиться в стадии разработки')
} else {
    console.log('Разработка курса прекращена')
}
*/

//const isReady = true

/*
if (isReady) {
    console.log('Все готово!')
} else {
    console.log('Все не готово!')
}
*/
// Тернарное выражение 
//isReady ? console.log('Все готово!') : console.log('Все не готово!')

// 7) Булевая логика 

//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/%D0%9B%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B

// 8) Функции 

/*
function calculateAge(year) {
    return 2020 - year
}

//const birthAge = 1999
//console.log(calculateAge(birthAge))


function logInfoAbout(name, year) {
    const age = calculateAge(year)
    if (age > 0) {
        console.log('Человек по имени ' + name + ' имееть возраст: ' + age)
    } else {
        console.log('Вообще-то это уже будущее')
    }
}

logInfoAbout('Maxim', 1999)
logInfoAbout('Maxim', 2021)
*/

// 9) Массивы 

/*
const cars = ['Мазда', 'Мерседес', 'Форд']
//const cars = new Array('Мазда', 'Мерседес', 'Форд')
console.log(cars)
console.log(cars[1])
cars[0] = 'Порш'
console.log(cars)
cars[3] = 'Мазда'
console.log(cars)
cars[cars.length] = 'Лада'
console.log(cars)
*/

// 10) Циклы 

/*
const cars = ['Мазда', 'Мерседес', 'Форд', 'Порш']

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i])
}

for (let car of cars) {
    console.log(car)
}
*/

// 11) Объекты

const person = {
    firstName: 'Maxim',
    lastName: 'Zudin',
    birthYear: 1999,
    languages: ['RU', 'EN', 'DE'],
    hasWife: false,
    greet: function () {
        console.log('greet from preson')
    }
}

console.log(person.firstName)
console.log(person['lastName'])
const key = 'birthYear'
console.log(person[key])
person.greet()