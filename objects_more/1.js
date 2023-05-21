// Условие (англ и русс)
// Given a non-empty array of integers, return the result of multiplying the values together in order
//Дан непустой массив целых чисел, необходимо вернуть результат умножения данных чисел


// Логика 
// Так как дан массив и нам нужно вернуть некий общий результат работы с его элементами, нам нужно пройти по каждому элементу и значение каждого элемента записать в некий общий результат (здесь умножения). Это позволяет сделат метод reduce

const mult = (arr) => {
    return arr.reduce(function (acc, el) {
        acc *= el
        return acc
    }, 1)
}

console.log(mult([1, 2, 3, 4]));