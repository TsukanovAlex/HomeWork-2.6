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

// Задание №10

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arr.length - 1; i++) {
    console.log(arr[i] + arr[i + 1]);
};

// Задание №11

function squaring(arr) {
const arr1 = [];
for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];
     let result = elem ** 2;
       arr1.push(result);
    }
    return arr1;
}
console.log(squaring([5, 15, 25]));

Задание № 12 (Способ 1)

function getLengthWords(words) {
const arr = [];
for (let i = 0; i < words.length; i++) {
    const wordLength = words[i].length;
    arr.push(wordLength)
    } return arr;
}
let words = (['слово', '', 'слог', 'длинное предложение', 'буква']);
let wordLength = getLengthWords(words);
console.log(wordLength);

// Задание № 12 (Способ 2)

const getLengthWords = ['объект', 'массив', 'тег', 'функция'];
const arr = getLengthWords.map(function(words) {
    return words.length
})
console.log(arr);
