// Условие (англ и русс)
// You get an array of numbers, return the sum of all of the positives ones.

// Дан массив числе, нужно вернуть сумму всех положительных чисел

//Логика
//1. Нам нужно вернуть сумму, значит воспользуемся методом reduce, который пройдет по каждому элементу, проверит его на положительность и прибавит прибавит к результирующей, если он положительный

const positiveSum = (arr) => {

    return arr.reduce(function (res, el) {
        if (el > 0) res += el
        return res
    }, 0)
}

console.log(positiveSum([1, -4, 7, 12]));
console.log(positiveSum([]));
