/*
function loadScript(src, callback) {
    let script = document.createElement('script')
    script.src = src
    document.body.append(script)
    script.onload = () => callback(script)
}
loadScript('test.js', (script) => {
    console.log(`Скрипт ${script.src} загрузился!`)
    test()
})
*/
/*
console.log('Выполняем запрос на сервер...')

setTimeout(() => {
    console.log('Идет подготовка данных...')
    const person = {
        name: 'Максим',
        age: '21',
        height: '185',
    }
    setTimeout(() => {
        person.russian = true
        console.log('Данные получены: ', person)
    }, 2000)
}, 2000)
*/

// Promise ----------------------------------------------------------------->
/*
let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits'
const firstPromise = new Promise((resolve, reject) => {
    let data = fetch(url)
    resolve(data)
}).then((data) => {
    console.log('Данные полученны:', data)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true
            resolve(data)
        }, 2000)
    })
}).then(clientData => {
    console.log('Данные измененны:', clientData)
    return new Promise((resolve, reject) => {
        let endData = clientData.json()
        resolve(endData)
    })
}).then(endData => {
    console.log('Данные переведены в формат .JSON:', endData)
}).catch(err => {
    console.log('Error: ', err)
}).finally(() => console.log('Finally!'))
*/
// Object.create ----------------------------------------------------------------->
/*
const person = Object.create({}, {
    name: {
        value: 'Maxim',
        enumerable: true,
        writable: true,
        configurable: true
    },
    birthYear: {
        value: 1999,
        enumerable: false,
        writable: false,
        configurable: false
    },
    age: {
        get() {
            return new Date().getFullYear() - this.birthYear
        },
        set(value) {

        }
    }
})
console.log(person)

for (key in person) {
    console.log(key, person[key])
}
*/

//////////////////////////////////////////////////////////////////////////

const delay = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
}

const url = 'https://jsonplaceholder.typicode.com/todos'
/*
function fetchTodos() {
    console.log('Fetch todo started...')
    return delay(2000)
        .then(() => fetch(url))
        .then(response => response.json())
}
fetchTodos()
    .then(data => {
        console.log(data)
    })
    .catch(err => console.log(err))
*/
/*
async function fetchAsyncTodos() {
    console.log('Fetch todo started...')
    try {
        await delay(2000)
        const response = await fetch(url)
        const data = await response.json()
        console.log('Data: ', data)
    } catch (e) {
        console.error(e)
    } finally {
        console.log('Finally!')
    }

}
fetchAsyncTodos()
*/
//////////////////////////////////////////////////////////////////////////
/*
const requestURL = 'https://jsonplaceholder.typicode.com/users'
const body = {
    name: 'Maxim',
    age: 21
}
*/
/*
function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(method, url)
        xhr.responseType = 'json'
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else {
                resolve(xhr.response)
            }
        }
        xhr.onerror = () => {
            reject(xhr.response)
        }
        xhr.send(JSON.stringify(body))
    })
}
*/
/*
function sendRequest(method, url, body = null) {
    const headers = {
        'Content-Type': 'application/json'
    }
    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    }).then(response => {
        if (response.ok) {
            return response.json()
        }
        return response.json().then(err => {
            const e = new Error('Что то пошло не так!')
        })
    })
}
function sendRequest(method, url, body = null) {
    const headers = {
        'Content-Type': 'application/json'
    }
    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    }).then(response => {
            if (response.ok) {
                return response.json()
            }
        })
}
*/
/*
sendRequest('GET', requestURL)
    .then(data => console.log(data))
    .catch(err => console.log(err))

sendRequest('POST', requestURL, body)
    .then(data => console.log(data))
    .catch(err => console.log(err))
*/

const urlRequest = 'https://jsonplaceholder.typicode.com/todos'

const bodyRequest = {
    name: 'Maxim',
    age: 21
}

function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(method, url)
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else {
                resolve(JSON.parse(xhr.response))
            }
        }
        xhr.send(JSON.stringify(body))
    })
}
function sendRequestFetch(method, url, body = null) {
    const headers = {
        'Content-Type': 'application/json'
    }
    return fetch(url, {
        method: method,
        headers: headers,
        body: JSON.stringify(body)
    }).then(response => {
        if (response.ok) {
            return response.json()
        }
    })
}

// 1. Создаём новый XMLHttpRequest-объект
let xhr = new XMLHttpRequest();

// 2. Настраиваем его: GET-запрос по URL /article/.../load
xhr.open('GET', 'data.json');

// 3. Отсылаем запрос
xhr.send();

// 4. Этот код сработает после того, как мы получим ответ сервера
xhr.onload = function () {
    if (xhr.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
        console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
    } else { // если всё прошло гладко, выводим результат
        console.log(`Готово, получили ${xhr.response.length} байт`); // response -- это ответ сервера
        console.log(JSON.parse(xhr.response))
    }
};

xhr.onprogress = function (event) {
    if (event.lengthComputable) {
        console.log(`Получено ${event.loaded} из ${event.total} байт`);
    } else {
        console.log(`Получено ${event.loaded} байт`); // если в ответе нет заголовка Content-Length
    }

};

xhr.onerror = function () {
    console.log("Запрос не удался");
};
/*
function sendRequestFetch(method, url, body = null) {
    return fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
        })
}
*/
/*
sendRequest('GET', urlRequest)
    .then(data => console.log(data))
    .catch(err => console.log(err))
*/
/*
sendRequest('POST', urlRequest, bodyRequest)
    .then(data => console.log(data))
    .catch(err => console.log(err))
*/
sendRequestFetch('POST', urlRequest, bodyRequest)
    .then(data => console.log(data))
    .catch(err => console.log(err))

//////////////////////////////////////////////////////////////////////////
/*
const ball = document.querySelector('.circle')
const button = document.querySelector('.button_ball')
function ballSizing(x, y, radius) {
    ball.style.width = 0
    ball.style.height = 0
    ball.style.top = y + 'px'
    ball.style.left = x + 'px'
    return new Promise(resolve => {
        setTimeout(() => {
            ball.style.width = radius * 2 + 'px'
            ball.style.height = radius * 2 + 'px'

            ball.addEventListener('transitionend', function handler() {
                ball.removeEventListener('transitionend', handler)
                resolve(ball)
            })
        },
            0)
    })
}
button.addEventListener('click', () => {
    button.classList.add('animated')
    button.style.backgroundColor = 'red'
    ballSizing(150, 150, 100).then(div => {
        div.classList.add('ball_hello')
        const p = document.createElement('p')
        p.innerHTML = 'Hello, World'
        div.append(p)
    })
})
*/