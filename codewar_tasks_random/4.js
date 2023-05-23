// A latin square is an n × n array filled with the integers 1 to n, each occurring once in each row and column. Write a function that returns a latin square for any positive integer n.

// Латинский квадрат - это массив размером n × n, заполненый числами от 1 до n, при этом каждое число встречается один раз. Написать ф-цию, которая возвращает латинский квадрат для любого положительного n

const makeLatinSquare = (n) => {
    let arr = []
    arr.length = n
    let min = 1

    for (let i = 0; i < arr.length; i++) {
        let insertedArr = []
        insertedArr.length = n

        arr[i] = insertedArr

        // let set = new Set(insertedArr)
        // // set.size = n

        // set.add(Math.round(Math.random() * (n - min)) + min)
        // console.log(set);
        // arr[i] = [...set]

        for (let j = 0; j < arr[i].length; j++) {
            arr[i][j] = Math.round(Math.random() * (n - min)) + min

            // if (arr[i].indexOf(arr[i][j]) !== j) {
            //     arr[i][j] = Math.round(Math.random() * (n - min)) + min
            // }

        }
        arr[i].map((el, index) => {
            if (arr[i].indexOf(el) !== index) {
                el = Math.round(Math.random() * (n - min)) + min
            }
        })
    }
    return arr
}

console.log(makeLatinSquare(4));

