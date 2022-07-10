// 1 Функции 

/*

// Function Declaration
function grid(name) {
    console.log('Привет, ', name)
}
//Function Expression
const grid2 = function grid2(name) {
    console.log('Hello, ', name)
}

grid('Максим')
grid2('Maxim')

*/

// 2 Анонимные функции 

/*

let counter = 0
const interval = setInterval(function () {
    if (counter === 5) {
        clearInterval(interval)
    } else {
        console.log(++counter)
    }
}, 1000)

*/

// 3 Стрелочные функции 

/*

function grid(name) {
    console.log('Привет, ', name)
}

const arrow = (name) => {
    console.log('Привет, ', name)
}

const arrow2 = (name) => console.log('Привет, ', name)

const pow2 = num => num ** 2

console.log(pow2(5))
arrow('Максим')
arrow2('Лена')

*/

// 4 Параметры по умолчанию

/*
const sum = (a = 41, b = 1) => a + b

console.log(sum(1))

function sumAll(...all) {
    console.log(all)
}

sumAll(1, 2, 3, 4, 5, 6, 7)

*/

// 5 Замыкания

function createMember(name) {
    return function (lastName) {
        console.log(name + lastName)
    }
}

const logWithLastName = createMember('Maxim')
logWithLastName(' Zudin')
logWithLastName(' Gladkiy')