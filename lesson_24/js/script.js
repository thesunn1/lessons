"use strict"

/*Задача №1
Що потрапить в консоль?

let someVar = 0;
++someVar;

if (someVar) {
	console.log(someVar);
}

Задача №2
За допомогою циклу FOR виведіть в консоль 10 рядків:
Пункт №1
Пункт №2
і т.д.


Задача №3
Що потрапить в консоль ?
if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
	console.log('000');
}

Задача №4
Створіть функцію, яка повертає результат ділення числа a на число b з додаванням рядка "Результат ділення: "
Викличте функцію передаючі різні значення, у тому числі не передаючи зовсім.
Функція не має повертати NaN, Infinite або помилку 

Задача №5
Створіть масив даних - 5 елементів, один з яких число 10
Обробіть масив за допомогою методу перебору
Перевіряйте елемент на відповідність числу 10, та у разі відповідності, виводьте в консоль
*/

//Задача №1 - відповідь

let someVar = 4;
++someVar;

if (someVar) {
	console.log(someVar);
}

//В консоль потрапить число або число у рядку вказане у змінній "someVar" збільшене на 1. Якщо вказане число і рядок то у консоль буде виведено рядок, і число збільшене на 1. 

//Задача №2 - відповідь

let punktNumber = `Пункт №1`;
console.log(punktNumber);

for (let i = 0; i <= 10; ++i) {
	console.log(`Пункт №${i}`);
}

//Робимо цикл присвоюючи значення і = 0, та і <= 10 оскільки нам треба вивести 10 рядків, і збільшуючи і на 1 кожне коло. В консоль виводимо рядок Пункт № зі збільшеним і.

//Задача №3 - відповідь

if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
	console.log('000');
}

//У консоль не буде виведено нічого, бо запис не підпадає під дію жодного оператора, а "000" буде виведено в консоль тільки якщо хоча б один оператор спрацює.


//Задача №4 - відповідь

/*function calcDivision(a = 0, b = 0) {
	return a / b
}
function getResult(someText = `Результат ділення:`) {
	console.log(someText);
}
getResult();
calcDivision(10, 5);
getResult();
calcDivision(98, 4);
*/
function calcDivision(a = 0, b = 0) {
	let result = a / b;
	if (b === 0) {
		console.log(`Ми не можемо ділити на 0!`);
	} else {
		console.log(`Результат ділення:` + result);
	}
}

calcDivision(20, 4)
calcDivision(288, 12)
calcDivision(100, 24)
calcDivision(212.8, 7.62)
calcDivision(144, 12)
calcDivision(879, 307)
calcDivision(-9, 5)
calcDivision(-191, -110)
calcDivision(789, 36)
calcDivision(0, 15)
calcDivision(123, 321)
calcDivision(234, 98)

//З початку робимо функцію задаючи параметри за замовченням а та b. У середині функції задаємо змінну якій присвоюємо результат ділення а та b. Потім робимо 2 умови при одній з яких при діленні на 0 ми отримуємо один запис, а при правильному діленні інший.

//Задача №5 - відповідь 

let someArray = [`Стас`, true, false, 10, `7`];

someArray.forEach(value => {
	if (value === 10) {
		console.log(value);
	}
});

//З початку створюємо масив з 5 значеннями одне з яких 10. Потім ставимо до перебору умову що єдине значення котре буде виведене у консоль повинно дорівнювати 10.
//У консоль виводиться 10.  