let firstUserName = 'Bekbolsun';
let secondUsername = 'Bektur';
let thirdUserName = 'Alisher';
let fourthUserName = 'Elizar';

let firstUserPoint = 97;
let secondUserPoint = 89;
let thirdUserPoint = 75;
let fourthUserPoint = 90;

let firstResult = firstUserName + " - " + firstUserPoint;
let secondResult = secondUsername + " - " + secondUserPoint;
let thirdResuld = thirdUserName + " - " + thirdUserPoint;
let fourthResuld = fourthUserName + " - " + fourthUserPoint;

let result = `Экзамендин катышуучулары жана результаттары:

1. ${firstResult} баллов из 100
2. ${secondResult} баллов из 100
3. ${thirdResuld} баллов из 100
4. ${fourthResuld} баллов из 100

Экзамендин орточо баллы: 87.75 балл"`;

console.log(result);

// Экинчи тапшырма.

let number = prompt("Ведите сан: ");
const two = 2 * number;
const three = 3 * number;
const four = 4 * number;
const five = 5 * number;
const six = 6 * number;
const seven = 7 * number;
const eight = 8 * number;
const nine = 9 * number;
const ten = 10 * number;

result = `1 x ${number} = ${number}

2 x ${number} = ${two}
3 x ${number} = ${three}
4 x ${number} = ${four}
5 x ${number} = ${five}
6 x ${number} = ${six}
7 x ${number} = ${seven}
8 x ${number} = ${eight}
9 x ${number} = ${nine}
10 x ${number} = ${ten}`;

console.log(result)

// Учунчу тапшырма!!!
// alert
alert( 'Вы успешно зарегистрировались!')

// confirm
result = confirm ("При перызагрузке сайта, введенные данные на форме будут очищенны, Вы уверены что хотите перезагрузить?")
console.log(result)

// prompt
result = prompt('Введите ваши имя')
console.log(result);