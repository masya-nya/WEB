const
    canvas = document.querySelector('#canvas'),
    ctx = canvas.getContext('2d')

canvas.width = document.documentElement.clientWidth - canvas.clientLeft * 2
canvas.height = document.documentElement.clientHeight * 9 / 10

/// CODE
ctx.fillStyle = 'white'
ctx.fillRect(0, 0, canvas.width, canvas.height)
const info = document.querySelector('.info')
const color = document.querySelector('#settings-color')
const size = document.querySelector('#settings-size')
const refresh = document.querySelector('#settings-refresh')
const eraser = document.querySelector('#settings-eraser')
const tools = document.querySelector('#settings-tools')
const figureDisabled = document.querySelectorAll('.figure-disabled')
const figureAll = document.querySelectorAll('.settings-figure-all')
const figure = document.querySelector('#settings-figure')
let array = new Array

const takeColor = () => {
    return color.value
}
const takeSize = () => {
    return size.value
}

const componentToHex = (i) => {
    return i.toString(16)
}

const pipetteFunction = (event) => {
    let pipetteColor = `#${componentToHex(ctx.getImageData(event.pageX, event.pageY, 1, 1).data[0])}${componentToHex(ctx.getImageData(event.pageX, event.pageY, 1, 1).data[1])}${componentToHex(ctx.getImageData(event.pageX, event.pageY, 1, 1).data[2])}`
    color.value = pipetteColor
}

eraser.addEventListener('click', () => {
    eraser.classList.toggle('input-active')
    if (eraser.classList.contains('input-active')) {
        canvas.style.cursor = "url('images/eraser.png'), auto"
        size.value = 10
    } else {
        canvas.style.cursor = `url('images/${tools.value}.png'), auto`
    }
})

tools.addEventListener('change', () => {
    if (tools.value === 'pensil') {
        size.value = 2
        if (array.indexOf('painting') === -1) {
            canvas.removeEventListener('click', pipetteFunction)
            canvas.removeEventListener('pointerdown', figurePainting)
            canvas.removeEventListener('pointerdown', customPainting)
            canvas.addEventListener('pointerdown', painting)
        }
        if (eraser.classList.contains('input-active')) {
            eraser.classList.toggle('input-active')
        }
        canvas.style.cursor = "url('images/pensil.png'), auto"

        for (item of figureAll) {
            item.style.display = 'none'
        }
    } else if (tools.value === 'brush') {
        size.value = 10
        if (array.indexOf('painting') === -1) {
            canvas.removeEventListener('pointerdown', painting)
            canvas.removeEventListener('pointerdown', figurePainting)
            canvas.removeEventListener('pointerdown', customPainting)
            canvas.addEventListener('pointerdown', painting)
        }
        if (eraser.classList.contains('input-active')) {
            eraser.classList.toggle('input-active')
        }
        canvas.style.cursor = "url('images/brush.png'), auto"

        for (item of figureAll) {
            item.style.display = 'none'
        }
    } else if (tools.value === 'pipette') {
        canvas.removeEventListener('pointerdown', painting)
        canvas.removeEventListener('pointerdown', figurePainting)
        canvas.removeEventListener('pointerdown', customPainting)
        canvas.addEventListener('click', pipetteFunction)
        if (!(array.indexOf('painting') === -1)) {
            array.splice(array.indexOf('painting'), 1)
        }
        if (eraser.classList.contains('input-active')) {
            eraser.classList.toggle('input-active')
        }
        canvas.style.cursor = "url('images/pipette.png'), auto"

        for (item of figureAll) {
            item.style.display = 'none'
        }
    } else if (tools.value === 'figure') {
        size.value = 2
        canvas.removeEventListener('pointerdown', painting)
        canvas.removeEventListener('click', pipetteFunction)
        canvas.removeEventListener('pointerdown', customPainting)
        canvas.addEventListener('pointerdown', figurePainting)
        if (!(array.indexOf('painting') === -1)) {
            array.splice(array.indexOf('painting'), 1)
        }
        if (eraser.classList.contains('input-active')) {
            eraser.classList.toggle('input-active')
        }
        canvas.style.cursor = "auto"

        for (item of figureAll) {
            item.style.display = 'inline-block'
        }
    } else if (tools.value === 'custom') {
        size.value = 10
        canvas.removeEventListener('pointerdown', painting)
        canvas.removeEventListener('click', pipetteFunction)
        canvas.removeEventListener('pointerdown', figurePainting)
        canvas.addEventListener('pointerdown', customPainting)
        if (!(array.indexOf('painting') === -1)) {
            array.splice(array.indexOf('painting'), 1)
        }
        if (eraser.classList.contains('input-active')) {
            eraser.classList.toggle('input-active')
        }
        canvas.style.cursor = "url('images/flower_mini.png'), auto"

        for (item of figureAll) {
            item.style.display = 'none'
        }
    } else if (tools.value === 'pong') {
        size.value = 10
        canvas.removeEventListener('pointerdown', painting)
        canvas.removeEventListener('click', pipetteFunction)
        canvas.removeEventListener('pointerdown', figurePainting)
        canvas.removeEventListener('pointerdown', customPainting)
        canvas.addEventListener('click', pong)
        if (!(array.indexOf('painting') === -1)) {
            array.splice(array.indexOf('painting'), 1)
        }
        if (eraser.classList.contains('input-active')) {
            eraser.classList.toggle('input-active')
        }
        canvas.style.cursor = "auto"

        for (item of figureAll) {
            item.style.display = 'none'
        }
    }
})

