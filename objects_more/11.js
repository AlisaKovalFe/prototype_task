// Условие (англ и русс)
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// Есть масси овец, в котором некоторые овцы могут отсутствовать на сових местах. Нужно найти функцию, которая считает количество овец в массиве. Не забыть проверить на null и undefined

//Логика
// 1. Создаем переменную для подсчета кол-ва овец
// 2. В Цикле идем по массиву и увеличиваем переменную в п.1. на 1, если овца есть (сделаю через Boolean(el), хотя JS все равно преобразует тип, даже если укажу просто true)

const countSheeps = (arrayOfSheep) => {
    let count = 0
    arrayOfSheep.forEach((el) => {
        if (Boolean(el) == true) count++
    })
    return count


}

console.log(countSheeps([true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true]));