const
    canvas = document.querySelector('#canvas'),
    context = canvas.getContext('2d')

canvas.width = document.documentElement.clientWidth - canvas.clientLeft * 2
canvas.height = document.documentElement.clientHeight * 9 / 10


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
const collides = (obj1, obj2) => {
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