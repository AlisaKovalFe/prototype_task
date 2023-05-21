// Условие (англ и русс)
// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).

// Дан массив чисел, нужно определить является ли сумма его элелемантов нечетным или четным числом. Вернуть надо строку "четное\нечетное". Если массив пуст, то считаем, что в массиве 0

// Логика 
// 1. Нужно пройти по массиву и сложить все элементы (метод reduce)
// 2. прописать условие и проверить делится ли сумма на два с остатком или без
// 3. вернуть строковый результат в зависимости от выполнения условия

const oddOrEven = (array) => {
    let sum = array.reduce((res, el) => res + el, 0)
    return sum % 2 !== 0 ? 'odd' : 'even'
}

console.log(oddOrEven([0, -1, -5]));
console.log(oddOrEven([]));