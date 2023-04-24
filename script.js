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