refresh.addEventListener('click', () => {
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
})

const pong = () => {
    const grid = 15
    const paddleHeight = grid * 5
    const maxPaddleY = canvas.height - grid - paddleHeight
    let paddleSpeed = 6
    let ballSpeed = 5

    const leftPaddle = {
        x: grid * 2,
        y: canvas.height / 2 - paddleHeight / 2,
        width: grid,
        height: paddleHeight,
        dy: 0
    }
    const rightPaddle = {
        x: canvas.width - grid * 3,
        y: canvas.height / 2 - paddleHeight / 2,
        width: grid,
        height: paddleHeight,
        dy: 0
    }
    const ball = {
        x: canvas.width / 2,
        y: canvas.height / 2,
        width: grid,
        height: grid,
        resetting: false,
        dx: ballSpeed,
        dx: -ballSpeed
    }
    const collides = () => {
        return obj1.x < obj2.x + obj2.width &&
            obj1.x + obj1.width > obj2.x &&
            obj1.y < obj2.y + obj2.height &&
            obj1.y + obj1.height > obj2.y
    }
    function loop() {
        requestAnimationFrame(loop)
        context.clearRect(0, 0, canvas.width, canvas.height)

        leftPaddle.y += leftPaddle.dy
        rightPaddle.y += rightPaddle.dy
        if (leftPaddle.y < grid) {
            leftPaddle.y = grid
        } else if (leftPaddle.y > maxPaddleY) {
            leftPaddle.y = maxPaddleY
        }
        if (rightPaddle.y < grid) {
            rightPaddle.y = grid
        } else if (rightPaddle.y > maxPaddleY) {
            rightPaddle.y = maxPaddleY
        }
        context.fillStyle = 'white'
        context.fillRect(leftPaddle.x, leftPaddle.y, leftPaddle.width, leftPaddle.height)
        context.fillRect(rightPaddle.x, rightPaddle.y, rightPaddle.width, rightPaddle.height)
        ball.x += ball.dx
        ball.y += ball.dy
        if (ball.y < grid) {
            ball.y = grid
            ball.dy *= -1
        } else if (ball.y + grid > canvas.height - grid) {
            ball.y = canvas.height - grid * 2
            ball.dy *= -1
        }
        if ((ball.x < 0 || ball.x > canvas.width) && !ball.resetting) {
            ball.resetting = true
            setTimeout(() => {
                ball.resetting = false
                ball.x = canvas.width / 2
                ball.y = canvas.height / 2
            }, 1000)
        }
        if (collides(ball, leftPaddle)) {
            ball.dx *= -1
            ball.x = leftPaddle.x + leftPaddle.width
        } else if (collides(ball, rightPaddle)) {
            ball.dx *= -1
            ball.x = rightPaddle.x - ball.width
        }
        context.fillRect(ball.x, ball.y, ball.width, ball.height)
        context.fillStyle = 'lightgrey'
        context.fillRect(0, 0, canvas.width, grid)
        context.fillRect(0, canvas.height - grid, canvas.width, canvas.height)
        for (let i = grid; i < canvas.height - grid; i += grid * 2) {
            context.fillRect(canvas.width / 2 - grid / 2, i, grid, grid)
        }
        document.addEventListener('keydown', function (e) {
            // Если нажата клавиша вверх, 
            if (e.code === 'ArrowUp') {
                // то двигаем правую платформу вверх 
                rightPaddle.dy = -paddleSpeed;
            }
            // Если нажата клавиша вниз, 
            else if (e.code === 'ArrowDown') {
                // то двигаем правую платформу вниз 
                rightPaddle.dy = paddleSpeed;
            }
            // Если нажата клавиша W, 
            if (e.code === 'KeyW') {
                // то двигаем левую платформу вверх 
                leftPaddle.dy = -paddleSpeed;
            }
            // Если нажата клавиша S, 
            else if (e.code === 'KeyS') {
                // то двигаем левую платформу вниз 
                leftPaddle.dy = paddleSpeed;
            }
        });
        // А теперь следим за тем, когда кто-то отпустит клавишу, чтобы остановить движение платформы 
        document.addEventListener('keyup', function (e) {
            // Если это стрелка вверх или вниз, 
            if (e.code === 'ArrowUp' || e.code === 'ArrowDown') {
                // останавливаем правую платформу 
                rightPaddle.dy = 0;
            }
            // А если это W или S, 
            if (e.code === 'KeyW' || e.code === 'KeyS') {
                // останавливаем левую платформу 
                leftPaddle.dy = 0;
            }
        });
    }
    requestAnimationFrame(loop)
}

