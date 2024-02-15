"use strict"
/*
Задача №1
Дано в html: три елементи з класом item.
При кліку на кожен з елментів додати клас active,
при повторному кліку прибрати клас 

Задача №2
Дано в css/scss: body прозорий
При повному завантаженню сторінки додати клас до body який прибирає прозорість.


Задача №3
Дано в html: header main footer
Пи наведенні курсору на header змінювати колір фону у footer.
Коли курсор йде з header повертати початковий фон для footer.

Задача №4
Дано в html: текст, елемент з класом item, текст. Так, що елемент з класом item за межами в'юпотрта.
Створити функцію яка будує інтервал який буде змінювати контент в елементі item виводячи цифру яка збільшується на одиницю: 1 2 3 ... і т.д.
Затримка між зміною числа, та до якого числа має працювати інтервал має задаватись в дата атрибутах елемента item.
Функція має запустатить коли ми доскролюємо до елементу item (його видно), і не запускатись повторно.
*/

//Задача №1 - Відповідь

document.addEventListener("click", documentAction)

const item = document.querySelector('.item')

function documentAction(e) {
   const targetElement = e.target
   if (targetElement.closest('.item')) {
		targetElement.classList.toggle('active')
   }  
   e.preventDefault()
}

//Задача №2 - Відповідь

const bodyElement = document.body
document.addEventListener('DOMContentLoaded', function domVisible() {
   bodyElement.classList.remove('invisible')
});

//Задача №3 - Відповідь

const header = document.querySelector('.header')
const footer = document.querySelector('.footer')

header.addEventListener('mouseenter',
function(e) {
   if (e.type === "mouseenter") {
      footer.style.backgroundColor = 'green'
   }
});
header.addEventListener('mouseleave',
function(e) {
   if (e.type === "mouseleave") {
      footer.style.backgroundColor = '';
   }
});

//Задача №4 - Відповідь
//це завдання робив з великою допомогою штучного інтелекту, тому був би дуже вдячний отримати у фідбеку можливо спрощений варіант виконання даного завдання, щоб зрозуміти з рештою як це можно правильно і простіше зробити. Дякую!

window.addEventListener('load', function() {
   const itemObject = document.querySelector('.item-object');

   function onScroll() {
      function isInViewport(element) {
         const rect = element.getBoundingClientRect();
         return rect.top >= 0 && rect.left >= 0 && rect.bottom <= window.innerHeight && rect.right <= window.innerWidth;
      }
      if (isInViewport(itemObject) && !itemObject.dataset.intervalStarted) {
         const start = parseInt(itemObject.dataset.start);
         const end = parseInt(itemObject.dataset.end);
         let currentValue = start;

         function updateValue() {
            itemObject.textContent = currentValue;
            currentValue++;
            if (currentValue > end) clearInterval(interval);
         }
         const interval = setInterval(updateValue, 1000);
         updateValue();
         itemObject.dataset.intervalStarted = true;
      }
   }

   window.addEventListener('scroll', onScroll);
   onScroll();
});  