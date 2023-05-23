// Your task is to write a function which returns the sum of a sequence of integers.
// The sequence is defined by 3 non-negative values: begin, end, step.
// If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps, then don't add it to the sum. 

// Написать ф-цию, которая будет возвращат суммы последовательности чисел. Последовательность определена 3мя неотпричательными знаечниями: начало, конец, шаг.
// Если начальное значение больше конечного, то ф-ия дожна возращать 0. Если после шага будет превышение конечного знаечние, в сумму это не включается

const sequenceSum = (begin, end, step) => {
    let sum = 0

    for (let i = begin; i <= end; i = i + step) {
        console.log(i);
        sum += i
    }
    return sum
}

console.log(sequenceSum(2, 2, 2));
console.log(sequenceSum(2, 6, 2));
console.log(sequenceSum(1, 5, 1));
console.log(sequenceSum(1, 5, 3));

