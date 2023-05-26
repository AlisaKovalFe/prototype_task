// Условие (англ и русс)
// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.

// Дан массив чисел. Нужно вернуть массив, где первый элемент будет количеством положительных чисел, а второй элемент будет суммой отрицательных чисел. Ноль не положительное и неотричательное число. Если массив пуст, нужно вернуть мустой массив

// Логика 
// 1. Создаем две переменные - количество полож числе и сумма отр чисел
// 2. Первый делом проверяем массив на пустоту и если пришел null. Если да, то возвращаем пустой массив
// 3. Если массив непустой, условие в п.2 не выполнится и пойдем по элементам массива в цикле
// 4. Проходя по элементам массива для них нужно задать условия о том, является ли эемент полож / отр числом
// 5. В каждом условии нужно перезаписать соотв переменые(количество полож числе и сумма отр цисел)
// 6. возвращаем массив переменных(кол-во мма полож числе и сумма отр цисел)

const countPositivesSumNegatives = (input) => {
    let sumPositive = 0
    let sumNegative = 0

    if (!input == false || !input.length == 0) return []

    input.forEach((function (el) {
        el > 0 ? sumPositive++ : sumNegative += el
    }))

    return [sumPositive, sumNegative] //видела ранее такую запись без создания нового массива, утонить у Наташи, как это работает
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
console.log(countPositivesSumNegatives([]));
console.log(countPositivesSumNegatives(null));
