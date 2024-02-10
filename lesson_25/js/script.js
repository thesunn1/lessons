"use strict"

/*
Задача №1
Отримати в константу елемент <body>

Задача №2
Написати функцію, яка додає в <body> список UL
з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням)

Задача №3
Додати до елементу <body> класс loaded.
Потім перевірити чи є клас loaded у елемента <body>
і, якщо є, додати стиль кольору тесту зелений.

Задача №4
Дано в html: три елементи з класом item.
Треба отримати ці елементи в константу, кожному додати клас active, 
та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".

Задача №5
Дано в html: текст, далі кнопка з класом button.
Треба прокрутити скрол сторінки до кнопки

Задача №6
Дано в html: посилання з класом link
Треба додати до посилання дата атрибут зі значенням 100
Потім отримати значення трибуту, та, якщо значення меньше 200
пофарбувати колір тексту посилання в червоний
*/

//Задача №1 - відповідь

const bodyElement = document.body;
console.log(bodyElement);

//Задача №2 - відповідь

function addListToBody(numItems = 0) {
   const bodyElement = document.querySelector('body');
   const newList = document.createElement(`ul`);

   for (let i = 1; i <= numItems; i++) {
      const li = document.createElement ('li')
      li.textContent = 'Пункт №' + i;
      newList.appendChild(li)
   }
   bodyElement.appendChild(newList);
}
addListToBody(5)

//Задача №3 - відповідь

bodyElement.classList.add ('loaded');
let newColor = "green";

if (bodyElement.classList.contains ('loaded')){
   bodyElement.style.color = newColor;
   console.log(bodyElement);
} else {
   console.log('Класу немає!')
}

//Задача №4 - відповідь

const items = document.querySelectorAll('.item')
items.forEach(item => {
   item.classList.add('active')
});
console.log(items)

let item = document.querySelector('.item')

if (item.classList.contains('active')) {
	items.forEach((item,index) => {
      item.textContent = `Елемент №${index +1}`;
   });
}

//Задача №5 - відповідь

const button = document.querySelector(`.button`)
function scrollToBlock (element) {
   element.scrollIntoView ({
      block: "start",
      inline: "nearest",
      behavior: "smooth"
   });
}
scrollToBlock(button);

//Задача №6 - відповідь

const link = document.querySelector('.link')
link.setAttribute('data-number', '100');

let number = parseFloat(link.dataset.number);
console.log(number);

if (number < 200) {
   link.style.color = 'red';
}
