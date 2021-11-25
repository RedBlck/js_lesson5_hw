// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let rectangleS = (a, b) => a * b;
// console.log(rectangleS(5, 8));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let circleS = (r) => Math.PI * Math.pow(r, 2);
// console.log(circleS(5));


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let cylinderS = (h, r) => 2 * Math.PI * r * h;
// console.log(cylinderS(2, 2));


// - створити функцію яка приймає масив та виводить кожен його елемент
// let arrFn = (arr) => {
//     for (const arrElement of arr) {
//         console.log(arrElement);
//     }
// }
// arrFn([2, 4, 8]);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let paragraf = (text) => document.write(`<p>${text}</p>`);
// paragraf('red and black');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let ulLiFn = (nameLi) => {
//     document.write('<ul>');
//     document.write(`<li>${nameLi}</li>`);
//     document.write(`<li>${nameLi}</li>`);
//     document.write(`<li>${nameLi}</li>`);
//     document.write('</ul>');
// }
// ulLiFn('RedBlack');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let ulLiFn = (textLi, limit) => {
//     document.write('<ul>');
//     for (let i = 0; i < limit; i++) {
//         document.write(`<li>${textLi}</li>`);
//     }
//     document.write('</ul>');
// }
// ulLiFn('RedBlack', 5);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arrUlFn = (arr) => {
//     document.write('<ul>');
//     for (const arrElement of arr) {
//         document.write(`<li>${arrElement}</li>`);
//     }
//     document.write('</ul>');
// }
// arrUlFn([15, 'green', false, 99, 'red', true, 16, 'black', 5 < 3]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let arrObjectFn = (arr) => {
//     for (const arrElement of arr) {
//         document.write(`<div>${arrElement.id} - ${arrElement.name} - ${arrElement.age}</div>`);
//     }
// }
// arrObjectFn([
//     {id: 98589, name: 'Roman', age: 20},
//     {id: 65243, name: 'Oleg', age: 25},
//     {id: 68524, name: 'Jon', age: 34}
// ]);