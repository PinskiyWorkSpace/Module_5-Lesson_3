'use strict';

const div = document.querySelector('.wrapper__list');
const ul = document.createElement('ul');

ul.classList.add('list');

div.append(ul);


const createElement = (text) => {
    const li = document.createElement('li');
    li.textContent = text;
    ul.append(li);
    li.classList.add('list__item')
    return li;
};

const deliteElement = () => {
    ul.lastChild.remove();
};

const clear = () => {
    ul.textContent = '';
};

const start = () => {
    const text = prompt('');

    if (text === 'exit' || text === null) {
        return;
    }else if ( text === 'del') {
        deliteElement();
        start();
    }else if (!text.trim()) {
        start();
    }else {
        createElement(text);
        start();
    }
};

start();
