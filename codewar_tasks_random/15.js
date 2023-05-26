// Yet another staple for the functional programmer. You have a sequence of values and some predicate for those values. You want to remove the longest prefix of elements such that the predicate is true for each element. We'll call this the dropWhile function. It accepts two arguments. The first is the sequence of values, and the second is the predicate function. The function does not change the value of the original sequence.

// Your task is to implement the dropWhile function. If you've got a span function lying around, this is a one-liner! Alternatively, if you have a takeWhile function on your hands, then combined with the dropWhile function, you can implement the span function in one line. This is the beauty of functional programming: there are a whole host of useful functions, many of which can be implemented in terms of each other.

// Есть последователньость значений и какой-то предикатор. Нужно удалить наиболее длинный перфикс элементов так, что предикат срабатывает для каждого такого элемента. Нужно написать ф-ию с 2мя аргументами - поседвоательность и ф-ция предикатор. Оригинальный массив не меняется. 
// Если у вас есть функция span, то это однострочный вариант! Как вариант, если у вас на руках есть функция takeWhile, то в сочетании с функцией dropWhile можно реализовать функцию span в одну строку.В этом прелесть функционального программирования: существует множество полезных функций, многие из которых могут быть реализованы друг через друга. 

const dropWhile = (arr, pred) => {
    let newArr = []

    for (let i = 0; i < arr.length; i++) {

        if (!pred(arr[i])) {
            for (let j = i; j < arr.length; j++) {
                newArr.push(arr[j])
            }
            break

        }
    }
    return newArr

    // for (var i = 0; i < arr.length && pred(arr[i]); ++i);
    // return arr.slice(i) // решение с кодварс, нужно разобраться



    // почему так не работает??
    // let newArr = []

    // for (let i = 0; i < arr.length; i++) {
    //         newArr = arr.slice(i)
    //     if (!pred(arr[i])) break
    // }

    // return newArr
}

function isEven(num) {
    return num % 2 === 0;
}

console.log(dropWhile([2, 4, 6, 8, 1, 2, 5, 4, 3, 2], isEven));