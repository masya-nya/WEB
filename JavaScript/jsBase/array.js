// Массивы

const cars = ['Мазда', 'БМВ', 'Форд', 'Мерседес']
const fib = [1, 1, 2, 3, 5, 8, 13]
const people = [
    { name: 'Maxim', budget: 12345 },
    { name: 'Evgeniy', budget: 54645 },
    { name: 'Elena', budget: 32423 }
]

/*
cars.push('Рено')
console.log(cars)

cars.unshift('Волга')
console.log(cars)

const firstItem = cars.shift()
const lastItem = cars.pop()

console.log(firstItem)
console.log(lastItem)
console.log(cars)

console.log(cars.reverse())
*/

const index = people.findIndex(function (person) {
    return person.budget == 54645
})

console.log(index)

const toUppercaseCars = cars.map(car => {
    return car.toUpperCase()
})
console.log(toUppercaseCars)

const pow2Fib = fib.map(num => {
    return num ** 2
})
console.log(pow2Fib)

// Задача №1

/*
const text = 'Привет, мы изучаем JavaScript'

const reverseText = text.split('').reverse().join('')
console.log(reverseText)
*/