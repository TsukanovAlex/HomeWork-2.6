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
