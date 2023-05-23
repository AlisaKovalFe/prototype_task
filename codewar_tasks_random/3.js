// Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.

// Написать ф-цию, которая убирает пространство между значениями и возращает массив с уменьщающимися пустотами

// Дан массив, значит надо идти по нему циклом. Каждый элемент будущего массива - это строка, которая будет склеиваться с предыдущей строкой

const spacey = (array) => {
    let str = ''

    return array.map((el) => str += el)
}

console.log(spacey(['i', 'have', 'no', 'space']));