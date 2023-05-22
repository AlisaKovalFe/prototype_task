// Условие (англ и русс)
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// Создать ф-цию суммы, которая суммирует числа, возведенные в квадрат

//Логика
// 1. Нам нужно вернуть сумму, значит воспользуемся методом reduce, который пройдет по каждому элементу, возведет его в квадрат и прибавит к результирующей

const squareSum = (numbers) => {
    return numbers.reduce((res, el) => res + el ** 2, 0)
}

console.log(squareSum([1, 2, 2]));