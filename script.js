// Задание №1
const number = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < number.length; i++) {
if (number[i] === 10) { 
//По этому условию есть недопонимание.Цифра 10 не выводится в консоль. 
// А условие (number[i] < 1) выводит 10, но делает условие ограниченным только для данного массива.Прошу дать пояснение. 
    break
}
console.log(number[i]);
}

 // Задание № 2

 const number = [1, 5, 4, 10, 0, 3];
 console.log(number.indexOf(4));

// Задание № 3

const number = [1, 3, 5, 10, 20];
console.log(number.join(' '));

// Задание № 4 

let arr = [];

for (let i = 0; i < 3; i++) {
let nestedArr = [];
for (let j = 0; j < 3; j++) {
nestedArr.push(1);
}
arr.push(nestedArr);
}
console.log(arr);

// Задание № 5

let arr = [1, 1, 1];
arr.push(2, 2, 2);
console.log(arr);

// Задание №6

const arr = [9, 8, 7, 'a', 6, 5];
arr.sort().pop()
arr.reverse();//если требуется вернуть в исходной последовательности.

console.log(arr);

// Задание № 7 

const arr = [9, 8, 7, 6, 5];
let userNumb = +prompt('Введите число от 1 до 10');
alert ((arr.includes(userNumb)) ? 'Данное число входит в массив' : (isNaN(userNumb)) ? 'Введенное значение не является числом' : 'Данное число в массив не входит');

// Задание № 8

let letters = ('abcdef');
console.log(letters.split('').reverse().join(''));

 // Задание № 9

 const arr = [[1, 2, 3,], [4, 5, 6]];

 console.log(arr.flat());