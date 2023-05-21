// Условие (англ и русс)
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
// You can assume that all values are integers. Do not mutate the input array/list.

// Дан массив чисел, нужно вернуть массив с этими числам с обратным знаком. Не менять входящий массив

// Логика 
// 1. Сказано не менять входящий массив. Чтобы вернуть новый массив с результатми вызова колбэка для каждого элелмента изначального массива используем метод map
// 2. Мапаем по изначальному массиву, перезаписываем каждый элемент на этот же элелмент с противополжным знаком и тут же ретерним


const invert = (array) => {
    return array.map((el) => el = -el)
}

console.log(invert([1, -2, 3, -4, 5]));
console.log(invert([]));