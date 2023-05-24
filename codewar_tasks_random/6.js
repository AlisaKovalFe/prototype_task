// Given an array, find the duplicates in that array, and return a new array of those duplicates. The elements of the returned array should appear in the order when they first appeared as duplicates.

// Note: numbers and their corresponding string representations should not be treated as duplicates (i.e., "1" != 1).

// Дан массив, найти повторяющиеся значения в массиве и вернуть новый массив из этих значений. Элементы возвращаемого массива должны отображаться в том порядке, в котором они впервые появились как дубликаты. Числа и соотв строки не дубликаты

const duplicates = (arr) => {
    const firtsFilter = arr.filter((el, index) => arr.indexOf(el) !== index)

    return firtsFilter.filter((el, index) => firtsFilter.indexOf(el) == index)
    // let newArr = []

    // for (let i = 0; i < arr.length; i++) {

    //     console.log(arr.indexOf(3));
    //     if (arr.indexOf(arr[i]) !== i && !newArr.includes(arr[i])) {
    //         newArr.push(arr[i])
    //     }
    // }
    // return newArr


}

console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]));
