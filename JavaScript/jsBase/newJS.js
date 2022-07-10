"use strict";

const $start = document.querySelector('#button');
const $field = document.querySelector('.field');
const $spanCounter = document.querySelector('#time');
const $input = document.querySelector('#input');
const $headerCounter = document.querySelector('#header-counter');
const $headerResult = document.querySelector('#header-result');
const $spanResult = document.querySelector('#result');
const $spanMisses = document.querySelector('#misses');

let score = 0;
let misses = 0;
let colors = ['006400', '00FF7F', 'DC143C', 'F08080', 'FFD700', 'BDB76B', '4B0082', '191970', '808000', 'BC8F8F', 'F4A460',];
let isGameStarted = false;

$start.addEventListener('click', startGame);
$field.addEventListener('click', handleBoxClick);
$input.addEventListener('input', () => {
    if ($input.value < 0) {
        $input.value = 1;
    }
    $spanCounter.textContent = $input.value;
    $headerResult.classList.add('hide');
    $headerCounter.classList.remove('hide');
});

function startGame() {
    score = 0;
    misses = 0;
    let time = +$input.value;
    $spanCounter.textContent = time.toFixed(1);
    isGameStarted = true;
    $field.style.backgroundColor = '#fff';
    $start.classList.add('hide');
    $headerResult.classList.add('hide');
    $headerCounter.classList.remove('hide');

    let interval = setInterval(function () {
        let time = parseFloat($spanCounter.textContent);
        if (time <= 0) {
            clearInterval(interval);
            endGame();
        } else {
            $spanCounter.textContent = (time - 0.1).toFixed(1);
        }
    }, 100);

    renderBox();
}

function renderBox() {
    $field.innerHTML = "";

    let box = document.createElement('div');
    let boxSize = getRandom(30, 60);
    let boxTop = getRandom(0, $field.clientHeight - boxSize);
    let boxLeft = getRandom(0, $field.clientWidth - boxSize);
    let color = colors[getRandom(0, 10)];

    box.style.height = box.style.width = `${boxSize}px`;
    box.style.position = 'absolute';
    box.style.backgroundColor = `#${color}`;
    box.style.top = `${boxTop}px`;
    box.style.left = `${boxLeft}px`;
    box.style.cursor = 'pointer';
    box.style.borderRadius = `${boxSize / 2}px`;
    box.setAttribute('data-box', 'true');

    $field.insertAdjacentElement('afterbegin', box);
}

function handleBoxClick(event) {
    if (!isGameStarted) {
        return;
    }
    if (event.target.dataset.box) {
        score++;
        renderBox();
    } else {
        misses++;
    }
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function endGame() {
    isGameStarted = false;
    $field.innerHTML = "";
    $field.style.backgroundColor = '#ccc';
    $start.classList.remove('hide');
    $headerResult.classList.remove('hide');
    $headerCounter.classList.add('hide');
    $spanResult.textContent = score;
    $spanMisses.textContent = score + misses;
}


let a = [11, 1, 11, 11, 2, 1, 111, 0];
let b = "The In";
let c = ['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'];
let d = 70304;
let e = 'This is a test!';

const regex = /[0-9]/g;

function expandedForm(num) {
    num = num.toString();
    let str;
    for (let i = 0; i < num.length; i++) {
        if (num[i] !== '0') {
            let r = num[i] + '0'.repeat(+num.length - i - 1);
            str ? str = `${str} + ${r}` : str = r;
        }
    }
    return str;
}