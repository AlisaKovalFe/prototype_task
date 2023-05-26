// Create a function that takes an array of letters, and combines them into words in a sentence.
// The function should combine all the 0th indexed letters to create the word 'just', all the 1st indexed letters to create the word 'live', etc.
// Shorter words will have an empty string in the place once the word has already been mapped out(see the last element in the last element in the array).

// Создать ф-цию, которая принимает массив букв и делает из них пердложение. Ф-ия должна объединить все 0е индексы букв для создания слва just, все перовые индексы для создания слова live. Более короткие слова будут иметь пустую строку после того, как слово было составлено

const arrAdder = (arr) => {
    let str = ''
    let shortArr

    for (let i = 0; i < arr.length; i++) {
        if (arr.length == arr[i].length) {
            for (j = 0; j < arr[i].length; j = j + 4) {
                str += arr[i][j]
            }
        }
        shortArr = arr[i].slice(1)

        if (arr.length !== arr[i].length) {
            arrAdder(shortArr)
        }
    }


}

console.log(arrAdder([
    ['J', 'L', 'L', 'M'],
    ['u', 'i', 'i', 'a'],
    ['s', 'v', 'f', 'n'],
    ['t', 'e', 'e', '']
]));