const customPainting = (event) => {
    let trueSize = takeSize()

    if (eraser.classList.contains('input-active')) {

        ctx.fillStyle = '#fff'
        ctx.strokeStyle = '#fff'
        ctx.arc(event.pageX - canvas.clientLeft, event.pageY - canvas.clientTop, trueSize / 2, 0, Math.PI * 2)
        ctx.fill()
        ctx.beginPath()
        ctx.moveTo(event.pageX - canvas.clientLeft, event.pageY - canvas.clientTop)

        const paint = (x, y, size) => {
            let trueX = x - canvas.clientLeft
            let trueY = y - canvas.clientTop

            ctx.lineWidth = size
            ctx.lineTo(trueX, trueY)
            ctx.stroke()


            ctx.beginPath()
            ctx.arc(trueX, trueY, size / 2, 0, Math.PI * 2)
            ctx.fill()

            ctx.beginPath()
            ctx.moveTo(trueX, trueY)

            info.innerHTML = `x: ${trueX}
                              y: ${trueY}`
        }

        const onMouseMove = (event) => {
            paint(event.pageX, event.pageY, trueSize)
        }

        document.addEventListener('pointermove', onMouseMove)

        document.onpointerup = function () {
            ctx.beginPath()
            document.removeEventListener('pointermove', onMouseMove)
            document.onmouseup = false
        }
    } else {
        let tX = event.pageX - canvas.clientLeft - trueSize / 2
        let tY = event.pageY - canvas.clientTop - trueSize / 2


        const img = new Image()
        img.src = 'images/flower.png'
        ctx.drawImage(img, tX, tY, trueSize, trueSize)

        const paint = (x, y, size) => {
            let trueX = x - canvas.clientLeft - size / 2
            let trueY = y - canvas.clientTop - size / 2

            ctx.drawImage(img, trueX, trueY, size, size)


            info.innerHTML = `x: ${trueX}
                              y: ${trueY}`
        }

        const onMouseMove = (event) => {
            paint(event.pageX, event.pageY, trueSize)
        }

        document.addEventListener('pointermove', onMouseMove)

        document.onpointerup = function () {
            ctx.beginPath()
            document.removeEventListener('pointermove', onMouseMove)
            document.onmouseup = false
        }
    }
}
const painting = (event) => {
    if (array.indexOf('painting') === -1) {
        array.push('painting')
    }
    let trueColor = takeColor()
    let trueSize = takeSize()

    ctx.fillStyle = trueColor
    ctx.strokeStyle = trueColor
    ctx.lineWidth = trueSize

    if (eraser.classList.contains('input-active')) {
        ctx.fillStyle = '#fff'
        ctx.strokeStyle = '#fff'
    }

    ctx.arc(event.pageX - canvas.clientLeft, event.pageY - canvas.clientTop, trueSize / 2, 0, Math.PI * 2)
    ctx.fill()
    ctx.beginPath()
    ctx.moveTo(event.pageX - canvas.clientLeft, event.pageY - canvas.clientTop)

    const paint = (x, y, size) => {
        let trueX = x - canvas.clientLeft
        let trueY = y - canvas.clientTop

        ctx.lineWidth = size
        ctx.lineTo(trueX, trueY)
        ctx.stroke()


        ctx.beginPath()
        ctx.arc(trueX, trueY, size / 2, 0, Math.PI * 2)
        ctx.fill()

        ctx.beginPath()
        ctx.moveTo(trueX, trueY)

        info.innerHTML = `x: ${trueX}
                          y: ${trueY}`
    }

    const onMouseMove = (event) => {
        paint(event.pageX, event.pageY, trueSize)
    }

    document.addEventListener('pointermove', onMouseMove)

    document.onpointerup = function () {
        ctx.beginPath()
        document.removeEventListener('pointermove', onMouseMove)
        document.onmouseup = false
    }
}
const figurePainting = (event) => {
    let trueColor = takeColor()
    let trueSize = takeSize()
    let startX = event.pageX - canvas.clientLeft
    let startY = event.pageY - canvas.clientTop
    let width
    let height
    let radius
    if (figure.value === 'rectangle') {
        const figurePaint = (x, y, sX, sY, color, size) => {
            width = x - sX - canvas.clientLeft
            height = y - sY - canvas.clientTop

            ctx.lineWidth = size

            ctx.fillStyle = 'white'
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            ctx.strokeStyle = color
            ctx.strokeRect(sX, sY, width, height)


            info.innerHTML = `x: ${x}
                                  y: ${y}`
        }

        const onMouseMove = (event) => {
            figurePaint(event.pageX, event.pageY, startX, startY, trueColor, trueSize)
        }
        document.addEventListener('pointermove', onMouseMove)
        document.onpointerup = function () {
            document.removeEventListener('pointermove', onMouseMove)
            document.onpointerup = false
        }
    } else if (figure.value === 'circle') {
        const figurePaint = (x, y, sX, sY, color, size) => {
            ctx.beginPath()
            radius = Math.trunc(Math.sqrt(Math.pow(x - sX, 2) + Math.pow(y - sY, 2))) - canvas.clientLeft - canvas.clientTop
            ctx.lineWidth = size

            ctx.fillStyle = 'white'
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            ctx.strokeStyle = color
            ctx.arc(sX, sY, radius, 0, Math.PI * 2)
            ctx.stroke()


            info.innerHTML = `x: ${x}
                              y: ${y}
                              Math.pow(x - sX): ${Math.pow(x - sX, 2)}
                              Math.pow(y - sY): ${Math.pow(y - sY, 2)}
                              radius: ${radius}`
        }

        const onMouseMove = (event) => {
            figurePaint(event.pageX, event.pageY, startX, startY, trueColor, trueSize)
        }
        document.addEventListener('pointermove', onMouseMove)
        document.onpointerup = function () {
            document.removeEventListener('pointermove', onMouseMove)
            document.onpointerup = false
        }
    }

}
canvas.addEventListener('pointerdown', painting)

document.addEventListener('keydown', (e) => {

    console.log(e.code)
})