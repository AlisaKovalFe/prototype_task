// The span function is a good one to know. It accepts a sequence and a predicate function and returns two sequences. The first sequence contains all the elements of the argument sequence up to the item that caused the first failure of the predicate. The second returned sequence contains the rest of the original sequence. The original sequence is not modified.

// Ф-ия принимиает последовательность и ф-цию предикат и возвращает 2е последовательности. 1я последовательность содержит все элементы из преедаваемой последовательность до элемента, на котором сработала ф-ию предикат. 2я последоватнльость содержит остальные элеемнты оригинальной последовательности. Оригинальная последовательность не модифицируется

const span = (arr, predicate) => {
    let fistArr = []
    let secondArr = []

    // arr.map(function (el, index) {
    //     if (predicate(el) !== true) {
    //         for (let j = index; j < arr.length; j++) {
    //             secondArr.push(arr[j])
    //         } 
    //         break
    //     }
    //     fistArr.push(el)
    // })  // не работает внутри метода?

    for (let i = 0; i < arr.length; i++) {

        if (predicate(arr[i]) !== true) {
            for (let j = i; j < arr.length; j++) {
                secondArr.push(arr[j])
            }
            break
        }
        fistArr.push(arr[i])
    }

    return [fistArr, secondArr]
}

function isEven(x) {
    return Math.abs(x) % 2 === 0;
}

function isOdd(x) {
    return Math.abs(x) % 2 !== 0;
}

console.log(span([2, 4, 6, 1, 4, 8], isEven));
console.log(span([1, 4, 5, 7, 6], isEven));
console.log(span([13, 17, 19, 11, 21], isOdd));