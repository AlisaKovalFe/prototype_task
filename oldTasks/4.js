// Напишите программу, которая будет находить последний индекс элемента в массиве.
// Массив записан в переменную numbers.
// Элемент, последний индекс которого надо найти, записан в переменную number.
// Создайте переменную lastIndex и записывайте в неё последний индекс числа number. Если числа number в массиве нет, переменная lastIndex должна быть равна -1.

// const array = [1, 2, 3, 4, 5];

// function isOdd(element) {
//     return element % 2 !== 0;
// }

// console.log(array.findLastIndex(isOdd)); // не работает почему??

const findLastIndexCount = (arr, num) => {
    let lastIndex = -1
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            lastIndex = i
        }
    }
    return lastIndex
}

console.log(findLastIndexCount([2, 4, 7, 4, 7, 2], 4));
