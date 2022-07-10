// 1) Number

/*
const num = 33 // integer
const float = 22.2 // float 
const pow = 10e3
console.log(pow)

console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)

console.log('Math.pow 2^53', Math.pow(2, 53) - 1)
console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)

console.log('MAX_VALUE', Number.MAX_VALUE)
console.log('MIN_VALUE', Number.MIN_VALUE)

console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY)
console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY)

console.log(Number.NaN) // Not a Number
console.log(typeof Number.NaN)

const weird = 2 / undefined
console.log(isNaN(weird))
console.log(isNaN(42))
console.log(isFinite(Infinity))
console.log(isFinite(42))

const stringInt = '40'
const stringFloat = '40.42'
console.log(Number.parseInt(stringInt) + 2)
console.log(parseInt(stringInt) + 2)
console.log(Number(stringInt) + 2)
console.log(+stringInt + 2)

console.log(Number.parseFloat(stringFloat) + 2)
console.log(+stringFloat + 2)

console.log(0.2 + 0.4) // 0.6
console.log(parseFloat((0.4 + 0.2).toFixed(1)))
console.log(+(0.4 + 0.2).toFixed(1))

*/

// 2) BigInt

/*
console.log(typeof 900719925474099123423234n)
console.log(900719925474099123423234n - 90071992547409912342323n)

console.log(parseInt(10n) - 3)
console.log(10n - BigInt(3))
*/

// 3) Math

/*
console.log(Math.E)
console.log(Math.PI)
console.log(Math.sqrt(25))
console.log(Math.pow(5, 2)) // Степень
console.log(Math.abs(-41)) // Модуль 
console.log(Math.max(42, 34, 45, 5, 564, 4564))
console.log(Math.min(42, 34, 45, 5, 564, 4564))
console.log(Math.floor(4.9)) // Окургление в меньшую сторону
console.log(Math.ceil(4.1)) // Окургление в большую сторону
console.log(Math.random()) // Постоянно выдает новое случайное число
*/

// 5) Example

function getRandomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(getRandomBetween(10, 42))