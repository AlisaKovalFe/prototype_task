// Given an integer n and two other values, build an array of size n filled with these two values alternating.

// Дано число n и два другий значения, постройте массив размером n, наполненный этими двумя значениями попеременно

//Логика
// Мне нужно наполнить массив значениями. Я могу задать длинну массива и идя по нему в цикле перезаписывать его пустые значения в зависимости от условия четности или нечетности индекса
const alternate = (n, firstValue, secondValue) => {
    let arr = []
    arr.length = n

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) arr[i] = firstValue
        if (i % 2 !== 0) arr[i] = secondValue
    }

    return arr
}

console.log(alternate(5, true, false));
console.log(alternate(10, "blue", "red"));
console.log(alternate(0, "one", "two"));