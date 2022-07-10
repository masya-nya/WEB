"use strict";

const gallery = document.querySelector('.events__items');
const galleryPopular = document.querySelector('.events__items-popular');
const collections = document.querySelector('.sets__body');

gallery.addEventListener('mouseenter', (event) => {
    if (event.target.classList.contains('events__item')) {
        let modal = event.target.querySelector('.item-event__buy');
        let img = event.target.querySelector('.playbillImg');
        modal.style.height = img.offsetHeight + 'px';
        modal.style.display = 'block';
    }
}, true);
gallery.addEventListener('mouseleave', (event) => {
    if (event.target.classList.contains('events__item')) {
        let modal = event.target.querySelector('.item-event__buy');
        modal.style.display = 'none';
    }
}, true);
galleryPopular.addEventListener('mouseenter', (event) => {
    if (event.target.classList.contains('events__item')) {
        let modal = event.target.querySelector('.item-event__buy');
        let img = event.target.querySelector('.playbillImg');
        modal.style.height = img.offsetHeight + 'px';
        modal.style.display = 'block';
    }
}, true);
galleryPopular.addEventListener('mouseleave', (event) => {
    if (event.target.classList.contains('events__item')) {
        let modal = event.target.querySelector('.item-event__buy');
        modal.style.display = 'none';
    }
}, true);

collections.addEventListener('mouseenter', (event) => {
    if (event.target.classList.contains('sets__item')) {
        let button = event.target.querySelector('.sets__button');
        button.style.display = 'block';
    }
}, true);
collections.addEventListener('mouseleave', (event) => {
    if (event.target.classList.contains('sets__item')) {
        let button = event.target.querySelector('.sets__button');
        button.style.display = 'none';
    }
}, true);