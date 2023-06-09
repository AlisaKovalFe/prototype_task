// Условие (англ и русс)
// Given an array of integers, return a new array with each value doubled.
// Дан массив числе, нужно вернуть новый массив с удвоенными значениями из изначального массива

// Логика 
// 1. Дан массив, для создания нового массива с результатами вызова колбэка для каждого элемента изначальноно массива используем метод map. Колбэк будет возвращать для каждого элемента его удвоенное значение

const maps = (x) => {
    return x.map((el) => el * 2)
}

console.log(maps([1, 2, 3]));