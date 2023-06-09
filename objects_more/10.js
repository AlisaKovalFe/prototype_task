// Условие (англ и русс)
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// Дано неотриц число, нужно вернуть массив из его цифр с оратной порядке

//Логика
// 1. так как нужно вернуть что-то в обратно порядке, значит нужно применить метод reverse, а он работает на массиве. 
// 2. Значит нужно число превратить в массив. Чтобы превратить число в массив сначала его нужно сделатьы строкой
// 3. получи массив строк, преобразую каждый элемент массива в число с помощью обертки Number.
// 4. меняю порядок в итогом массиве чисел

const digitize = (n) => {
    return [...n.toString()].map((el) => Number(el)).reverse()
    //т.е. тут число в строку и с помощью спред оператора запихиваю его сразу в массив? (изначально сделал toString().split(''))
}

console.log(digitize(35231));

let first = 'a'
let second = { b: 2 }

let resul1 = { first, second }
let result2 = { ...first, ...second }
console.log(resul1);
console.log(result2);