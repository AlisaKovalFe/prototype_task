// Создайте функцию getZippedArrays.
// У функции должно быть два параметра. Первый — массив с названиями ключей. Второй — массив со значениями этих ключей.
// Функция должна собирать из этих двух массивов объект и возвращать его. Каждому элементу из массива ключей соответствует элемент из массива значений.

const getZippedArrays = (keys, values) => {
    let result = {}
    for (let i = 0; i < keys.length; i++) {
        result[keys[i]] = values[i]
    }
    return result
}

console.log(getZippedArrays(["name", "surname", "address"], ["Асисяй", "Котовий", "Йошкар-Ола"]));
console.log(getZippedArrays(["color", "height", "weight", "depth"], ["чёрный", "100", "50", "20"]));
console.log(getZippedArrays(["country", "city", "month", "arrivalDay", "departureDay"], ["Португалия", "Синтра", "июль", "5", "10"]));